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
grover.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),grover.core.identity_matrix.call(null),new cljs.core.Keyword(null,"views","views",1126108640),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),grover.core.identity_matrix.call(null),new cljs.core.Keyword(null,"compositions","compositions",777068411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg"], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null),new cljs.core.Keyword(null,"children","children",2673430897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",2066570974),"translate(159,166) scale(0.05)",new cljs.core.Keyword(null,"images","images",4123620842),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),300,new cljs.core.Keyword(null,"height","height",4087841945),300,new cljs.core.Keyword(null,"xlink:href","xlink:href",1543276709),"https://mdn.mozillademos.org/files/2917/fxlogo.png"], null)], null)], null)], null)], null)], null)], null)], null)], null));
grover.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__9933_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__9933_SHARP_);
}));
return out;
});
grover.core.image = (function image(attrs){return React.DOM.g({"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image "),cljs.core.str(cljs.core.reduce.call(null,(function (s,p__9936){var vec__9937 = p__9936;var k = cljs.core.nth.call(null,vec__9937,0,null);var v = cljs.core.nth.call(null,vec__9937,1,null);return [cljs.core.str(s),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(v),cljs.core.str("\"")].join('');
}),"",attrs)),cljs.core.str(" />")].join('')}});
});
grover.core.scale = (function scale(m,amount){return (new goog.math.Matrix([[amount,0,0],[0,amount,0],[0,0,1]])).multiply(m);
});
grover.core.translate = (function translate(m,p__9938){var vec__9940 = p__9938;var x = cljs.core.nth.call(null,vec__9940,0,null);var y = cljs.core.nth.call(null,vec__9940,1,null);return (new goog.math.Matrix([[1,0,x],[0,1,y],[0,0,1]])).multiply(m);
});
grover.core.draw_composition = (function draw_composition(p__9941){var map__9960 = p__9941;var map__9960__$1 = ((cljs.core.seq_QMARK_.call(null,map__9960))?cljs.core.apply.call(null,cljs.core.hash_map,map__9960):map__9960);var children = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"children","children",2673430897));var images = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"images","images",4123620842));var transform = cljs.core.get.call(null,map__9960__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var attrs9961 = (cljs.core.truth_(transform)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),transform], null):null);if(cljs.core.map_QMARK_.call(null,attrs9961))
{return React.DOM.g(sablono.interpreter.attributes.call(null,attrs9961),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__9962(s__9963){return (new cljs.core.LazySeq(null,(function (){var s__9963__$1 = s__9963;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9963__$1);if(temp__4092__auto__)
{var s__9963__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9963__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9963__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9965 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9964 = 0;while(true){
if((i__9964 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__9964);cljs.core.chunk_append.call(null,b__9965,grover.core.image.call(null,image_data));
{
var G__9978 = (i__9964 + 1);
i__9964 = G__9978;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9965),iter__9962.call(null,cljs.core.chunk_rest.call(null,s__9963__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9965),null);
}
} else
{var image_data = cljs.core.first.call(null,s__9963__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__9962.call(null,cljs.core.rest.call(null,s__9963__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__9966(s__9967){return (new cljs.core.LazySeq(null,(function (){var s__9967__$1 = s__9967;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9967__$1);if(temp__4092__auto__)
{var s__9967__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9967__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9967__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9969 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9968 = 0;while(true){
if((i__9968 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__9968);cljs.core.chunk_append.call(null,b__9969,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__9979 = (i__9968 + 1);
i__9968 = G__9979;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9969),iter__9966.call(null,cljs.core.chunk_rest.call(null,s__9967__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9969),null);
}
} else
{var child = cljs.core.first.call(null,s__9967__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__9966.call(null,cljs.core.rest.call(null,s__9967__$2)));
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
{return React.DOM.g(null,sablono.interpreter.interpret.call(null,attrs9961),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__9970(s__9971){return (new cljs.core.LazySeq(null,(function (){var s__9971__$1 = s__9971;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9971__$1);if(temp__4092__auto__)
{var s__9971__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9971__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9971__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9973 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9972 = 0;while(true){
if((i__9972 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__9972);cljs.core.chunk_append.call(null,b__9973,grover.core.image.call(null,image_data));
{
var G__9980 = (i__9972 + 1);
i__9972 = G__9980;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9973),iter__9970.call(null,cljs.core.chunk_rest.call(null,s__9971__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9973),null);
}
} else
{var image_data = cljs.core.first.call(null,s__9971__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__9970.call(null,cljs.core.rest.call(null,s__9971__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__9974(s__9975){return (new cljs.core.LazySeq(null,(function (){var s__9975__$1 = s__9975;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__9975__$1);if(temp__4092__auto__)
{var s__9975__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9975__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__9975__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__9977 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__9976 = 0;while(true){
if((i__9976 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__9976);cljs.core.chunk_append.call(null,b__9977,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__9981 = (i__9976 + 1);
i__9976 = G__9981;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9977),iter__9974.call(null,cljs.core.chunk_rest.call(null,s__9975__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9977),null);
}
} else
{var child = cljs.core.first.call(null,s__9975__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__9974.call(null,cljs.core.rest.call(null,s__9975__$2)));
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
grover.core.view_pane_view = (function view_pane_view(p__9983,owner){var map__10044 = p__9983;var map__10044__$1 = ((cljs.core.seq_QMARK_.call(null,map__10044))?cljs.core.apply.call(null,cljs.core.hash_map,map__10044):map__10044);var app = map__10044__$1;var svg_view_transformation = cljs.core.get.call(null,map__10044__$1,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626));var view_transformation = cljs.core.get.call(null,map__10044__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var composition = cljs.core.get.call(null,map__10044__$1,new cljs.core.Keyword(null,"composition","composition",4469947676));if(typeof grover.core.t10045 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t10045 = (function (composition,view_transformation,svg_view_transformation,app,map__10044,owner,p__9983,view_pane_view,meta10046){
this.composition = composition;
this.view_transformation = view_transformation;
this.svg_view_transformation = svg_view_transformation;
this.app = app;
this.map__10044 = map__10044;
this.owner = owner;
this.p__9983 = p__9983;
this.view_pane_view = view_pane_view;
this.meta10046 = meta10046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t10045.cljs$lang$type = true;
grover.core.t10045.cljs$lang$ctorStr = "grover.core/t10045";
grover.core.t10045.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t10045");
});
grover.core.t10045.prototype.om$core$IRenderState$ = true;
grover.core.t10045.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__10048){var self__ = this;
var map__10049 = p__10048;var map__10049__$1 = ((cljs.core.seq_QMARK_.call(null,map__10049))?cljs.core.apply.call(null,cljs.core.hash_map,map__10049):map__10049);var state = map__10049__$1;var mouse_wheel_chan = cljs.core.get.call(null,map__10049__$1,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var this$__$1 = this;return React.DOM.span(null,React.DOM.svg({"ref": new cljs.core.Keyword(null,"viewport","viewport",2210589720), "width": 600, "height": 400, "style": {"border": "solid black 1px"}, "onWheel": (function (p1__9982_SHARP_){p1__9982_SHARP_.preventDefault();
return cljs.core.async.put_BANG_.call(null,mouse_wheel_chan,p1__9982_SHARP_.deltaY);
})},React.DOM.g({"ref": new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987), "transform": [cljs.core.str("matrix("),cljs.core.str(clojure.string.join.call(null,",",self__.svg_view_transformation)),cljs.core.str(")")].join('')},sablono.interpreter.interpret.call(null,grover.core.draw_composition.call(null,self__.composition)))));
});
grover.core.t10045.prototype.om$core$IDidMount$ = true;
grover.core.t10045.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var mouse_pos_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),goog.events.EventType.MOUSEMOVE)], null));var relative_mouse_pos_chan = cljs.core.async.map.call(null,((function (mouse_pos_chan){
return (function (p__10050){var vec__10051 = p__10050;var x = cljs.core.nth.call(null,vec__10051,0,null);var y = cljs.core.nth.call(null,vec__10051,1,null);var viewport_pos = goog.style.getClientPosition(om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - viewport_pos.x),(y - viewport_pos.y)], null);
});})(mouse_pos_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_pos_chan], null));var mouse_wheel_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_10079){var state_val_10080 = (state_10079[1]);if((state_val_10080 === 1))
{var inst_10052 = [0,0];var inst_10053 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10052,null));var inst_10054 = inst_10053;var state_10079__$1 = (function (){var statearr_10081 = state_10079;(statearr_10081[7] = inst_10054);
return statearr_10081;
})();var statearr_10082_10104 = state_10079__$1;(statearr_10082_10104[2] = null);
(statearr_10082_10104[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 2))
{var inst_10057 = [relative_mouse_pos_chan,mouse_wheel_chan];var inst_10058 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10057,null));var state_10079__$1 = state_10079;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10079__$1,4,inst_10058);
} else
{if((state_val_10080 === 3))
{var inst_10077 = (state_10079[2]);var state_10079__$1 = state_10079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10079__$1,inst_10077);
} else
{if((state_val_10080 === 4))
{var inst_10062 = (state_10079[8]);var inst_10060 = (state_10079[9]);var inst_10060__$1 = (state_10079[2]);var inst_10061 = cljs.core.nth.call(null,inst_10060__$1,0,null);var inst_10062__$1 = cljs.core.nth.call(null,inst_10060__$1,1,null);var inst_10063 = cljs.core._EQ_.call(null,inst_10062__$1,mouse_wheel_chan);var state_10079__$1 = (function (){var statearr_10084 = state_10079;(statearr_10084[8] = inst_10062__$1);
(statearr_10084[10] = inst_10061);
(statearr_10084[9] = inst_10060__$1);
return statearr_10084;
})();if(inst_10063)
{var statearr_10085_10105 = state_10079__$1;(statearr_10085_10105[1] = 5);
} else
{var statearr_10086_10106 = state_10079__$1;(statearr_10086_10106[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 5))
{var inst_10054 = (state_10079[7]);var inst_10062 = (state_10079[8]);var inst_10061 = (state_10079[10]);var inst_10060 = (state_10079[9]);var inst_10065 = (function (){var ch = inst_10062;var value = inst_10061;var vec__10056 = inst_10060;var mouse_pos = inst_10054;return ((function (ch,value,vec__10056,mouse_pos,inst_10054,inst_10062,inst_10061,inst_10060,state_val_10080){
return (function (m){var vec__10087 = mouse_pos;var mouse_x = cljs.core.nth.call(null,vec__10087,0,null);var mouse_y = cljs.core.nth.call(null,vec__10087,1,null);return grover.core.translate.call(null,grover.core.scale.call(null,grover.core.translate.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mouse_x),(- mouse_y)], null)),(1 - (value / 100))),mouse_pos);
});
;})(ch,value,vec__10056,mouse_pos,inst_10054,inst_10062,inst_10061,inst_10060,state_val_10080))
})();var inst_10066 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_10065);var tmp10083 = inst_10054;var inst_10054__$1 = tmp10083;var state_10079__$1 = (function (){var statearr_10088 = state_10079;(statearr_10088[7] = inst_10054__$1);
(statearr_10088[11] = inst_10066);
return statearr_10088;
})();var statearr_10089_10107 = state_10079__$1;(statearr_10089_10107[2] = null);
(statearr_10089_10107[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 6))
{var state_10079__$1 = state_10079;if(new cljs.core.Keyword(null,"default","default",2558708147))
{var statearr_10090_10108 = state_10079__$1;(statearr_10090_10108[1] = 8);
} else
{var statearr_10091_10109 = state_10079__$1;(statearr_10091_10109[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 7))
{var inst_10075 = (state_10079[2]);var state_10079__$1 = state_10079;var statearr_10092_10110 = state_10079__$1;(statearr_10092_10110[2] = inst_10075);
(statearr_10092_10110[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 8))
{var inst_10061 = (state_10079[10]);var inst_10054 = inst_10061;var state_10079__$1 = (function (){var statearr_10093 = state_10079;(statearr_10093[7] = inst_10054);
return statearr_10093;
})();var statearr_10094_10111 = state_10079__$1;(statearr_10094_10111[2] = null);
(statearr_10094_10111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 9))
{var state_10079__$1 = state_10079;var statearr_10095_10112 = state_10079__$1;(statearr_10095_10112[2] = null);
(statearr_10095_10112[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10080 === 10))
{var inst_10073 = (state_10079[2]);var state_10079__$1 = state_10079;var statearr_10096_10113 = state_10079__$1;(statearr_10096_10113[2] = inst_10073);
(statearr_10096_10113[1] = 7);
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
var state_machine__6812__auto____0 = (function (){var statearr_10100 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10100[0] = state_machine__6812__auto__);
(statearr_10100[1] = 1);
return statearr_10100;
});
var state_machine__6812__auto____1 = (function (state_10079){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_10079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e10101){if((e10101 instanceof Object))
{var ex__6815__auto__ = e10101;var statearr_10102_10114 = state_10079;(statearr_10102_10114[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10115 = state_10079;
state_10079 = G__10115;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_10079){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_10079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_10103 = f__6827__auto__.call(null);(statearr_10103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_10103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
grover.core.t10045.prototype.om$core$IInitState$ = true;
grover.core.t10045.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182),cljs.core.async.chan.call(null)], null);
});
grover.core.t10045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10047){var self__ = this;
var _10047__$1 = this;return self__.meta10046;
});
grover.core.t10045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10047,meta10046__$1){var self__ = this;
var _10047__$1 = this;return (new grover.core.t10045(self__.composition,self__.view_transformation,self__.svg_view_transformation,self__.app,self__.map__10044,self__.owner,self__.p__9983,self__.view_pane_view,meta10046__$1));
});
grover.core.__GT_t10045 = (function __GT_t10045(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__10044__$2,owner__$1,p__9983__$1,view_pane_view__$1,meta10046){return (new grover.core.t10045(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__10044__$2,owner__$1,p__9983__$1,view_pane_view__$1,meta10046));
});
}
return (new grover.core.t10045(composition,view_transformation,svg_view_transformation,app,map__10044__$1,owner,p__9983,view_pane_view,null));
});
grover.core.app_view = (function app_view(p__10116,owner){var map__10133 = p__10116;var map__10133__$1 = ((cljs.core.seq_QMARK_.call(null,map__10133))?cljs.core.apply.call(null,cljs.core.hash_map,map__10133):map__10133);var app = map__10133__$1;var view_transformation = cljs.core.get.call(null,map__10133__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var views = cljs.core.get.call(null,map__10133__$1,new cljs.core.Keyword(null,"views","views",1126108640));if(typeof grover.core.t10134 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t10134 = (function (views,view_transformation,app,map__10133,owner,p__10116,app_view,meta10135){
this.views = views;
this.view_transformation = view_transformation;
this.app = app;
this.map__10133 = map__10133;
this.owner = owner;
this.p__10116 = p__10116;
this.app_view = app_view;
this.meta10135 = meta10135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t10134.cljs$lang$type = true;
grover.core.t10134.cljs$lang$ctorStr = "grover.core/t10134";
grover.core.t10134.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t10134");
});
grover.core.t10134.prototype.om$core$IRenderState$ = true;
grover.core.t10134.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Grover"),React.DOM.ul(null,React.DOM.li(null,"About 150 lines of ClojureScript"),React.DOM.li(null,"No tests yet"),React.DOM.li(null,"Mousewheel controls zoom"),React.DOM.li(null,"Same zoom transformation can be used in mutiple viewports"),React.DOM.li(null,"Mouse panning (dragging) doesn't work yet"),React.DOM.li(null,"Try zooming in at one mouse location and zoom out at another - the image doesn't jump around"),React.DOM.li(null,"Note that the fox (or red panda?) has two different images under its paw")),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__10141(s__10142){return (new cljs.core.LazySeq(null,(function (){var s__10142__$1 = s__10142;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10142__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var map__10148 = cljs.core.first.call(null,xs__4579__auto__);var map__10148__$1 = ((cljs.core.seq_QMARK_.call(null,map__10148))?cljs.core.apply.call(null,cljs.core.hash_map,map__10148):map__10148);var view = map__10148__$1;var compositions = cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,"compositions","compositions",777068411));var view_transformation__$2 = cljs.core.get.call(null,map__10148__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var iterys__4156__auto__ = ((function (s__10142__$1,map__10148,map__10148__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function iter__10143(s__10144){return (new cljs.core.LazySeq(null,((function (s__10142__$1,map__10148,map__10148__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__10144__$1 = s__10144;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__10144__$1);if(temp__4092__auto____$1)
{var s__10144__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10144__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__10144__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__10146 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__10145 = 0;while(true){
if((i__10145 < size__4159__auto__))
{var composition = cljs.core._nth.call(null,c__4158__auto__,i__10145);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);cljs.core.chunk_append.call(null,b__10146,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform));
{
var G__10149 = (i__10145 + 1);
i__10145 = G__10149;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10146),iter__10143.call(null,cljs.core.chunk_rest.call(null,s__10144__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10146),null);
}
} else
{var composition = cljs.core.first.call(null,s__10144__$2);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);return cljs.core.cons.call(null,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform),iter__10143.call(null,cljs.core.rest.call(null,s__10144__$2)));
}
} else
{return null;
}
break;
}
});})(s__10142__$1,map__10148,map__10148__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__10142__$1,map__10148,map__10148__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,compositions));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__10141.call(null,cljs.core.rest.call(null,s__10142__$1)));
} else
{{
var G__10150 = cljs.core.rest.call(null,s__10142__$1);
s__10142__$1 = G__10150;
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
grover.core.t10134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10136){var self__ = this;
var _10136__$1 = this;return self__.meta10135;
});
grover.core.t10134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10136,meta10135__$1){var self__ = this;
var _10136__$1 = this;return (new grover.core.t10134(self__.views,self__.view_transformation,self__.app,self__.map__10133,self__.owner,self__.p__10116,self__.app_view,meta10135__$1));
});
grover.core.__GT_t10134 = (function __GT_t10134(views__$1,view_transformation__$1,app__$1,map__10133__$2,owner__$1,p__10116__$1,app_view__$1,meta10135){return (new grover.core.t10134(views__$1,view_transformation__$1,app__$1,map__10133__$2,owner__$1,p__10116__$1,app_view__$1,meta10135));
});
}
return (new grover.core.t10134(views,view_transformation,app,map__10133__$1,owner,p__10116,app_view,null));
});
om.core.root.call(null,grover.core.app_view,grover.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map