/*! Built with http://stenciljs.com */
const{h:t}=window.App;class e{render(){return t("div",null,t("header",null,t("h1",null,"Stencil todo example")),t("main",null,t("my-todo",null)))}static get is(){return"my-app"}static get style(){return"header{background:#ff552e;color:#fff;height:56px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}body{background:linear-gradient(45deg,#fd746c,#ff9068);padding:0;margin:0}"}}class o{constructor(){this.todos=[{name:"Faire une todo-list en StencilJs",check:!0},{name:"Poster la todo-list sur github",check:!1},{name:"Ecrire un post de blog sur StencilJs",check:!1}]}addTodo(t){this.todos=[...this.todos,{name:t.value,check:!1}],t.value=""}checkTodo(t){t.check=!t.check,this.todos=[...this.todos]}render(){return t("div",null,t("h1",null,"Todos"),t("ul",null,this.todos.map(e=>t("li",{class:e.check?"complete":"",onClick:()=>this.checkTodo(e)},t("span",null,e.name)))),t("input",{type:"text",onChange:t=>this.addTodo(t.target)}))}static get is(){return"my-todo"}static get properties(){return{todos:{state:!0}}}static get style(){return"my-todo{width:100%;height:calc(100vh - 56px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-family:sans-serif}my-todo div{background-color:#fff;padding:50px;min-width:300px;border-radius:5px;-webkit-box-shadow:0 0 20px rgba(0,0,0,.5);box-shadow:0 0 20px rgba(0,0,0,.5)}my-todo div h1{-webkit-animation:wiggle .25s 2;animation:wiggle .25s 2;text-align:center;margin-bottom:50px;margin-top:-5px;color:#000}my-todo div ul{list-style:none;padding:0}my-todo div ul li{position:relative;padding:15px 10px;cursor:pointer}my-todo div ul li:not(:last-child){border-bottom:2px solid rgba(211,211,211,.534);border-radius:2px}my-todo div ul li:after{font-family:FontAwesome;content:\"\\f00c\";position:absolute;right:.75rem;color:#2ecc71;opacity:0;-webkit-transition:opacity .5s;transition:opacity .5s}my-todo div ul li span{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:opacity .5s;transition:opacity .5s}my-todo div ul li span:after{content:'';position:absolute;display:block;width:calc(100% + .5em);left:-.25em;height:2px;top:50%;border-radius:1px;background:#2e2e2e;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:-webkit-transform .5s;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;-webkit-transform-origin:center right;transform-origin:center right}my-todo div ul li.complete span{opacity:.5}my-todo div ul li.complete span:after{-webkit-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(1);transform:scaleX(1)}my-todo div ul li.complete:after{opacity:1}my-todo input{width:100%;padding:10px;border:1px solid rgba(211,211,211,.534);border-radius:3px;background-color:rgba(211,211,211,.534);-webkit-transition:background-color .5s;transition:background-color .5s;-webkit-box-sizing:content-box;box-sizing:content-box}my-todo input:focus{background-color:#fff;outline:0}\@-webkit-keyframes wiggle{0%{-webkit-transform:rotate(2deg);transform:rotate(2deg)}50%{-webkit-transform:rotate(-2deg);transform:rotate(-2deg)}100%{-webkit-transform:rotate(2deg);transform:rotate(2deg)}}\@keyframes wiggle{0%{-webkit-transform:rotate(2deg);transform:rotate(2deg)}50%{-webkit-transform:rotate(-2deg);transform:rotate(-2deg)}100%{-webkit-transform:rotate(2deg);transform:rotate(2deg)}}"}}export{e as MyApp,o as MyTodo};