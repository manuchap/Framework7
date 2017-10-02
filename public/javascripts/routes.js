var routes = [
  // Index page
  {
    path: '/',
    url: '/',
  },
  // About page
  {
    path: '/about/',
    url: '/about',
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  // Components
  {
    path: '/accordion/',
    url: '/accordion',
  },
  {
    path: '/action-sheet/',
    componentUrl: '/action-sheet',
  },
  {
    path: '/autocomplete/',
    componentUrl: '/autocomplete',
  },
  {
    path: '/badge/',
    componentUrl: '/badge',
  },
  {
    path: '/buttons/',
    url: '/buttons',
  },
  {
    path: '/cards/',
    url: '/cards',
  },
  {
    path: '/checkbox/',
    url: '/checkbox',
  },
  {
    path: '/chips/',
    componentUrl: '/chips',
  },
  {
    path: '/contacts-list/',
    url: '/contacts-list',
  },
  {
    path: '/content-block/',
    url: '/content-block',
  },
  {
    path: '/data-table/',
    componentUrl: '/data-table',
  },
  {
    path: '/dialog/',
    componentUrl: '/dialog',
  },
  {
    path: '/fab/',
    url: '/fab',
  },
  {
    path: '/fab-morph/',
    url: '/fab-morph',
  },
  {
    path: '/form-storage/',
    url: '/form-storage',
  },
  {
    path: '/grid/',
    url: '/grid',
  },
  {
    path: '/icons/',
    componentUrl: '/icons',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: '/infinite-scroll',
  },
  {
    path: '/inputs/',
    url: '/inputs',
  },
  {
    path: '/lazy-load/',
    url: '/lazy-load',
  },
  {
    path: '/list/',
    url: '/list',
  },
  {
    path: '/login-screen/',
    componentUrl: '/login-screen',
  },
  {
    path: '/login-screen-page/',
    componentUrl: '/login-screen-page',
  },
  {
    path: '/messages/',
    componentUrl: '/messages',
  },
  {
    path: '/navbar/',
    url: '/navbar',
  },
  {
    path: '/navbar-hide-scroll/',
    url: '/navbar-hide-scroll',
  },
  {
    path: '/notifications/',
    componentUrl: '/notifications',
  },
  {
    path: '/panel/',
    url: '/panel',
  },
  {
    path: '/photo-browser/',
    componentUrl: '/photo-browser',
  },
  {
    path: '/popup/',
    componentUrl: '/popup',
  },
  {
    path: '/popover/',
    url: '/popover',
  },
  {
    path: '/preloader/',
    componentUrl: '/preloader',
  },
  {
    path: '/progressbar/',
    componentUrl: '/progressbar',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: '/pull-to-refresh',
  },
  {
    path: '/radio/',
    url: '/radio',
  },
  {
    path: '/range/',
    componentUrl: '/range',
  },
  {
    path: '/searchbar/',
    url: '/searchbar',
  },
  {
    path: '/searchbar-expandable/',
    url: '/searchbar-expandable',
  },
  {
    path: '/sheet-modal/',
    componentUrl: '/sheet-modal',
  },
  {
    path: '/smart-select/',
    url: '/smart-select',
  },
  {
    path: '/sortable/',
    url: '/sortable',
  },
  {
    path: '/statusbar/',
    componentUrl: '/statusbar',
  },
  {
    path: '/subnavbar/',
    url: '/subnavbar',
  },
  {
    path: '/subnavbar-title/',
    url: '/subnavbar-title',
  },
  {
    path: '/swiper/',
    url: '/swiper',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: '/swiper-horizontal',
      },
      {
        path: 'swiper-vertical/',
        url: '/swiper-vertical',
      },
      {
        path: 'swiper-space-between/',
        url: '/swiper-space-between',
      },
      {
        path: 'swiper-multiple/',
        url: '/swiper-multiple',
      },
      {
        path: 'swiper-nested/',
        url: '/swiper-nested',
      },
      {
        path: 'swiper-loop/',
        url: '/swiper-loop',
      },
      {
        path: 'swiper-3d-cube/',
        url: '/swiper-3d-cube',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: '/swiper-3d-coverflow',
      },
      {
        path: 'swiper-3d-flip/',
        url: '/swiper-3d-flip',
      },
      {
        path: 'swiper-fade/',
        url: '/swiper-fade',
      },
      {
        path: 'swiper-scrollbar/',
        url: '/swiper-scrollbar',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: '/swiper-gallery',
      },
      {
        path: 'swiper-custom-controls/',
        url: '/swiper-custom-controls',
      },
      {
        path: 'swiper-parallax/',
        url: '/swiper-parallax',
      },
      {
        path: 'swiper-lazy/',
        url: '/swiper-lazy',
      },
      {
        path: 'swiper-pagination-progress/',
        url: '/swiper-pagination-progress',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: '/swiper-pagination-fraction',
      },
      {
        path: 'swiper-zoom/',
        url: '/swiper-zoom',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: '/swipeout',
  },
  {
    path: '/tabs/',
    url: '/tabs',
  },
  {
    path: '/tabs-static/',
    url: '/tabs-static',
  },
  {
    path: '/tabs-animated/',
    url: '/tabs-animated',
  },
  {
    path: '/tabs-swipeable/',
    url: '/tabs-swipeable',
  },
  {
    path: '/tabs-routable/',
    url: '/tabs-routable',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/toast/',
    componentUrl: '/toast',
  },
  {
    path: '/toggle/',
    url: '/toggle',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: '/toolbar-tabbar',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: '/tabbar',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: '/tabbar-labels',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: '/tabbar-scrollable',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: '/toolbar-hide-scroll',
      },
    ],
  },
  {
    path: '/timeline/',
    url: '/timeline',
  },
  {
    path: '/timeline-vertical/',
    url: '/timeline-vertical',
  },
  {
    path: '/timeline-horizontal/',
    url: '/timeline-horizontal',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: '/timeline-horizontal-calendar',
  },
  {
    path: '/virtual-list/',
    componentUrl: '/virtual-list',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: '/color-themes',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: '/page-loader-template7',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: '/page-loader-component',
  },
];
