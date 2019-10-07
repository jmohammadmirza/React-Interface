(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),i=(a(30),a(31),a(3)),c=a(4),m=a(7),l=a(5),p=a(6),d=a(1),h=(a(32),a(22)),u=a(9),b=a(23),f=a.n(b),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(l.a)(t).call(this))).state={patientName:"",appointmentDate:"",aptTime:"",comments:""},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleAdd=e.handleAdd.bind(Object(d.a)(Object(d.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"handleAdd",value:function(e){e.preventDefault();var t={patientName:this.state.patientName,appointmentDate:this.state.appointmentDate+" "+this.state.aptTime,comments:this.state.comments};f.a.post("http://localhost:8090/outpatient",t).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),this.props.addAppointment(t),this.setState({patientName:"",appointmentDate:"",aptTime:"",comments:""}),this.props.toggleForm()}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(h.a)({},n,a))}},{key:"render",value:function(){return r.a.createElement("div",{className:"card textcenter mt-3 "+(this.props.formDisplay?"fadeIn":"add-appointment")},r.a.createElement("div",{className:"apt-addheading card-header bg-primary text-white",onClick:this.props.toggleForm},r.a.createElement(u.a,null)," Add Appointment"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{id:"aptForm",noValidate:!0,onSubmit:this.handleAdd},r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"patientName"},"Patient Name"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("input",{type:"text",className:"form-control",name:"patientName",placeholder:"Patient's Name",value:this.state.patientName,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"appointmentDate"},"Date"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"date",className:"form-control",name:"appointmentDate",id:"appointmentDate",value:this.state.appointmentDate,onChange:this.handleChange})),r.a.createElement("label",{className:"col-md-2 col-form-label text-md-right",htmlFor:"aptTime"},"Time"),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"time",className:"form-control",name:"aptTime",id:"aptTime",value:this.state.aptTime,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row"},r.a.createElement("label",{className:"col-md-2 text-md-right",htmlFor:"comments"},"Apt. Notes"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("textarea",{className:"form-control",rows:"4",cols:"50",name:"comments",id:"comments",placeholder:"Appointment Notes",value:this.state.comments,onChange:this.handleChange}))),r.a.createElement("div",{className:"form-group form-row mb-0"},r.a.createElement("div",{className:"offset-md-2 col-md-10"},r.a.createElement("button",{type:"submit",className:"btn btn-primary d-block ml-auto"},"Add Appointment"))))))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"search-appointments row justify-content-center my-4"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{id:"SearchApts",type:"text",className:"form-control","aria-label":"Search Appointments",onChange:function(t){return e.props.searchApts(t.target.value)}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Sort by: ",r.a.createElement("span",{className:"caret"})),r.a.createElement("div",{className:"sort-menu dropdown-menu dropdown-menu-right"},r.a.createElement("button",{className:"sort-by dropdown-item"+("patientName"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("patientName",e.props.orderDir)},href:"#"},"Patient Name"),r.a.createElement("button",{className:"sort-by dropdown-item"+("appointmentDate"===this.props.orderBy?"active":""),onClick:function(t){return e.props.changeOrder("appointmentDate",e.props.orderDir)},href:"#"},"Date"),r.a.createElement("div",{role:"separator",className:"dropdown-divider"}),r.a.createElement("button",{className:"sort-by dropdown-item"+("asc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"asc")},href:"#"},"Asc"),r.a.createElement("button",{className:"sort-by dropdown-item"+("desc"===this.props.orderDir?"active":""),onClick:function(t){return e.props.changeOrder(e.props.orderBy,"desc")},href:"#"},"Desc"))))))}}]),t}(n.Component),N=(a(50),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{id:"table",className:"table table-bordered table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("div",{className:"th-inner "},"Patient Name"),r.a.createElement("div",{className:"fht-cell"})),r.a.createElement("th",null,r.a.createElement("div",{className:"th-inner "},"Appointment Date"),r.a.createElement("div",{className:"fht-cell"})),r.a.createElement("th",null,r.a.createElement("div",{className:"th-inner "},"Comments"),r.a.createElement("div",{className:"fht-cell"})))),this.props.appointments.map(function(e){return r.a.createElement("tbody",{key:e.id},r.a.createElement("tr",null,r.a.createElement("td",null,e.patientName),r.a.createElement("td",null,e.appointmentDate),r.a.createElement("td",null,e.comments)))}))}}]),t}(n.Component));var y=a(24),E=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(l.a)(t).call(this))).state={myAppointments:[],formDisplay:!1,orderBy:"patientName",orderDir:"asc",queryText:""},e.deleteAppointment=e.deleteAppointment.bind(Object(d.a)(Object(d.a)(e))),e.toggleForm=e.toggleForm.bind(Object(d.a)(Object(d.a)(e))),e.addAppointment=e.addAppointment.bind(Object(d.a)(Object(d.a)(e))),e.changeOrder=e.changeOrder.bind(Object(d.a)(Object(d.a)(e))),e.searchApts=e.searchApts.bind(Object(d.a)(Object(d.a)(e))),e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"toggleForm",value:function(){this.setState({formDisplay:!this.state.formDisplay})}},{key:"searchApts",value:function(e){this.setState({queryText:e})}},{key:"changeOrder",value:function(e,t){this.setState({orderBy:e,orderDir:t})}},{key:"addAppointment",value:function(e){var t=this.state.myAppointments;t.unshift(e),this.setState({myAppointments:t})}},{key:"deleteAppointment",value:function(e){var t=this.state.myAppointments;t=Object(y.without)(t,e),this.setState({myAppointments:t})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8090/outpatient/fetch").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){return e});e.setState({myAppointments:a})})}},{key:"render",value:function(){var e,t=this,a=this.state.myAppointments;return e="asc"===this.state.orderDir?1:-1,a=a.sort(function(a,n){return a[t.state.orderBy].toLowerCase()<n[t.state.orderBy].toLowerCase()?-1*e:1*e}).filter(function(e){return e.patientName.toLowerCase().includes(t.state.queryText.toLowerCase())||e.appointmentDate.toLowerCase().includes(t.state.queryText.toLowerCase())||e.comments.toLowerCase().includes(t.state.queryText.toLowerCase())}),r.a.createElement("main",{className:"page bg-white",id:"petratings"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 bg-white"},r.a.createElement("div",{className:"container"},r.a.createElement(v,{formDisplay:this.state.formDisplay,toggleForm:this.toggleForm,addAppointment:this.addAppointment}),r.a.createElement(g,{orderBy:this.state.orderBy,orderDir:this.state.orderDir,changeOrder:this.changeOrder,searchApts:this.searchApts}),r.a.createElement(N,{appointments:a,deleteAppointment:this.deleteAppointment}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20),a(52),a(53);s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.f35ad56c.chunk.js.map
