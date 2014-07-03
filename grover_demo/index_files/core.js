// Compiled by ClojureScript 0.0-2173
goog.provide('grover.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.math.Matrix');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('om.dom');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
grover.core.identity_matrix = (function identity_matrix(){return (new goog.math.Matrix([[1,0,0],[0,1,0],[0,0,1]]));
});
grover.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"views","views",1126108640),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),grover.core.identity_matrix.call(null),new cljs.core.Keyword(null,"compositions","compositions",777068411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),grover.core.identity_matrix.call(null),new cljs.core.Keyword(null,"compositions","compositions",777068411),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"http://scale.ydc2.yale.edu/iiif/970ef29a-5bf6-46a3-9a21-f27a3148c02f/full/full/0/native.jpg"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(240,0)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"http://scale.ydc2.yale.edu/iiif/d5f0b90f-3f83-455d-99c2-7f5dea0c998c/full/full/0/native.jpg"], null)], null)], null)], null)], null)], null)], null)], null)], null));
grover.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__21121_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__21121_SHARP_);
}));
return out;
});
grover.core.image = (function image(attrs){return React.DOM.g({"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image "),cljs.core.str(cljs.core.reduce.call(null,(function (s,p__21124){var vec__21125 = p__21124;var k = cljs.core.nth.call(null,vec__21125,0,null);var v = cljs.core.nth.call(null,vec__21125,1,null);return [cljs.core.str(s),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(v),cljs.core.str("\"")].join('');
}),"",attrs)),cljs.core.str(" />")].join('')}});
});
grover.core.scale = (function scale(m,amount){return (new goog.math.Matrix([[amount,0,0],[0,amount,0],[0,0,1]])).multiply(m);
});
grover.core.translate = (function translate(m,p__21126){var vec__21128 = p__21126;var x = cljs.core.nth.call(null,vec__21128,0,null);var y = cljs.core.nth.call(null,vec__21128,1,null);return (new goog.math.Matrix([[1,0,x],[0,1,y],[0,0,1]])).multiply(m);
});
grover.core.draw_composition = (function draw_composition(p__21129){var map__21148 = p__21129;var map__21148__$1 = ((cljs.core.seq_QMARK_.call(null,map__21148))?cljs.core.apply.call(null,cljs.core.hash_map,map__21148):map__21148);var children = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"children","children",2673430897));var images = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"images","images",4123620842));var transform = cljs.core.get.call(null,map__21148__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var attrs21149 = (cljs.core.truth_(transform)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),transform], null):null);if(cljs.core.map_QMARK_.call(null,attrs21149))
{return React.DOM.g(sablono.interpreter.attributes.call(null,attrs21149),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__21150(s__21151){return (new cljs.core.LazySeq(null,(function (){var s__21151__$1 = s__21151;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21151__$1);if(temp__4092__auto__)
{var s__21151__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21151__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__21151__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__21153 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__21152 = 0;while(true){
if((i__21152 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__21152);cljs.core.chunk_append.call(null,b__21153,grover.core.image.call(null,image_data));
{
var G__21166 = (i__21152 + 1);
i__21152 = G__21166;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21153),iter__21150.call(null,cljs.core.chunk_rest.call(null,s__21151__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21153),null);
}
} else
{var image_data = cljs.core.first.call(null,s__21151__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__21150.call(null,cljs.core.rest.call(null,s__21151__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__21154(s__21155){return (new cljs.core.LazySeq(null,(function (){var s__21155__$1 = s__21155;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21155__$1);if(temp__4092__auto__)
{var s__21155__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21155__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__21155__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__21157 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__21156 = 0;while(true){
if((i__21156 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__21156);cljs.core.chunk_append.call(null,b__21157,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__21167 = (i__21156 + 1);
i__21156 = G__21167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21157),iter__21154.call(null,cljs.core.chunk_rest.call(null,s__21155__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21157),null);
}
} else
{var child = cljs.core.first.call(null,s__21155__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__21154.call(null,cljs.core.rest.call(null,s__21155__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,children);
})()));
} else
{return React.DOM.g(null,sablono.interpreter.interpret.call(null,attrs21149),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__21158(s__21159){return (new cljs.core.LazySeq(null,(function (){var s__21159__$1 = s__21159;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21159__$1);if(temp__4092__auto__)
{var s__21159__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21159__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__21159__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__21161 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__21160 = 0;while(true){
if((i__21160 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__21160);cljs.core.chunk_append.call(null,b__21161,grover.core.image.call(null,image_data));
{
var G__21168 = (i__21160 + 1);
i__21160 = G__21168;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21161),iter__21158.call(null,cljs.core.chunk_rest.call(null,s__21159__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21161),null);
}
} else
{var image_data = cljs.core.first.call(null,s__21159__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__21158.call(null,cljs.core.rest.call(null,s__21159__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__21162(s__21163){return (new cljs.core.LazySeq(null,(function (){var s__21163__$1 = s__21163;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21163__$1);if(temp__4092__auto__)
{var s__21163__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21163__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__21163__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__21165 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__21164 = 0;while(true){
if((i__21164 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__21164);cljs.core.chunk_append.call(null,b__21165,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__21169 = (i__21164 + 1);
i__21164 = G__21169;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21165),iter__21162.call(null,cljs.core.chunk_rest.call(null,s__21163__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21165),null);
}
} else
{var child = cljs.core.first.call(null,s__21163__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__21162.call(null,cljs.core.rest.call(null,s__21163__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,children);
})()));
}
});
grover.core.view_pane_view = (function view_pane_view(p__21172,owner){var map__21302 = p__21172;var map__21302__$1 = ((cljs.core.seq_QMARK_.call(null,map__21302))?cljs.core.apply.call(null,cljs.core.hash_map,map__21302):map__21302);var app = map__21302__$1;var svg_view_transformation = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626));var view_transformation = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var composition = cljs.core.get.call(null,map__21302__$1,new cljs.core.Keyword(null,"composition","composition",4469947676));if(typeof grover.core.t21303 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t21303 = (function (composition,view_transformation,svg_view_transformation,app,map__21302,owner,p__21172,view_pane_view,meta21304){
this.composition = composition;
this.view_transformation = view_transformation;
this.svg_view_transformation = svg_view_transformation;
this.app = app;
this.map__21302 = map__21302;
this.owner = owner;
this.p__21172 = p__21172;
this.view_pane_view = view_pane_view;
this.meta21304 = meta21304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t21303.cljs$lang$type = true;
grover.core.t21303.cljs$lang$ctorStr = "grover.core/t21303";
grover.core.t21303.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t21303");
});
grover.core.t21303.prototype.om$core$IRenderState$ = true;
grover.core.t21303.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__21306){var self__ = this;
var map__21307 = p__21306;var map__21307__$1 = ((cljs.core.seq_QMARK_.call(null,map__21307))?cljs.core.apply.call(null,cljs.core.hash_map,map__21307):map__21307);var state = map__21307__$1;var mouse_wheel_chan = cljs.core.get.call(null,map__21307__$1,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var this$__$1 = this;return React.DOM.span(null,React.DOM.svg({"ref": new cljs.core.Keyword(null,"viewport","viewport",2210589720), "width": 600, "height": 400, "style": {"border": "solid black 1px"}, "onWheel": (function (p1__21171_SHARP_){p1__21171_SHARP_.preventDefault();
return cljs.core.async.put_BANG_.call(null,mouse_wheel_chan,p1__21171_SHARP_.deltaY);
})},React.DOM.g({"ref": new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987), "transform": [cljs.core.str("matrix("),cljs.core.str(clojure.string.join.call(null,",",self__.svg_view_transformation)),cljs.core.str(")")].join('')},sablono.interpreter.interpret.call(null,grover.core.draw_composition.call(null,self__.composition)))));
});
grover.core.t21303.prototype.om$core$IDidMount$ = true;
grover.core.t21303.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var mouse_pos_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY,e], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),goog.events.EventType.MOUSEMOVE)], null));var relative_mouse_pos_chan = cljs.core.async.map.call(null,((function (mouse_pos_chan){
return (function (p__21308){var vec__21309 = p__21308;var x = cljs.core.nth.call(null,vec__21309,0,null);var y = cljs.core.nth.call(null,vec__21309,1,null);var viewport_pos = goog.style.getClientPosition(om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - viewport_pos.x),(y - viewport_pos.y)], null);
});})(mouse_pos_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_pos_chan], null));var mouse_wheel_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var mouse_down_chan = grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),"mousedown");var mouse_up_chan = grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),"mouseup");var c__6826__auto___21431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_21350){var state_val_21351 = (state_21350[1]);if((state_val_21351 === 1))
{var inst_21310 = [0,0];var inst_21311 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21310,null));var inst_21312 = inst_21311;var state_21350__$1 = (function (){var statearr_21352 = state_21350;(statearr_21352[7] = inst_21312);
return statearr_21352;
})();var statearr_21353_21432 = state_21350__$1;(statearr_21353_21432[2] = null);
(statearr_21353_21432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 2))
{var inst_21315 = [mouse_pos_chan,mouse_down_chan];var inst_21316 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21315,null));var state_21350__$1 = state_21350;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21350__$1,4,inst_21316);
} else
{if((state_val_21351 === 3))
{var inst_21348 = (state_21350[2]);var state_21350__$1 = state_21350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21350__$1,inst_21348);
} else
{if((state_val_21351 === 4))
{var inst_21318 = (state_21350[8]);var inst_21318__$1 = (state_21350[2]);var inst_21319 = cljs.core.nth.call(null,inst_21318__$1,0,null);var inst_21320 = cljs.core.nth.call(null,inst_21318__$1,1,null);var inst_21321 = cljs.core._EQ_.call(null,inst_21320,mouse_pos_chan);var state_21350__$1 = (function (){var statearr_21354 = state_21350;(statearr_21354[9] = inst_21319);
(statearr_21354[8] = inst_21318__$1);
return statearr_21354;
})();if(inst_21321)
{var statearr_21355_21433 = state_21350__$1;(statearr_21355_21433[1] = 5);
} else
{var statearr_21356_21434 = state_21350__$1;(statearr_21356_21434[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 5))
{var inst_21319 = (state_21350[9]);var inst_21312 = inst_21319;var state_21350__$1 = (function (){var statearr_21357 = state_21350;(statearr_21357[7] = inst_21312);
return statearr_21357;
})();var statearr_21358_21435 = state_21350__$1;(statearr_21358_21435[2] = null);
(statearr_21358_21435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 6))
{var inst_21312 = (state_21350[7]);var inst_21325 = inst_21312;var state_21350__$1 = (function (){var statearr_21359 = state_21350;(statearr_21359[10] = inst_21325);
return statearr_21359;
})();var statearr_21360_21436 = state_21350__$1;(statearr_21360_21436[2] = null);
(statearr_21360_21436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 7))
{var inst_21346 = (state_21350[2]);var state_21350__$1 = state_21350;var statearr_21362_21437 = state_21350__$1;(statearr_21362_21437[2] = inst_21346);
(statearr_21362_21437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 8))
{var inst_21328 = [mouse_pos_chan,mouse_up_chan];var inst_21329 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21328,null));var state_21350__$1 = state_21350;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21350__$1,10,inst_21329);
} else
{if((state_val_21351 === 9))
{var inst_21312 = (state_21350[7]);var inst_21343 = (state_21350[2]);var tmp21361 = inst_21312;var inst_21312__$1 = tmp21361;var state_21350__$1 = (function (){var statearr_21363 = state_21350;(statearr_21363[11] = inst_21343);
(statearr_21363[7] = inst_21312__$1);
return statearr_21363;
})();var statearr_21364_21438 = state_21350__$1;(statearr_21364_21438[2] = null);
(statearr_21364_21438[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 10))
{var inst_21333 = (state_21350[12]);var inst_21331 = (state_21350[13]);var inst_21331__$1 = (state_21350[2]);var inst_21332 = cljs.core.nth.call(null,inst_21331__$1,0,null);var inst_21333__$1 = cljs.core.nth.call(null,inst_21331__$1,1,null);var inst_21334 = cljs.core._EQ_.call(null,inst_21333__$1,mouse_pos_chan);var state_21350__$1 = (function (){var statearr_21365 = state_21350;(statearr_21365[12] = inst_21333__$1);
(statearr_21365[14] = inst_21332);
(statearr_21365[13] = inst_21331__$1);
return statearr_21365;
})();if(inst_21334)
{var statearr_21366_21439 = state_21350__$1;(statearr_21366_21439[1] = 11);
} else
{var statearr_21367_21440 = state_21350__$1;(statearr_21367_21440[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 11))
{var inst_21318 = (state_21350[8]);var inst_21333 = (state_21350[12]);var inst_21332 = (state_21350[14]);var inst_21331 = (state_21350[13]);var inst_21325 = (state_21350[10]);var inst_21312 = (state_21350[7]);var inst_21336 = (function (){var vec__21327 = inst_21331;var last_mouse_pos = inst_21325;var ch = inst_21333;var value = inst_21332;var vec__21314 = inst_21318;var mouse_pos = inst_21312;return ((function (vec__21327,last_mouse_pos,ch,value,vec__21314,mouse_pos,inst_21318,inst_21333,inst_21332,inst_21331,inst_21325,inst_21312,state_val_21351){
return (function (p1__21170_SHARP_){return grover.core.translate.call(null,p1__21170_SHARP_,cljs.core.map.call(null,cljs.core._,value,last_mouse_pos));
});
;})(vec__21327,last_mouse_pos,ch,value,vec__21314,mouse_pos,inst_21318,inst_21333,inst_21332,inst_21331,inst_21325,inst_21312,state_val_21351))
})();var inst_21337 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_21336);var inst_21325__$1 = inst_21332;var state_21350__$1 = (function (){var statearr_21368 = state_21350;(statearr_21368[15] = inst_21337);
(statearr_21368[10] = inst_21325__$1);
return statearr_21368;
})();var statearr_21369_21441 = state_21350__$1;(statearr_21369_21441[2] = null);
(statearr_21369_21441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 12))
{var state_21350__$1 = state_21350;var statearr_21370_21442 = state_21350__$1;(statearr_21370_21442[2] = null);
(statearr_21370_21442[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21351 === 13))
{var inst_21341 = (state_21350[2]);var state_21350__$1 = state_21350;var statearr_21371_21443 = state_21350__$1;(statearr_21371_21443[2] = inst_21341);
(statearr_21371_21443[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_21375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21375[0] = state_machine__6812__auto__);
(statearr_21375[1] = 1);
return statearr_21375;
});
var state_machine__6812__auto____1 = (function (state_21350){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_21350);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e21376){if((e21376 instanceof Object))
{var ex__6815__auto__ = e21376;var statearr_21377_21444 = state_21350;(statearr_21377_21444[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21445 = state_21350;
state_21350 = G__21445;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_21350){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_21350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_21378 = f__6827__auto__.call(null);(statearr_21378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___21431);
return statearr_21378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_21406){var state_val_21407 = (state_21406[1]);if((state_val_21407 === 1))
{var inst_21379 = [0,0];var inst_21380 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21379,null));var inst_21381 = inst_21380;var state_21406__$1 = (function (){var statearr_21408 = state_21406;(statearr_21408[7] = inst_21381);
return statearr_21408;
})();var statearr_21409_21446 = state_21406__$1;(statearr_21409_21446[2] = null);
(statearr_21409_21446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 2))
{var inst_21384 = [relative_mouse_pos_chan,mouse_wheel_chan];var inst_21385 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21384,null));var state_21406__$1 = state_21406;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21406__$1,4,inst_21385);
} else
{if((state_val_21407 === 3))
{var inst_21404 = (state_21406[2]);var state_21406__$1 = state_21406;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21406__$1,inst_21404);
} else
{if((state_val_21407 === 4))
{var inst_21387 = (state_21406[8]);var inst_21389 = (state_21406[9]);var inst_21387__$1 = (state_21406[2]);var inst_21388 = cljs.core.nth.call(null,inst_21387__$1,0,null);var inst_21389__$1 = cljs.core.nth.call(null,inst_21387__$1,1,null);var inst_21390 = cljs.core._EQ_.call(null,inst_21389__$1,mouse_wheel_chan);var state_21406__$1 = (function (){var statearr_21411 = state_21406;(statearr_21411[10] = inst_21388);
(statearr_21411[8] = inst_21387__$1);
(statearr_21411[9] = inst_21389__$1);
return statearr_21411;
})();if(inst_21390)
{var statearr_21412_21447 = state_21406__$1;(statearr_21412_21447[1] = 5);
} else
{var statearr_21413_21448 = state_21406__$1;(statearr_21413_21448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 5))
{var inst_21388 = (state_21406[10]);var inst_21387 = (state_21406[8]);var inst_21381 = (state_21406[7]);var inst_21389 = (state_21406[9]);var inst_21392 = (function (){var ch = inst_21389;var value = inst_21388;var vec__21383 = inst_21387;var mouse_pos = inst_21381;return ((function (ch,value,vec__21383,mouse_pos,inst_21388,inst_21387,inst_21381,inst_21389,state_val_21407){
return (function (m){var vec__21414 = mouse_pos;var mouse_x = cljs.core.nth.call(null,vec__21414,0,null);var mouse_y = cljs.core.nth.call(null,vec__21414,1,null);return grover.core.translate.call(null,grover.core.scale.call(null,grover.core.translate.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mouse_x),(- mouse_y)], null)),(1 - (value / 100))),mouse_pos);
});
;})(ch,value,vec__21383,mouse_pos,inst_21388,inst_21387,inst_21381,inst_21389,state_val_21407))
})();var inst_21393 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_21392);var tmp21410 = inst_21381;var inst_21381__$1 = tmp21410;var state_21406__$1 = (function (){var statearr_21415 = state_21406;(statearr_21415[7] = inst_21381__$1);
(statearr_21415[11] = inst_21393);
return statearr_21415;
})();var statearr_21416_21449 = state_21406__$1;(statearr_21416_21449[2] = null);
(statearr_21416_21449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 6))
{var state_21406__$1 = state_21406;if(new cljs.core.Keyword(null,"default","default",2558708147))
{var statearr_21417_21450 = state_21406__$1;(statearr_21417_21450[1] = 8);
} else
{var statearr_21418_21451 = state_21406__$1;(statearr_21418_21451[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 7))
{var inst_21402 = (state_21406[2]);var state_21406__$1 = state_21406;var statearr_21419_21452 = state_21406__$1;(statearr_21419_21452[2] = inst_21402);
(statearr_21419_21452[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 8))
{var inst_21388 = (state_21406[10]);var inst_21381 = inst_21388;var state_21406__$1 = (function (){var statearr_21420 = state_21406;(statearr_21420[7] = inst_21381);
return statearr_21420;
})();var statearr_21421_21453 = state_21406__$1;(statearr_21421_21453[2] = null);
(statearr_21421_21453[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 9))
{var state_21406__$1 = state_21406;var statearr_21422_21454 = state_21406__$1;(statearr_21422_21454[2] = null);
(statearr_21422_21454[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21407 === 10))
{var inst_21400 = (state_21406[2]);var state_21406__$1 = state_21406;var statearr_21423_21455 = state_21406__$1;(statearr_21423_21455[2] = inst_21400);
(statearr_21423_21455[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_21427 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21427[0] = state_machine__6812__auto__);
(statearr_21427[1] = 1);
return statearr_21427;
});
var state_machine__6812__auto____1 = (function (state_21406){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_21406);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e21428){if((e21428 instanceof Object))
{var ex__6815__auto__ = e21428;var statearr_21429_21456 = state_21406;(statearr_21429_21456[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21457 = state_21406;
state_21406 = G__21457;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_21406){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_21406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_21430 = f__6827__auto__.call(null);(statearr_21430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_21430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
grover.core.t21303.prototype.om$core$IInitState$ = true;
grover.core.t21303.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182),cljs.core.async.chan.call(null)], null);
});
grover.core.t21303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21305){var self__ = this;
var _21305__$1 = this;return self__.meta21304;
});
grover.core.t21303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21305,meta21304__$1){var self__ = this;
var _21305__$1 = this;return (new grover.core.t21303(self__.composition,self__.view_transformation,self__.svg_view_transformation,self__.app,self__.map__21302,self__.owner,self__.p__21172,self__.view_pane_view,meta21304__$1));
});
grover.core.__GT_t21303 = (function __GT_t21303(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__21302__$2,owner__$1,p__21172__$1,view_pane_view__$1,meta21304){return (new grover.core.t21303(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__21302__$2,owner__$1,p__21172__$1,view_pane_view__$1,meta21304));
});
}
return (new grover.core.t21303(composition,view_transformation,svg_view_transformation,app,map__21302__$1,owner,p__21172,view_pane_view,null));
});
grover.core.app_view = (function app_view(p__21458,owner){var map__21475 = p__21458;var map__21475__$1 = ((cljs.core.seq_QMARK_.call(null,map__21475))?cljs.core.apply.call(null,cljs.core.hash_map,map__21475):map__21475);var app = map__21475__$1;var view_transformation = cljs.core.get.call(null,map__21475__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var views = cljs.core.get.call(null,map__21475__$1,new cljs.core.Keyword(null,"views","views",1126108640));if(typeof grover.core.t21476 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t21476 = (function (views,view_transformation,app,map__21475,owner,p__21458,app_view,meta21477){
this.views = views;
this.view_transformation = view_transformation;
this.app = app;
this.map__21475 = map__21475;
this.owner = owner;
this.p__21458 = p__21458;
this.app_view = app_view;
this.meta21477 = meta21477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t21476.cljs$lang$type = true;
grover.core.t21476.cljs$lang$ctorStr = "grover.core/t21476";
grover.core.t21476.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t21476");
});
grover.core.t21476.prototype.om$core$IRenderState$ = true;
grover.core.t21476.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Grover"),React.DOM.ul(null,React.DOM.li(null,"About 150 lines of ClojureScript"),React.DOM.li(null,"No tests yet"),React.DOM.li(null,"Loading 'zoomed in' tiles doesn't work yet"),React.DOM.li(null,"You can drag with the mouse"),React.DOM.li(null,"Mousewheel controls zoom"),React.DOM.li(null,"Same zoom transformation can be used in mutiple viewports"),React.DOM.li(null,"Try zooming in at one mouse location and zoom out at another - the image doesn't jump around"),React.DOM.li(null,"Note that the fox (or red panda?) has two different images under its paw"),React.DOM.li(null,"It currently works well only in Chrome and Safari (IE is untested)")),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__21483(s__21484){return (new cljs.core.LazySeq(null,(function (){var s__21484__$1 = s__21484;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21484__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var map__21490 = cljs.core.first.call(null,xs__4579__auto__);var map__21490__$1 = ((cljs.core.seq_QMARK_.call(null,map__21490))?cljs.core.apply.call(null,cljs.core.hash_map,map__21490):map__21490);var view = map__21490__$1;var compositions = cljs.core.get.call(null,map__21490__$1,new cljs.core.Keyword(null,"compositions","compositions",777068411));var view_transformation__$2 = cljs.core.get.call(null,map__21490__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var iterys__4156__auto__ = ((function (s__21484__$1,map__21490,map__21490__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function iter__21485(s__21486){return (new cljs.core.LazySeq(null,((function (s__21484__$1,map__21490,map__21490__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__21486__$1 = s__21486;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__21486__$1);if(temp__4092__auto____$1)
{var s__21486__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__21486__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__21486__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__21488 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__21487 = 0;while(true){
if((i__21487 < size__4159__auto__))
{var composition = cljs.core._nth.call(null,c__4158__auto__,i__21487);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);cljs.core.chunk_append.call(null,b__21488,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform));
{
var G__21491 = (i__21487 + 1);
i__21487 = G__21491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21488),iter__21485.call(null,cljs.core.chunk_rest.call(null,s__21486__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21488),null);
}
} else
{var composition = cljs.core.first.call(null,s__21486__$2);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);return cljs.core.cons.call(null,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform),iter__21485.call(null,cljs.core.rest.call(null,s__21486__$2)));
}
} else
{return null;
}
break;
}
});})(s__21484__$1,map__21490,map__21490__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__21484__$1,map__21490,map__21490__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,compositions));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__21483.call(null,cljs.core.rest.call(null,s__21484__$1)));
} else
{{
var G__21492 = cljs.core.rest.call(null,s__21484__$1);
s__21484__$1 = G__21492;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,self__.views);
})())));
});
grover.core.t21476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21478){var self__ = this;
var _21478__$1 = this;return self__.meta21477;
});
grover.core.t21476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21478,meta21477__$1){var self__ = this;
var _21478__$1 = this;return (new grover.core.t21476(self__.views,self__.view_transformation,self__.app,self__.map__21475,self__.owner,self__.p__21458,self__.app_view,meta21477__$1));
});
grover.core.__GT_t21476 = (function __GT_t21476(views__$1,view_transformation__$1,app__$1,map__21475__$2,owner__$1,p__21458__$1,app_view__$1,meta21477){return (new grover.core.t21476(views__$1,view_transformation__$1,app__$1,map__21475__$2,owner__$1,p__21458__$1,app_view__$1,meta21477));
});
}
return (new grover.core.t21476(views,view_transformation,app,map__21475__$1,owner,p__21458,app_view,null));
});
om.core.root.call(null,grover.core.app_view,grover.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map