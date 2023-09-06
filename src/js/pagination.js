// =============== Pagination

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.min.css';
import { shoppingListData, markupShoppingList } from './shopping-list';

export function createPagination(totalItems) {
  const options = {
    totalItems: totalItems,
    itemsPerPage: 3,
    visiblePages: 2,
    usageStatistics: false,
  };

  const container = document.getElementById('tui-pagination-container');

  const pagination = new Pagination(container, options);

  pagination.on('beforeMove', function (eventData) {
    markupShoppingList(shoppingListData, eventData.page, 3);
  });

  return pagination;
}
