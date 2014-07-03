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
grover.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"views","views",1126108640),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),grover.core.identity_matrix.call(null),new cljs.core.Keyword(null,"compositions","compositions",777068411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null));
grover.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__18889_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__18889_SHARP_);
}));
return out;
});
grover.core.image = (function image(attrs){return React.DOM.g({"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image "),cljs.core.str(cljs.core.reduce.call(null,(function (s,p__18892){var vec__18893 = p__18892;var k = cljs.core.nth.call(null,vec__18893,0,null);var v = cljs.core.nth.call(null,vec__18893,1,null);return [cljs.core.str(s),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(v),cljs.core.str("\"")].join('');
}),"",attrs)),cljs.core.str(" />")].join('')}});
});
grover.core.scale = (function scale(m,amount){return (new goog.math.Matrix([[amount,0,0],[0,amount,0],[0,0,1]])).multiply(m);
});
grover.core.translate = (function translate(m,p__18894){var vec__18896 = p__18894;var x = cljs.core.nth.call(null,vec__18896,0,null);var y = cljs.core.nth.call(null,vec__18896,1,null);return (new goog.math.Matrix([[1,0,x],[0,1,y],[0,0,1]])).multiply(m);
});
grover.core.draw_composition = (function draw_composition(p__18897){var map__18916 = p__18897;var map__18916__$1 = ((cljs.core.seq_QMARK_.call(null,map__18916))?cljs.core.apply.call(null,cljs.core.hash_map,map__18916):map__18916);var children = cljs.core.get.call(null,map__18916__$1,new cljs.core.Keyword(null,"children","children",2673430897));var images = cljs.core.get.call(null,map__18916__$1,new cljs.core.Keyword(null,"images","images",4123620842));var transform = cljs.core.get.call(null,map__18916__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var attrs18917 = (cljs.core.truth_(transform)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),transform], null):null);if(cljs.core.map_QMARK_.call(null,attrs18917))
{return React.DOM.g(sablono.interpreter.attributes.call(null,attrs18917),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__18918(s__18919){return (new cljs.core.LazySeq(null,(function (){var s__18919__$1 = s__18919;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18919__$1);if(temp__4092__auto__)
{var s__18919__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18919__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18919__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18921 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18920 = 0;while(true){
if((i__18920 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__18920);cljs.core.chunk_append.call(null,b__18921,grover.core.image.call(null,image_data));
{
var G__18934 = (i__18920 + 1);
i__18920 = G__18934;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18921),iter__18918.call(null,cljs.core.chunk_rest.call(null,s__18919__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18921),null);
}
} else
{var image_data = cljs.core.first.call(null,s__18919__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__18918.call(null,cljs.core.rest.call(null,s__18919__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__18922(s__18923){return (new cljs.core.LazySeq(null,(function (){var s__18923__$1 = s__18923;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18923__$1);if(temp__4092__auto__)
{var s__18923__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18923__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18923__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18925 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18924 = 0;while(true){
if((i__18924 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__18924);cljs.core.chunk_append.call(null,b__18925,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__18935 = (i__18924 + 1);
i__18924 = G__18935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18925),iter__18922.call(null,cljs.core.chunk_rest.call(null,s__18923__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18925),null);
}
} else
{var child = cljs.core.first.call(null,s__18923__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__18922.call(null,cljs.core.rest.call(null,s__18923__$2)));
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
{return React.DOM.g(null,sablono.interpreter.interpret.call(null,attrs18917),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__18926(s__18927){return (new cljs.core.LazySeq(null,(function (){var s__18927__$1 = s__18927;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18927__$1);if(temp__4092__auto__)
{var s__18927__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18927__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18927__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18929 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18928 = 0;while(true){
if((i__18928 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__18928);cljs.core.chunk_append.call(null,b__18929,grover.core.image.call(null,image_data));
{
var G__18936 = (i__18928 + 1);
i__18928 = G__18936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18929),iter__18926.call(null,cljs.core.chunk_rest.call(null,s__18927__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18929),null);
}
} else
{var image_data = cljs.core.first.call(null,s__18927__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__18926.call(null,cljs.core.rest.call(null,s__18927__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__18930(s__18931){return (new cljs.core.LazySeq(null,(function (){var s__18931__$1 = s__18931;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18931__$1);if(temp__4092__auto__)
{var s__18931__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18931__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__18931__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__18933 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__18932 = 0;while(true){
if((i__18932 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__18932);cljs.core.chunk_append.call(null,b__18933,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__18937 = (i__18932 + 1);
i__18932 = G__18937;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18933),iter__18930.call(null,cljs.core.chunk_rest.call(null,s__18931__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18933),null);
}
} else
{var child = cljs.core.first.call(null,s__18931__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__18930.call(null,cljs.core.rest.call(null,s__18931__$2)));
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
grover.core.view_pane_view = (function view_pane_view(p__18940,owner){var map__19070 = p__18940;var map__19070__$1 = ((cljs.core.seq_QMARK_.call(null,map__19070))?cljs.core.apply.call(null,cljs.core.hash_map,map__19070):map__19070);var app = map__19070__$1;var svg_view_transformation = cljs.core.get.call(null,map__19070__$1,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626));var view_transformation = cljs.core.get.call(null,map__19070__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var composition = cljs.core.get.call(null,map__19070__$1,new cljs.core.Keyword(null,"composition","composition",4469947676));if(typeof grover.core.t19071 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t19071 = (function (composition,view_transformation,svg_view_transformation,app,map__19070,owner,p__18940,view_pane_view,meta19072){
this.composition = composition;
this.view_transformation = view_transformation;
this.svg_view_transformation = svg_view_transformation;
this.app = app;
this.map__19070 = map__19070;
this.owner = owner;
this.p__18940 = p__18940;
this.view_pane_view = view_pane_view;
this.meta19072 = meta19072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t19071.cljs$lang$type = true;
grover.core.t19071.cljs$lang$ctorStr = "grover.core/t19071";
grover.core.t19071.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t19071");
});
grover.core.t19071.prototype.om$core$IRenderState$ = true;
grover.core.t19071.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__19074){var self__ = this;
var map__19075 = p__19074;var map__19075__$1 = ((cljs.core.seq_QMARK_.call(null,map__19075))?cljs.core.apply.call(null,cljs.core.hash_map,map__19075):map__19075);var state = map__19075__$1;var mouse_wheel_chan = cljs.core.get.call(null,map__19075__$1,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var this$__$1 = this;return React.DOM.span(null,React.DOM.svg({"ref": new cljs.core.Keyword(null,"viewport","viewport",2210589720), "width": 600, "height": 400, "style": {"border": "solid black 1px"}, "onWheel": (function (p1__18939_SHARP_){p1__18939_SHARP_.preventDefault();
return cljs.core.async.put_BANG_.call(null,mouse_wheel_chan,p1__18939_SHARP_.deltaY);
})},React.DOM.g({"ref": new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987), "transform": [cljs.core.str("matrix("),cljs.core.str(clojure.string.join.call(null,",",self__.svg_view_transformation)),cljs.core.str(")")].join('')},sablono.interpreter.interpret.call(null,grover.core.draw_composition.call(null,self__.composition)))));
});
grover.core.t19071.prototype.om$core$IDidMount$ = true;
grover.core.t19071.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var mouse_pos_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY,e], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),goog.events.EventType.MOUSEMOVE)], null));var relative_mouse_pos_chan = cljs.core.async.map.call(null,((function (mouse_pos_chan){
return (function (p__19076){var vec__19077 = p__19076;var x = cljs.core.nth.call(null,vec__19077,0,null);var y = cljs.core.nth.call(null,vec__19077,1,null);var viewport_pos = goog.style.getClientPosition(om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - viewport_pos.x),(y - viewport_pos.y)], null);
});})(mouse_pos_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_pos_chan], null));var mouse_wheel_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var mouse_down_chan = grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),"mousedown");var mouse_up_chan = grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),"mouseup");var c__6826__auto___19199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_19118){var state_val_19119 = (state_19118[1]);if((state_val_19119 === 1))
{var inst_19078 = [0,0];var inst_19079 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19078,null));var inst_19080 = inst_19079;var state_19118__$1 = (function (){var statearr_19120 = state_19118;(statearr_19120[7] = inst_19080);
return statearr_19120;
})();var statearr_19121_19200 = state_19118__$1;(statearr_19121_19200[2] = null);
(statearr_19121_19200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 2))
{var inst_19083 = [mouse_pos_chan,mouse_down_chan];var inst_19084 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19083,null));var state_19118__$1 = state_19118;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19118__$1,4,inst_19084);
} else
{if((state_val_19119 === 3))
{var inst_19116 = (state_19118[2]);var state_19118__$1 = state_19118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19118__$1,inst_19116);
} else
{if((state_val_19119 === 4))
{var inst_19086 = (state_19118[8]);var inst_19086__$1 = (state_19118[2]);var inst_19087 = cljs.core.nth.call(null,inst_19086__$1,0,null);var inst_19088 = cljs.core.nth.call(null,inst_19086__$1,1,null);var inst_19089 = cljs.core._EQ_.call(null,inst_19088,mouse_pos_chan);var state_19118__$1 = (function (){var statearr_19122 = state_19118;(statearr_19122[8] = inst_19086__$1);
(statearr_19122[9] = inst_19087);
return statearr_19122;
})();if(inst_19089)
{var statearr_19123_19201 = state_19118__$1;(statearr_19123_19201[1] = 5);
} else
{var statearr_19124_19202 = state_19118__$1;(statearr_19124_19202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 5))
{var inst_19087 = (state_19118[9]);var inst_19080 = inst_19087;var state_19118__$1 = (function (){var statearr_19125 = state_19118;(statearr_19125[7] = inst_19080);
return statearr_19125;
})();var statearr_19126_19203 = state_19118__$1;(statearr_19126_19203[2] = null);
(statearr_19126_19203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 6))
{var inst_19080 = (state_19118[7]);var inst_19093 = inst_19080;var state_19118__$1 = (function (){var statearr_19127 = state_19118;(statearr_19127[10] = inst_19093);
return statearr_19127;
})();var statearr_19128_19204 = state_19118__$1;(statearr_19128_19204[2] = null);
(statearr_19128_19204[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 7))
{var inst_19114 = (state_19118[2]);var state_19118__$1 = state_19118;var statearr_19130_19205 = state_19118__$1;(statearr_19130_19205[2] = inst_19114);
(statearr_19130_19205[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 8))
{var inst_19096 = [mouse_pos_chan,mouse_up_chan];var inst_19097 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19096,null));var state_19118__$1 = state_19118;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19118__$1,10,inst_19097);
} else
{if((state_val_19119 === 9))
{var inst_19080 = (state_19118[7]);var inst_19111 = (state_19118[2]);var tmp19129 = inst_19080;var inst_19080__$1 = tmp19129;var state_19118__$1 = (function (){var statearr_19131 = state_19118;(statearr_19131[7] = inst_19080__$1);
(statearr_19131[11] = inst_19111);
return statearr_19131;
})();var statearr_19132_19206 = state_19118__$1;(statearr_19132_19206[2] = null);
(statearr_19132_19206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 10))
{var inst_19101 = (state_19118[12]);var inst_19099 = (state_19118[13]);var inst_19099__$1 = (state_19118[2]);var inst_19100 = cljs.core.nth.call(null,inst_19099__$1,0,null);var inst_19101__$1 = cljs.core.nth.call(null,inst_19099__$1,1,null);var inst_19102 = cljs.core._EQ_.call(null,inst_19101__$1,mouse_pos_chan);var state_19118__$1 = (function (){var statearr_19133 = state_19118;(statearr_19133[12] = inst_19101__$1);
(statearr_19133[14] = inst_19100);
(statearr_19133[13] = inst_19099__$1);
return statearr_19133;
})();if(inst_19102)
{var statearr_19134_19207 = state_19118__$1;(statearr_19134_19207[1] = 11);
} else
{var statearr_19135_19208 = state_19118__$1;(statearr_19135_19208[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 11))
{var inst_19086 = (state_19118[8]);var inst_19101 = (state_19118[12]);var inst_19100 = (state_19118[14]);var inst_19080 = (state_19118[7]);var inst_19093 = (state_19118[10]);var inst_19099 = (state_19118[13]);var inst_19104 = (function (){var vec__19095 = inst_19099;var last_mouse_pos = inst_19093;var ch = inst_19101;var value = inst_19100;var vec__19082 = inst_19086;var mouse_pos = inst_19080;return ((function (vec__19095,last_mouse_pos,ch,value,vec__19082,mouse_pos,inst_19086,inst_19101,inst_19100,inst_19080,inst_19093,inst_19099,state_val_19119){
return (function (p1__18938_SHARP_){return grover.core.translate.call(null,p1__18938_SHARP_,cljs.core.map.call(null,cljs.core._,value,last_mouse_pos));
});
;})(vec__19095,last_mouse_pos,ch,value,vec__19082,mouse_pos,inst_19086,inst_19101,inst_19100,inst_19080,inst_19093,inst_19099,state_val_19119))
})();var inst_19105 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_19104);var inst_19093__$1 = inst_19100;var state_19118__$1 = (function (){var statearr_19136 = state_19118;(statearr_19136[15] = inst_19105);
(statearr_19136[10] = inst_19093__$1);
return statearr_19136;
})();var statearr_19137_19209 = state_19118__$1;(statearr_19137_19209[2] = null);
(statearr_19137_19209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 12))
{var state_19118__$1 = state_19118;var statearr_19138_19210 = state_19118__$1;(statearr_19138_19210[2] = null);
(statearr_19138_19210[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19119 === 13))
{var inst_19109 = (state_19118[2]);var state_19118__$1 = state_19118;var statearr_19139_19211 = state_19118__$1;(statearr_19139_19211[2] = inst_19109);
(statearr_19139_19211[1] = 9);
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
var state_machine__6812__auto____0 = (function (){var statearr_19143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19143[0] = state_machine__6812__auto__);
(statearr_19143[1] = 1);
return statearr_19143;
});
var state_machine__6812__auto____1 = (function (state_19118){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_19118);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e19144){if((e19144 instanceof Object))
{var ex__6815__auto__ = e19144;var statearr_19145_19212 = state_19118;(statearr_19145_19212[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19213 = state_19118;
state_19118 = G__19213;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_19118){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_19118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_19146 = f__6827__auto__.call(null);(statearr_19146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___19199);
return statearr_19146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_19174){var state_val_19175 = (state_19174[1]);if((state_val_19175 === 1))
{var inst_19147 = [0,0];var inst_19148 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19147,null));var inst_19149 = inst_19148;var state_19174__$1 = (function (){var statearr_19176 = state_19174;(statearr_19176[7] = inst_19149);
return statearr_19176;
})();var statearr_19177_19214 = state_19174__$1;(statearr_19177_19214[2] = null);
(statearr_19177_19214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 2))
{var inst_19152 = [relative_mouse_pos_chan,mouse_wheel_chan];var inst_19153 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_19152,null));var state_19174__$1 = state_19174;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19174__$1,4,inst_19153);
} else
{if((state_val_19175 === 3))
{var inst_19172 = (state_19174[2]);var state_19174__$1 = state_19174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19174__$1,inst_19172);
} else
{if((state_val_19175 === 4))
{var inst_19155 = (state_19174[8]);var inst_19157 = (state_19174[9]);var inst_19155__$1 = (state_19174[2]);var inst_19156 = cljs.core.nth.call(null,inst_19155__$1,0,null);var inst_19157__$1 = cljs.core.nth.call(null,inst_19155__$1,1,null);var inst_19158 = cljs.core._EQ_.call(null,inst_19157__$1,mouse_wheel_chan);var state_19174__$1 = (function (){var statearr_19179 = state_19174;(statearr_19179[10] = inst_19156);
(statearr_19179[8] = inst_19155__$1);
(statearr_19179[9] = inst_19157__$1);
return statearr_19179;
})();if(inst_19158)
{var statearr_19180_19215 = state_19174__$1;(statearr_19180_19215[1] = 5);
} else
{var statearr_19181_19216 = state_19174__$1;(statearr_19181_19216[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 5))
{var inst_19149 = (state_19174[7]);var inst_19156 = (state_19174[10]);var inst_19155 = (state_19174[8]);var inst_19157 = (state_19174[9]);var inst_19160 = (function (){var ch = inst_19157;var value = inst_19156;var vec__19151 = inst_19155;var mouse_pos = inst_19149;return ((function (ch,value,vec__19151,mouse_pos,inst_19149,inst_19156,inst_19155,inst_19157,state_val_19175){
return (function (m){var vec__19182 = mouse_pos;var mouse_x = cljs.core.nth.call(null,vec__19182,0,null);var mouse_y = cljs.core.nth.call(null,vec__19182,1,null);return grover.core.translate.call(null,grover.core.scale.call(null,grover.core.translate.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mouse_x),(- mouse_y)], null)),(1 - (value / 100))),mouse_pos);
});
;})(ch,value,vec__19151,mouse_pos,inst_19149,inst_19156,inst_19155,inst_19157,state_val_19175))
})();var inst_19161 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_19160);var tmp19178 = inst_19149;var inst_19149__$1 = tmp19178;var state_19174__$1 = (function (){var statearr_19183 = state_19174;(statearr_19183[11] = inst_19161);
(statearr_19183[7] = inst_19149__$1);
return statearr_19183;
})();var statearr_19184_19217 = state_19174__$1;(statearr_19184_19217[2] = null);
(statearr_19184_19217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 6))
{var state_19174__$1 = state_19174;if(new cljs.core.Keyword(null,"default","default",2558708147))
{var statearr_19185_19218 = state_19174__$1;(statearr_19185_19218[1] = 8);
} else
{var statearr_19186_19219 = state_19174__$1;(statearr_19186_19219[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 7))
{var inst_19170 = (state_19174[2]);var state_19174__$1 = state_19174;var statearr_19187_19220 = state_19174__$1;(statearr_19187_19220[2] = inst_19170);
(statearr_19187_19220[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 8))
{var inst_19156 = (state_19174[10]);var inst_19149 = inst_19156;var state_19174__$1 = (function (){var statearr_19188 = state_19174;(statearr_19188[7] = inst_19149);
return statearr_19188;
})();var statearr_19189_19221 = state_19174__$1;(statearr_19189_19221[2] = null);
(statearr_19189_19221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 9))
{var state_19174__$1 = state_19174;var statearr_19190_19222 = state_19174__$1;(statearr_19190_19222[2] = null);
(statearr_19190_19222[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19175 === 10))
{var inst_19168 = (state_19174[2]);var state_19174__$1 = state_19174;var statearr_19191_19223 = state_19174__$1;(statearr_19191_19223[2] = inst_19168);
(statearr_19191_19223[1] = 7);
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
var state_machine__6812__auto____0 = (function (){var statearr_19195 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19195[0] = state_machine__6812__auto__);
(statearr_19195[1] = 1);
return statearr_19195;
});
var state_machine__6812__auto____1 = (function (state_19174){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_19174);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e19196){if((e19196 instanceof Object))
{var ex__6815__auto__ = e19196;var statearr_19197_19224 = state_19174;(statearr_19197_19224[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19174);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19225 = state_19174;
state_19174 = G__19225;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_19174){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_19174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_19198 = f__6827__auto__.call(null);(statearr_19198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_19198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
grover.core.t19071.prototype.om$core$IInitState$ = true;
grover.core.t19071.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182),cljs.core.async.chan.call(null)], null);
});
grover.core.t19071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19073){var self__ = this;
var _19073__$1 = this;return self__.meta19072;
});
grover.core.t19071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19073,meta19072__$1){var self__ = this;
var _19073__$1 = this;return (new grover.core.t19071(self__.composition,self__.view_transformation,self__.svg_view_transformation,self__.app,self__.map__19070,self__.owner,self__.p__18940,self__.view_pane_view,meta19072__$1));
});
grover.core.__GT_t19071 = (function __GT_t19071(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__19070__$2,owner__$1,p__18940__$1,view_pane_view__$1,meta19072){return (new grover.core.t19071(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__19070__$2,owner__$1,p__18940__$1,view_pane_view__$1,meta19072));
});
}
return (new grover.core.t19071(composition,view_transformation,svg_view_transformation,app,map__19070__$1,owner,p__18940,view_pane_view,null));
});
grover.core.app_view = (function app_view(p__19226,owner){var map__19243 = p__19226;var map__19243__$1 = ((cljs.core.seq_QMARK_.call(null,map__19243))?cljs.core.apply.call(null,cljs.core.hash_map,map__19243):map__19243);var app = map__19243__$1;var view_transformation = cljs.core.get.call(null,map__19243__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var views = cljs.core.get.call(null,map__19243__$1,new cljs.core.Keyword(null,"views","views",1126108640));if(typeof grover.core.t19244 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t19244 = (function (views,view_transformation,app,map__19243,owner,p__19226,app_view,meta19245){
this.views = views;
this.view_transformation = view_transformation;
this.app = app;
this.map__19243 = map__19243;
this.owner = owner;
this.p__19226 = p__19226;
this.app_view = app_view;
this.meta19245 = meta19245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t19244.cljs$lang$type = true;
grover.core.t19244.cljs$lang$ctorStr = "grover.core/t19244";
grover.core.t19244.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t19244");
});
grover.core.t19244.prototype.om$core$IRenderState$ = true;
grover.core.t19244.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Grover"),React.DOM.ul(null,React.DOM.li(null,"About 150 lines of ClojureScript"),React.DOM.li(null,"No tests yet"),React.DOM.li(null,"Loading 'zoomed in' tiles doesn't work yet"),React.DOM.li(null,"You can drag with the mouse"),React.DOM.li(null,"Mousewheel controls zoom"),React.DOM.li(null,"Same zoom transformation can be used in mutiple viewports"),React.DOM.li(null,"Try zooming in at one mouse location and zoom out at another - the image doesn't jump around"),React.DOM.li(null,"Note that the fox (or red panda?) has two different images under its paw"),React.DOM.li(null,"It currently works well only in Chrome and Safari (IE is untested)")),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__19251(s__19252){return (new cljs.core.LazySeq(null,(function (){var s__19252__$1 = s__19252;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19252__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var map__19258 = cljs.core.first.call(null,xs__4579__auto__);var map__19258__$1 = ((cljs.core.seq_QMARK_.call(null,map__19258))?cljs.core.apply.call(null,cljs.core.hash_map,map__19258):map__19258);var view = map__19258__$1;var compositions = cljs.core.get.call(null,map__19258__$1,new cljs.core.Keyword(null,"compositions","compositions",777068411));var view_transformation__$2 = cljs.core.get.call(null,map__19258__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var iterys__4156__auto__ = ((function (s__19252__$1,map__19258,map__19258__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function iter__19253(s__19254){return (new cljs.core.LazySeq(null,((function (s__19252__$1,map__19258,map__19258__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__19254__$1 = s__19254;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__19254__$1);if(temp__4092__auto____$1)
{var s__19254__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__19254__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__19254__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__19256 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__19255 = 0;while(true){
if((i__19255 < size__4159__auto__))
{var composition = cljs.core._nth.call(null,c__4158__auto__,i__19255);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);cljs.core.chunk_append.call(null,b__19256,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform));
{
var G__19259 = (i__19255 + 1);
i__19255 = G__19259;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19256),iter__19253.call(null,cljs.core.chunk_rest.call(null,s__19254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19256),null);
}
} else
{var composition = cljs.core.first.call(null,s__19254__$2);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);return cljs.core.cons.call(null,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform),iter__19253.call(null,cljs.core.rest.call(null,s__19254__$2)));
}
} else
{return null;
}
break;
}
});})(s__19252__$1,map__19258,map__19258__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__19252__$1,map__19258,map__19258__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,compositions));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__19251.call(null,cljs.core.rest.call(null,s__19252__$1)));
} else
{{
var G__19260 = cljs.core.rest.call(null,s__19252__$1);
s__19252__$1 = G__19260;
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
grover.core.t19244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19246){var self__ = this;
var _19246__$1 = this;return self__.meta19245;
});
grover.core.t19244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19246,meta19245__$1){var self__ = this;
var _19246__$1 = this;return (new grover.core.t19244(self__.views,self__.view_transformation,self__.app,self__.map__19243,self__.owner,self__.p__19226,self__.app_view,meta19245__$1));
});
grover.core.__GT_t19244 = (function __GT_t19244(views__$1,view_transformation__$1,app__$1,map__19243__$2,owner__$1,p__19226__$1,app_view__$1,meta19245){return (new grover.core.t19244(views__$1,view_transformation__$1,app__$1,map__19243__$2,owner__$1,p__19226__$1,app_view__$1,meta19245));
});
}
return (new grover.core.t19244(views,view_transformation,app,map__19243__$1,owner,p__19226,app_view,null));
});
om.core.root.call(null,grover.core.app_view,grover.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map