define("js/utils/handle_iframe_binding",["jquery"],function(e){var n=function(n){var i=null;i="undefined"==typeof n?e("iframe, embed"):"undefined"!=typeof n.nodeName?e(n).find("iframe, embed"):n.$("iframe, embed"),t(i)},t=function(n){n.each(function(){if("IFRAME"===e(this).prop("tagName")){var n=e(this).attr("src");if(n){var t="wmode=transparent";if(-1!==n.indexOf("?")){var i=n.split("?");if(-1===i[1].search("wmode=transparent")){var r=i[1],o=i[0];e(this).attr("src",o+"?"+t+"&"+r)}}else 0!==n.lastIndexOf("javascript:",0)&&e(this).attr("src",n+"?"+t)}}else e(this).attr("wmode","transparent")})},i=function(n){if(n){var i=null,r=document.createElement("div");e(r).html(n),i=e(r).find("iframe, embed"),i.length>0&&(t(i),n=e(r).html())}return n};return{iframeBinding:n,iframeBindingHtml:i}}),define("js/utils/templates",["jquery","underscore"],function(e,n){var t=function(t){var i="#"+t+"-tpl",r=e(i).text();return r||console.error("Failed to load "+t+" template"),n.template(r)};return{loadTemplate:t}}),!function(e,n){var t=n.prototype.trim,i=n.prototype.trimRight,r=n.prototype.trimLeft,o=function(e){return 1*e||0},s=function(e,n){if(1>n)return"";for(var t="";n>0;)1&n&&(t+=e),n>>=1,e+=e;return t},a=[].slice,l=function(e){return null==e?"\\s":e.source?e.source:"["+f.escapeRegExp(e)+"]"},c={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},u={};for(var p in c)u[c[p]]=p;var d=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var t=s,i=function(){return i.cache.hasOwnProperty(arguments[0])||(i.cache[arguments[0]]=i.parse(arguments[0])),i.format.call(null,i.cache[arguments[0]],arguments)};return i.format=function(i,r){var o,s,a,l,c,u,p,f=1,h=i.length,m="",g=[];for(s=0;h>s;s++)if(m=e(i[s]),"string"===m)g.push(i[s]);else if("array"===m){if(l=i[s],l[2])for(o=r[f],a=0;a<l[2].length;a++){if(!o.hasOwnProperty(l[2][a]))throw new Error(d('[_.sprintf] property "%s" does not exist',l[2][a]));o=o[l[2][a]]}else o=l[1]?r[l[1]]:r[f++];if(/[^s]/.test(l[8])&&"number"!=e(o))throw new Error(d("[_.sprintf] expecting number but found %s",e(o)));switch(l[8]){case"b":o=o.toString(2);break;case"c":o=n.fromCharCode(o);break;case"d":o=parseInt(o,10);break;case"e":o=l[7]?o.toExponential(l[7]):o.toExponential();break;case"f":o=l[7]?parseFloat(o).toFixed(l[7]):parseFloat(o);break;case"o":o=o.toString(8);break;case"s":o=(o=n(o))&&l[7]?o.substring(0,l[7]):o;break;case"u":o=Math.abs(o);break;case"x":o=o.toString(16);break;case"X":o=o.toString(16).toUpperCase()}o=/[def]/.test(l[8])&&l[3]&&o>=0?"+"+o:o,u=l[4]?"0"==l[4]?"0":l[4].charAt(1):" ",p=l[6]-n(o).length,c=l[6]?t(u,p):"",g.push(l[5]?o+c:c+o)}return g.join("")},i.cache={},i.parse=function(e){for(var n=e,t=[],i=[],r=0;n;){if(null!==(t=/^[^\x25]+/.exec(n)))i.push(t[0]);else if(null!==(t=/^\x25{2}/.exec(n)))i.push("%");else{if(null===(t=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)))throw new Error("[_.sprintf] huh?");if(t[2]){r|=1;var o=[],s=t[2],a=[];if(null===(a=/^([a-z_][a-z_\d]*)/i.exec(s)))throw new Error("[_.sprintf] huh?");for(o.push(a[1]);""!==(s=s.substring(a[0].length));)if(null!==(a=/^\.([a-z_][a-z_\d]*)/i.exec(s)))o.push(a[1]);else{if(null===(a=/^\[(\d+)\]/.exec(s)))throw new Error("[_.sprintf] huh?");o.push(a[1])}t[2]=o}else r|=2;if(3===r)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");i.push(t)}n=n.substring(t[0].length)}return i},i}(),f={VERSION:"2.3.0",isBlank:function(e){return null==e&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return null==e?"":n(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=null==e?"":n(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,t){return null==e?[]:(e=n(e),t=~~t,t>0?e.match(new RegExp(".{1,"+t+"}","g")):[e])},clean:function(e){return f.strip(e).replace(/\s+/g," ")},count:function(e,t){return null==e||null==t?0:n(e).split(t).length-1},chars:function(e){return null==e?[]:n(e).split("")},swapCase:function(e){return null==e?"":n(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return null==e?"":n(e).replace(/[&<>"']/g,function(e){return"&"+u[e]+";"})},unescapeHTML:function(e){return null==e?"":n(e).replace(/\&([^;]+);/g,function(e,t){var i;return t in c?c[t]:(i=t.match(/^#x([\da-fA-F]+)$/))?n.fromCharCode(parseInt(i[1],16)):(i=t.match(/^#(\d+)$/))?n.fromCharCode(~~i[1]):e})},escapeRegExp:function(e){return null==e?"":n(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,n,t,i){var r=f.chars(e);return r.splice(~~n,~~t,i),r.join("")},insert:function(e,n,t){return f.splice(e,n,0,t)},include:function(e,t){return""===t?!0:null==e?!1:-1!==n(e).indexOf(t)},join:function(){var e=a.call(arguments),n=e.shift();return null==n&&(n=""),e.join(n)},lines:function(e){return null==e?[]:n(e).split("\n")},reverse:function(e){return f.chars(e).reverse().join("")},startsWith:function(e,t){return""===t?!0:null==e||null==t?!1:(e=n(e),t=n(t),e.length>=t.length&&e.slice(0,t.length)===t)},endsWith:function(e,t){return""===t?!0:null==e||null==t?!1:(e=n(e),t=n(t),e.length>=t.length&&e.slice(e.length-t.length)===t)},succ:function(e){return null==e?"":(e=n(e),e.slice(0,-1)+n.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":n(e).replace(/(?:^|\s)\S/g,function(e){return e.toUpperCase()})},camelize:function(e){return f.trim(e).replace(/[-_\s]+(.)?/g,function(e,n){return n.toUpperCase()})},underscored:function(e){return f.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return f.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return f.titleize(n(e).replace(/_/g," ")).replace(/\s/g,"")},humanize:function(e){return f.capitalize(f.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,i){return null==e?"":!i&&t?t.call(e):(i=l(i),n(e).replace(new RegExp("^"+i+"+|"+i+"+$","g"),""))},ltrim:function(e,t){return null==e?"":!t&&r?r.call(e):(t=l(t),n(e).replace(new RegExp("^"+t+"+"),""))},rtrim:function(e,t){return null==e?"":!t&&i?i.call(e):(t=l(t),n(e).replace(new RegExp(t+"+$"),""))},truncate:function(e,t,i){return null==e?"":(e=n(e),i=i||"...",t=~~t,e.length>t?e.slice(0,t)+i:e)},prune:function(e,t,i){if(null==e)return"";if(e=n(e),t=~~t,i=null!=i?n(i):"...",e.length<=t)return e;var r=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},o=e.slice(0,t+1).replace(/.(?=\W*\w*$)/g,r);return o=o.slice(o.length-2).match(/\w\w/)?o.replace(/\s*\S+$/,""):f.rtrim(o.slice(0,o.length-1)),(o+i).length>e.length?e:e.slice(0,o.length)+i},words:function(e,n){return f.isBlank(e)?[]:f.trim(e,n).split(n||/\s+/)},pad:function(e,t,i,r){e=null==e?"":n(e),t=~~t;var o=0;switch(i?i.length>1&&(i=i.charAt(0)):i=" ",r){case"right":return o=t-e.length,e+s(i,o);case"both":return o=t-e.length,s(i,Math.ceil(o/2))+e+s(i,Math.floor(o/2));default:return o=t-e.length,s(i,o)+e}},lpad:function(e,n,t){return f.pad(e,n,t)},rpad:function(e,n,t){return f.pad(e,n,t,"right")},lrpad:function(e,n,t){return f.pad(e,n,t,"both")},sprintf:d,vsprintf:function(e,n){return n.unshift(e),d.apply(null,n)},toNumber:function(e,t){if(null==e||""==e)return 0;e=n(e);var i=o(o(e).toFixed(~~t));return 0!==i||e.match(/^0+$/)?i:Number.NaN},numberFormat:function(e,n,t,i){if(isNaN(e)||null==e)return"";e=e.toFixed(~~n),i=i||",";var r=e.split("."),o=r[0],s=r[1]?(t||".")+r[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+i)+s},strRight:function(e,t){if(null==e)return"";e=n(e),t=null!=t?n(t):t;var i=t?e.indexOf(t):-1;return~i?e.slice(i+t.length,e.length):e},strRightBack:function(e,t){if(null==e)return"";e=n(e),t=null!=t?n(t):t;var i=t?e.lastIndexOf(t):-1;return~i?e.slice(i+t.length,e.length):e},strLeft:function(e,t){if(null==e)return"";e=n(e),t=null!=t?n(t):t;var i=t?e.indexOf(t):-1;return~i?e.slice(0,i):e},strLeftBack:function(e,n){if(null==e)return"";e+="",n=null!=n?""+n:n;var t=e.lastIndexOf(n);return~t?e.slice(0,t):e},toSentence:function(e,n,t,i){n=n||", ",t=t||" and ";var r=e.slice(),o=r.pop();return e.length>2&&i&&(t=f.rtrim(n)+t),r.length?r.join(n)+t+o:o},toSentenceSerial:function(){var e=a.call(arguments);return e[3]=!0,f.toSentence.apply(f,e)},slugify:function(e){if(null==e)return"";var t="ąàáäâãåæćęèéëêìíïîłńòóöôõøùúüûñçżź",i="aaaaaaaaceeeeeiiiilnoooooouuuunczz",r=new RegExp(l(t),"g");return e=n(e).toLowerCase().replace(r,function(e){var n=t.indexOf(e);return i.charAt(n)||"-"}),f.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,n){return[n,e,n].join("")},quote:function(e){return f.surround(e,'"')},exports:function(){var e={};for(var n in this)this.hasOwnProperty(n)&&!n.match(/^(?:include|contains|reverse)$/)&&(e[n]=this[n]);return e},repeat:function(e,t,i){if(null==e)return"";if(t=~~t,null==i)return s(n(e),t);for(var r=[];t>0;r[--t]=e);return r.join(i)},levenshtein:function(e,t){if(null==e&&null==t)return 0;if(null==e)return n(t).length;if(null==t)return n(e).length;e=n(e),t=n(t);for(var i,r,o=[],s=0;s<=t.length;s++)for(var a=0;a<=e.length;a++)r=s&&a?e.charAt(a-1)===t.charAt(s-1)?i:Math.min(o[a],o[a-1],i)+1:s+a,i=o[a],o[a]=r;return o.pop()}};f.strip=f.trim,f.lstrip=f.ltrim,f.rstrip=f.rtrim,f.center=f.lrpad,f.rjust=f.lpad,f.ljust=f.rpad,f.contains=f.include,f.q=f.quote,"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(module.exports=f),exports._s=f):"function"==typeof define&&define.amd?define("underscore.string",[],function(){return f}):(e._=e._||{},e._.string=e._.str=f)}(this,String),define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),define("text!common/templates/components/system-feedback.underscore",[],function(){return'<div class="wrapper wrapper-<%= type %> wrapper-<%= type %>-<%= intent %>\n            <% if(obj.shown) { %>is-shown<% } else { %>is-hiding<% } %>\n            <% if(_.contains([\'help\', \'mini\'], intent)) { %>wrapper-<%= type %>-status<% } %>"\n     id="<%= type %>-<%= intent %>"\n     aria-hidden="<% if(obj.shown) { %>false<% } else { %>true<% } %>"\n     aria-labelledby="<%= type %>-<%= intent %>-title"\n     tabindex="-1"\n     <% if (obj.message) { %>aria-describedby="<%= type %>-<%= intent %>-description" <% } %>\n     <% if (obj.actions) { %>role="dialog"<% } %>\n  >\n  <div class="<%= type %> <%= intent %> <% if(obj.actions) { %>has-actions<% } %>">\n    <% if(obj.icon) { %>\n      <% var iconClass = {"warning": "warning", "confirmation": "check", "error": "warning", "announcement": "bullhorn", "step-required": "exclamation-circle", "help": "question", "mini": "cog"} %>\n      <i class="feedback-symbol fa fa-<%= iconClass[intent] %>"></i>\n    <% } %>\n\n    <div class="copy">\n      <h2 class="title title-3" id="<%= type %>-<%= intent %>-title"><%- title %></h2>\n      <% if(obj.message) { %><p class="message" id="<%= type %>-<%= intent %>-description"><%- message %></p><% } %>\n    </div>\n\n    <% if(obj.actions) { %>\n    <nav class="nav-actions">\n      <ul>\n        <% if(actions.primary) { %>\n        <li class="nav-item">\n          <button class="action-primary <%= actions.primary.class %>"><%- actions.primary.text %></button>\n        </li>\n        <% } %>\n        <% if(actions.secondary) {\n             _.each(actions.secondary, function(secondary) { %>\n        <li class="nav-item">\n          <button class="action-secondary <%= secondary.class %>"><%- secondary.text %></button>\n        </li>\n        <%   });\n           } %>\n      </ul>\n    </nav>\n    <% } %>\n\n    <% if(obj.closeIcon) { %>\n    <a href="#" rel="view" class="action action-close action-<%= type %>-close">\n      <i class="icon fa fa-times-circle"></i>\n      <span class="label">close <%= type %></span>\n    </a>\n    <% } %>\n  </div>\n</div>\n'}),function(e){e("common/js/components/views/feedback",["jquery","underscore","underscore.string","backbone","text!common/templates/components/system-feedback.underscore"],function(e,n,t,i,r){var o=i.View.extend({options:{title:"",message:"",intent:null,type:null,shown:!0,icon:!0,closeIcon:!0,minShown:0,maxShown:1/0},initialize:function(){if(!this.options.type)throw"SystemFeedback: type required (given "+JSON.stringify(this.options)+")";if(!this.options.intent)throw"SystemFeedback: intent required (given "+JSON.stringify(this.options)+")";return this.setElement(e("#page-"+this.options.type)),this.options.actions&&this.options.actions.secondary&&!n.isArray(this.options.actions.secondary)&&(this.options.actions.secondary=[this.options.actions.secondary]),this},show:function(){return clearTimeout(this.hideTimeout),this.options.shown=!0,this.shownAt=new Date,this.render(),e.isNumeric(this.options.maxShown)&&(this.hideTimeout=setTimeout(n.bind(this.hide,this),this.options.maxShown)),this},hide:function(){return this.shownAt&&e.isNumeric(this.options.minShown)&&this.options.minShown>new Date-this.shownAt?(clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(n.bind(this.hide,this),this.options.minShown-(new Date-this.shownAt))):(this.options.shown=!1,delete this.shownAt,this.render()),this},events:{"click .action-close":"hide","click .action-primary":"primaryClick","click .action-secondary":"secondaryClick"},render:function(){var e=o["active_"+this.options.type];return e&&e!==this&&(e.stopListening(),e.undelegateEvents()),this.$el.html(n.template(r)(this.options)),o["active_"+this.options.type]=this,this},primaryClick:function(e){var n,t;n=this.options.actions,n&&(t=n.primary,t&&(t.preventDefault!==!1&&e.preventDefault(),t.click&&t.click.call(e.target,this,e)))},secondaryClick:function(e){var t,i,r,o;t=this.options.actions,t&&(i=t.secondary,i&&(o=0,e&&e.target&&(o=n.indexOf(this.$(".action-secondary"),e.target)),r=i[o],r.preventDefault!==!1&&e.preventDefault(),r.click&&r.click.call(e.target,this,e)))}});return o})}.call(this,define||RequireJS.define),function(e){e("common/js/components/views/feedback_notification",["jquery","underscore","underscore.string","common/js/components/views/feedback"],function(e,n,t,i){t=t||n.str;var r,o,s=i.extend({options:e.extend({},i.prototype.options,{type:"notification",closeIcon:!1})});r=n.compose(t.capitalize,t.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],n.each(o,function(n){var t;t=s.extend({options:e.extend({},s.prototype.options,{intent:n})}),s[r(n)]=t});var a=s.Mini.prototype.options;return a.minShown=1250,a.closeIcon=!1,s})}.call(this,define||RequireJS.define),function(e){e("common/js/components/views/feedback_prompt",["jquery","underscore","underscore.string","common/js/components/views/feedback"],function(e,n,t,i){t=t||n.str;var r,o,s=i.extend({options:e.extend({},i.prototype.options,{type:"prompt",closeIcon:!1,icon:!1}),render:function(){return window.$body||(window.$body=e(document.body)),this.options.shown?$body.addClass("prompt-is-shown"):$body.removeClass("prompt-is-shown"),i.prototype.render.apply(this,arguments)}});return r=n.compose(t.capitalize,t.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],n.each(o,function(n){var t;t=s.extend({options:e.extend({},s.prototype.options,{intent:n})}),s[r(n)]=t}),s})}.call(this,define||RequireJS.define),function(e){e("common/js/components/utils/view_utils",["jquery","underscore","gettext","common/js/components/views/feedback_notification","common/js/components/views/feedback_prompt"],function(e,n,t,i,r){var o,s,a,l,c,u,p,d,f,h,m,g,v,y,w,b,x,C=65;return o=function(e,n){n||(n="collapsed"),e.closest(".expand-collapse").toggleClass("expand collapse"),e.closest(".is-collapsible, .window").toggleClass(n),e.closest(".is-collapsible").children("article").slideToggle()},s=function(){e(".ui-loading").show()},a=function(){e(".ui-loading").hide()},l=function(e,n,i,o,s){return new r.Warning({title:e,message:n,actions:{primary:{text:i,click:function(e){e.hide(),o()}},secondary:{text:t("Cancel"),click:function(e){return s&&s(),e.hide()}}}}).show()},c=function(e,n){var r;return r=new i.Mini({title:t(e)}),r.show(),n().done(function(){r.hide()})},u=function(e,n){return e.addClass("is-disabled").attr("aria-disabled",!0),n().always(function(){e.removeClass("is-disabled").attr("aria-disabled",!1)})},v=function(n){return function(t){t.preventDefault(),e.ajax({url:e(this).data("dismiss-link"),type:"DELETE",success:n})}},f=function(n){e("html, body").animate({scrollTop:n},500)},p=function(n){var t=n.offset().top;return t-e(window).scrollTop()},d=function(e,n){var t=e.offset().top,i=t-n;f(i)},h=function(e){window.location=e},m=function(){window.location.reload()},g=function(e,t){var i,r=e.changedAttributes();if(!r)return!1;for(i=0;i<t.length;i++)if(n.has(r,t[i]))return!0;return!1},y=function(e){return 0===e.length?t("Required field."):""},w=function(e,n){var i=y(e);if(i)return i;if(n){if(/\s/g.test(e))return t("Please do not use any spaces in this field.")}else if(e!==encodeURIComponent(e)||e.match(/[!'()*]/))return t("Please do not use any spaces or special characters in this field.");return""},b=function(t){var i=n.reduce(t,function(n,t){return n+e(t).val().length},0);return C>=i},x=function(t,i,r,o){b(r)?e(t.errorWrapper).removeClass(i.shown).addClass(i.hiding):(e(t.errorWrapper).addClass(i.shown).removeClass(i.hiding),e(t.errorMessage).html("<p>"+n.template(o,{limit:C})+"</p>"),e(t.save).addClass(i.disabled))},{toggleExpandCollapse:o,showLoadingIndicator:s,hideLoadingIndicator:a,confirmThenRunOperation:l,runOperationShowingMessage:c,disableElementWhileRunning:u,deleteNotificationHandler:v,setScrollTop:f,getScrollOffset:p,setScrollOffset:d,redirect:h,reload:m,hasChangedAttributes:g,validateRequiredField:y,validateURLItemEncoding:w,validateTotalKeyLength:b,checkTotalKeyLengthViolations:x}})}.call(this,define||RequireJS.define),define("js/views/baseview",["jquery","underscore","backbone","gettext","js/utils/handle_iframe_binding","js/utils/templates","common/js/components/utils/view_utils"],function(e,n,t,i,r,o,s){var a=t.View.extend({events:{"click .ui-toggle-expansion":"toggleExpandCollapse"},options:{collapsedClass:"collapsed"},constructor:function(){n.bindAll(this,"beforeRender","render","afterRender");var e=this;this.render=n.wrap(this.render,function(n,t){return e.beforeRender(),n(t),e.afterRender(),e}),t.View.prototype.constructor.apply(this,arguments)},beforeRender:function(){},render:function(){return this},afterRender:function(){r.iframeBinding(this)},toggleExpandCollapse:function(n){var t=e(n.target);n.stopPropagation(),n.preventDefault(),s.toggleExpandCollapse(t,this.options.collapsedClass)},loadTemplate:function(e){return o.loadTemplate(e)}});return a}),define("js/views/xblock_validation",["jquery","underscore","js/views/baseview","gettext"],function(e,n,t,i){var r=t.extend({initialize:function(e){t.prototype.initialize.call(this),this.template=this.loadTemplate("xblock-validation-messages"),this.root=e.root},render:function(){return this.$el.html(this.template({validation:this.model,additionalClasses:this.getAdditionalClasses(),getIcon:this.getIcon.bind(this),getDisplayName:this.getDisplayName.bind(this)})),this},getIcon:function(e){return e===this.model.ERROR?"fa-exclamation-circle":e===this.model.WARNING||e===this.model.NOT_CONFIGURED?"fa-exclamation-triangle":null},getDisplayName:function(e){return e===this.model.WARNING||e===this.model.NOT_CONFIGURED?i("Warning"):e===this.model.ERROR?i("Error"):null},getAdditionalClasses:function(){return this.root&&this.model.get("summary").type===this.model.NOT_CONFIGURED&&0===this.model.get("messages").length?"no-container-content":""}});return r}),define("js/models/xblock_validation",["backbone","gettext","underscore"],function(e,n,t){var i=e.Model.extend({defaults:{summary:{},messages:[],empty:!0,xblock_id:null},WARNING:"warning",ERROR:"error",NOT_CONFIGURED:"not-configured",parse:function(e){if(!e.empty){var i="summary"in e?e.summary:{},r="messages"in e?e.messages:[];i.text||(i.text=n("This component has validation issues.")),i.type||(i.type=this.WARNING,t.find(r,function(e){return e.type===this.ERROR?(i.type=this.ERROR,!0):!1},this)),e.summary=i,e.showSummaryOnly&&(r=[]),e.messages=r}return e}});return i}),define("js/factories/xblock_validation",["js/views/xblock_validation","js/models/xblock_validation"],function(e,n){return function(t,i,r,o){i&&!r&&(t.showSummaryOnly=!0);var s=new n(t,{parse:!0});s.get("empty")||new e({el:o,model:s,root:r}).render()}});