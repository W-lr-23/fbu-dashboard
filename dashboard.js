var DATASET_META = {
  "8.26": { title: "FBU海外绩效看板-8月", perfMonth: "7", targetMonth: "8", period: "2026年7月1日 - 2026年8月31日" },
  "8.21": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
  "8.20": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
  "8.19": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
  "8.18": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
  "8.17": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
  "7.21": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
  "7.20": { title: "FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-8\u6708", perfMonth: "7", targetMonth: "8", period: "2026\u5e747\u67081\u65e5 - 2026\u5e748\u670831\u65e5" },
};
var DETAIL_DATA = ALL_DATASETS["8.26"].detail;
var SUMMARY_RATE = [{"region": "美洲", "target_total": 12, "target_done": 11, "target_rate": 91.7, "perf_total": 11, "perf_done": 11, "perf_rate": 100.0}, {"region": "欧洲", "target_total": 14, "target_done": 12, "target_rate": 85.7, "perf_total": 14, "perf_done": 11, "perf_rate": 78.6}, {"region": "亚太", "target_total": 34, "target_done": 34, "target_rate": 100.0, "perf_total": 34, "perf_done": 22, "perf_rate": 64.7}, {"region": "海外销售部", "target_total": 30, "target_done": 24, "target_rate": 80.0, "perf_total": 31, "perf_done": 23, "perf_rate": 74.2}, {"region": "其他", "target_total": 992, "target_done": 801, "target_rate": 80.7, "perf_total": 933, "perf_done": 812, "perf_rate": 87.0}];
var RATE_TABLES = {"detail1": [{"region": "欧洲区交付管理部", "dept4": "欧洲区交付管理部", "target_total": 4, "target_done": 4, "target_rate": 100.0, "perf_total": 5, "perf_done": 5, "perf_rate": 100.0}, {"region": "欧洲区行政部", "dept4": "欧洲区行政部", "target_total": 6, "target_done": 5, "target_rate": 83.3, "perf_total": 5, "perf_done": 5, "perf_rate": 100.0}, {"region": "欧洲渠道组", "dept4": "欧洲渠道组", "target_total": 4, "target_done": 3, "target_rate": 75.0, "perf_total": 4, "perf_done": 1, "perf_rate": 25.0}, {"region": "海外销售部", "dept4": "UK客服组", "target_total": 4, "target_done": 4, "target_rate": 100.0, "perf_total": 4, "perf_done": 4, "perf_rate": 100.0}, {"region": "海外销售部", "dept4": "UK销售组", "target_total": 2, "target_done": 1, "target_rate": 50.0, "perf_total": 2, "perf_done": 2, "perf_rate": 100.0}, {"region": "海外销售部", "dept4": "US客服组", "target_total": 10, "target_done": 10, "target_rate": 100.0, "perf_total": 10, "perf_done": 10, "perf_rate": 100.0}, {"region": "海外销售部", "dept4": "US销售组", "target_total": 5, "target_done": 2, "target_rate": 40.0, "perf_total": 5, "perf_done": 0, "perf_rate": 0.0}, {"region": "海外销售部", "dept4": "客户运营组", "target_total": 4, "target_done": 2, "target_rate": 50.0, "perf_total": 4, "perf_done": 2, "perf_rate": 50.0}, {"region": "海外销售部", "dept4": "市场营销组", "target_total": 2, "target_done": 2, "target_rate": 100.0, "perf_total": 3, "perf_done": 2, "perf_rate": 66.7}, {"region": "海外销售部", "dept4": "管培组", "target_total": 3, "target_done": 3, "target_rate": 100.0, "perf_total": 3, "perf_done": 3, "perf_rate": 100.0}, {"region": "美洲区交付管理部", "dept4": "美洲区交付管理部", "target_total": 6, "target_done": 6, "target_rate": 100.0, "perf_total": 6, "perf_done": 6, "perf_rate": 100.0}, {"region": "美洲区行政部", "dept4": "美洲区行政部", "target_total": 6, "target_done": 5, "target_rate": 83.3, "perf_total": 5, "perf_done": 5, "perf_rate": 100.0}], "detail2": [{"region": "亚特兰大区", "dept4": "亚特兰大区", "target_total": 6, "target_done": 4, "target_rate": 66.7, "perf_total": 6, "perf_done": 6, "perf_rate": 100.0}, {"region": "亚特兰大区", "dept4": "亚特兰大区HRBP部", "target_total": 2, "target_done": 1, "target_rate": 50.0, "perf_total": 2, "perf_done": 2, "perf_rate": 100.0}, {"region": "休斯顿区", "dept4": "休斯顿区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "休斯顿区", "dept4": "休斯顿区HRBP部", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 0, "perf_rate": 0.0}, {"region": "加州区", "dept4": "加州区", "target_total": 10, "target_done": 9, "target_rate": 90.0, "perf_total": 9, "perf_done": 9, "perf_rate": 100.0}, {"region": "加州区", "dept4": "加州区HRBP部", "target_total": 7, "target_done": 7, "target_rate": 100.0, "perf_total": 7, "perf_done": 7, "perf_rate": 100.0}, {"region": "加拿大区", "dept4": "加拿大区", "target_total": 3, "target_done": 2, "target_rate": 66.7, "perf_total": 3, "perf_done": 0, "perf_rate": 0.0}, {"region": "加拿大区", "dept4": "加拿大区HRBP部", "target_total": 2, "target_done": 1, "target_rate": 50.0, "perf_total": 2, "perf_done": 2, "perf_rate": 100.0}, {"region": "墨西哥区", "dept4": "墨西哥区", "target_total": 3, "target_done": 3, "target_rate": 100.0, "perf_total": 3, "perf_done": 2, "perf_rate": 66.7}, {"region": "德国区", "dept4": "德国区", "target_total": 14, "target_done": 14, "target_rate": 100.0, "perf_total": 13, "perf_done": 1, "perf_rate": 7.7}, {"region": "德国区", "dept4": "德国区HRBP部", "target_total": 7, "target_done": 7, "target_rate": 100.0, "perf_total": 7, "perf_done": 7, "perf_rate": 100.0}, {"region": "意大利区", "dept4": "意大利区", "target_total": 4, "target_done": 4, "target_rate": 100.0, "perf_total": 3, "perf_done": 3, "perf_rate": 100.0}, {"region": "意大利区", "dept4": "意大利区HRBP部", "target_total": 2, "target_done": 2, "target_rate": 100.0, "perf_total": 2, "perf_done": 2, "perf_rate": 100.0}, {"region": "捷克区", "dept4": "捷克区", "target_total": 8, "target_done": 8, "target_rate": 100.0, "perf_total": 9, "perf_done": 9, "perf_rate": 100.0}, {"region": "捷克区", "dept4": "捷克区HRBP部", "target_total": 6, "target_done": 6, "target_rate": 100.0, "perf_total": 5, "perf_done": 5, "perf_rate": 100.0}, {"region": "新泽西区", "dept4": "新泽西区", "target_total": 16, "target_done": 10, "target_rate": 62.5, "perf_total": 17, "perf_done": 17, "perf_rate": 100.0}, {"region": "新泽西区", "dept4": "新泽西区HRBP部", "target_total": 8, "target_done": 7, "target_rate": 87.5, "perf_total": 7, "perf_done": 7, "perf_rate": 100.0}, {"region": "日本区", "dept4": "日本区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "法国区", "dept4": "法国区", "target_total": 8, "target_done": 7, "target_rate": 87.5, "perf_total": 5, "perf_done": 0, "perf_rate": 0.0}, {"region": "法国区", "dept4": "法国区HRBP部", "target_total": 2, "target_done": 2, "target_rate": 100.0, "perf_total": 2, "perf_done": 0, "perf_rate": 0.0}, {"region": "波兰区", "dept4": "波兰区", "target_total": 8, "target_done": 8, "target_rate": 100.0, "perf_total": 7, "perf_done": 7, "perf_rate": 100.0}, {"region": "波兰区", "dept4": "波兰区HRBP部", "target_total": 9, "target_done": 8, "target_rate": 88.9, "perf_total": 8, "perf_done": 8, "perf_rate": 100.0}, {"region": "澳洲区", "dept4": "澳洲区", "target_total": 4, "target_done": 4, "target_rate": 100.0, "perf_total": 4, "perf_done": 4, "perf_rate": 100.0}, {"region": "澳洲区", "dept4": "澳洲区HRBP部", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "芝加哥区", "dept4": "芝加哥区", "target_total": 2, "target_done": 2, "target_rate": 100.0, "perf_total": 2, "perf_done": 0, "perf_rate": 0.0}, {"region": "芝加哥区", "dept4": "芝加哥区HRBP部", "target_total": 2, "target_done": 2, "target_rate": 100.0, "perf_total": 2, "perf_done": 2, "perf_rate": 100.0}, {"region": "英国区", "dept4": "英国区", "target_total": 12, "target_done": 11, "target_rate": 91.7, "perf_total": 12, "perf_done": 12, "perf_rate": 100.0}, {"region": "英国区", "dept4": "英国区HRBP部", "target_total": 6, "target_done": 6, "target_rate": 100.0, "perf_total": 5, "perf_done": 5, "perf_rate": 100.0}, {"region": "萨凡纳区", "dept4": "萨凡纳区", "target_total": 4, "target_done": 4, "target_rate": 100.0, "perf_total": 3, "perf_done": 3, "perf_rate": 100.0}, {"region": "萨凡纳区", "dept4": "萨凡纳区HRBP部", "target_total": 3, "target_done": 3, "target_rate": 100.0, "perf_total": 3, "perf_done": 3, "perf_rate": 100.0}, {"region": "西班牙区", "dept4": "西班牙区", "target_total": 3, "target_done": 3, "target_rate": 100.0, "perf_total": 3, "perf_done": 3, "perf_rate": 100.0}, {"region": "西班牙区", "dept4": "西班牙区HRBP部", "target_total": 2, "target_done": 2, "target_rate": 100.0, "perf_total": 2, "perf_done": 2, "perf_rate": 100.0}, {"region": "西雅图区", "dept4": "西雅图区HRBP部", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "达拉斯区", "dept4": "达拉斯区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "韩国区", "dept4": "韩国区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}], "detail3": [{"region": "亚特兰大区", "dept4": "亚特兰大区", "target_total": 44, "target_done": 14, "target_rate": 31.8, "perf_total": 40, "perf_done": 0, "perf_rate": 0.0}, {"region": "休斯顿区", "dept4": "休斯顿区", "target_total": 10, "target_done": 7, "target_rate": 70.0, "perf_total": 8, "perf_done": 8, "perf_rate": 100.0}, {"region": "加州区", "dept4": "加州区", "target_total": 90, "target_done": 86, "target_rate": 95.6, "perf_total": 91, "perf_done": 91, "perf_rate": 100.0}, {"region": "加拿大区", "dept4": "加拿大区", "target_total": 16, "target_done": 0, "target_rate": 0.0, "perf_total": 16, "perf_done": 9, "perf_rate": 56.2}, {"region": "墨西哥区", "dept4": "墨西哥区", "target_total": 14, "target_done": 11, "target_rate": 78.6, "perf_total": 13, "perf_done": 12, "perf_rate": 92.3}, {"region": "德国区", "dept4": "德国区", "target_total": 87, "target_done": 63, "target_rate": 72.4, "perf_total": 86, "perf_done": 73, "perf_rate": 84.9}, {"region": "意大利区", "dept4": "意大利区", "target_total": 21, "target_done": 21, "target_rate": 100.0, "perf_total": 22, "perf_done": 22, "perf_rate": 100.0}, {"region": "捷克区", "dept4": "捷克区", "target_total": 50, "target_done": 50, "target_rate": 100.0, "perf_total": 49, "perf_done": 49, "perf_rate": 100.0}, {"region": "新泽西区", "dept4": "新泽西区", "target_total": 175, "target_done": 155, "target_rate": 88.6, "perf_total": 170, "perf_done": 170, "perf_rate": 100.0}, {"region": "日本区", "dept4": "日本区", "target_total": 7, "target_done": 7, "target_rate": 100.0, "perf_total": 7, "perf_done": 0, "perf_rate": 0.0}, {"region": "法国区", "dept4": "法国区", "target_total": 29, "target_done": 1, "target_rate": 3.4, "perf_total": 26, "perf_done": 0, "perf_rate": 0.0}, {"region": "波兰区", "dept4": "波兰区", "target_total": 109, "target_done": 87, "target_rate": 79.8, "perf_total": 67, "perf_done": 66, "perf_rate": 98.5}, {"region": "澳洲区", "dept4": "澳洲区", "target_total": 13, "target_done": 13, "target_rate": 100.0, "perf_total": 13, "perf_done": 12, "perf_rate": 92.3}, {"region": "芝加哥区", "dept4": "芝加哥区", "target_total": 0, "target_done": 0, "target_rate": 0, "perf_total": 20, "perf_done": 18, "perf_rate": 90.0}, {"region": "英国区", "dept4": "英国区", "target_total": 114, "target_done": 94, "target_rate": 82.5, "perf_total": 106, "perf_done": 106, "perf_rate": 100.0}, {"region": "萨凡纳区", "dept4": "萨凡纳区", "target_total": 31, "target_done": 31, "target_rate": 100.0, "perf_total": 28, "perf_done": 28, "perf_rate": 100.0}, {"region": "西班牙区", "dept4": "西班牙区", "target_total": 19, "target_done": 19, "target_rate": 100.0, "perf_total": 15, "perf_done": 15, "perf_rate": 100.0}, {"region": "西雅图区", "dept4": "西雅图区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "达拉斯区", "dept4": "达拉斯区", "target_total": 5, "target_done": 3, "target_rate": 60.0, "perf_total": 6, "perf_done": 5, "perf_rate": 83.3}, {"region": "迈阿密区", "dept4": "迈阿密区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 0, "perf_rate": 0.0}, {"region": "韩国区", "dept4": "韩国区", "target_total": 4, "target_done": 4, "target_rate": 100.0, "perf_total": 4, "perf_done": 0, "perf_rate": 0.0}], "detail4": [{"region": "亚特兰大区", "dept4": "亚特兰大区", "target_total": 1, "target_done": 0, "target_rate": 0.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "休斯顿区", "dept4": "休斯顿区", "target_total": 0, "target_done": 0, "target_rate": 0, "perf_total": 1, "perf_done": 0, "perf_rate": 0.0}, {"region": "加州区", "dept4": "加州区", "target_total": 0, "target_done": 0, "target_rate": 0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "加拿大区", "dept4": "加拿大区", "target_total": 1, "target_done": 0, "target_rate": 0.0, "perf_total": 1, "perf_done": 0, "perf_rate": 0.0}, {"region": "墨西哥区", "dept4": "墨西哥区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "德国区", "dept4": "德国区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "意大利区", "dept4": "意大利区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "捷克区", "dept4": "捷克区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "新泽西区", "dept4": "新泽西区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "日本区", "dept4": "日本区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "法国区", "dept4": "法国区", "target_total": 1, "target_done": 0, "target_rate": 0.0, "perf_total": 1, "perf_done": 0, "perf_rate": 0.0}, {"region": "波兰区", "dept4": "波兰区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "澳洲区", "dept4": "澳洲区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "萨凡纳区", "dept4": "萨凡纳区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 0, "perf_done": 0, "perf_rate": 0}, {"region": "西班牙区", "dept4": "西班牙区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "西雅图区", "dept4": "西雅图区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "达拉斯区", "dept4": "达拉斯区", "target_total": 0, "target_done": 0, "target_rate": 0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "迈阿密区", "dept4": "迈阿密区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}, {"region": "韩国区", "dept4": "韩国区", "target_total": 1, "target_done": 1, "target_rate": 100.0, "perf_total": 1, "perf_done": 1, "perf_rate": 100.0}]};
var perf_month = '7';
var target_month = '8';
// ========== Config ==========
var DETAIL_KEYS = ["海外销售&大区商务部&渠道部","区域（除大区区长）","渠道&行政&HRBP","海外仓","海外区长"];
var DETAIL_IDS = ["detail1","detail5","detail2","detail3","detail4"];
var SUMMARY_KEYS = ["海外销售&大区商务部&渠道部","渠道&行政&HRBP","海外仓","海外区长"];
var chartInstances = {};
var SUMMARY_CATS = ["美洲","欧洲","亚太","职能部门"];

// Fixed region/dept display order (effective from 2026-07-20)
var DETAIL_REGION_ORDER = [
  "新泽西区","加州区","亚特兰大区","芝加哥区","萨凡纳区","达拉斯区","迈阿密区","休斯顿区",
  "西雅图区","诺福克区","印第安纳区","加拿大区","墨西哥区",
  "英国区","德国区","捷克区","法国区","波兰区","意大利区","西班牙区","土耳其区",
  "澳洲区","日本区","韩国区",
  "海外销售部","美洲区商务部","美洲区交付管理部","美洲渠道组","欧洲区商务部","欧洲区交付管理部","欧亚渠道组"
];
var DETAIL_DEPT_ORDER = [
  "海外销售部","美洲区商务部","美洲区交付管理部","美洲渠道组","欧洲区商务部","欧洲区交付管理部","欧亚渠道组"
];
var SUMMARY_ORDER = [
  "新泽西区","加州区","亚特兰大区","芝加哥区","萨凡纳区","达拉斯区","迈阿密区","休斯顿区",
  "西雅图区","诺福克区","印第安纳区","加拿大区","墨西哥区",
  "英国区","德国区","捷克区","法国区","波兰区","意大利区","西班牙区","土耳其区",
  "澳洲区","日本区","韩国区",
  "海外销售部","美洲区商务部","美洲区交付管理部","美洲渠道组","欧洲区商务部","欧洲区交付管理部","欧亚渠道组"
];

function getDetailRegionOrder(detailKey) {
  if (detailKey === "\u6d77\u5916\u9500\u552e&\u5927\u533a\u5546\u52a1\u90e8&\u6e20\u9053\u90e8") return DETAIL_DEPT_ORDER;
  return DETAIL_REGION_ORDER;
}

// Region -> category mapping
function regionToCategory(region) {
  var r = region || '';
  var funcDepts = ["海外销售部","美洲区商务部","美洲区交付管理部","美洲渠道组","欧洲区商务部","欧洲区交付管理部","欧亚渠道组"];
  for (var i = 0; i < funcDepts.length; i++) {
    if (r === funcDepts[i]) return "职能部门";
  }
  var euroRegions = ["英国区","德国区","捷克区","法国区","波兰区","西班牙区","意大利区","土耳其区"];
  for (var i = 0; i < euroRegions.length; i++) {
    if (r === euroRegions[i]) return "欧洲";
  }
  var amerRegions = ["新泽西区","加州区","亚特兰大区","芝加哥区","萨凡纳区","达拉斯区","迈阿密区","休斯顿区","西雅图区","诺福克区","印第安纳区","加拿大区","墨西哥区"];
  for (var i = 0; i < amerRegions.length; i++) {
    if (r === amerRegions[i]) return "美洲";
  }
  var apacRegions = ["澳洲区","日本区","韩国区"];
  for (var i = 0; i < apacRegions.length; i++) {
    if (r === apacRegions[i]) return "亚太";
  }
  if (r.indexOf("新西兰") >= 0 || r.indexOf("新加坡") >= 0) return "亚太";
  if (r.indexOf("美洲") >= 0) return "美洲";
  if (r.indexOf("欧洲") >= 0 || r.indexOf("欧亚") >= 0) return "欧洲";
  if (r.indexOf("亚太") >= 0) return "亚太";
  return "职能部门";
}

// Aggregate into 4 categories
var SUMMARY_4 = {};
function computeSummary() {
  SUMMARY_CATS.forEach(function(cat) {
    SUMMARY_4[cat] = { target: {total:0,done:0}, perf: {total:0,done:0}, regions: [] };
  });
  SUMMARY_KEYS.forEach(function(key) {
    var dd = DETAIL_DATA[key];
    if (!dd) return;
    var order = dd.region_order || [];
    order.forEach(function(region) {
      var cat = regionToCategory(region);
      if (!SUMMARY_4[cat]) return;
      if (SUMMARY_4[cat].regions.indexOf(region) < 0) SUMMARY_4[cat].regions.push(region);
      var td = dd.target[region];
      var pd = dd.perf[region];
      if (td) { SUMMARY_4[cat].target.total += td.total; SUMMARY_4[cat].target.done += countTargetDone(td.rows); }
      if (pd) { SUMMARY_4[cat].perf.total += pd.total; SUMMARY_4[cat].perf.done += countPerfDone(pd.rows); }
    });
  });
  SUMMARY_CATS.forEach(function(cat) {
    var s = SUMMARY_4[cat];
    s.target.pending = s.target.total - s.target.done;
    s.perf.pending = s.perf.total - s.perf.done;
    s.target.rate = s.target.total > 0 ? Math.round(s.target.done / s.target.total * 1000) / 10 : 0;
    s.perf.rate = s.perf.total > 0 ? Math.round(s.perf.done / s.perf.total * 1000) / 10 : 0;
  });
}

// Merge 渠道&行政&HRBP + 海外仓 into combined "区域（除大区区长）" detail
function mergeCombinedDetail() {
  var src1 = DETAIL_DATA["渠道&行政&HRBP"];
  var src2 = DETAIL_DATA["海外仓"];
  if (!src1 && !src2) return;
  // Sort combined region_order by fixed DETAIL_REGION_ORDER
  var combined = { target: {}, perf: {}, region_order: [] };
  [src1, src2].forEach(function(src) {
    if (!src) return;
    (src.region_order || []).forEach(function(r) {
      if (combined.region_order.indexOf(r) < 0) combined.region_order.push(r);
      ["target", "perf"].forEach(function(tp) {
        if (src[tp] && src[tp][r]) {
          if (!combined[tp][r]) combined[tp][r] = { total: 0, done: 0, rate: 0, rows: [] };
          combined[tp][r].rows = combined[tp][r].rows.concat(src[tp][r].rows || []);
          combined[tp][r].total = combined[tp][r].rows.length;
        }
      });
    });
  });
  var sortedRegions = [];
  DETAIL_REGION_ORDER.forEach(function(r) { if (combined.region_order.indexOf(r) >= 0) sortedRegions.push(r); });
  combined.region_order.forEach(function(r) { if (sortedRegions.indexOf(r) < 0) sortedRegions.push(r); });
  combined.region_order = sortedRegions;
  DETAIL_DATA["区域（除大区区长）"] = combined;
}
mergeCombinedDetail();
computeSummary();

// Dataset switching
function switchDataset(dateKey) {
  if (!ALL_DATASETS || !ALL_DATASETS[dateKey]) return;
  DETAIL_DATA = ALL_DATASETS[dateKey].detail;
  // Update header and month variables if metadata exists
  if (typeof DATASET_META !== 'undefined' && DATASET_META[dateKey]) {
    var meta = DATASET_META[dateKey];
    var titleEl = document.getElementById('dashTitle');
    if (titleEl) titleEl.textContent = meta.title;
    var metaEl = document.getElementById('dashMeta');
    if (metaEl) {
      var selectorHTML = document.getElementById('dateSelector') ? document.getElementById('dateSelector').outerHTML : '';
      metaEl.innerHTML = '\u7edf\u8ba1\u5468\u671f\uff1a' + meta.period + '<br>' + selectorHTML;
      var newSelector = document.getElementById('dateSelector');
      if (newSelector) { newSelector.value = dateKey; newSelector.onchange = function() { switchDataset(this.value); }; }
    }
    perf_month = meta.perfMonth;
    target_month = meta.targetMonth;
  }
  mergeCombinedDetail();
  computeSummary();
  Object.keys(chartInstances).forEach(function(id) {
    try { chartInstances[id].dispose(); } catch(e) {}
  });
  chartInstances = {};
  renderSummaryCards();
  renderSummaryChart();
  DETAIL_KEYS.forEach(function(key, idx) {
    renderDetailChart(key, DETAIL_IDS[idx] + 'Chart');
    renderMergedRateTable(key, DETAIL_IDS[idx] + 'MergedTable');
  });
}
var navSetupDone = false;

// ========== Utilities ==========
function rateClass(rate) {
  if (rate >= 90) return 'rate-good';
  if (rate >= 60) return 'rate-warn';
  return 'rate-bad';
}

function flowTagClass(flow, type) {
  if (type === 'target') {
    return flow === '已完成' ? 'done' : 'pending';
  }
  var perfDone = ["员工确认","HR归档"];
  return perfDone.indexOf(flow) >= 0 ? 'done' : 'pending';
}

function isDoneFlow(flow) {
  var doneFlows = ["员工确认","HR归档"];
  return doneFlows.indexOf(flow) >= 0;
}

function isTargetDone(flow) {
  return flow === '已完成';
}

function isDone(flow, type) {
  if (type === 'target') return isTargetDone(flow);
  return isDoneFlow(flow);
}

// Dynamically count perf done from rows (pre-calculated done uses old definition)
function countPerfDone(rows) {
  var c = 0;
  (rows || []).forEach(function(r) { if (isDoneFlow(r['当前流程'] || '')) c++; });
  return c;
}

// Dynamically count target done from rows (count actual 已完成 flow)
function countTargetDone(rows) {
  var c = 0;
  (rows || []).forEach(function(r) { if ((r['当前流程'] || '') === '已完成') c++; });
  return c;
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function safeInitChart(domId) {
  try {
    if (typeof echarts === 'undefined') { console.error('ECharts not loaded'); return null; }
    var dom = document.getElementById(domId);
    if (!dom) return null;
    if (chartInstances[domId]) chartInstances[domId].dispose();
    var chart = echarts.init(dom);
    chartInstances[domId] = chart;
    return chart;
  } catch(e) { console.error('Chart init error:', e); return null; }
}

function sortRowsByStatus(rows, type) {
  return rows.slice().sort(function(a,b) {
    var aDone = isDone(a['当前流程'] || '', type) ? 1 : 0;
    var bDone = isDone(b['当前流程'] || '', type) ? 1 : 0;
    return aDone - bDone;
  });
}

// ========== Summary Cards (card-table layout) ==========
function renderSummaryCards() {
  var container = document.getElementById('summaryCards');
  var html = '';
  SUMMARY_CATS.forEach(function(cat) {
    var d = SUMMARY_4[cat];
    html += '<div class="overview-card">';
    html += '<div class="card-title">' + escapeHtml(cat) + '</div>';
    html += '<table class="card-table"><tr>';
    html += '<td class="perf-hdr">绩效完成率</td>';
    html += '<td class="target-hdr">目标完成率</td>';
    html += '</tr><tr>';
    html += '<td data-category="' + escapeHtml(cat) + '" data-mode="perf" onclick="showSummaryDrill(this)">';
    html += '<div class="rate-val">' + d.perf.rate + '%</div>';
    html += '<div class="meta-val">' + d.perf.total + '人 | ' + d.perf.done + '已完成</div></td>';
    html += '<td data-category="' + escapeHtml(cat) + '" data-mode="target" onclick="showSummaryDrill(this)">';
    html += '<div class="rate-val">' + d.target.rate + '%</div>';
    html += '<div class="meta-val">' + d.target.total + '人 | ' + d.target.done + '已完成</div></td>';
    html += '</tr></table></div>';
  });
  container.innerHTML = html;
}

// ========== Summary Drill-down (mode-aware) ==========
function showSummaryDrill(el) {
  var category = el.dataset.category || el.getAttribute('data-category');
  var mode = el.dataset.mode || el.getAttribute('data-mode');
  var catRegions = SUMMARY_4[category].regions || [];

  var sidebar = [];
  catRegions.forEach(function(region) {
    var count = 0;
    DETAIL_KEYS.forEach(function(key) {
      var dd = DETAIL_DATA[key];
      if (!dd) return;
      var rd = dd[mode][region];
      if (rd) count += rd.total;
    });
    if (count > 0) sidebar.push({ name: region, count: count });
  });
  sidebar.sort(function(a,b) { return b.count - a.count; });

  var sbHtml = '';
  sidebar.forEach(function(item, idx) {
    sbHtml += '<div class="sidebar-item' + (idx === 0 ? ' active' : '') + '" data-region="' + escapeHtml(item.name) + '" data-category="' + escapeHtml(category) + '" data-mode="' + mode + '" onclick="switchDrillRegion(this)">';
    sbHtml += escapeHtml(item.name) + '<span class="sidebar-count">' + item.count + '</span></div>';
  });
  document.getElementById('modalSidebar').innerHTML = sbHtml;

  if (sidebar.length > 0) switchDrillRegion(document.querySelector('#modalSidebar .sidebar-item'));
  document.getElementById('modalOverlay').classList.add('show');
}

function switchDrillRegion(el) {
  var region = el.dataset.region || el.getAttribute('data-region');
  var category = el.dataset.category || el.getAttribute('data-category');
  var mode = el.dataset.mode || el.getAttribute('data-mode');
  document.querySelectorAll('#modalSidebar .sidebar-item').forEach(function(item) { item.classList.remove('active'); });
  el.classList.add('active');

  var rows = [];
  DETAIL_KEYS.forEach(function(key) {
    var dd = DETAIL_DATA[key];
    if (!dd) return;
    var rd = dd[mode][region];
    if (rd && rd.rows) rows = rows.concat(rd.rows);
  });

  var sorted = sortRowsByStatus(rows, mode);
  var modeLabel = mode === 'perf' ? '绩效看板 (' + perf_month + '月)' : '目标看板 (' + target_month + '月)';
  var modeColor = mode === 'perf' ? '#2d5580' : '#52c41a';

  var html = '<h3>' + escapeHtml(region) + ' - ' + modeLabel + '</h3>';
  html += '<div style="padding:6px 14px;background:' + (mode === 'perf' ? '#e0e8f0' : '#e6f3e6') + ';border-radius:6px;font-size:13px;display:inline-block;margin-bottom:14px;">';
  html += '<b>' + modeLabel + '</b>: ' + rows.length + '人</div>';
  if (sorted.length > 0) {
    html += renderSummaryPersonTable(sorted, mode, region);
  } else {
    html += '<p style="color:#999;font-size:13px;">暂无数据</p>';
  }
  document.getElementById('modalContent').innerHTML = html;
}

function renderPersonTable(rows, type) {
  var html = '<table class="data-table"><thead><tr><th>姓名</th><th>工号</th><th>当前流程</th><th>当前审批人</th><th>区域</th></tr></thead><tbody>';
  rows.forEach(function(r) {
    var flowCls = flowTagClass(r['当前流程'] || '', type);
    html += '<tr>';
    html += '<td>' + escapeHtml(r['姓名'] || '') + '</td>';
    html += '<td>' + escapeHtml(r['工号'] || '') + '</td>';
    html += '<td><span class="flow-tag ' + flowCls + '">' + escapeHtml(r['当前流程'] || '') + '</span></td>';
    html += '<td>' + escapeHtml(r['当前处理人'] || '-') + '</td>';
    html += '<td>' + escapeHtml(r['区域'] || '') + '</td>';
    html += '</tr>';
  });
  html += '</tbody></table>';
  return html;
}

function renderSummaryPersonTable(rows, type, region) {
  var html = '<table class="data-table"><thead><tr><th>区域</th><th>姓名</th><th>工号</th><th>当前流程</th><th>当前审批人</th><th>状态</th></tr></thead><tbody>';
  rows.forEach(function(r) {
    var done = isDone(r['当前流程'] || '', type);
    var statusCls = done ? 'done' : 'pending';
    var statusText = done ? '已完成' : '未完成';
    html += '<tr>';
    html += '<td>' + escapeHtml(region) + '</td>';
    html += '<td>' + escapeHtml(r['姓名'] || '') + '</td>';
    html += '<td>' + escapeHtml(r['工号'] || '') + '</td>';
    html += '<td><span class="flow-tag ' + statusCls + '">' + escapeHtml(r['当前流程'] || '') + '</span></td>';
    html += '<td>' + escapeHtml(r['当前处理人'] || '-') + '</td>';
    html += '<td><span class="flow-tag ' + statusCls + '">' + statusText + '</span></td>';
    html += '</tr>';
  });
  html += '</tbody></table>';
  return html;
}

// ========== Summary Chart (dual bars: perf + target) ==========
function renderSummaryChart() {
  var chart = safeInitChart('summaryChart');
  if (!chart) return;
  var regionData = {};
  SUMMARY_KEYS.forEach(function(key) {
    var dd = DETAIL_DATA[key];
    if (!dd) return;
    var order = dd.region_order || [];
    order.forEach(function(region) {
      if (!regionData[region]) regionData[region] = { target: {total:0,done:0}, perf: {total:0,done:0} };
      var td = dd.target[region]; var pd = dd.perf[region];
      if (td) { regionData[region].target.total += td.total; regionData[region].target.done += countTargetDone(td.rows); }
      if (pd) { regionData[region].perf.total += pd.total; regionData[region].perf.done += countPerfDone(pd.rows); }
    });
  });
  var xData = [];
  SUMMARY_ORDER.forEach(function(r) { if (regionData[r]) xData.push(r); });
  Object.keys(regionData).forEach(function(r) { if (xData.indexOf(r) < 0) xData.push(r); });

  var perfDone = [], perfPending = [], targetDone = [], targetPending = [];
  var perfRates = [], targetRates = [];
  xData.forEach(function(r) {
    var d = regionData[r];
    perfDone.push(d.perf.done); perfPending.push(d.perf.total - d.perf.done);
    targetDone.push(d.target.done); targetPending.push(d.target.total - d.target.done);
    perfRates.push(d.perf.total > 0 ? Math.round(d.perf.done / d.perf.total * 1000) / 10 : 0);
    targetRates.push(d.target.total > 0 ? Math.round(d.target.done / d.target.total * 1000) / 10 : 0);
  });

  chart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' },
      formatter: function(params) {
        var tip = '<b>' + params[0].axisValue + '</b><br/>';
        params.forEach(function(p) {
          var val = (p.seriesName.indexOf('完成率') >= 0) ? p.value + '%' : p.value;
          tip += p.marker + ' ' + p.seriesName + ': ' + val + '<br/>';
        });
        return tip;
      }
    },
    legend: { data: ['绩效已完成','绩效未完成','目标已完成','目标未完成','绩效完成率','目标完成率'], top: 5, textStyle: { fontSize: 11 } },
    grid: { left: 60, right: 60, top: 55, bottom: 80 },
    xAxis: { type: 'category', data: xData, axisLabel: { fontSize: 10, rotate: 45 },
      splitLine: { show: true, lineStyle: { type: 'dashed', color: '#ddd' } } },
    yAxis: [
      { type: 'value', name: '人数', splitLine: { lineStyle: { type: 'dashed', color: '#ddd' } } },
      { type: 'value', name: '完成率(%)', min: 0, max: 100, axisLabel: { formatter: '{value}%' }, splitLine: { show: false } }
    ],
    series: [
      { name: '绩效已完成', type: 'bar', stack: 'perf', data: perfDone, itemStyle: { color: '#4a80c0' }, barWidth: 20,
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '绩效未完成', type: 'bar', stack: 'perf', data: perfPending, itemStyle: { color: '#e05a5a' },
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '目标已完成', type: 'bar', stack: 'target', data: targetDone, itemStyle: { color: '#5aad60' }, barWidth: 20,
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '目标未完成', type: 'bar', stack: 'target', data: targetPending, itemStyle: { color: '#e8923a' },
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '绩效完成率', type: 'line', yAxisIndex: 1, data: perfRates, itemStyle: { color: '#d08030' }, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6,
        label: { show: true, position: 'top', formatter: '{c}%', fontSize: 9, color: '#d08030' } },
      { name: '目标完成率', type: 'line', yAxisIndex: 1, data: targetRates, itemStyle: { color: '#3a9e7a' }, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6,
        label: { show: true, position: 'bottom', formatter: '{c}%', fontSize: 9, color: '#3a9e7a' } }
    ]
  });
}

// ========== Detail Cards (card-table layout) ==========
function renderDetailCards(detailKey, containerId) {
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var container = document.getElementById(containerId);
  var order = dd.region_order || [];
  var html = '';
  order.forEach(function(region) {
    var td = dd.target[region] || {total:0,done:0,rate:0};
    var pd = dd.perf[region] || {total:0,done:0,rate:0};
    var perfDone = countPerfDone(pd.rows);
    var perfRate = pd.total > 0 ? Math.round(perfDone / pd.total * 1000) / 10 : 0;
    var targetDone = countTargetDone(td.rows);
    var targetRate = td.total > 0 ? Math.round(targetDone / td.total * 1000) / 10 : 0;
    html += '<div class="detail-card">';
    html += '<div class="card-title">' + escapeHtml(region) + '</div>';
    html += '<table class="card-table"><tr>';
    html += '<td class="perf-hdr">绩效</td>';
    html += '<td class="target-hdr">目标</td>';
    html += '</tr><tr>';
    html += '<td data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-mode="perf" onclick="showDetailDrill(this)">';
    html += '<div class="rate-val">' + perfRate + '%</div>';
    html += '<div class="meta-val">' + pd.total + '人 | ' + perfDone + '已完成</div></td>';
    html += '<td data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-mode="target" onclick="showDetailDrill(this)">';
    html += '<div class="rate-val">' + targetRate + '%</div>';
    html += '<div class="meta-val">' + td.total + '人 | ' + targetDone + '已完成</div></td>';
    html += '</tr></table></div>';
  });
  container.innerHTML = html;
}

function showDetailDrill(el) {
  var detailKey = el.dataset.key || el.getAttribute('data-key');
  var region = el.dataset.region || el.getAttribute('data-region');
  var mode = el.dataset.mode || el.getAttribute('data-mode');
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;

  var rows = (dd[mode][region] && dd[mode][region].rows) || [];
  var sorted = sortRowsByStatus(rows, mode);
  var modeLabel = mode === 'perf' ? '绩效看板 (' + perf_month + '月)' : '目标看板 (' + target_month + '月)';

  document.getElementById('modalSidebar').innerHTML = '<div style="padding:14px;font-size:13px;color:#666;">' + escapeHtml(detailKey) + '</div>';
  var html = '<h3>' + escapeHtml(region) + ' - ' + modeLabel + '</h3>';
  html += '<div style="padding:6px 14px;background:' + (mode === 'perf' ? '#e0e8f0' : '#e6f3e6') + ';border-radius:6px;font-size:13px;display:inline-block;margin-bottom:14px;">';
  html += '<b>' + modeLabel + '</b>: ' + rows.length + '人</div>';
  if (sorted.length > 0) {
    html += renderPersonTable(sorted, mode);
  } else {
    html += '<p style="color:#999;font-size:13px;">暂无数据</p>';
  }
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

// ========== Detail Chart ==========
function renderDetailChart(detailKey, chartId) {
  var chart = safeInitChart(chartId);
  if (!chart) return;
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var fixedOrder = getDetailRegionOrder(detailKey);
  var rawOrder = dd.region_order || [];
  var order = [];
  fixedOrder.forEach(function(r) { if (rawOrder.indexOf(r) >= 0) order.push(r); });
  rawOrder.forEach(function(r) { if (order.indexOf(r) < 0) order.push(r); });
  var xData = [], perfDone = [], perfPending = [], targetDone = [], targetPending = [];
  var perfRates = [], targetRates = [];
  order.forEach(function(region) {
    var td = dd.target[region] || {total:0,done:0,rate:0};
    var pd = dd.perf[region] || {total:0,done:0,rate:0};
    var pdDone = countPerfDone(pd.rows);
    var tdDone = countTargetDone(td.rows);
    xData.push(region);
    perfDone.push(pdDone); perfPending.push(pd.total - pdDone);
    targetDone.push(tdDone); targetPending.push(td.total - tdDone);
    perfRates.push(pd.total > 0 ? Math.round(pdDone / pd.total * 1000) / 10 : 0); targetRates.push(td.total > 0 ? Math.round(tdDone / td.total * 1000) / 10 : 0);
  });
  chart.setOption({
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' },
      formatter: function(params) {
        var tip = '<b>' + params[0].axisValue + '</b><br/>';
        params.forEach(function(p) {
          var val = (p.seriesName.indexOf('完成率') >= 0) ? p.value + '%' : p.value;
          tip += p.marker + ' ' + p.seriesName + ': ' + val + '<br/>';
        });
        return tip;
      }
    },
    legend: { data: ['绩效已完成','绩效未完成','目标已完成','目标未完成','绩效完成率','目标完成率'], top: 5, textStyle: { fontSize: 11 } },
    grid: { left: 60, right: 60, top: 55, bottom: 70 },
    xAxis: { type: 'category', data: xData, axisLabel: { fontSize: 11, rotate: 35 },
      splitLine: { show: true, lineStyle: { type: 'dashed', color: '#ddd' } } },
    yAxis: [
      { type: 'value', name: '人数', splitLine: { lineStyle: { type: 'dashed', color: '#ddd' } } },
      { type: 'value', name: '完成率(%)', min: 0, max: 100, axisLabel: { formatter: '{value}%' }, splitLine: { show: false } }
    ],
    series: [
      { name: '绩效已完成', type: 'bar', stack: 'perf', data: perfDone, itemStyle: { color: '#4a80c0' }, barWidth: 22,
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '绩效未完成', type: 'bar', stack: 'perf', data: perfPending, itemStyle: { color: '#e05a5a' },
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '目标已完成', type: 'bar', stack: 'target', data: targetDone, itemStyle: { color: '#5aad60' }, barWidth: 22,
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '目标未完成', type: 'bar', stack: 'target', data: targetPending, itemStyle: { color: '#e8923a' },
        label: { show: true, position: 'inside', fontSize: 10, color: '#fff' } },
      { name: '绩效完成率', type: 'line', yAxisIndex: 1, data: perfRates, itemStyle: { color: '#d08030' }, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6,
        label: { show: true, position: 'top', formatter: '{c}%', fontSize: 9, color: '#d08030' } },
      { name: '目标完成率', type: 'line', yAxisIndex: 1, data: targetRates, itemStyle: { color: '#3a9e7a' }, lineStyle: { width: 2 }, symbol: 'circle', symbolSize: 6,
        label: { show: true, position: 'bottom', formatter: '{c}%', fontSize: 9, color: '#3a9e7a' } }
    ]
  });
}

// ========== Perf Rate Table ==========
function renderPerfRateTable(detailKey, tableId) {
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var tbody = document.querySelector('#' + tableId + ' tbody');
  if (!tbody) return;
  var order = dd.region_order || [];
  var html = '';
  order.forEach(function(region) {
    var pd = dd.perf[region];
    if (!pd || pd.total === 0) return;
    var rows = pd.rows || [];
    var total = pd.total;
    var done = countPerfDone(rows);
    var pending = total - done;
    var rate = total > 0 ? Math.round(done / total * 1000) / 10 : 0;
    // Count individual stages
    var empConfirm = 0, hrArchive = 0;
    rows.forEach(function(r) {
      var flow = r['当前流程'] || '';
      if (flow === '员工确认') empConfirm++;
      else if (flow === 'HR归档') hrArchive++;
    });
    html += '<tr>';
    // Region name: click shows 未完成 personnel
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-filter="pending" onclick="showRegionFiltered(this)">' + escapeHtml(region) + '</td>';
    html += '<td>' + total + '</td>';
    // 未完成: click shows pending personnel
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-filter="pending" onclick="showRegionFiltered(this)">' + pending + '</td>';
    // 员工确认: click shows personnel in this stage
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-stage="员工确认" onclick="showStagePersonnel(this)">' + empConfirm + '</td>';
    // HR归档: click shows personnel in this stage
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-stage="HR归档" onclick="showStagePersonnel(this)">' + hrArchive + '</td>';
    // Completion rate: click shows 已完成 personnel
    html += '<td class="clickable-cell ' + rateClass(rate) + '" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-filter="done" onclick="showRegionFiltered(this)">' + rate + '%</td>';
    html += '</tr>';
  });
  tbody.innerHTML = html;
}

// ========== Target Rate Table ==========
function renderTargetRateTable(detailKey, tableId) {
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var tbody = document.querySelector('#' + tableId + ' tbody');
  if (!tbody) return;
  var order = dd.region_order || [];
  var html = '';
  order.forEach(function(region) {
    var td = dd.target[region];
    if (!td || td.total === 0) return;
    var rows = td.rows || [];
    var total = td.total;
    var stageCounts = { "制定目标": 0, "目标审核": 0, "已完成": 0 };
    rows.forEach(function(r) {
      var flow = r['当前流程'] || '';
      if (flow.indexOf('制定') >= 0) stageCounts["制定目标"]++;
      else if (flow.indexOf('目标审核') >= 0) stageCounts["目标审核"]++;
      else if (flow === '已完成') stageCounts["已完成"]++;
    });
    var done = stageCounts["已完成"];
    var rate = total > 0 ? Math.round(done / total * 1000) / 10 : 0;
    html += '<tr>';
    // Region name: click shows 未完成 personnel
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-filter="pending" onclick="showRegionFiltered(this)">' + escapeHtml(region) + '</td>';
    html += '<td>' + total + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-stage="制定目标" onclick="showStagePersonnel(this)">' + stageCounts["制定目标"] + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-stage="目标审核" onclick="showStagePersonnel(this)">' + stageCounts["目标审核"] + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-stage="已完成" onclick="showStagePersonnel(this)">' + done + '</td>';
    // Completion rate: click shows 已完成 personnel
    html += '<td class="clickable-cell ' + rateClass(rate) + '" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-filter="done" onclick="showRegionFiltered(this)">' + rate + '%</td>';
    html += '</tr>';
  });
  tbody.innerHTML = html;
}

// ========== Merged Rate Table (perf + target in one table) ==========
function renderMergedRateTable(detailKey, tableId) {
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var tbody = document.querySelector('#' + tableId + ' tbody');
  if (!tbody) return;
  var fixedOrder = getDetailRegionOrder(detailKey);
  var rawOrder = dd.region_order || [];
  var order = [];
  fixedOrder.forEach(function(r) { if (rawOrder.indexOf(r) >= 0) order.push(r); });
  rawOrder.forEach(function(r) { if (order.indexOf(r) < 0) order.push(r); });
  var html = '';
  order.forEach(function(region) {
    // Perf data
    var pd = dd.perf[region];
    var pTotal = 0, pDone = 0, pPending = 0, pRate = 0, empConfirm = 0, hrArchive = 0;
    if (pd && pd.total > 0) {
      var pRows = pd.rows || [];
      pTotal = pd.total;
      pDone = countPerfDone(pRows);
      pPending = pTotal - pDone;
      pRate = pTotal > 0 ? Math.round(pDone / pTotal * 1000) / 10 : 0;
      pRows.forEach(function(r) {
        var flow = r['\u5f53\u524d\u6d41\u7a0b'] || '';
        if (flow === '\u5458\u5de5\u786e\u8ba4') empConfirm++;
        else if (flow === 'HR\u5f52\u6863') hrArchive++;
      });
    }
    // Target data
    var td = dd.target[region];
    var tTotal = 0, tDone = 0, tRate = 0;
    var stageCounts = { "\u5236\u5b9a\u76ee\u6807": 0, "\u76ee\u6807\u5ba1\u6838": 0, "\u5df2\u5b8c\u6210": 0 };
    if (td && td.total > 0) {
      var tRows = td.rows || [];
      tTotal = td.total;
      tRows.forEach(function(r) {
        var flow = r['\u5f53\u524d\u6d41\u7a0b'] || '';
        if (flow.indexOf('\u5236\u5b9a') >= 0) stageCounts["\u5236\u5b9a\u76ee\u6807"]++;
        else if (flow.indexOf('\u76ee\u6807\u5ba1\u6838') >= 0) stageCounts["\u76ee\u6807\u5ba1\u6838"]++;
        else if (flow === '\u5df2\u5b8c\u6210') stageCounts["\u5df2\u5b8c\u6210"]++;
      });
      tDone = stageCounts["\u5df2\u5b8c\u6210"];
      tRate = tTotal > 0 ? Math.round(tDone / tTotal * 1000) / 10 : 0;
    }
    if (pTotal === 0 && tTotal === 0) return;
    html += '<tr>';
    // Region — click shows both perf & target incomplete personnel
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" onclick="showBothIncomplete(this)">' + escapeHtml(region) + '</td>';
    // Perf columns
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" onclick="showAllPersonnel(this)">' + pTotal + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-filter="pending" onclick="showRegionFiltered(this)">' + pPending + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-stage="\u5458\u5de5\u786e\u8ba4" onclick="showStagePersonnel(this)">' + empConfirm + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-stage="HR\u5f52\u6863" onclick="showStagePersonnel(this)">' + hrArchive + '</td>';
    html += '<td class="clickable-cell ' + rateClass(pRate) + '" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="perf" data-filter="done" onclick="showRegionFiltered(this)">' + pRate + '%</td>';
    // Target columns
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" onclick="showAllPersonnel(this)">' + tTotal + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-stage="\u5236\u5b9a\u76ee\u6807" onclick="showStagePersonnel(this)">' + stageCounts["\u5236\u5b9a\u76ee\u6807"] + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-stage="\u76ee\u6807\u5ba1\u6838" onclick="showStagePersonnel(this)">' + stageCounts["\u76ee\u6807\u5ba1\u6838"] + '</td>';
    html += '<td class="clickable-cell" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-stage="\u5df2\u5b8c\u6210" onclick="showStagePersonnel(this)">' + tDone + '</td>';
    html += '<td class="clickable-cell ' + rateClass(tRate) + '" data-key="' + escapeHtml(detailKey) + '" data-region="' + escapeHtml(region) + '" data-tp="target" data-filter="done" onclick="showRegionFiltered(this)">' + tRate + '%</td>';
    html += '</tr>';
  });
  tbody.innerHTML = html;
}

// ========== Both Incomplete Drill (perf + target) ==========
function showBothIncomplete(el) {
  var detailKey = el.dataset.key || el.getAttribute('data-key');
  var region = el.dataset.region || el.getAttribute('data-region');
  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;

  // Perf incomplete
  var perfRows = (dd.perf[region] && dd.perf[region].rows) || [];
  var perfPending = perfRows.filter(function(r) { return !isDoneFlow(r['\u5f53\u524d\u6d41\u7a0b'] || ''); });

  // Target incomplete
  var targetRows = (dd.target[region] && dd.target[region].rows) || [];
  var targetPending = targetRows.filter(function(r) { return !isTargetDone(r['\u5f53\u524d\u6d41\u7a0b'] || ''); });

  document.getElementById('modalSidebar').innerHTML = '<div style="padding:14px;font-size:13px;color:#666;">' + escapeHtml(region) + ' / \u672a\u5b8c\u6210\u6c47\u603b</div>';

  var html = '<h3>' + escapeHtml(region) + ' - \u672a\u5b8c\u6210\u4eba\u5458\u6c47\u603b</h3>';

  // Perf section
  var perfLabel = '\u7ee9\u6548\u770b\u677f(' + perf_month + '\u6708) - \u672a\u5b8c\u6210 (' + perfPending.length + '\u4eba)';
  html += '<div style="padding:6px 14px;background:#e0e8f0;border-radius:6px;font-size:13px;display:inline-block;margin:4px 8px 10px 0;">';
  html += '<b>' + perfLabel + '</b></div>';
  if (perfPending.length > 0) {
    html += renderPersonTable(sortRowsByStatus(perfPending, 'perf'), 'perf');
  } else {
    html += '<p style="color:#999;font-size:13px;margin-bottom:16px;">\u7ee9\u6548\u5df2\u5168\u90e8\u5b8c\u6210</p>';
  }

  // Target section
  var targetLabel = '\u76ee\u6807\u770b\u677f(' + target_month + '\u6708) - \u672a\u5b8c\u6210 (' + targetPending.length + '\u4eba)';
  html += '<div style="padding:6px 14px;background:#e6f3e6;border-radius:6px;font-size:13px;display:inline-block;margin:4px 8px 10px 0;">';
  html += '<b>' + targetLabel + '</b></div>';
  if (targetPending.length > 0) {
    html += renderPersonTable(sortRowsByStatus(targetPending, 'target'), 'target');
  } else {
    html += '<p style="color:#999;font-size:13px;">\u76ee\u6807\u5df2\u5168\u90e8\u5b8c\u6210</p>';
  }

  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

// ========== Region Filtered Drill (pending/done) ==========
function showRegionFiltered(el) {
  var detailKey = el.dataset.key || el.getAttribute('data-key');
  var region = el.dataset.region || el.getAttribute('data-region');
  var tp = el.dataset.tp || el.getAttribute('data-tp');
  var filter = el.dataset.filter || el.getAttribute('data-filter');

  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var rows = (dd[tp][region] && dd[tp][region].rows) || [];
  var filtered = rows.filter(function(r) {
    var flow = r['当前流程'] || '';
    if (filter === 'done') return isDone(flow, tp);
    return !isDone(flow, tp);
  });

  var tpLabel = tp === 'perf' ? '绩效看板(' + perf_month + '月)' : '目标看板(' + target_month + '月)';
  var filterLabel = filter === 'done' ? '已完成' : '未完成';
  document.getElementById('modalSidebar').innerHTML = '<div style="padding:14px;font-size:13px;color:#666;">' + escapeHtml(region) + ' / ' + filterLabel + '</div>';
  var html = '<h3>' + escapeHtml(region) + ' - ' + tpLabel + ' - ' + filterLabel + ' (' + filtered.length + '人)</h3>';
  if (filtered.length > 0) {
    html += renderPersonTable(sortRowsByStatus(filtered, tp), tp);
  } else {
    html += '<p style="color:#999;font-size:13px;">暂无' + filterLabel + '人员</p>';
  }
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

// ========== Stage Personnel Drill ==========
function showStagePersonnel(el) {
  var detailKey = el.dataset.key || el.getAttribute('data-key');
  var region = el.dataset.region || el.getAttribute('data-region');
  var tp = el.dataset.tp || el.getAttribute('data-tp');
  var stage = el.dataset.stage || el.getAttribute('data-stage');

  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var rows = (dd[tp][region] && dd[tp][region].rows) || [];
  var filtered = rows.filter(function(r) {
    var flow = r['当前流程'] || '';
    if (stage === '已完成') return isDone(flow, tp);
    if (stage === '绩效审定') return flow.indexOf('绩效审定') >= 0;
    return flow === stage || flow.indexOf(stage) >= 0;
  });

  document.getElementById('modalSidebar').innerHTML = '<div style="padding:14px;font-size:13px;color:#666;">' + escapeHtml(region) + ' / ' + escapeHtml(stage) + '</div>';
  var tpLabel = tp === 'perf' ? '绩效看板(' + perf_month + '月)' : '目标看板(' + target_month + '月)';
  var html = '<h3>' + escapeHtml(region) + ' - ' + tpLabel + ' - ' + escapeHtml(stage) + ' (' + filtered.length + '人)</h3>';
  if (filtered.length > 0) {
    html += renderPersonTable(filtered, tp);
  } else {
    html += '<p style="color:#999;font-size:13px;">暂无数据</p>';
  }
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

// ========== All Personnel Drill (total headcount) ==========
function showAllPersonnel(el) {
  var detailKey = el.dataset.key || el.getAttribute('data-key');
  var region = el.dataset.region || el.getAttribute('data-region');
  var tp = el.dataset.tp || el.getAttribute('data-tp');

  var dd = DETAIL_DATA[detailKey];
  if (!dd) return;
  var rows = (dd[tp][region] && dd[tp][region].rows) || [];

  document.getElementById('modalSidebar').innerHTML = '<div style="padding:14px;font-size:13px;color:#666;">' + escapeHtml(region) + ' / \u5168\u90e8\u4eba\u5458</div>';
  var tpLabel = tp === 'perf' ? '\u7ee9\u6548\u770b\u677f(' + perf_month + '\u6708)' : '\u76ee\u6807\u770b\u677f(' + target_month + '\u6708)';
  var html = '<h3>' + escapeHtml(region) + ' - ' + tpLabel + ' - \u5168\u90e8\u4eba\u5458 (' + rows.length + '\u4eba)</h3>';
  if (rows.length > 0) {
    html += renderPersonTable(rows, tp);
  } else {
    html += '<p style="color:#999;font-size:13px;">\u6682\u65e0\u6570\u636e</p>';
  }
  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('modalOverlay').classList.add('show');
}

// ========== Modal ==========
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('show');
}

// ========== Navigation ==========
function setupNav() {
  if (navSetupDone) return;
  navSetupDone = true;
  var tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      var secId = this.dataset.sec;
      var sec = document.getElementById(secId);
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      tabs.forEach(function(t) { t.classList.remove('active'); });
      this.classList.add('active');
    });
  });
  var sections = document.querySelectorAll('.dashboard-section');
  var navObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        tabs.forEach(function(t) { t.classList.toggle('active', t.dataset.sec === entry.target.id); });
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
  sections.forEach(function(sec) { navObserver.observe(sec); });
}

// ========== Screenshot ==========
function downloadScreenshot() {
  if (typeof html2canvas !== 'undefined') {
    html2canvas(document.querySelector('.container'), { scale: 2, useCORS: true, backgroundColor: '#f0f2f5' }).then(function(canvas) {
      var link = document.createElement('a');
      link.download = 'FBU\u6d77\u5916\u7ee9\u6548\u770b\u677f-' + (new Date().getMonth()+1) + '\u6708-' + new Date().toISOString().slice(0,10) + '.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  } else { window.print(); }
}

// ========== Resize ==========
window.addEventListener('resize', function() {
  Object.keys(chartInstances).forEach(function(id) {
    try { var dom = document.getElementById(id); if (dom && chartInstances[id]) chartInstances[id].resize(); } catch(e) {}
  });
});

// ========== Init ==========
function initAll() {
  try { renderSummaryCards(); renderSummaryChart(); } catch(e) { console.error('Summary init error:', e); }
  DETAIL_KEYS.forEach(function(key, idx) {
    try {
      var detailId = DETAIL_IDS[idx];
      renderDetailChart(key, detailId + 'Chart');
      renderMergedRateTable(key, detailId + 'MergedTable');
    } catch(e) { console.error('Detail init error for ' + key + ':', e); }
  });
  setupNav();
}
document.addEventListener('DOMContentLoaded', initAll);

