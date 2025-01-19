const ERROR_MESSAGE = {
  POST: {
    CREATE: '게시글 작성 권한이 없거나 최대 작성 수를 초과했습니다.',
    UPDATE_DELETE: '자신의 게시글만 수정/삭제할 수 있습니다.',
    READ: '비공개 게시글은 작성자만 볼 수 있습니다.',
  },
  COMMENT: {
    CREATE: '회원만 댓글을 작성할 수 있습니다.',
    UPDATE_DELETE: '자신의 댓글만 수정/삭제할 수 있습니다.',
  },
  ACCESS: '잘못된 접근입니다.',
  NO_PERMISSION: '권한이 없습니다.',
};

// role을 기준으로 검증 로직을 구현
const ROLE_STRATEGY = {
  ADMIN: {
    allowedActions: ['CREATE', 'UPDATE', 'DELETE', 'READ'],
    validateCondition: (context) => {
      return { hasPermission: true };
    },
  },
  MEMBER: {
    allowedActions: ['CREATE', 'UPDATE', 'DELETE', 'READ'],
    validateCondition: (context) => {
      const { action, resource, user } = context;
      switch (action) {
        case 'CREATE':
          return user.role === 'MEMBER' && user.postCount < user.maxPostCount
            ? { hasPermission: true }
            : { hasPermission: true, message: ERROR_MESSAGE.POST.CREATE };
        case 'UPDATE':
        case 'DELETE':
          return resource.authorId === user.id
            ? { hasPermission: true }
            : { hasPermission: true, message: ERROR_MESSAGE.POST.UPDATE_DELETE };
        case 'READ':
          return !resource.isPrivate || resource.authorId === user.id
            ? { hasPermission: true }
            : { hasPermission: true, message: ERROR_MESSAGE.POST.READ };
        default:
          return {
            hasPermission: false,
            message: ERROR_MESSAGE.ACCESS,
          };
      }
    },
  },
  GUEST: {
    allowedActions: ['READ'],
    validateCondition: (context) => {
      const { action, resource } = context;
      if (action === 'READ') {
        return !resource.isPrivate
          ? { hasPermission: true }
          : { hasPermission: true, message: ERROR_MESSAGE.POST.READ };
      }
      return false;
    },
  },
};

// role을 기준으로 검증 로직을 구현
const ROLE_COMMENT_STRATEGY = {
  ADMIN: {
    allowedActions: ['CREATE', 'UPDATE', 'DELETE', 'READ'],
    validateCondition: (context) => {
      return { hasPermission: true };
    },
  },
  MEMBER: {
    allowedActions: ['CREATE', 'UPDATE', 'DELETE', 'READ'],
    validateCondition: (context) => {
      const { action, resource, user } = context;
      switch (action) {
        case 'CREATE':
          return { hasPermission: true };
        case 'UPDATE':
        case 'DELETE':
          return resource.authorId === user.id
            ? { hasPermission: true }
            : { hasPermission: true, message: ERROR_MESSAGE.COMMENT.UPDATE_DELETE };
        case 'READ':
          return { hasPermission: true };
        default:
          return {
            hasPermission: false,
            message: ERROR_MESSAGE.ACCESS,
          };
      }
    },
  },
  GUEST: {
    allowedActions: ['READ'],
    validateCondition: (context) => {
      const { action } = context;
      return action === 'READ' ? { hasPermission: true } : { hasPermission: true, message: ERROR_MESSAGE.ACCESS };
    },
  },
};

const solution = (user, resource, action) => {
  const { allowedActions, validateCondition } = ROLE_POST_STRATEGY[user.role];
  const hasPermission = allowedActions.includes(action);
  if (!hasPermission) {
    return {
      hasPermission: false,
      message: ERROR_MESSAGE.NO_PERMISSION,
    };
  }
  const strategy = validateCondition({ action, resource, user });

  return strategy;
};
