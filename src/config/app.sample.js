const baseConfig = {
  weddingDay: "Saturday",
  weddingTime: "19.00 - 21.00",
  weddingDate: "Feb 22, 2020",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2020-02-22T19:00:00+08:00",
    timeEndISO: "2020-02-22T21:00:00+08:00"
  },
  coupleInfo: {
    brideName: "Aida",
    groomName: "Wildan",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Oval Hotel",
    addressLine1: "Jalan Diponegoro No.23,",
    addressLine2: "Surabaya, East Java 60241,",
    city: "Surabaya",
    country: "Indonesia",
    mapUrl: "https://maps.app.goo.gl/pCUqr9AjSN8dxzS57"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/video/aw-ring-logo-ticker.mp4",
    footerLogoType: "mp4"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "wedding.wzulfikar.com",
    publishedTime: "2020-01-25"
  }
};

const lang = {
  id: {
    weddingDay: "Sabtu",
    weddingDate: "22 Februari 2020",
    venue: {
      ...baseConfig.venue,
      name: "Hotel Oval",
      addressLine2: "Surabaya, Jawa Timur, 60241,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
