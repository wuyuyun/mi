/**
 * Created by Administrator on 2017/9/4.
 */
$.tool={
  format:function (value) {
    var args=arguments;
    return value.replace(/\{(\d+)\}/g,function (a,b) {
      return args[Number(b)+1];
    })
  },
  tostring:function (value1,value2) {
    return value1+value2;
  }
}
