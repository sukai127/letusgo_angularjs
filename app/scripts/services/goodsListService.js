'use strict';

angular.module('angularLeteusgoApp')
  .service('goodsItemService', function (localStorageService) {
    this.loadItem = function () {

      return [
        {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '服装鞋包', name: '服装2', price: 11, unit: '件'},
        {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'},
        {barcode: 'ITEM00003', category: '全球美食', name: '美食１', price: 1100, unit: '件'},
        {barcode: 'ITEM00004', category: '护肤彩妆', name: '护肤１', price: 101, unit: '件'},
        {barcode: 'ITEM00005', category: '母婴用品', name: '用品１', price: 11, unit: '件'}
      ]
    };

    this.getTotalCount = function (cartLists) {
      return _.reduce(_.pluck(cartLists, 'count'), function (count1, count2) {
        return count1 + count2;
      }) || 0;
    };

    this.addToCartList = function (item, cartItems) {

      var hasExistItem = _.any(cartItems, function (cartItem) {
        return item.name === cartItem.item.name;
      });

      if (hasExistItem) {

        var existCartItem = _.find(cartItems, function(cartItem) {
          return item.name === cartItem.item.name;
        });
        existCartItem.count++;

      } else {
        cartItems.push({item: item, count: 1});
      }

      return cartItems;
    };

    this.get = function (key) {
      return localStorageService.get(key);
    };

    this.set = function (key, value) {
      return localStorageService.set(key, value);
    };

  });

