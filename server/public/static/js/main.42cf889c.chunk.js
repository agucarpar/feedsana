(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t){},36:function(e,t,a){e.exports=a(68)},41:function(e,t,a){},42:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),o=a.n(c),l=(a(41),a(6)),i=a(1),s=a(2),u=a(4),h=a(3),p=a(5),m=(a(42),a(14)),d=a(8),f=a.n(d),E=function e(){var t=this;Object(i.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.handleUpload=function(e){return console.log("file in service: ",e),t.service.post("/upload",e).then(function(e){return e.data})},this.saveNewThing=function(e){return t.service.post("/things/create",e).then(function(e){return e.data})},this.service=f.a.create({baseURL:"https://feedsana.herokuapp.com",withCredentials:!0})},g=a(16),v=(a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.props.getUser(e.user)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.state={username:"",password:""},a.service=new E,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome!, create your account next:"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Sign up"})),r.a.createElement("h1",null,this.state.error?"Error":""))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:t,password:n,error:!1}),a.props.getUser(e)}).catch(function(e){a.setState({username:t,password:n,error:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(g.a)({},n,r))},a.state={username:"",password:""},a.service=new E,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h3",null,"Please, login to our site"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("h1",null,this.state.error?"Error":"")))}}]),t}(n.Component),O=a(12),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleLogout=function(e){a.props.logout()},a.state={loggedInUser:null},a.service=new E,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(l.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Welcome ",this.props.username),r.a.createElement("div",{className:"linkRow"},r.a.createElement("div",null,r.a.createElement(O.b,{to:"/main"},"Main")),r.a.createElement("div",null,r.a.createElement(O.b,{to:"/profile"},"Profile")),r.a.createElement("div",null,r.a.createElement(O.b,{to:"/explorar"},"Explorar")),r.a.createElement("div",null,r.a.createElement(O.b,{to:"/plans"},"Plans")),r.a.createElement("div",null,r.a.createElement(O.b,{to:"/makeyourplan"},"Make Your Plan")),r.a.createElement("button",{onClick:function(){e.handleLogout()}},"Logout")))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).explorer=function(e){e.preventDefault(),a.props.findFood(a.state.filterQuery),a.props.history.push("/findIngredients")},a.state={recipes:[],filterQuery:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"handlerIngredients",value:function(e){var t=e.target.value;this.setState(Object(l.a)({},this.state,{filterQuery:t}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.explorer},r.a.createElement("h3",null,"Search"),r.a.createElement("input",{className:"search-box",type:"text",placeholder:"filter recipe",value:this.state.filter,onChange:function(t){return e.handlerIngredients(t)}}),r.a.createElement("input",{type:"submit",value:"explorar"}))))}}]),t}(n.Component),j=Object(m.g)(y),C=(a(64),a(65),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).findFood=function(e){a.props.findFood(e)},a.state={recipes:[],filterQuery:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"toggleItems",value:function(){var e=this.state.open;this.setState(Object(l.a)({},this.state,{open:!e}))}},{key:"componentDidMount",value:function(){var e=this,t=["tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushrooms","cucumber","eggplant","lettuce","carrot","onion","celery","broccoli","peppers","cauliflower","sprout","garlic","spinach","aspargus","peas","beans","artichokes","squash",""],a=t.length,n=t[Math.floor(Math.random()*Math.floor(a))];f.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY)).then(function(t){e.setState({recipes:t.data.hits}),console.log(t.data)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{findFood:this.findFood}),r.a.createElement("div",null,this.state.recipes.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",{key:t},e.recipe.label),r.a.createElement("div",{key:t*Math.random()+Math.random()},r.a.createElement("img",{src:e.recipe.image})),r.a.createElement("div",null,e.recipe.ingredientLines.map(function(e,t){return r.a.createElement("li",null,e)})))})))}}]),t}(n.Component)),k=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={recipes:[]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getCurry",value:function(){var e=this;f.a.get("https://api.edamam.com/search?q=curry&app_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY)).then(function(t){e.setState(Object(l.a)({},e.state,{recipes:t.data.hits}),function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"getLentils",value:function(){var e=this;f.a.get("https://api.edamam.com/search?q=lentils&app_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY)).then(function(t){e.setState(Object(l.a)({},e.state,{recipes:t.data.hits}),function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"getCarrot",value:function(){var e=this;f.a.get("https://api.edamam.com/search?q=carrot&app_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY)).then(function(t){e.setState(Object(l.a)({},e.state,{recipes:t.data.hits}))}).catch(function(e){return console.log(e)})}},{key:"getKosher",value:function(){var e=this;f.a.get("https://api.edamam.com/search?q=Kosher&app_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY)).then(function(t){e.setState(Object(l.a)({},e.state,{recipes:t.data.hits}))}).catch(function(e){return console.log(e)})}},{key:"getLowFat",value:function(){var e=this;f.a.get("https://api.edamam.com/search?q=&app_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY,"&from=0&to=20&diet=low-fat")).then(function(t){e.setState(Object(l.a)({},e.state,{recipes:t.data.hits}),function(){console.log(e.state)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.getCurry()}},"Curry")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.getLentils()}}," Lentils")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.getCarrot()}},"Carrot")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.getKosher()}},"Kosher")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.getLowFat()}},"LowFat")),r.a.createElement("div",null,this.state.recipes.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",{key:t},e.recipe.label),r.a.createElement("div",{key:t*Math.random()+Math.random()},r.a.createElement("img",{src:e.recipe.image})))})))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Perfil de ",this.props.username," "))}}]),t}(n.Component),U=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h2",null,"Comienza a comer saludable"),r.a.createElement("p",null,"Planes guiados para aprender y mantener h\xe1bitos de comida sana"),r.a.createElement("h3",null,"Explora entre cientos de recetas"),r.a.createElement("h3",null,"Sigue planes para ayudarte a crear h\xe1bitos saludables"))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={filterQuery:"",recipes:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("https://api.edamam.com/search?q=".concat(this.props.filterQuery,"&app_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY)).then(function(t){e.setState(Object(l.a)({},e.state,{recipes:t.data.hits}),function(){console.log(t.data.hits)})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,this.state.recipes.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h3",null,e.recipe.label),r.a.createElement("div",{key:t*Math.random()+Math.random()},r.a.createElement("img",{src:e.recipe.image})))})))}}]),t}(n.Component),L=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleDietInput=function(t){var a=t.target.value;e.setState(Object(l.a)({},e.state,{dietQuery:a}))},e.handleHealthInput=function(t){var a=t.target.value;e.setState(Object(l.a)({},e.state,{healthQuery:a}))},e.state={dietQuery:"",healthQuery:"",recipes:[]},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getingredient",value:function(){var e=["tomatoe","avocado","jellyfish","tuna","rice","curry","salmon","pork","eggs","kosher","mushrooms","cucumber","eggplant","lettuce","carrot","onion","celery","broccoli","peppers","cauliflower","sprout","garlic","spinach","aspargus","peas","beans","artichokes","squash","razor shell"],t=e.length;return e[Math.floor(Math.random()*Math.floor(t))]}},{key:"getAll",value:function(e){var t=this;f.a.get("https://api.edamam.com/search?q=".concat(e,"&app_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY,"&from=0&to=20")).then(function(e){t.setState(Object(l.a)({},t.state,{recipes:e.data.hits}),function(){console.log(t.state)})}).catch(function(e){return console.log(e)})}},{key:"getByDiet",value:function(e){var t=this,a=""!==this.state.dietQuery&&void 0!==this.state.dietQuery,n=""!==this.state.healthQuery&&void 0!==this.state.healthQuery;if(a||n){var r="https://api.edamam.com/search?q=".concat(e,"&app_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).API_ID,"&app_key=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_URL:"https://feedsana.herokuapp.com"}).APIKEY,"&from=0&to=20"),c="";a&&(c+="&diet=".concat(this.state.dietQuery)),n&&(c+="&health=".concat(this.state.healthQuery)),f.a.get(r+c).then(function(e){t.setState(Object(l.a)({},t.state,{recipes:e.data.hits}),function(){console.log(t.state)})}).catch(function(e){return console.log(e)})}else this.getAll()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("select",{name:"diet",onChange:function(t){return e.handleDietInput(t)}},r.a.createElement("option",{value:""},"Choose your diet here"),r.a.createElement("option",{value:this.state.dietChose},"Balanced"),r.a.createElement("option",{value:this.state.dietChose},"high-fiber"),r.a.createElement("option",{value:this.state.dietChose},"high-protein"),r.a.createElement("option",{value:this.state.dietChose},"low-fat"),r.a.createElement("option",{value:this.state.dietChose},"low-sodium")),r.a.createElement("label",null,"Health"),r.a.createElement("select",{name:"health",onChange:function(t){return e.handleHealthInput(t)}},r.a.createElement("option",{value:""},"Choose here"),r.a.createElement("option",{value:this.state.healthChose},"alcohol-free"),r.a.createElement("option",{value:this.state.healthChose},"dairy"),r.a.createElement("option",{value:this.state.healthChose},"eggs"),r.a.createElement("option",{value:this.state.healthChose},"gluten"),r.a.createElement("option",{value:this.state.healthChose},"peanuts "),r.a.createElement("option",{value:this.state.healthChose},"vegan"),r.a.createElement("option",{value:this.state.healthChose},"vegetarian"))),r.a.createElement("input",{type:"submit",value:"Submit",onClick:function(){e.getByDiet()}}),r.a.createElement("div",null,this.state.recipes.map(function(e,t){return r.a.createElement("div",null,r.a.createElement("h3",{key:t},e.recipe.label),r.a.createElement("div",{key:t*Math.random()+Math.random()},r.a.createElement("img",{src:e.recipe.image})))}))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).getUser=function(e){a.setState({loggedInUser:e})},a.logout=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.history.push("/login")})},a.findFood=function(e){console.log(e),a.setState(Object(l.a)({},a.state,{filterQuery:e}))},a.state={loggedInUser:null,filterQuery:""},a.service=new E,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"fetchUser",value:function(){var e=this;if(null===this.state.loggedInUser)return this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{to:"/main"}),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(_,{className:"nav",userInSession:this.state.loggedInUser,username:this.state.loggedInUser.username,logout:this.logout})),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/explorar",render:function(){return r.a.createElement(C,{findFood:e.findFood})}}),r.a.createElement(m.b,{exact:!0,path:"/plans",render:function(){return r.a.createElement(k,null)}}),r.a.createElement(m.b,{exact:!0,path:"/profile",render:function(){return r.a.createElement(P,{username:e.state.loggedInUser.username})}}),r.a.createElement(m.b,{exact:!0,path:"/main",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(m.b,{exact:!0,path:"/findIngredients",render:function(){return r.a.createElement(I,{filterQuery:e.state.filterQuery})}}),r.a.createElement(m.b,{exact:!0,path:"/makeYourPlan",render:function(){return r.a.createElement(L,null)}})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,{to:"/signup"})}}),r.a.createElement(m.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(v,{getUser:e.getUser})}}),r.a.createElement(m.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(b,{getUser:e.getUser})}})))))}}]),t}(n.Component),R=Object(m.g)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.42cf889c.chunk.js.map