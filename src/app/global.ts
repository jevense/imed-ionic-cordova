export const serialNumber = () => {
  return Math.random().toString();
};

export const exactInfoFromRes = (res: string) => {
  let {serviceResult} = JSON.parse(decodeURIComponent(res));
  if (typeof serviceResult == 'string') {
    serviceResult = JSON.parse(serviceResult);
  }
  let result = serviceResult['result'];
  if (typeof result == 'string') {
    result = JSON.parse(result);
  }
  return result;
};

export const type1Array = ['教材', 'pdf', '教程', '通关包', '执医通关包', '手术视频'];
export const type2Array = ['普通教材', '病例分析', '手术', '杂志', '试题', '试题包', '执医通关包', '未知类型'];

const host = 'https://api.imed.org.cn';
export const busUrl = 'https://services2t.mvwchina.com/services';
export const thesurgery = 'https://thesurgery.imed.org.cn/cst-phone/ui/index.html';
export const shizi = 'https://thesurgery.imed.org.cn/cst-phone/ui/shizi/shiziList.html';

// const host = 'http://123.56.15.197:7152';
// export const busUrl = 'http://123.56.15.197:5002/services';
// export const thesurgery = 'http://testing.imed.org.cn/cst-phone/ui/index.html';
// export const shizi = 'http://testing.imed.org.cn/cst-phone/ui/shizi/shiziList.html';

// const host = 'http://192.168.8.144:8092/store';

export const url = `${host}/product`;
export const carouselUrl = `${host}/home/carousel`;
export const recommendUrl = `${host}/home/recommend`;
export const diseaseUrl = `${host}/home/disease`;
export const westUrl = `${host}/home/west`;
export const operationUrl = `${host}/home/operation`;

export const swiperUrl = 'https://mall.imed.org.cn/ui/v3.4/swiper.json';


export const onlineReadUrl = 'https://wap.imed.org.cn/phone/book.html';
export const searchUrl = 'https://wap.imed.org.cn/yishixueyuan/searchhome.html';
export const operationOutUrl = 'https://thesurgery.imed.org.cn/cst-phone/ui/list.html';
export const operationOutInfoUrl = 'https://thesurgery.imed.org.cn/cst-phone/ui/commodity.html';
