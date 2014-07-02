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
grover.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__41666_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__41666_SHARP_);
}));
return out;
});
grover.core.image = (function image(attrs){return React.DOM.g({"dangerouslySetInnerHTML": {"__html": [cljs.core.str("<image "),cljs.core.str(cljs.core.reduce.call(null,(function (s,p__41669){var vec__41670 = p__41669;var k = cljs.core.nth.call(null,vec__41670,0,null);var v = cljs.core.nth.call(null,vec__41670,1,null);return [cljs.core.str(s),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str("\""),cljs.core.str(v),cljs.core.str("\"")].join('');
}),"",attrs)),cljs.core.str(" />")].join('')}});
});
grover.core.scale = (function scale(m,amount){return (new goog.math.Matrix([[amount,0,0],[0,amount,0],[0,0,1]])).multiply(m);
});
grover.core.translate = (function translate(m,p__41671){var vec__41673 = p__41671;var x = cljs.core.nth.call(null,vec__41673,0,null);var y = cljs.core.nth.call(null,vec__41673,1,null);return (new goog.math.Matrix([[1,0,x],[0,1,y],[0,0,1]])).multiply(m);
});
grover.core.draw_composition = (function draw_composition(p__41674){var map__41693 = p__41674;var map__41693__$1 = ((cljs.core.seq_QMARK_.call(null,map__41693))?cljs.core.apply.call(null,cljs.core.hash_map,map__41693):map__41693);var children = cljs.core.get.call(null,map__41693__$1,new cljs.core.Keyword(null,"children","children",2673430897));var images = cljs.core.get.call(null,map__41693__$1,new cljs.core.Keyword(null,"images","images",4123620842));var transform = cljs.core.get.call(null,map__41693__$1,new cljs.core.Keyword(null,"transform","transform",2066570974));var attrs41694 = (cljs.core.truth_(transform)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",2066570974),transform], null):null);if(cljs.core.map_QMARK_.call(null,attrs41694))
{return React.DOM.g(sablono.interpreter.attributes.call(null,attrs41694),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__41695(s__41696){return (new cljs.core.LazySeq(null,(function (){var s__41696__$1 = s__41696;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__41696__$1);if(temp__4092__auto__)
{var s__41696__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41696__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__41696__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__41698 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__41697 = 0;while(true){
if((i__41697 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__41697);cljs.core.chunk_append.call(null,b__41698,grover.core.image.call(null,image_data));
{
var G__41711 = (i__41697 + 1);
i__41697 = G__41711;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41698),iter__41695.call(null,cljs.core.chunk_rest.call(null,s__41696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41698),null);
}
} else
{var image_data = cljs.core.first.call(null,s__41696__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__41695.call(null,cljs.core.rest.call(null,s__41696__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__41699(s__41700){return (new cljs.core.LazySeq(null,(function (){var s__41700__$1 = s__41700;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__41700__$1);if(temp__4092__auto__)
{var s__41700__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41700__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__41700__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__41702 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__41701 = 0;while(true){
if((i__41701 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__41701);cljs.core.chunk_append.call(null,b__41702,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__41712 = (i__41701 + 1);
i__41701 = G__41712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41702),iter__41699.call(null,cljs.core.chunk_rest.call(null,s__41700__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41702),null);
}
} else
{var child = cljs.core.first.call(null,s__41700__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__41699.call(null,cljs.core.rest.call(null,s__41700__$2)));
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
{return React.DOM.g(null,sablono.interpreter.interpret.call(null,attrs41694),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__41703(s__41704){return (new cljs.core.LazySeq(null,(function (){var s__41704__$1 = s__41704;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__41704__$1);if(temp__4092__auto__)
{var s__41704__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41704__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__41704__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__41706 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__41705 = 0;while(true){
if((i__41705 < size__4159__auto__))
{var image_data = cljs.core._nth.call(null,c__4158__auto__,i__41705);cljs.core.chunk_append.call(null,b__41706,grover.core.image.call(null,image_data));
{
var G__41713 = (i__41705 + 1);
i__41705 = G__41713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41706),iter__41703.call(null,cljs.core.chunk_rest.call(null,s__41704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41706),null);
}
} else
{var image_data = cljs.core.first.call(null,s__41704__$2);return cljs.core.cons.call(null,grover.core.image.call(null,image_data),iter__41703.call(null,cljs.core.rest.call(null,s__41704__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4160__auto__.call(null,images);
})())),cljs.core.into_array.call(null,(function (){var iter__4160__auto__ = (function iter__41707(s__41708){return (new cljs.core.LazySeq(null,(function (){var s__41708__$1 = s__41708;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__41708__$1);if(temp__4092__auto__)
{var s__41708__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41708__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__41708__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__41710 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__41709 = 0;while(true){
if((i__41709 < size__4159__auto__))
{var child = cljs.core._nth.call(null,c__4158__auto__,i__41709);cljs.core.chunk_append.call(null,b__41710,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)));
{
var G__41714 = (i__41709 + 1);
i__41709 = G__41714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41710),iter__41707.call(null,cljs.core.chunk_rest.call(null,s__41708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41710),null);
}
} else
{var child = cljs.core.first.call(null,s__41708__$2);return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,draw_composition.call(null,child)),iter__41707.call(null,cljs.core.rest.call(null,s__41708__$2)));
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
grover.core.view_pane_view = (function view_pane_view(p__41716,owner){var map__41777 = p__41716;var map__41777__$1 = ((cljs.core.seq_QMARK_.call(null,map__41777))?cljs.core.apply.call(null,cljs.core.hash_map,map__41777):map__41777);var app = map__41777__$1;var svg_view_transformation = cljs.core.get.call(null,map__41777__$1,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626));var view_transformation = cljs.core.get.call(null,map__41777__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var composition = cljs.core.get.call(null,map__41777__$1,new cljs.core.Keyword(null,"composition","composition",4469947676));if(typeof grover.core.t41778 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t41778 = (function (composition,view_transformation,svg_view_transformation,app,map__41777,owner,p__41716,view_pane_view,meta41779){
this.composition = composition;
this.view_transformation = view_transformation;
this.svg_view_transformation = svg_view_transformation;
this.app = app;
this.map__41777 = map__41777;
this.owner = owner;
this.p__41716 = p__41716;
this.view_pane_view = view_pane_view;
this.meta41779 = meta41779;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t41778.cljs$lang$type = true;
grover.core.t41778.cljs$lang$ctorStr = "grover.core/t41778";
grover.core.t41778.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t41778");
});
grover.core.t41778.prototype.om$core$IRenderState$ = true;
grover.core.t41778.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__41781){var self__ = this;
var map__41782 = p__41781;var map__41782__$1 = ((cljs.core.seq_QMARK_.call(null,map__41782))?cljs.core.apply.call(null,cljs.core.hash_map,map__41782):map__41782);var state = map__41782__$1;var mouse_wheel_chan = cljs.core.get.call(null,map__41782__$1,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var this$__$1 = this;return React.DOM.span(null,React.DOM.svg({"ref": new cljs.core.Keyword(null,"viewport","viewport",2210589720), "width": 600, "height": 400, "style": {"border": "solid black 1px"}, "onWheel": (function (p1__41715_SHARP_){p1__41715_SHARP_.preventDefault();
return cljs.core.async.put_BANG_.call(null,mouse_wheel_chan,p1__41715_SHARP_.deltaY);
})},React.DOM.g({"ref": new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987), "transform": [cljs.core.str("matrix("),cljs.core.str(clojure.string.join.call(null,",",self__.svg_view_transformation)),cljs.core.str(")")].join('')},sablono.interpreter.interpret.call(null,grover.core.draw_composition.call(null,self__.composition)))));
});
grover.core.t41778.prototype.om$core$IDidMount$ = true;
grover.core.t41778.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var mouse_pos_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [grover.core.listen.call(null,om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)),goog.events.EventType.MOUSEMOVE)], null));var relative_mouse_pos_chan = cljs.core.async.map.call(null,((function (mouse_pos_chan){
return (function (p__41783){var vec__41784 = p__41783;var x = cljs.core.nth.call(null,vec__41784,0,null);var y = cljs.core.nth.call(null,vec__41784,1,null);var viewport_pos = goog.style.getClientPosition(om.core.get_node.call(null,self__.owner,new cljs.core.Keyword(null,"viewport","viewport",2210589720)));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - viewport_pos.x),(y - viewport_pos.y)], null);
});})(mouse_pos_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_pos_chan], null));var mouse_wheel_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182));var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_41812){var state_val_41813 = (state_41812[1]);if((state_val_41813 === 1))
{var inst_41785 = [0,0];var inst_41786 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_41785,null));var inst_41787 = inst_41786;var state_41812__$1 = (function (){var statearr_41814 = state_41812;(statearr_41814[7] = inst_41787);
return statearr_41814;
})();var statearr_41815_41837 = state_41812__$1;(statearr_41815_41837[2] = null);
(statearr_41815_41837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 2))
{var inst_41790 = [relative_mouse_pos_chan,mouse_wheel_chan];var inst_41791 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_41790,null));var state_41812__$1 = state_41812;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_41812__$1,4,inst_41791);
} else
{if((state_val_41813 === 3))
{var inst_41810 = (state_41812[2]);var state_41812__$1 = state_41812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41812__$1,inst_41810);
} else
{if((state_val_41813 === 4))
{var inst_41795 = (state_41812[8]);var inst_41793 = (state_41812[9]);var inst_41793__$1 = (state_41812[2]);var inst_41794 = cljs.core.nth.call(null,inst_41793__$1,0,null);var inst_41795__$1 = cljs.core.nth.call(null,inst_41793__$1,1,null);var inst_41796 = cljs.core._EQ_.call(null,inst_41795__$1,mouse_wheel_chan);var state_41812__$1 = (function (){var statearr_41817 = state_41812;(statearr_41817[10] = inst_41794);
(statearr_41817[8] = inst_41795__$1);
(statearr_41817[9] = inst_41793__$1);
return statearr_41817;
})();if(inst_41796)
{var statearr_41818_41838 = state_41812__$1;(statearr_41818_41838[1] = 5);
} else
{var statearr_41819_41839 = state_41812__$1;(statearr_41819_41839[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 5))
{var inst_41787 = (state_41812[7]);var inst_41794 = (state_41812[10]);var inst_41795 = (state_41812[8]);var inst_41793 = (state_41812[9]);var inst_41798 = (function (){var ch = inst_41795;var value = inst_41794;var vec__41789 = inst_41793;var mouse_pos = inst_41787;return ((function (ch,value,vec__41789,mouse_pos,inst_41787,inst_41794,inst_41795,inst_41793,state_val_41813){
return (function (m){var vec__41820 = mouse_pos;var mouse_x = cljs.core.nth.call(null,vec__41820,0,null);var mouse_y = cljs.core.nth.call(null,vec__41820,1,null);return grover.core.translate.call(null,grover.core.scale.call(null,grover.core.translate.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mouse_x),(- mouse_y)], null)),(1 - (value / 100))),mouse_pos);
});
;})(ch,value,vec__41789,mouse_pos,inst_41787,inst_41794,inst_41795,inst_41793,state_val_41813))
})();var inst_41799 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987),inst_41798);var tmp41816 = inst_41787;var inst_41787__$1 = tmp41816;var state_41812__$1 = (function (){var statearr_41821 = state_41812;(statearr_41821[7] = inst_41787__$1);
(statearr_41821[11] = inst_41799);
return statearr_41821;
})();var statearr_41822_41840 = state_41812__$1;(statearr_41822_41840[2] = null);
(statearr_41822_41840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 6))
{var state_41812__$1 = state_41812;if(new cljs.core.Keyword(null,"default","default",2558708147))
{var statearr_41823_41841 = state_41812__$1;(statearr_41823_41841[1] = 8);
} else
{var statearr_41824_41842 = state_41812__$1;(statearr_41824_41842[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 7))
{var inst_41808 = (state_41812[2]);var state_41812__$1 = state_41812;var statearr_41825_41843 = state_41812__$1;(statearr_41825_41843[2] = inst_41808);
(statearr_41825_41843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 8))
{var inst_41794 = (state_41812[10]);var inst_41787 = inst_41794;var state_41812__$1 = (function (){var statearr_41826 = state_41812;(statearr_41826[7] = inst_41787);
return statearr_41826;
})();var statearr_41827_41844 = state_41812__$1;(statearr_41827_41844[2] = null);
(statearr_41827_41844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 9))
{var state_41812__$1 = state_41812;var statearr_41828_41845 = state_41812__$1;(statearr_41828_41845[2] = null);
(statearr_41828_41845[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41813 === 10))
{var inst_41806 = (state_41812[2]);var state_41812__$1 = state_41812;var statearr_41829_41846 = state_41812__$1;(statearr_41829_41846[2] = inst_41806);
(statearr_41829_41846[1] = 7);
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
var state_machine__6812__auto____0 = (function (){var statearr_41833 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41833[0] = state_machine__6812__auto__);
(statearr_41833[1] = 1);
return statearr_41833;
});
var state_machine__6812__auto____1 = (function (state_41812){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_41812);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e41834){if((e41834 instanceof Object))
{var ex__6815__auto__ = e41834;var statearr_41835_41847 = state_41812;(statearr_41835_41847[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41834;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41848 = state_41812;
state_41812 = G__41848;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_41812){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_41812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_41836 = f__6827__auto__.call(null);(statearr_41836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_41836;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
grover.core.t41778.prototype.om$core$IInitState$ = true;
grover.core.t41778.prototype.om$core$IInitState$init_state$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel-chan","mouse-wheel-chan",834737182),cljs.core.async.chan.call(null)], null);
});
grover.core.t41778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41780){var self__ = this;
var _41780__$1 = this;return self__.meta41779;
});
grover.core.t41778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41780,meta41779__$1){var self__ = this;
var _41780__$1 = this;return (new grover.core.t41778(self__.composition,self__.view_transformation,self__.svg_view_transformation,self__.app,self__.map__41777,self__.owner,self__.p__41716,self__.view_pane_view,meta41779__$1));
});
grover.core.__GT_t41778 = (function __GT_t41778(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__41777__$2,owner__$1,p__41716__$1,view_pane_view__$1,meta41779){return (new grover.core.t41778(composition__$1,view_transformation__$1,svg_view_transformation__$1,app__$1,map__41777__$2,owner__$1,p__41716__$1,view_pane_view__$1,meta41779));
});
}
return (new grover.core.t41778(composition,view_transformation,svg_view_transformation,app,map__41777__$1,owner,p__41716,view_pane_view,null));
});
grover.core.app_view = (function app_view(p__41849,owner){var map__41866 = p__41849;var map__41866__$1 = ((cljs.core.seq_QMARK_.call(null,map__41866))?cljs.core.apply.call(null,cljs.core.hash_map,map__41866):map__41866);var app = map__41866__$1;var view_transformation = cljs.core.get.call(null,map__41866__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var views = cljs.core.get.call(null,map__41866__$1,new cljs.core.Keyword(null,"views","views",1126108640));if(typeof grover.core.t41867 !== 'undefined')
{} else
{
/**
* @constructor
*/
grover.core.t41867 = (function (views,view_transformation,app,map__41866,owner,p__41849,app_view,meta41868){
this.views = views;
this.view_transformation = view_transformation;
this.app = app;
this.map__41866 = map__41866;
this.owner = owner;
this.p__41849 = p__41849;
this.app_view = app_view;
this.meta41868 = meta41868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
grover.core.t41867.cljs$lang$type = true;
grover.core.t41867.cljs$lang$ctorStr = "grover.core/t41867";
grover.core.t41867.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"grover.core/t41867");
});
grover.core.t41867.prototype.om$core$IRenderState$ = true;
grover.core.t41867.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Grover"),React.DOM.ul(null,React.DOM.li(null,"About 150 lines of ClojureScript"),React.DOM.li(null,"No tests yet"),React.DOM.li(null,"Mousewheel controls zoom"),React.DOM.li(null,"Same zoom transformation can be used in mutiple viewports"),React.DOM.li(null,"Mouse panning (dragging) doesn't work yet"),React.DOM.li(null,"Try zooming in at one mouse location and zoom out at another - the image doesn't jump around"),React.DOM.li(null,"Note that the fox (or red panda?) has two different images under it")),sablono.interpreter.interpret.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(function (){var iter__4160__auto__ = (function iter__41874(s__41875){return (new cljs.core.LazySeq(null,(function (){var s__41875__$1 = s__41875;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__41875__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var map__41881 = cljs.core.first.call(null,xs__4579__auto__);var map__41881__$1 = ((cljs.core.seq_QMARK_.call(null,map__41881))?cljs.core.apply.call(null,cljs.core.hash_map,map__41881):map__41881);var view = map__41881__$1;var compositions = cljs.core.get.call(null,map__41881__$1,new cljs.core.Keyword(null,"compositions","compositions",777068411));var view_transformation__$2 = cljs.core.get.call(null,map__41881__$1,new cljs.core.Keyword(null,"view-transformation","view-transformation",3197581987));var iterys__4156__auto__ = ((function (s__41875__$1,map__41881,map__41881__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function iter__41876(s__41877){return (new cljs.core.LazySeq(null,((function (s__41875__$1,map__41881,map__41881__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__){
return (function (){var s__41877__$1 = s__41877;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__41877__$1);if(temp__4092__auto____$1)
{var s__41877__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__41877__$2))
{var c__4158__auto__ = cljs.core.chunk_first.call(null,s__41877__$2);var size__4159__auto__ = cljs.core.count.call(null,c__4158__auto__);var b__41879 = cljs.core.chunk_buffer.call(null,size__4159__auto__);if((function (){var i__41878 = 0;while(true){
if((i__41878 < size__4159__auto__))
{var composition = cljs.core._nth.call(null,c__4158__auto__,i__41878);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);cljs.core.chunk_append.call(null,b__41879,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform));
{
var G__41882 = (i__41878 + 1);
i__41878 = G__41882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41879),iter__41876.call(null,cljs.core.chunk_rest.call(null,s__41877__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41879),null);
}
} else
{var composition = cljs.core.first.call(null,s__41877__$2);var svg_view_transformation = cljs.core.apply.call(null,cljs.core.mapcat,cljs.core.list,cljs.core.take.call(null,2,view_transformation__$2.toArray()));var app_with_svg_transform = cljs.core.assoc.call(null,view,new cljs.core.Keyword(null,"svg-view-transformation","svg-view-transformation",3716189626),svg_view_transformation,new cljs.core.Keyword(null,"composition","composition",4469947676),composition);return cljs.core.cons.call(null,om.core.build.call(null,grover.core.view_pane_view,app_with_svg_transform),iter__41876.call(null,cljs.core.rest.call(null,s__41877__$2)));
}
} else
{return null;
}
break;
}
});})(s__41875__$1,map__41881,map__41881__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
,null,null));
});})(s__41875__$1,map__41881,map__41881__$1,view,compositions,view_transformation__$2,xs__4579__auto__,temp__4092__auto__))
;var fs__4157__auto__ = cljs.core.seq.call(null,iterys__4156__auto__.call(null,compositions));if(fs__4157__auto__)
{return cljs.core.concat.call(null,fs__4157__auto__,iter__41874.call(null,cljs.core.rest.call(null,s__41875__$1)));
} else
{{
var G__41883 = cljs.core.rest.call(null,s__41875__$1);
s__41875__$1 = G__41883;
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
grover.core.t41867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41869){var self__ = this;
var _41869__$1 = this;return self__.meta41868;
});
grover.core.t41867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41869,meta41868__$1){var self__ = this;
var _41869__$1 = this;return (new grover.core.t41867(self__.views,self__.view_transformation,self__.app,self__.map__41866,self__.owner,self__.p__41849,self__.app_view,meta41868__$1));
});
grover.core.__GT_t41867 = (function __GT_t41867(views__$1,view_transformation__$1,app__$1,map__41866__$2,owner__$1,p__41849__$1,app_view__$1,meta41868){return (new grover.core.t41867(views__$1,view_transformation__$1,app__$1,map__41866__$2,owner__$1,p__41849__$1,app_view__$1,meta41868));
});
}
return (new grover.core.t41867(views,view_transformation,app,map__41866__$1,owner,p__41849,app_view,null));
});
om.core.root.call(null,grover.core.app_view,grover.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map