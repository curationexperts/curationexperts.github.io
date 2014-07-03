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
grover.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"views","views",1126108640),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),grover.core.identity_matrix.call(null),new cljs.core.Keyword(null,"compositions","compositions",777068411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null)], null)], null)], null)], null)], null)], null)], null));
grover.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__18145_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__18145_SHARP_);
}));
return out;
});
grover.core.image = (function image(attrs){return React.DOM.g({"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image "),cljs.core.str(cljs.core.reduce.call(null,(function (s,p__18148){var vec__18149 = p__18148;var k = cljs.core.nth.call(null,vec__18149,0,null);var v = cljs.core.nth.call(null,vec__18149,1,null);return [cljs.core.str(s),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(v),cljs.core.str("\"")].join('');
}),"",attrs)),cljs.core.str(" />")].join('')}});
});
grover.core.scale = (function scale(m,amount){return (new goog.math.Matrix([[amount,0,0],[0,amount,0],[0,0,1]])).multiply(m);
});
grover.core.translate = (function translate(m,p__18150){var vec__18152 = p__18150;var x = cljs.core.nth.call(null,vec__18152,0,null);var y = cljs.core.nth.call(null,vec__18152,1,null);return (new goog.math.Matrix([[1,0,x],[0,1,y],[0,0,1]])).multiply(m);
});
grover.core.draw_composition = (function draw_composition(p__18153){var map__18172 = p__18153;var map__18172__$1 = ((cljs.core.seq_QMARK_.call(null,map__18172))?cljs.core.apply.call(null,cljs.core.hash_map,map__18172):map__18172);var children = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"children","children",2673430897));var images = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"images","images",4123620842));var transform = cljs.core.get.call(null,map__18172__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var attrs18173 = (cljs.core.truth_(transform)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),transform], null):null);if(cljs.core.map_QMARK_.call(null,attrs18173))
{return React.DOM.g(sablono.interpreter.attributes.call(null,attrs18173),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__18174(s__18175){return (new cljs.core.LazySeq(null,(function (){var s__18175__$1 = s__18175;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18175__$1);if(temp__4092__auto__)
{var s__18175__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18175__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18175__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18177 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18176 = 0;while(true){
if((i__18176 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__18176);cljs.core.chunk_append.call(null,b__18177,grover.core.image.call(null,image_data));
{
var G__18190 = (i__18176 + 1);
i__18176 = G__18190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18177),iter__18174.call(null,cljs.core.chunk_rest.call(null,s__18175__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18177),null);
}
} else
{var image_data = cljs.core.first.call(null,s__18175__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__18174.call(null,cljs.core.rest.call(null,s__18175__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__18178(s__18179){return (new cljs.core.LazySeq(null,(function (){var s__18179__$1 = s__18179;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18179__$1);if(temp__4092__auto__)
{var s__18179__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18179__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18179__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18181 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18180 = 0;while(true){
if((i__18180 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__18180);cljs.core.chunk_append.call(null,b__18181,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__18191 = (i__18180 + 1);
i__18180 = G__18191;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18181),iter__18178.call(null,cljs.core.chunk_rest.call(null,s__18179__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18181),null);
}
} else
{var child = cljs.core.first.call(null,s__18179__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__18178.call(null,cljs.core.rest.call(null,s__18179__$2)));
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
{return React.DOM.g(null,sablono.interpreter.interpret.call(null,attrs18173),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__18182(s__18183){return (new cljs.core.LazySeq(null,(function (){var s__18183__$1 = s__18183;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18183__$1);if(temp__4092__auto__)
{var s__18183__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18183__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18183__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18185 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18184 = 0;while(true){
if((i__18184 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__18184);cljs.core.chunk_append.call(null,b__18185,grover.core.image.call(null,image_data));
{
var G__18192 = (i__18184 + 1);
i__18184 = G__18192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18185),iter__18182.call(null,cljs.core.chunk_rest.call(null,s__18183__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18185),null);
}
} else
{var image_data = cljs.core.first.call(null,s__18183__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__18182.call(null,cljs.core.rest.call(null,s__18183__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__18186(s__18187){return (new cljs.core.LazySeq(null,(function (){var s__18187__$1 = s__18187;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18187__$1);if(temp__4092__auto__)
{var s__18187__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18187__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18187__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18189 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18188 = 0;while(true){
if((i__18188 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__18188);cljs.core.chunk_append.call(null,b__18189,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__18193 = (i__18188 + 1);
i__18188 = G__18193;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18189),iter__18186.call(null,cljs.core.chunk_rest.call(null,s__18187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18189),null);
}
} else
{var child = cljs.core.first.call(null,s__18187__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__18186.call(null,cljs.core.rest.call(null,s__18187__$2)));
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
grover.core.view_pane_view = (function view_pane_view(p__18196,owner){var map__18326 = p__18196;var map__18326__$1 = ((cljs.core.seq_QMARK_.call(null,map__18326))?cljs.core.apply.call(null,cljs.core.hash_map,map__18326):map__18326);var app = map__18326__$1;var svg_view_transformation = cljs.core.get.call(null,map__18326__$1,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626));var view_transformation = cljs.core.get.call(null,map__18326__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var composition = cljs.core.get.call(null,map__18326__$1,new cljs.core.Keyword(null,"composition","composition",4469947676));if(typeof grover.core.t18327 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t18327 = (function (composition,view_transformation,svg_view_transformation,app,map__18326,owner,p__18196,view_pane_view,meta18328){
this.composition = composition;
this.view_transformation = view_transformation;
this.svg_view_transformation = svg_view_transformation;
this.app = app;
this.map__18326 = map__18326;
this.owner = owner;
this.p__18196 = p__18196;
this.view_pane_view = view_pane_view;
this.meta18328 = meta18328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t18327.cljs$lang$type = true;
grover.core.t18327.cljs$lang$ctorStr = "grover.core/t18327";
grover.core.t18327.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t18327");
});
grover.core.t18327.prototype.om$core$IRenderState$ = true;
grover.core.t18327.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__18330){var self__ = this;
var map__18331 = p__18330;var map__18331__$1 = ((cljs.core.seq_QMARK_.call(null,map__18331))?cljs.core.apply.call(null,cljs.core.hash_map,map__18331):map__18331);var state = map__18331__$1;var mouse_wheel_chan = cljs.core.get.call(null,map__18331__$1,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var this$__$1 = this;return React.DOM.span(null,React.DOM.svg({"ref": new cljs.core.Keyword(null,"viewport","viewport",2210589720), "width": 600, "height": 400, "style": {"border": "solid black 1px"}, "onWheel": (function (p1__18195_SHARP_){p1__18195_SHARP_.preventDefault();
return cljs.core.async.put_BANG_.call(null,mouse_wheel_chan,p1__18195_SHARP_.deltaY);
})},React.DOM.g({"ref": new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987), "transform": [cljs.core.str("matrix("),cljs.core.str(clojure.string.join.call(null,",",self__.svg_view_transformation)),cljs.core.str(")")].join('')},sablono.interpreter.interpret.call(null,grover.core.draw_composition.call(null,self__.composition)))));
});
grover.core.t18327.prototype.om$core$IDidMount$ = true;
grover.core.t18327.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var mouse_pos_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY,e], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),goog.events.EventType.MOUSEMOVE)], null));var relative_mouse_pos_chan = cljs.core.async.map.call(null,((function (mouse_pos_chan){
return (function (p__18332){var vec__18333 = p__18332;var x = cljs.core.nth.call(null,vec__18333,0,null);var y = cljs.core.nth.call(null,vec__18333,1,null);var viewport_pos = goog.style.getClientPosition(om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - viewport_pos.x),(y - viewport_pos.y)], null);
});})(mouse_pos_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_pos_chan], null));var mouse_wheel_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var mouse_down_chan = grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),"mousedown");var mouse_up_chan = grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),"mouseup");var c__6826__auto___18455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_18374){var state_val_18375 = (state_18374[1]);if((state_val_18375 === 1))
{var inst_18334 = [0,0];var inst_18335 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18334,null));var inst_18336 = inst_18335;var state_18374__$1 = (function (){var statearr_18376 = state_18374;(statearr_18376[7] = inst_18336);
return statearr_18376;
})();var statearr_18377_18456 = state_18374__$1;(statearr_18377_18456[2] = null);
(statearr_18377_18456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 2))
{var inst_18339 = [mouse_pos_chan,mouse_down_chan];var inst_18340 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18339,null));var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18374__$1,4,inst_18340);
} else
{if((state_val_18375 === 3))
{var inst_18372 = (state_18374[2]);var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18374__$1,inst_18372);
} else
{if((state_val_18375 === 4))
{var inst_18342 = (state_18374[8]);var inst_18342__$1 = (state_18374[2]);var inst_18343 = cljs.core.nth.call(null,inst_18342__$1,0,null);var inst_18344 = cljs.core.nth.call(null,inst_18342__$1,1,null);var inst_18345 = cljs.core._EQ_.call(null,inst_18344,mouse_pos_chan);var state_18374__$1 = (function (){var statearr_18378 = state_18374;(statearr_18378[8] = inst_18342__$1);
(statearr_18378[9] = inst_18343);
return statearr_18378;
})();if(inst_18345)
{var statearr_18379_18457 = state_18374__$1;(statearr_18379_18457[1] = 5);
} else
{var statearr_18380_18458 = state_18374__$1;(statearr_18380_18458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 5))
{var inst_18343 = (state_18374[9]);var inst_18336 = inst_18343;var state_18374__$1 = (function (){var statearr_18381 = state_18374;(statearr_18381[7] = inst_18336);
return statearr_18381;
})();var statearr_18382_18459 = state_18374__$1;(statearr_18382_18459[2] = null);
(statearr_18382_18459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 6))
{var inst_18336 = (state_18374[7]);var inst_18349 = inst_18336;var state_18374__$1 = (function (){var statearr_18383 = state_18374;(statearr_18383[10] = inst_18349);
return statearr_18383;
})();var statearr_18384_18460 = state_18374__$1;(statearr_18384_18460[2] = null);
(statearr_18384_18460[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 7))
{var inst_18370 = (state_18374[2]);var state_18374__$1 = state_18374;var statearr_18386_18461 = state_18374__$1;(statearr_18386_18461[2] = inst_18370);
(statearr_18386_18461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 8))
{var inst_18352 = [mouse_pos_chan,mouse_up_chan];var inst_18353 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18352,null));var state_18374__$1 = state_18374;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18374__$1,10,inst_18353);
} else
{if((state_val_18375 === 9))
{var inst_18336 = (state_18374[7]);var inst_18367 = (state_18374[2]);var tmp18385 = inst_18336;var inst_18336__$1 = tmp18385;var state_18374__$1 = (function (){var statearr_18387 = state_18374;(statearr_18387[11] = inst_18367);
(statearr_18387[7] = inst_18336__$1);
return statearr_18387;
})();var statearr_18388_18462 = state_18374__$1;(statearr_18388_18462[2] = null);
(statearr_18388_18462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 10))
{var inst_18357 = (state_18374[12]);var inst_18355 = (state_18374[13]);var inst_18355__$1 = (state_18374[2]);var inst_18356 = cljs.core.nth.call(null,inst_18355__$1,0,null);var inst_18357__$1 = cljs.core.nth.call(null,inst_18355__$1,1,null);var inst_18358 = cljs.core._EQ_.call(null,inst_18357__$1,mouse_pos_chan);var state_18374__$1 = (function (){var statearr_18389 = state_18374;(statearr_18389[14] = inst_18356);
(statearr_18389[12] = inst_18357__$1);
(statearr_18389[13] = inst_18355__$1);
return statearr_18389;
})();if(inst_18358)
{var statearr_18390_18463 = state_18374__$1;(statearr_18390_18463[1] = 11);
} else
{var statearr_18391_18464 = state_18374__$1;(statearr_18391_18464[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 11))
{var inst_18336 = (state_18374[7]);var inst_18342 = (state_18374[8]);var inst_18356 = (state_18374[14]);var inst_18357 = (state_18374[12]);var inst_18355 = (state_18374[13]);var inst_18349 = (state_18374[10]);var inst_18360 = (function (){var vec__18351 = inst_18355;var last_mouse_pos = inst_18349;var ch = inst_18357;var value = inst_18356;var vec__18338 = inst_18342;var mouse_pos = inst_18336;return ((function (vec__18351,last_mouse_pos,ch,value,vec__18338,mouse_pos,inst_18336,inst_18342,inst_18356,inst_18357,inst_18355,inst_18349,state_val_18375){
return (function (p1__18194_SHARP_){return grover.core.translate.call(null,p1__18194_SHARP_,cljs.core.map.call(null,cljs.core._,value,last_mouse_pos));
});
;})(vec__18351,last_mouse_pos,ch,value,vec__18338,mouse_pos,inst_18336,inst_18342,inst_18356,inst_18357,inst_18355,inst_18349,state_val_18375))
})();var inst_18361 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_18360);var inst_18349__$1 = inst_18356;var state_18374__$1 = (function (){var statearr_18392 = state_18374;(statearr_18392[15] = inst_18361);
(statearr_18392[10] = inst_18349__$1);
return statearr_18392;
})();var statearr_18393_18465 = state_18374__$1;(statearr_18393_18465[2] = null);
(statearr_18393_18465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 12))
{var state_18374__$1 = state_18374;var statearr_18394_18466 = state_18374__$1;(statearr_18394_18466[2] = null);
(statearr_18394_18466[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18375 === 13))
{var inst_18365 = (state_18374[2]);var state_18374__$1 = state_18374;var statearr_18395_18467 = state_18374__$1;(statearr_18395_18467[2] = inst_18365);
(statearr_18395_18467[1] = 9);
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
var state_machine__6812__auto____0 = (function (){var statearr_18399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18399[0] = state_machine__6812__auto__);
(statearr_18399[1] = 1);
return statearr_18399;
});
var state_machine__6812__auto____1 = (function (state_18374){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_18374);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e18400){if((e18400 instanceof Object))
{var ex__6815__auto__ = e18400;var statearr_18401_18468 = state_18374;(statearr_18401_18468[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18374);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18469 = state_18374;
state_18374 = G__18469;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_18374){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_18374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_18402 = f__6827__auto__.call(null);(statearr_18402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___18455);
return statearr_18402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_18430){var state_val_18431 = (state_18430[1]);if((state_val_18431 === 1))
{var inst_18403 = [0,0];var inst_18404 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18403,null));var inst_18405 = inst_18404;var state_18430__$1 = (function (){var statearr_18432 = state_18430;(statearr_18432[7] = inst_18405);
return statearr_18432;
})();var statearr_18433_18470 = state_18430__$1;(statearr_18433_18470[2] = null);
(statearr_18433_18470[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 2))
{var inst_18408 = [relative_mouse_pos_chan,mouse_wheel_chan];var inst_18409 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_18408,null));var state_18430__$1 = state_18430;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18430__$1,4,inst_18409);
} else
{if((state_val_18431 === 3))
{var inst_18428 = (state_18430[2]);var state_18430__$1 = state_18430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18430__$1,inst_18428);
} else
{if((state_val_18431 === 4))
{var inst_18413 = (state_18430[8]);var inst_18411 = (state_18430[9]);var inst_18411__$1 = (state_18430[2]);var inst_18412 = cljs.core.nth.call(null,inst_18411__$1,0,null);var inst_18413__$1 = cljs.core.nth.call(null,inst_18411__$1,1,null);var inst_18414 = cljs.core._EQ_.call(null,inst_18413__$1,mouse_wheel_chan);var state_18430__$1 = (function (){var statearr_18435 = state_18430;(statearr_18435[8] = inst_18413__$1);
(statearr_18435[9] = inst_18411__$1);
(statearr_18435[10] = inst_18412);
return statearr_18435;
})();if(inst_18414)
{var statearr_18436_18471 = state_18430__$1;(statearr_18436_18471[1] = 5);
} else
{var statearr_18437_18472 = state_18430__$1;(statearr_18437_18472[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 5))
{var inst_18413 = (state_18430[8]);var inst_18411 = (state_18430[9]);var inst_18412 = (state_18430[10]);var inst_18405 = (state_18430[7]);var inst_18416 = (function (){var ch = inst_18413;var value = inst_18412;var vec__18407 = inst_18411;var mouse_pos = inst_18405;return ((function (ch,value,vec__18407,mouse_pos,inst_18413,inst_18411,inst_18412,inst_18405,state_val_18431){
return (function (m){var vec__18438 = mouse_pos;var mouse_x = cljs.core.nth.call(null,vec__18438,0,null);var mouse_y = cljs.core.nth.call(null,vec__18438,1,null);return grover.core.translate.call(null,grover.core.scale.call(null,grover.core.translate.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mouse_x),(- mouse_y)], null)),(1 - (value / 100))),mouse_pos);
});
;})(ch,value,vec__18407,mouse_pos,inst_18413,inst_18411,inst_18412,inst_18405,state_val_18431))
})();var inst_18417 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_18416);var tmp18434 = inst_18405;var inst_18405__$1 = tmp18434;var state_18430__$1 = (function (){var statearr_18439 = state_18430;(statearr_18439[11] = inst_18417);
(statearr_18439[7] = inst_18405__$1);
return statearr_18439;
})();var statearr_18440_18473 = state_18430__$1;(statearr_18440_18473[2] = null);
(statearr_18440_18473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 6))
{var state_18430__$1 = state_18430;if(new cljs.core.Keyword(null,"default","default",2558708147))
{var statearr_18441_18474 = state_18430__$1;(statearr_18441_18474[1] = 8);
} else
{var statearr_18442_18475 = state_18430__$1;(statearr_18442_18475[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 7))
{var inst_18426 = (state_18430[2]);var state_18430__$1 = state_18430;var statearr_18443_18476 = state_18430__$1;(statearr_18443_18476[2] = inst_18426);
(statearr_18443_18476[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 8))
{var inst_18412 = (state_18430[10]);var inst_18405 = inst_18412;var state_18430__$1 = (function (){var statearr_18444 = state_18430;(statearr_18444[7] = inst_18405);
return statearr_18444;
})();var statearr_18445_18477 = state_18430__$1;(statearr_18445_18477[2] = null);
(statearr_18445_18477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 9))
{var state_18430__$1 = state_18430;var statearr_18446_18478 = state_18430__$1;(statearr_18446_18478[2] = null);
(statearr_18446_18478[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18431 === 10))
{var inst_18424 = (state_18430[2]);var state_18430__$1 = state_18430;var statearr_18447_18479 = state_18430__$1;(statearr_18447_18479[2] = inst_18424);
(statearr_18447_18479[1] = 7);
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
var state_machine__6812__auto____0 = (function (){var statearr_18451 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18451[0] = state_machine__6812__auto__);
(statearr_18451[1] = 1);
return statearr_18451;
});
var state_machine__6812__auto____1 = (function (state_18430){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_18430);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e18452){if((e18452 instanceof Object))
{var ex__6815__auto__ = e18452;var statearr_18453_18480 = state_18430;(statearr_18453_18480[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18430);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18481 = state_18430;
state_18430 = G__18481;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_18430){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_18430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_18454 = f__6827__auto__.call(null);(statearr_18454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_18454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
grover.core.t18327.prototype.om$core$IInitState$ = true;
grover.core.t18327.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182),cljs.core.async.chan.call(null)], null);
});
grover.core.t18327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18329){var self__ = this;
var _18329__$1 = this;return self__.meta18328;
});
grover.core.t18327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18329,meta18328__$1){var self__ = this;
var _18329__$1 = this;return (new grover.core.t18327(self__.composition,self__.view_transformation,self__.svg_view_transformation,self__.app,self__.map__18326,self__.owner,self__.p__18196,self__.view_pane_view,meta18328__$1));
});
grover.core.__GT_t18327 = (function __GT_t18327(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__18326__$2,owner__$1,p__18196__$1,view_pane_view__$1,meta18328){return (new grover.core.t18327(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__18326__$2,owner__$1,p__18196__$1,view_pane_view__$1,meta18328));
});
}
return (new grover.core.t18327(composition,view_transformation,svg_view_transformation,app,map__18326__$1,owner,p__18196,view_pane_view,null));
});
grover.core.app_view = (function app_view(p__18482,owner){var map__18499 = p__18482;var map__18499__$1 = ((cljs.core.seq_QMARK_.call(null,map__18499))?cljs.core.apply.call(null,cljs.core.hash_map,map__18499):map__18499);var app = map__18499__$1;var view_transformation = cljs.core.get.call(null,map__18499__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var views = cljs.core.get.call(null,map__18499__$1,new cljs.core.Keyword(null,"views","views",1126108640));if(typeof grover.core.t18500 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t18500 = (function (views,view_transformation,app,map__18499,owner,p__18482,app_view,meta18501){
this.views = views;
this.view_transformation = view_transformation;
this.app = app;
this.map__18499 = map__18499;
this.owner = owner;
this.p__18482 = p__18482;
this.app_view = app_view;
this.meta18501 = meta18501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t18500.cljs$lang$type = true;
grover.core.t18500.cljs$lang$ctorStr = "grover.core/t18500";
grover.core.t18500.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t18500");
});
grover.core.t18500.prototype.om$core$IRenderState$ = true;
grover.core.t18500.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Grover"),React.DOM.ul(null,React.DOM.li(null,"About 150 lines of ClojureScript"),React.DOM.li(null,"No tests yet"),React.DOM.li(null,"Loading 'zoomed in' tiles doesn't work yet"),React.DOM.li(null,"You can drag with the mouse"),React.DOM.li(null,"Mousewheel controls zoom"),React.DOM.li(null,"Same zoom transformation can be used in mutiple viewports"),React.DOM.li(null,"Try zooming in at one mouse location and zoom out at another - the image doesn't jump around"),React.DOM.li(null,"Note that the fox (or red panda?) has two different images under its paw"),React.DOM.li(null,"It currently works well only in Chrome and Safari (IE is untested)")),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__18507(s__18508){return (new cljs.core.LazySeq(null,(function (){var s__18508__$1 = s__18508;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18508__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var map__18514 = cljs.core.first.call(null,xs__4579__auto__);var map__18514__$1 = ((cljs.core.seq_QMARK_.call(null,map__18514))?cljs.core.apply.call(null,cljs.core.hash_map,map__18514):map__18514);var view = map__18514__$1;var compositions = cljs.core.get.call(null,map__18514__$1,new cljs.core.Keyword(null,"compositions","compositions",777068411));var view_transformation__$2 = cljs.core.get.call(null,map__18514__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var iterys__4156__auto__ = ((function (s__18508__$1,map__18514,map__18514__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function iter__18509(s__18510){return (new cljs.core.LazySeq(null,((function (s__18508__$1,map__18514,map__18514__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__18510__$1 = s__18510;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__18510__$1);if(temp__4092__auto____$1)
{var s__18510__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__18510__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18510__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18512 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18511 = 0;while(true){
if((i__18511 < size__4159__auto__))
{var composition = cljs.core._nth.call(null,c__4158__auto__,i__18511);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);cljs.core.chunk_append.call(null,b__18512,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform));
{
var G__18515 = (i__18511 + 1);
i__18511 = G__18515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18512),iter__18509.call(null,cljs.core.chunk_rest.call(null,s__18510__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18512),null);
}
} else
{var composition = cljs.core.first.call(null,s__18510__$2);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);return cljs.core.cons.call(null,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform),iter__18509.call(null,cljs.core.rest.call(null,s__18510__$2)));
}
} else
{return null;
}
break;
}
});})(s__18508__$1,map__18514,map__18514__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__18508__$1,map__18514,map__18514__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,compositions));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__18507.call(null,cljs.core.rest.call(null,s__18508__$1)));
} else
{{
var G__18516 = cljs.core.rest.call(null,s__18508__$1);
s__18508__$1 = G__18516;
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
grover.core.t18500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18502){var self__ = this;
var _18502__$1 = this;return self__.meta18501;
});
grover.core.t18500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18502,meta18501__$1){var self__ = this;
var _18502__$1 = this;return (new grover.core.t18500(self__.views,self__.view_transformation,self__.app,self__.map__18499,self__.owner,self__.p__18482,self__.app_view,meta18501__$1));
});
grover.core.__GT_t18500 = (function __GT_t18500(views__$1,view_transformation__$1,app__$1,map__18499__$2,owner__$1,p__18482__$1,app_view__$1,meta18501){return (new grover.core.t18500(views__$1,view_transformation__$1,app__$1,map__18499__$2,owner__$1,p__18482__$1,app_view__$1,meta18501));
});
}
return (new grover.core.t18500(views,view_transformation,app,map__18499__$1,owner,p__18482,app_view,null));
});
om.core.root.call(null,grover.core.app_view,grover.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map