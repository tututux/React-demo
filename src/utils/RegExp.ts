//手机号正则：包含虚拟运营商176号段
export const rePhone = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;

//密码：只能包含字母、数字和下划线,且不能以下划线开头和结尾,长度在6~18之间
export const rePassword = /^(?!_)(?!.*?_$)[a-zA-Z0-9_]{6,18}$/;

//用户名：字母开头，允许4-15字节，允许字母数字下划线
//export const reUsername = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;

//用户名：允许中文,字母,数字,下划线,中划线,2-15字节
export const reUsername = /^[\u4e00-\u9fa5a-zA-Z0-9_-]{2,15}$/;

//身份证
export const reIDCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;

//邮箱正则
export const reEmail = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;

//命名规则：只允许数字、下划线、英文、中文
export const reNamingDefault = /^[\u4E00-\u9FA5\w\d]+$/;

//百分比：0 ~ 100 区间的数字
export const rePercent = /^(((\d|[1-9]\d)(\.\d{1,2})?)|100|100.0|100.00)$/;

//验证是否是中文
export const isZhcn = new RegExp('[\u4E00-\u9FA5]+');

//验证是否是英文
export const isEnus = new RegExp('[A-Za-z]+');

//验证是否是数字
export const isNumber = new RegExp('[0-9]+');

//匹配网址
export const reURL = new RegExp('([hH][tT]{2}[pP]://|[hH][tT]{2}[pP][sS]://)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~/])+');

//@字符匹配
export const reAite = /@(.*?)\s/;

//字符串是否包含空格
export const hasSpace = /^[^\s]*$/;
