function checkPermission(user, resource, action) {
  // 관리자는 모든 권한을 가짐
  if (user.role === 'ADMIN') {
    return { hasPermission: true };
  }

  // 게시글 권한 체크
  if (resource.type === 'POST') {
    // 게시글 생성 권한
    if (action === 'CREATE') {
      if (user.role === 'MEMBER' && user.postCount < user.maxPostCount) {
        return { hasPermission: true };
      }
      return {
        hasPermission: false,
        message: '게시글 작성 권한이 없거나 최대 작성 수를 초과했습니다.',
      };
    }

    // 게시글 수정/삭제 권한
    if (action === 'UPDATE' || action === 'DELETE') {
      if (resource.authorId === user.id) {
        return { hasPermission: true };
      }
      return {
        hasPermission: false,
        message: '자신의 게시글만 수정/삭제할 수 있습니다.',
      };
    }

    // 게시글 조회 권한
    if (action === 'READ') {
      if (resource.isPrivate && resource.authorId !== user.id) {
        return {
          hasPermission: false,
          message: '비공개 게시글은 작성자만 볼 수 있습니다.',
        };
      }
      return { hasPermission: true };
    }
  }

  // 댓글 권한 체크
  if (resource.type === 'COMMENT') {
    if (action === 'CREATE') {
      if (user.role === 'GUEST') {
        return {
          hasPermission: false,
          message: '회원만 댓글을 작성할 수 있습니다.',
        };
      }
      return { hasPermission: true };
    }

    if (action === 'UPDATE' || action === 'DELETE') {
      if (resource.authorId === user.id) {
        return { hasPermission: true };
      }
      return {
        hasPermission: false,
        message: '자신의 댓글만 수정/삭제할 수 있습니다.',
      };
    }

    if (action === 'READ') {
      return { hasPermission: true }; // 모든 사용자가 댓글 읽기 가능
    }
  }

  return {
    hasPermission: false,
    message: '잘못된 접근입니다.',
  };
}

// 테스트 데이터
const user = {
  id: 'USER001',
  role: 'MEMBER',
  postCount: 5,
  maxPostCount: 10,
};

const post = {
  id: 'POST001',
  type: 'POST',
  authorId: 'USER001',
  isPrivate: false,
};

const comment = {
  id: 'COMMENT001',
  type: 'COMMENT',
  authorId: 'USER002',
};
