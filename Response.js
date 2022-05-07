export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '72710000000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '9412c231c848546cf',
        searchType: 'image',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello',
        totalResults: '72710000000',
        searchTerms: 'hello',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '9412c231c848546cf',
        searchType: 'image',
      },
    ],
  },
  context: {
    title: 'go-v1',
  },
  searchInformation: {
    searchTime: 0.347692,
    formattedSearchTime: '0.35',
    totalResults: '72710000000',
    formattedTotalResults: '72,710,000,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Hello - Wikipedia',
      htmlTitle: '<b>Hello</b> - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/commons/5/59/-127wiki.jpg',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello - Wikipedia',
      htmlSnippet: '<b>Hello</b> - Wikipedia',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello',
        height: 7979,
        width: 6383,
        byteSize: 7455006,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvr18XgpdkAFEfMUC4Kz6D7M0VZ-VSL_25_JOXXJ6Z6HEArbd1gOfpcYc&s',
        thumbnailHeight: 150,
        thumbnailWidth: 120,
      },
    },
    {
      kind: 'customsearch#result',
      title:
        'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
      htmlTitle:
        '<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news',
      link: 'https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png',
      displayLink: 'www.hellomagazine.com',
      snippet:
        'HELLO! - Daily royal, celebrity, fashion, beauty & lifestyle news',
      htmlSnippet:
        '<b>HELLO</b>! - Daily royal, celebrity, fashion, beauty &amp; lifestyle news',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://www.hellomagazine.com/',
        height: 1000,
        width: 1000,
        byteSize: 4800,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXunPheCGfWtZSGK6V4GR963yj0UYHosRVLTBQj9vNMxC1TR-s_0RVbh0&s',
        thumbnailHeight: 149,
        thumbnailWidth: 149,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello! | Super Simple Songs - YouTube',
      htmlTitle: '<b>Hello</b>! | Super Simple Songs - YouTube',
      link: 'https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg',
      displayLink: 'www.youtube.com',
      snippet: 'Hello! | Super Simple Songs - YouTube',
      htmlSnippet: '<b>Hello</b>! | Super Simple Songs - YouTube',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://www.youtube.com/watch?v=tVlcKp3bWH8',
        height: 720,
        width: 1280,
        byteSize: 135861,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlKXSn3G5-Z0o65o-KSE7hNmVEUmPevQ3vg8zrVVOU8TfOb8sfJPlXtfA&s',
        thumbnailHeight: 84,
        thumbnailWidth: 150,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'What Is Windows Hello Sign-in on Windows 10?',
      htmlTitle: 'What Is Windows <b>Hello</b> Sign-in on Windows 10?',
      link: 'https://www.howtogeek.com/wp-content/uploads/2021/01/windows_hello_hero_2.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1',
      displayLink: 'www.howtogeek.com',
      snippet: 'What Is Windows Hello Sign-in on Windows 10?',
      htmlSnippet: 'What Is Windows <b>Hello</b> Sign-in on Windows 10?',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink:
          'https://www.howtogeek.com/708986/what-is-windows-hello-sign-in-on-windows-10/',
        height: 553,
        width: 1200,
        byteSize: 25112,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpk-kQ3S4VYBfkg4ieTBZk4NGto0xGAN2Pp7AdsGLkyMKDsaN5CQByhQ&s',
        thumbnailHeight: 69,
        thumbnailWidth: 150,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello (web series) - Wikipedia',
      htmlTitle: '<b>Hello</b> (web series) - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png/1200px-Hello_Web_Series_%28Wordmark%29_Logo.png',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello (web series) - Wikipedia',
      htmlSnippet: '<b>Hello</b> (web series) - Wikipedia',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello_(web_series)',
        height: 675,
        width: 1200,
        byteSize: 100068,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLZt4VxvmzrwaO33TTP-bunkhvet55yH6mMivJAvwsiCSxiRL-wWZJDw&s',
        thumbnailHeight: 84,
        thumbnailWidth: 150,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'HELLO! - Home | Facebook',
      htmlTitle: '<b>HELLO</b>! - Home | Facebook',
      link: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=89982930077',
      displayLink: 'www.facebook.com',
      snippet: 'HELLO! - Home | Facebook',
      htmlSnippet: '<b>HELLO</b>! - Home | Facebook',
      mime: 'image/',
      fileFormat: 'image/',
      image: {
        contextLink: 'https://www.facebook.com/hello/',
        height: 464,
        width: 464,
        byteSize: 4784,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKybZTrHRJvJ_BdlzT3zp9n6emA3KoqnOyIZHkElznnKES2nNw_yqv-hE&s',
        thumbnailHeight: 128,
        thumbnailWidth: 128,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello - Wikipedia',
      htmlTitle: '<b>Hello</b> - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/-127wiki.jpg/1200px--127wiki.jpg',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello - Wikipedia',
      htmlSnippet: '<b>Hello</b> - Wikipedia',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello',
        height: 1500,
        width: 1200,
        byteSize: 540514,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG5fY_2kHkUod66OQ21J9y7YjREaFDvwRmuVYmzW6zohmWdn6yV-Ga9Gw&s',
        thumbnailHeight: 150,
        thumbnailWidth: 120,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'hello. Wallpaper — Basic Apple Guy',
      htmlTitle: '<b>hello</b>. Wallpaper — Basic Apple Guy',
      link: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1611591342775-O7PFR5X5UF1YQ560DRN6/Hello1x1.png?format=1000w',
      displayLink: 'basicappleguy.com',
      snippet: 'hello. Wallpaper — Basic Apple Guy',
      htmlSnippet: '<b>hello</b>. Wallpaper — Basic Apple Guy',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://basicappleguy.com/basicappleblog/hello-wallpaper',
        height: 1000,
        width: 1000,
        byteSize: 653757,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_QWknkUdYgoipL44hd1Frcg6M54QlSQinHMBmUq_hQTak5Vh9NGP6No&s',
        thumbnailHeight: 149,
        thumbnailWidth: 149,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello bank! - Wikipedia',
      htmlTitle: '<b>Hello</b> bank! - Wikipedia',
      link: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Hello_bank%21_Logo.png',
      displayLink: 'en.wikipedia.org',
      snippet: 'Hello bank! - Wikipedia',
      htmlSnippet: '<b>Hello</b> bank! - Wikipedia',
      mime: 'image/png',
      fileFormat: 'image/png',
      image: {
        contextLink: 'https://en.wikipedia.org/wiki/Hello_bank!',
        height: 1557,
        width: 1415,
        byteSize: 75255,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL6OY5rEFqUh9abV6ykJedPqU_baykAVdbGxVhKLc0Cpsc7wnrA2XtAiYM&s',
        thumbnailHeight: 150,
        thumbnailWidth: 136,
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello Images, Stock Photos & Vectors | Shutterstock',
      htmlTitle:
        '<b>Hello</b> Images, Stock Photos &amp; Vectors | Shutterstock',
      link: 'https://image.shutterstock.com/image-vector/hi-hello-banner-speech-bubble-260nw-1568270164.jpg',
      displayLink: 'www.shutterstock.com',
      snippet: 'Hello Images, Stock Photos & Vectors | Shutterstock',
      htmlSnippet:
        '<b>Hello</b> Images, Stock Photos &amp; Vectors | Shutterstock',
      mime: 'image/jpeg',
      fileFormat: 'image/jpeg',
      image: {
        contextLink: 'https://www.shutterstock.com/search/hello',
        height: 280,
        width: 389,
        byteSize: 9585,
        thumbnailLink:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqz6Hq4lFTyMKslEXsRZSst0a7JQ5mkEB6yeIY0pS0S3UKMEedlkS7fw&s',
        thumbnailHeight: 89,
        thumbnailWidth: 123,
      },
    },
  ],
};