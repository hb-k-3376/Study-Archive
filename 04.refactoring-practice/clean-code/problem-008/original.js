function searchProducts(products, filters) {
  let results = [...products];

  // 카테고리 필터링
  if (filters.category) {
    results = results.filter((product) => {
      if (filters.category === 'ALL') return true;
      return product.category === filters.category;
    });
  }

  // 가격 범위 필터링
  if (filters.priceRange) {
    const { min = 0, max = Infinity } = filters.priceRange;
    results = results.filter((product) => {
      const price = product.discountPrice || product.price;
      return price >= min && price <= max;
    });
  }

  // 할인 상품 필터링
  if (filters.onlyDiscount) {
    results = results.filter((product) => {
      return product.discountRate > 0;
    });
  }

  // 별점 필터링
  if (filters.minRating) {
    results = results.filter((product) => {
      return product.averageRating >= filters.minRating;
    });
  }

  // 재고 있는 상품만 필터링
  if (filters.inStock) {
    results = results.filter((product) => product.stockQuantity > 0);
  }

  // 새로 출시된 상품 필터링 (30일 이내)
  if (filters.newArrival) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    results = results.filter((product) => {
      const releaseDate = new Date(product.releaseDate);
      return releaseDate >= thirtyDaysAgo;
    });
  }

  // 검색어로 필터링
  if (filters.searchTerm) {
    const term = filters.searchTerm.toLowerCase();
    results = results.filter((product) => {
      return product.name.toLowerCase().includes(term) || product.description.toLowerCase().includes(term);
    });
  }

  // 정렬
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'PRICE_ASC':
        results.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'PRICE_DESC':
        results.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'RATING':
        results.sort((a, b) => b.averageRating - a.averageRating);
        break;
      case 'NEWEST':
        results.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        break;
    }
  }

  return results;
}

// 테스트 데이터
const products = [
  {
    id: 'P001',
    name: '최신 스마트폰',
    category: 'ELECTRONICS',
    price: 1200000,
    discountRate: 10,
    discountPrice: 1080000,
    stockQuantity: 50,
    averageRating: 4.5,
    releaseDate: '2024-01-15',
    description: '최신 기술이 탑재된 스마트폰입니다.',
  },
  // ... 더 많은 상품 데이터
];

// 필터 예시
const filters = {
  category: 'ELECTRONICS',
  priceRange: { min: 500000, max: 1500000 },
  onlyDiscount: true,
  minRating: 4,
  inStock: true,
  sortBy: 'PRICE_ASC',
};
