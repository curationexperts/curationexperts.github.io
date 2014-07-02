// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__10153__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__10152 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__10152,0,null);var body = cljs.core.nthnext.call(null,vec__10152,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__10153 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__10153__delegate.call(this,args);};
G__10153.cljs$lang$maxFixedArity = 0;
G__10153.cljs$lang$applyTo = (function (arglist__10154){
var args = cljs.core.seq(arglist__10154);
return G__10153__delegate(args);
});
G__10153.cljs$core$IFn$_invoke$arity$variadic = G__10153__delegate;
return G__10153;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4160__auto__ = (function iter__10159(s__10160){return (new cljs.core.LazySeq(null,(function (){var s__10160__$1 = s__10160;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10160__$1);if(temp__4092__auto__)
{var s__10160__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10160__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10160__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10162 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10161 = 0;while(true){
if((i__10161 < size__4159__auto__))
{var args = cljs.core._nth.call(null,c__4158__auto__,i__10161);cljs.core.chunk_append.call(null,b__10162,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__10163 = (i__10161 + 1);
i__10161 = G__10163;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10162),iter__10159.call(null,cljs.core.chunk_rest.call(null,s__10160__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10162),null);
}
} else
{var args = cljs.core.first.call(null,s__10160__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__10159.call(null,cljs.core.rest.call(null,s__10160__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4160__auto__ = (function iter__10168(s__10169){return (new cljs.core.LazySeq(null,(function (){var s__10169__$1 = s__10169;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10169__$1);if(temp__4092__auto__)
{var s__10169__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10169__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10169__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10171 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10170 = 0;while(true){
if((i__10170 < size__4159__auto__))
{var style = cljs.core._nth.call(null,c__4158__auto__,i__10170);cljs.core.chunk_append.call(null,b__10171,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__10172 = (i__10170 + 1);
i__10170 = G__10172;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10171),iter__10168.call(null,cljs.core.chunk_rest.call(null,s__10169__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10171),null);
}
} else
{var style = cljs.core.first.call(null,s__10169__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__10168.call(null,cljs.core.rest.call(null,s__10169__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__10173){
var styles = cljs.core.seq(arglist__10173);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to10174 = (function() { 
var link_to10174__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to10174 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to10174__delegate.call(this,url,content);};
link_to10174.cljs$lang$maxFixedArity = 1;
link_to10174.cljs$lang$applyTo = (function (arglist__10175){
var url = cljs.core.first(arglist__10175);
var content = cljs.core.rest(arglist__10175);
return link_to10174__delegate(url,content);
});
link_to10174.cljs$core$IFn$_invoke$arity$variadic = link_to10174__delegate;
return link_to10174;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to10174);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to10176 = (function() { 
var mail_to10176__delegate = function (e_mail,p__10177){var vec__10179 = p__10177;var content = cljs.core.nth.call(null,vec__10179,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3443__auto__ = content;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to10176 = function (e_mail,var_args){
var p__10177 = null;if (arguments.length > 1) {
  p__10177 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to10176__delegate.call(this,e_mail,p__10177);};
mail_to10176.cljs$lang$maxFixedArity = 1;
mail_to10176.cljs$lang$applyTo = (function (arglist__10180){
var e_mail = cljs.core.first(arglist__10180);
var p__10177 = cljs.core.rest(arglist__10180);
return mail_to10176__delegate(e_mail,p__10177);
});
mail_to10176.cljs$core$IFn$_invoke$arity$variadic = mail_to10176__delegate;
return mail_to10176;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to10176);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list10181 = (function unordered_list10181(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4160__auto__ = (function iter__10186(s__10187){return (new cljs.core.LazySeq(null,(function (){var s__10187__$1 = s__10187;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10187__$1);if(temp__4092__auto__)
{var s__10187__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10187__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10187__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10189 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10188 = 0;while(true){
if((i__10188 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__10188);cljs.core.chunk_append.call(null,b__10189,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__10190 = (i__10188 + 1);
i__10188 = G__10190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10189),iter__10186.call(null,cljs.core.chunk_rest.call(null,s__10187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10189),null);
}
} else
{var x = cljs.core.first.call(null,s__10187__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__10186.call(null,cljs.core.rest.call(null,s__10187__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list10181);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list10191 = (function ordered_list10191(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4160__auto__ = (function iter__10196(s__10197){return (new cljs.core.LazySeq(null,(function (){var s__10197__$1 = s__10197;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10197__$1);if(temp__4092__auto__)
{var s__10197__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10197__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10197__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10199 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10198 = 0;while(true){
if((i__10198 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__10198);cljs.core.chunk_append.call(null,b__10199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__10200 = (i__10198 + 1);
i__10198 = G__10200;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10199),iter__10196.call(null,cljs.core.chunk_rest.call(null,s__10197__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10199),null);
}
} else
{var x = cljs.core.first.call(null,s__10197__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__10196.call(null,cljs.core.rest.call(null,s__10197__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list10191);
/**
* Create an image element.
*/
sablono.core.image10201 = (function() {
var image10201 = null;
var image10201__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image10201__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image10201 = function(src,alt){
switch(arguments.length){
case 1:
return image10201__1.call(this,src);
case 2:
return image10201__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image10201.cljs$core$IFn$_invoke$arity$1 = image10201__1;
image10201.cljs$core$IFn$_invoke$arity$2 = image10201__2;
return image10201;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image10201);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__10202_SHARP_,p2__10203_SHARP_){return [cljs.core.str(p1__10202_SHARP_),cljs.core.str("["),cljs.core.str(p2__10203_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__10204_SHARP_,p2__10205_SHARP_){return [cljs.core.str(p1__10204_SHARP_),cljs.core.str("-"),cljs.core.str(p2__10205_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field10206 = (function() {
var color_field10206 = null;
var color_field10206__1 = (function (name__4882__auto__){return color_field10206.call(null,name__4882__auto__,null);
});
var color_field10206__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__4882__auto__,value__4883__auto__);
});
color_field10206 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return color_field10206__1.call(this,name__4882__auto__);
case 2:
return color_field10206__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field10206.cljs$core$IFn$_invoke$arity$1 = color_field10206__1;
color_field10206.cljs$core$IFn$_invoke$arity$2 = color_field10206__2;
return color_field10206;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field10206);
/**
* Creates a date input field.
*/
sablono.core.date_field10207 = (function() {
var date_field10207 = null;
var date_field10207__1 = (function (name__4882__auto__){return date_field10207.call(null,name__4882__auto__,null);
});
var date_field10207__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__4882__auto__,value__4883__auto__);
});
date_field10207 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return date_field10207__1.call(this,name__4882__auto__);
case 2:
return date_field10207__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field10207.cljs$core$IFn$_invoke$arity$1 = date_field10207__1;
date_field10207.cljs$core$IFn$_invoke$arity$2 = date_field10207__2;
return date_field10207;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field10207);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field10208 = (function() {
var datetime_field10208 = null;
var datetime_field10208__1 = (function (name__4882__auto__){return datetime_field10208.call(null,name__4882__auto__,null);
});
var datetime_field10208__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_field10208 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_field10208__1.call(this,name__4882__auto__);
case 2:
return datetime_field10208__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field10208.cljs$core$IFn$_invoke$arity$1 = datetime_field10208__1;
datetime_field10208.cljs$core$IFn$_invoke$arity$2 = datetime_field10208__2;
return datetime_field10208;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field10208);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field10209 = (function() {
var datetime_local_field10209 = null;
var datetime_local_field10209__1 = (function (name__4882__auto__){return datetime_local_field10209.call(null,name__4882__auto__,null);
});
var datetime_local_field10209__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__4882__auto__,value__4883__auto__);
});
datetime_local_field10209 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return datetime_local_field10209__1.call(this,name__4882__auto__);
case 2:
return datetime_local_field10209__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field10209.cljs$core$IFn$_invoke$arity$1 = datetime_local_field10209__1;
datetime_local_field10209.cljs$core$IFn$_invoke$arity$2 = datetime_local_field10209__2;
return datetime_local_field10209;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field10209);
/**
* Creates a email input field.
*/
sablono.core.email_field10210 = (function() {
var email_field10210 = null;
var email_field10210__1 = (function (name__4882__auto__){return email_field10210.call(null,name__4882__auto__,null);
});
var email_field10210__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__4882__auto__,value__4883__auto__);
});
email_field10210 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return email_field10210__1.call(this,name__4882__auto__);
case 2:
return email_field10210__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field10210.cljs$core$IFn$_invoke$arity$1 = email_field10210__1;
email_field10210.cljs$core$IFn$_invoke$arity$2 = email_field10210__2;
return email_field10210;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field10210);
/**
* Creates a file input field.
*/
sablono.core.file_field10211 = (function() {
var file_field10211 = null;
var file_field10211__1 = (function (name__4882__auto__){return file_field10211.call(null,name__4882__auto__,null);
});
var file_field10211__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__4882__auto__,value__4883__auto__);
});
file_field10211 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return file_field10211__1.call(this,name__4882__auto__);
case 2:
return file_field10211__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field10211.cljs$core$IFn$_invoke$arity$1 = file_field10211__1;
file_field10211.cljs$core$IFn$_invoke$arity$2 = file_field10211__2;
return file_field10211;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field10211);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field10212 = (function() {
var hidden_field10212 = null;
var hidden_field10212__1 = (function (name__4882__auto__){return hidden_field10212.call(null,name__4882__auto__,null);
});
var hidden_field10212__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__4882__auto__,value__4883__auto__);
});
hidden_field10212 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return hidden_field10212__1.call(this,name__4882__auto__);
case 2:
return hidden_field10212__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field10212.cljs$core$IFn$_invoke$arity$1 = hidden_field10212__1;
hidden_field10212.cljs$core$IFn$_invoke$arity$2 = hidden_field10212__2;
return hidden_field10212;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field10212);
/**
* Creates a month input field.
*/
sablono.core.month_field10213 = (function() {
var month_field10213 = null;
var month_field10213__1 = (function (name__4882__auto__){return month_field10213.call(null,name__4882__auto__,null);
});
var month_field10213__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__4882__auto__,value__4883__auto__);
});
month_field10213 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return month_field10213__1.call(this,name__4882__auto__);
case 2:
return month_field10213__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field10213.cljs$core$IFn$_invoke$arity$1 = month_field10213__1;
month_field10213.cljs$core$IFn$_invoke$arity$2 = month_field10213__2;
return month_field10213;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field10213);
/**
* Creates a number input field.
*/
sablono.core.number_field10214 = (function() {
var number_field10214 = null;
var number_field10214__1 = (function (name__4882__auto__){return number_field10214.call(null,name__4882__auto__,null);
});
var number_field10214__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__4882__auto__,value__4883__auto__);
});
number_field10214 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return number_field10214__1.call(this,name__4882__auto__);
case 2:
return number_field10214__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field10214.cljs$core$IFn$_invoke$arity$1 = number_field10214__1;
number_field10214.cljs$core$IFn$_invoke$arity$2 = number_field10214__2;
return number_field10214;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field10214);
/**
* Creates a password input field.
*/
sablono.core.password_field10215 = (function() {
var password_field10215 = null;
var password_field10215__1 = (function (name__4882__auto__){return password_field10215.call(null,name__4882__auto__,null);
});
var password_field10215__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__4882__auto__,value__4883__auto__);
});
password_field10215 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return password_field10215__1.call(this,name__4882__auto__);
case 2:
return password_field10215__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field10215.cljs$core$IFn$_invoke$arity$1 = password_field10215__1;
password_field10215.cljs$core$IFn$_invoke$arity$2 = password_field10215__2;
return password_field10215;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field10215);
/**
* Creates a range input field.
*/
sablono.core.range_field10216 = (function() {
var range_field10216 = null;
var range_field10216__1 = (function (name__4882__auto__){return range_field10216.call(null,name__4882__auto__,null);
});
var range_field10216__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__4882__auto__,value__4883__auto__);
});
range_field10216 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return range_field10216__1.call(this,name__4882__auto__);
case 2:
return range_field10216__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field10216.cljs$core$IFn$_invoke$arity$1 = range_field10216__1;
range_field10216.cljs$core$IFn$_invoke$arity$2 = range_field10216__2;
return range_field10216;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field10216);
/**
* Creates a search input field.
*/
sablono.core.search_field10217 = (function() {
var search_field10217 = null;
var search_field10217__1 = (function (name__4882__auto__){return search_field10217.call(null,name__4882__auto__,null);
});
var search_field10217__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__4882__auto__,value__4883__auto__);
});
search_field10217 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return search_field10217__1.call(this,name__4882__auto__);
case 2:
return search_field10217__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field10217.cljs$core$IFn$_invoke$arity$1 = search_field10217__1;
search_field10217.cljs$core$IFn$_invoke$arity$2 = search_field10217__2;
return search_field10217;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field10217);
/**
* Creates a tel input field.
*/
sablono.core.tel_field10218 = (function() {
var tel_field10218 = null;
var tel_field10218__1 = (function (name__4882__auto__){return tel_field10218.call(null,name__4882__auto__,null);
});
var tel_field10218__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__4882__auto__,value__4883__auto__);
});
tel_field10218 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return tel_field10218__1.call(this,name__4882__auto__);
case 2:
return tel_field10218__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field10218.cljs$core$IFn$_invoke$arity$1 = tel_field10218__1;
tel_field10218.cljs$core$IFn$_invoke$arity$2 = tel_field10218__2;
return tel_field10218;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field10218);
/**
* Creates a text input field.
*/
sablono.core.text_field10219 = (function() {
var text_field10219 = null;
var text_field10219__1 = (function (name__4882__auto__){return text_field10219.call(null,name__4882__auto__,null);
});
var text_field10219__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__4882__auto__,value__4883__auto__);
});
text_field10219 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return text_field10219__1.call(this,name__4882__auto__);
case 2:
return text_field10219__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field10219.cljs$core$IFn$_invoke$arity$1 = text_field10219__1;
text_field10219.cljs$core$IFn$_invoke$arity$2 = text_field10219__2;
return text_field10219;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field10219);
/**
* Creates a time input field.
*/
sablono.core.time_field10220 = (function() {
var time_field10220 = null;
var time_field10220__1 = (function (name__4882__auto__){return time_field10220.call(null,name__4882__auto__,null);
});
var time_field10220__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__4882__auto__,value__4883__auto__);
});
time_field10220 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return time_field10220__1.call(this,name__4882__auto__);
case 2:
return time_field10220__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field10220.cljs$core$IFn$_invoke$arity$1 = time_field10220__1;
time_field10220.cljs$core$IFn$_invoke$arity$2 = time_field10220__2;
return time_field10220;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field10220);
/**
* Creates a url input field.
*/
sablono.core.url_field10221 = (function() {
var url_field10221 = null;
var url_field10221__1 = (function (name__4882__auto__){return url_field10221.call(null,name__4882__auto__,null);
});
var url_field10221__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__4882__auto__,value__4883__auto__);
});
url_field10221 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return url_field10221__1.call(this,name__4882__auto__);
case 2:
return url_field10221__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field10221.cljs$core$IFn$_invoke$arity$1 = url_field10221__1;
url_field10221.cljs$core$IFn$_invoke$arity$2 = url_field10221__2;
return url_field10221;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field10221);
/**
* Creates a week input field.
*/
sablono.core.week_field10222 = (function() {
var week_field10222 = null;
var week_field10222__1 = (function (name__4882__auto__){return week_field10222.call(null,name__4882__auto__,null);
});
var week_field10222__2 = (function (name__4882__auto__,value__4883__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__4882__auto__,value__4883__auto__);
});
week_field10222 = function(name__4882__auto__,value__4883__auto__){
switch(arguments.length){
case 1:
return week_field10222__1.call(this,name__4882__auto__);
case 2:
return week_field10222__2.call(this,name__4882__auto__,value__4883__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field10222.cljs$core$IFn$_invoke$arity$1 = week_field10222__1;
week_field10222.cljs$core$IFn$_invoke$arity$2 = week_field10222__2;
return week_field10222;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field10222);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box10223 = (function() {
var check_box10223 = null;
var check_box10223__1 = (function (name){return check_box10223.call(null,name,null);
});
var check_box10223__2 = (function (name,checked_QMARK_){return check_box10223.call(null,name,checked_QMARK_,"true");
});
var check_box10223__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box10223 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box10223__1.call(this,name);
case 2:
return check_box10223__2.call(this,name,checked_QMARK_);
case 3:
return check_box10223__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box10223.cljs$core$IFn$_invoke$arity$1 = check_box10223__1;
check_box10223.cljs$core$IFn$_invoke$arity$2 = check_box10223__2;
check_box10223.cljs$core$IFn$_invoke$arity$3 = check_box10223__3;
return check_box10223;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box10223);
/**
* Creates a radio button.
*/
sablono.core.radio_button10224 = (function() {
var radio_button10224 = null;
var radio_button10224__1 = (function (group){return radio_button10224.call(null,group,null);
});
var radio_button10224__2 = (function (group,checked_QMARK_){return radio_button10224.call(null,group,checked_QMARK_,"true");
});
var radio_button10224__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button10224 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button10224__1.call(this,group);
case 2:
return radio_button10224__2.call(this,group,checked_QMARK_);
case 3:
return radio_button10224__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button10224.cljs$core$IFn$_invoke$arity$1 = radio_button10224__1;
radio_button10224.cljs$core$IFn$_invoke$arity$2 = radio_button10224__2;
radio_button10224.cljs$core$IFn$_invoke$arity$3 = radio_button10224__3;
return radio_button10224;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button10224);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options10225 = (function() {
var select_options10225 = null;
var select_options10225__1 = (function (coll){return select_options10225.call(null,coll,null);
});
var select_options10225__2 = (function (coll,selected){var iter__4160__auto__ = (function iter__10234(s__10235){return (new cljs.core.LazySeq(null,(function (){var s__10235__$1 = s__10235;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10235__$1);if(temp__4092__auto__)
{var s__10235__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10235__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10235__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10237 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10236 = 0;while(true){
if((i__10236 < size__4159__auto__))
{var x = cljs.core._nth.call(null,c__4158__auto__,i__10236);cljs.core.chunk_append.call(null,b__10237,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10240 = x;var text = cljs.core.nth.call(null,vec__10240,0,null);var val = cljs.core.nth.call(null,vec__10240,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__10240,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options10225.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__10242 = (i__10236 + 1);
i__10236 = G__10242;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10237),iter__10234.call(null,cljs.core.chunk_rest.call(null,s__10235__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10237),null);
}
} else
{var x = cljs.core.first.call(null,s__10235__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__10241 = x;var text = cljs.core.nth.call(null,vec__10241,0,null);var val = cljs.core.nth.call(null,vec__10241,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__10241,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options10225.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__10234.call(null,cljs.core.rest.call(null,s__10235__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,coll);
});
select_options10225 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options10225__1.call(this,coll);
case 2:
return select_options10225__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options10225.cljs$core$IFn$_invoke$arity$1 = select_options10225__1;
select_options10225.cljs$core$IFn$_invoke$arity$2 = select_options10225__2;
return select_options10225;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options10225);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down10243 = (function() {
var drop_down10243 = null;
var drop_down10243__2 = (function (name,options){return drop_down10243.call(null,name,options,null);
});
var drop_down10243__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down10243 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down10243__2.call(this,name,options);
case 3:
return drop_down10243__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down10243.cljs$core$IFn$_invoke$arity$2 = drop_down10243__2;
drop_down10243.cljs$core$IFn$_invoke$arity$3 = drop_down10243__3;
return drop_down10243;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down10243);
/**
* Creates a text area element.
*/
sablono.core.text_area10244 = (function() {
var text_area10244 = null;
var text_area10244__1 = (function (name){return text_area10244.call(null,name,null);
});
var text_area10244__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area10244 = function(name,value){
switch(arguments.length){
case 1:
return text_area10244__1.call(this,name);
case 2:
return text_area10244__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area10244.cljs$core$IFn$_invoke$arity$1 = text_area10244__1;
text_area10244.cljs$core$IFn$_invoke$arity$2 = text_area10244__2;
return text_area10244;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area10244);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label10245 = (function label10245(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label10245);
/**
* Creates a submit button.
*/
sablono.core.submit_button10246 = (function submit_button10246(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button10246);
/**
* Creates a form reset button.
*/
sablono.core.reset_button10247 = (function reset_button10247(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button10247);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to10248 = (function() { 
var form_to10248__delegate = function (p__10249,body){var vec__10251 = p__10249;var method = cljs.core.nth.call(null,vec__10251,0,null);var action = cljs.core.nth.call(null,vec__10251,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to10248 = function (p__10249,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to10248__delegate.call(this,p__10249,body);};
form_to10248.cljs$lang$maxFixedArity = 1;
form_to10248.cljs$lang$applyTo = (function (arglist__10252){
var p__10249 = cljs.core.first(arglist__10252);
var body = cljs.core.rest(arglist__10252);
return form_to10248__delegate(p__10249,body);
});
form_to10248.cljs$core$IFn$_invoke$arity$variadic = form_to10248__delegate;
return form_to10248;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to10248);

//# sourceMappingURL=core.js.map