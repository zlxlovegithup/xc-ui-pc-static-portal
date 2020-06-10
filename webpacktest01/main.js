//1、在此文件中会引用model01.js模块
var {add} = require('./model01.js');
//2、引用vue.min.js（它也一个模块）
var Vue = require('./vue.min');
//3、将html页面中构建vue实例的代码放在main.js中。
var VM = new Vue({
    el: '#app',//表示当前vue对象接管app的div区域
    data:{         
        name:'黑马程序员',// 相当于是MVVM中的Model这个角色        
        num1:0,         
        num2:0,         
        result:0,         
        url:'http://www.itcast.cn'     
    },
    methods:{         
        change:function(){          //这里使用了导入的model01.js文件中的add方法                  
             this.result = add(Number.parseInt(this.num1),Number.parseInt(this.num2))             
             alert(this.result)      
        }
     }
    });