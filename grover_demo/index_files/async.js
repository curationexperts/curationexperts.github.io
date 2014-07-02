// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11724 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11724 = (function (f,fn_handler,meta11725){
this.f = f;
this.fn_handler = fn_handler;
this.meta11725 = meta11725;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11724.cljs$lang$type = true;
cljs.core.async.t11724.cljs$lang$ctorStr = "cljs.core.async/t11724";
cljs.core.async.t11724.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11724");
});
cljs.core.async.t11724.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11726){var self__ = this;
var _11726__$1 = this;return self__.meta11725;
});
cljs.core.async.t11724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11726,meta11725__$1){var self__ = this;
var _11726__$1 = this;return (new cljs.core.async.t11724(self__.f,self__.fn_handler,meta11725__$1));
});
cljs.core.async.__GT_t11724 = (function __GT_t11724(f__$1,fn_handler__$1,meta11725){return (new cljs.core.async.t11724(f__$1,fn_handler__$1,meta11725));
});
}
return (new cljs.core.async.t11724(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11728 = buff;if(G__11728)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11728.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11728.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11728);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11728);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11729 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11729);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11729);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3431__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11730 = n;var x_11731 = 0;while(true){
if((x_11731 < n__4291__auto___11730))
{(a[x_11731] = 0);
{
var G__11732 = (x_11731 + 1);
x_11731 = G__11732;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11733 = (i + 1);
i = G__11733;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11737 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11737 = (function (flag,alt_flag,meta11738){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11738 = meta11738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11737.cljs$lang$type = true;
cljs.core.async.t11737.cljs$lang$ctorStr = "cljs.core.async/t11737";
cljs.core.async.t11737.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11737");
});
cljs.core.async.t11737.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11739){var self__ = this;
var _11739__$1 = this;return self__.meta11738;
});
cljs.core.async.t11737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11739,meta11738__$1){var self__ = this;
var _11739__$1 = this;return (new cljs.core.async.t11737(self__.flag,self__.alt_flag,meta11738__$1));
});
cljs.core.async.__GT_t11737 = (function __GT_t11737(flag__$1,alt_flag__$1,meta11738){return (new cljs.core.async.t11737(flag__$1,alt_flag__$1,meta11738));
});
}
return (new cljs.core.async.t11737(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11743 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11743 = (function (cb,flag,alt_handler,meta11744){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11744 = meta11744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11743.cljs$lang$type = true;
cljs.core.async.t11743.cljs$lang$ctorStr = "cljs.core.async/t11743";
cljs.core.async.t11743.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11743");
});
cljs.core.async.t11743.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11745){var self__ = this;
var _11745__$1 = this;return self__.meta11744;
});
cljs.core.async.t11743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11745,meta11744__$1){var self__ = this;
var _11745__$1 = this;return (new cljs.core.async.t11743(self__.cb,self__.flag,self__.alt_handler,meta11744__$1));
});
cljs.core.async.__GT_t11743 = (function __GT_t11743(cb__$1,flag__$1,alt_handler__$1,meta11744){return (new cljs.core.async.t11743(cb__$1,flag__$1,alt_handler__$1,meta11744));
});
}
return (new cljs.core.async.t11743(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11746_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11746_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3443__auto__ = wport;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11747 = (i + 1);
i = G__11747;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3443__auto__ = ret;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3431__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3431__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11748){var map__11750 = p__11748;var map__11750__$1 = ((cljs.core.seq_QMARK_.call(null,map__11750))?cljs.core.apply.call(null,cljs.core.hash_map,map__11750):map__11750);var opts = map__11750__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11748 = null;if (arguments.length > 1) {
  p__11748 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11748);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11751){
var ports = cljs.core.first(arglist__11751);
var p__11748 = cljs.core.rest(arglist__11751);
return alts_BANG___delegate(ports,p__11748);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11759 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11759 = (function (ch,f,map_LT_,meta11760){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11760 = meta11760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11759.cljs$lang$type = true;
cljs.core.async.t11759.cljs$lang$ctorStr = "cljs.core.async/t11759";
cljs.core.async.t11759.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11759");
});
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11762 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11762 = (function (fn1,_,meta11760,ch,f,map_LT_,meta11763){
this.fn1 = fn1;
this._ = _;
this.meta11760 = meta11760;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11763 = meta11763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11762.cljs$lang$type = true;
cljs.core.async.t11762.cljs$lang$ctorStr = "cljs.core.async/t11762";
cljs.core.async.t11762.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11762");
});
cljs.core.async.t11762.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11762.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11762.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11762.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11752_SHARP_){return f1.call(null,(((p1__11752_SHARP_ == null))?null:self__.f.call(null,p1__11752_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11764){var self__ = this;
var _11764__$1 = this;return self__.meta11763;
});
cljs.core.async.t11762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11764,meta11763__$1){var self__ = this;
var _11764__$1 = this;return (new cljs.core.async.t11762(self__.fn1,self__._,self__.meta11760,self__.ch,self__.f,self__.map_LT_,meta11763__$1));
});
cljs.core.async.__GT_t11762 = (function __GT_t11762(fn1__$1,___$2,meta11760__$1,ch__$2,f__$2,map_LT___$2,meta11763){return (new cljs.core.async.t11762(fn1__$1,___$2,meta11760__$1,ch__$2,f__$2,map_LT___$2,meta11763));
});
}
return (new cljs.core.async.t11762(fn1,___$1,self__.meta11760,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3431__auto__ = ret;if(cljs.core.truth_(and__3431__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3431__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11761){var self__ = this;
var _11761__$1 = this;return self__.meta11760;
});
cljs.core.async.t11759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11761,meta11760__$1){var self__ = this;
var _11761__$1 = this;return (new cljs.core.async.t11759(self__.ch,self__.f,self__.map_LT_,meta11760__$1));
});
cljs.core.async.__GT_t11759 = (function __GT_t11759(ch__$1,f__$1,map_LT___$1,meta11760){return (new cljs.core.async.t11759(ch__$1,f__$1,map_LT___$1,meta11760));
});
}
return (new cljs.core.async.t11759(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11768 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11768 = (function (ch,f,map_GT_,meta11769){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11769 = meta11769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11768.cljs$lang$type = true;
cljs.core.async.t11768.cljs$lang$ctorStr = "cljs.core.async/t11768";
cljs.core.async.t11768.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11768");
});
cljs.core.async.t11768.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11768.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11768.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11768.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11768.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11768.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11770){var self__ = this;
var _11770__$1 = this;return self__.meta11769;
});
cljs.core.async.t11768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11770,meta11769__$1){var self__ = this;
var _11770__$1 = this;return (new cljs.core.async.t11768(self__.ch,self__.f,self__.map_GT_,meta11769__$1));
});
cljs.core.async.__GT_t11768 = (function __GT_t11768(ch__$1,f__$1,map_GT___$1,meta11769){return (new cljs.core.async.t11768(ch__$1,f__$1,map_GT___$1,meta11769));
});
}
return (new cljs.core.async.t11768(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11774 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11774 = (function (ch,p,filter_GT_,meta11775){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11775 = meta11775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11774.cljs$lang$type = true;
cljs.core.async.t11774.cljs$lang$ctorStr = "cljs.core.async/t11774";
cljs.core.async.t11774.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11774");
});
cljs.core.async.t11774.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11774.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11774.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11774.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11774.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11774.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11776){var self__ = this;
var _11776__$1 = this;return self__.meta11775;
});
cljs.core.async.t11774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11776,meta11775__$1){var self__ = this;
var _11776__$1 = this;return (new cljs.core.async.t11774(self__.ch,self__.p,self__.filter_GT_,meta11775__$1));
});
cljs.core.async.__GT_t11774 = (function __GT_t11774(ch__$1,p__$1,filter_GT___$1,meta11775){return (new cljs.core.async.t11774(ch__$1,p__$1,filter_GT___$1,meta11775));
});
}
return (new cljs.core.async.t11774(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___11859 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_11838){var state_val_11839 = (state_11838[1]);if((state_val_11839 === 1))
{var state_11838__$1 = state_11838;var statearr_11840_11860 = state_11838__$1;(statearr_11840_11860[2] = null);
(statearr_11840_11860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 2))
{var state_11838__$1 = state_11838;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11838__$1,4,ch);
} else
{if((state_val_11839 === 3))
{var inst_11836 = (state_11838[2]);var state_11838__$1 = state_11838;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11838__$1,inst_11836);
} else
{if((state_val_11839 === 4))
{var inst_11820 = (state_11838[7]);var inst_11820__$1 = (state_11838[2]);var inst_11821 = (inst_11820__$1 == null);var state_11838__$1 = (function (){var statearr_11841 = state_11838;(statearr_11841[7] = inst_11820__$1);
return statearr_11841;
})();if(cljs.core.truth_(inst_11821))
{var statearr_11842_11861 = state_11838__$1;(statearr_11842_11861[1] = 5);
} else
{var statearr_11843_11862 = state_11838__$1;(statearr_11843_11862[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 5))
{var inst_11823 = cljs.core.async.close_BANG_.call(null,out);var state_11838__$1 = state_11838;var statearr_11844_11863 = state_11838__$1;(statearr_11844_11863[2] = inst_11823);
(statearr_11844_11863[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 6))
{var inst_11820 = (state_11838[7]);var inst_11825 = p.call(null,inst_11820);var state_11838__$1 = state_11838;if(cljs.core.truth_(inst_11825))
{var statearr_11845_11864 = state_11838__$1;(statearr_11845_11864[1] = 8);
} else
{var statearr_11846_11865 = state_11838__$1;(statearr_11846_11865[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 7))
{var inst_11834 = (state_11838[2]);var state_11838__$1 = state_11838;var statearr_11847_11866 = state_11838__$1;(statearr_11847_11866[2] = inst_11834);
(statearr_11847_11866[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 8))
{var inst_11820 = (state_11838[7]);var state_11838__$1 = state_11838;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11838__$1,11,out,inst_11820);
} else
{if((state_val_11839 === 9))
{var state_11838__$1 = state_11838;var statearr_11848_11867 = state_11838__$1;(statearr_11848_11867[2] = null);
(statearr_11848_11867[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 10))
{var inst_11831 = (state_11838[2]);var state_11838__$1 = (function (){var statearr_11849 = state_11838;(statearr_11849[8] = inst_11831);
return statearr_11849;
})();var statearr_11850_11868 = state_11838__$1;(statearr_11850_11868[2] = null);
(statearr_11850_11868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11839 === 11))
{var inst_11828 = (state_11838[2]);var state_11838__$1 = state_11838;var statearr_11851_11869 = state_11838__$1;(statearr_11851_11869[2] = inst_11828);
(statearr_11851_11869[1] = 10);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_11855 = [null,null,null,null,null,null,null,null,null];(statearr_11855[0] = state_machine__6812__auto__);
(statearr_11855[1] = 1);
return statearr_11855;
});
var state_machine__6812__auto____1 = (function (state_11838){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_11838);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e11856){if((e11856 instanceof Object))
{var ex__6815__auto__ = e11856;var statearr_11857_11870 = state_11838;(statearr_11857_11870[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11838);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11871 = state_11838;
state_11838 = G__11871;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_11838){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_11838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_11858 = f__6827__auto__.call(null);(statearr_11858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___11859);
return statearr_11858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12023){var state_val_12024 = (state_12023[1]);if((state_val_12024 === 1))
{var state_12023__$1 = state_12023;var statearr_12025_12062 = state_12023__$1;(statearr_12025_12062[2] = null);
(statearr_12025_12062[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 2))
{var state_12023__$1 = state_12023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12023__$1,4,in$);
} else
{if((state_val_12024 === 3))
{var inst_12021 = (state_12023[2]);var state_12023__$1 = state_12023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12023__$1,inst_12021);
} else
{if((state_val_12024 === 4))
{var inst_11969 = (state_12023[7]);var inst_11969__$1 = (state_12023[2]);var inst_11970 = (inst_11969__$1 == null);var state_12023__$1 = (function (){var statearr_12026 = state_12023;(statearr_12026[7] = inst_11969__$1);
return statearr_12026;
})();if(cljs.core.truth_(inst_11970))
{var statearr_12027_12063 = state_12023__$1;(statearr_12027_12063[1] = 5);
} else
{var statearr_12028_12064 = state_12023__$1;(statearr_12028_12064[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 5))
{var inst_11972 = cljs.core.async.close_BANG_.call(null,out);var state_12023__$1 = state_12023;var statearr_12029_12065 = state_12023__$1;(statearr_12029_12065[2] = inst_11972);
(statearr_12029_12065[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 6))
{var inst_11969 = (state_12023[7]);var inst_11974 = f.call(null,inst_11969);var inst_11979 = cljs.core.seq.call(null,inst_11974);var inst_11980 = inst_11979;var inst_11981 = null;var inst_11982 = 0;var inst_11983 = 0;var state_12023__$1 = (function (){var statearr_12030 = state_12023;(statearr_12030[8] = inst_11983);
(statearr_12030[9] = inst_11982);
(statearr_12030[10] = inst_11981);
(statearr_12030[11] = inst_11980);
return statearr_12030;
})();var statearr_12031_12066 = state_12023__$1;(statearr_12031_12066[2] = null);
(statearr_12031_12066[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 7))
{var inst_12019 = (state_12023[2]);var state_12023__$1 = state_12023;var statearr_12032_12067 = state_12023__$1;(statearr_12032_12067[2] = inst_12019);
(statearr_12032_12067[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 8))
{var inst_11983 = (state_12023[8]);var inst_11982 = (state_12023[9]);var inst_11985 = (inst_11983 < inst_11982);var inst_11986 = inst_11985;var state_12023__$1 = state_12023;if(cljs.core.truth_(inst_11986))
{var statearr_12033_12068 = state_12023__$1;(statearr_12033_12068[1] = 10);
} else
{var statearr_12034_12069 = state_12023__$1;(statearr_12034_12069[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 9))
{var inst_12016 = (state_12023[2]);var state_12023__$1 = (function (){var statearr_12035 = state_12023;(statearr_12035[12] = inst_12016);
return statearr_12035;
})();var statearr_12036_12070 = state_12023__$1;(statearr_12036_12070[2] = null);
(statearr_12036_12070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 10))
{var inst_11983 = (state_12023[8]);var inst_11981 = (state_12023[10]);var inst_11988 = cljs.core._nth.call(null,inst_11981,inst_11983);var state_12023__$1 = state_12023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12023__$1,13,out,inst_11988);
} else
{if((state_val_12024 === 11))
{var inst_11980 = (state_12023[11]);var inst_11994 = (state_12023[13]);var inst_11994__$1 = cljs.core.seq.call(null,inst_11980);var state_12023__$1 = (function (){var statearr_12040 = state_12023;(statearr_12040[13] = inst_11994__$1);
return statearr_12040;
})();if(inst_11994__$1)
{var statearr_12041_12071 = state_12023__$1;(statearr_12041_12071[1] = 14);
} else
{var statearr_12042_12072 = state_12023__$1;(statearr_12042_12072[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 12))
{var inst_12014 = (state_12023[2]);var state_12023__$1 = state_12023;var statearr_12043_12073 = state_12023__$1;(statearr_12043_12073[2] = inst_12014);
(statearr_12043_12073[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 13))
{var inst_11983 = (state_12023[8]);var inst_11982 = (state_12023[9]);var inst_11981 = (state_12023[10]);var inst_11980 = (state_12023[11]);var inst_11990 = (state_12023[2]);var inst_11991 = (inst_11983 + 1);var tmp12037 = inst_11982;var tmp12038 = inst_11981;var tmp12039 = inst_11980;var inst_11980__$1 = tmp12039;var inst_11981__$1 = tmp12038;var inst_11982__$1 = tmp12037;var inst_11983__$1 = inst_11991;var state_12023__$1 = (function (){var statearr_12044 = state_12023;(statearr_12044[8] = inst_11983__$1);
(statearr_12044[9] = inst_11982__$1);
(statearr_12044[10] = inst_11981__$1);
(statearr_12044[11] = inst_11980__$1);
(statearr_12044[14] = inst_11990);
return statearr_12044;
})();var statearr_12045_12074 = state_12023__$1;(statearr_12045_12074[2] = null);
(statearr_12045_12074[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 14))
{var inst_11994 = (state_12023[13]);var inst_11996 = cljs.core.chunked_seq_QMARK_.call(null,inst_11994);var state_12023__$1 = state_12023;if(inst_11996)
{var statearr_12046_12075 = state_12023__$1;(statearr_12046_12075[1] = 17);
} else
{var statearr_12047_12076 = state_12023__$1;(statearr_12047_12076[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 15))
{var state_12023__$1 = state_12023;var statearr_12048_12077 = state_12023__$1;(statearr_12048_12077[2] = null);
(statearr_12048_12077[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 16))
{var inst_12012 = (state_12023[2]);var state_12023__$1 = state_12023;var statearr_12049_12078 = state_12023__$1;(statearr_12049_12078[2] = inst_12012);
(statearr_12049_12078[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 17))
{var inst_11994 = (state_12023[13]);var inst_11998 = cljs.core.chunk_first.call(null,inst_11994);var inst_11999 = cljs.core.chunk_rest.call(null,inst_11994);var inst_12000 = cljs.core.count.call(null,inst_11998);var inst_11980 = inst_11999;var inst_11981 = inst_11998;var inst_11982 = inst_12000;var inst_11983 = 0;var state_12023__$1 = (function (){var statearr_12050 = state_12023;(statearr_12050[8] = inst_11983);
(statearr_12050[9] = inst_11982);
(statearr_12050[10] = inst_11981);
(statearr_12050[11] = inst_11980);
return statearr_12050;
})();var statearr_12051_12079 = state_12023__$1;(statearr_12051_12079[2] = null);
(statearr_12051_12079[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 18))
{var inst_11994 = (state_12023[13]);var inst_12003 = cljs.core.first.call(null,inst_11994);var state_12023__$1 = state_12023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12023__$1,20,out,inst_12003);
} else
{if((state_val_12024 === 19))
{var inst_12009 = (state_12023[2]);var state_12023__$1 = state_12023;var statearr_12052_12080 = state_12023__$1;(statearr_12052_12080[2] = inst_12009);
(statearr_12052_12080[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12024 === 20))
{var inst_11994 = (state_12023[13]);var inst_12005 = (state_12023[2]);var inst_12006 = cljs.core.next.call(null,inst_11994);var inst_11980 = inst_12006;var inst_11981 = null;var inst_11982 = 0;var inst_11983 = 0;var state_12023__$1 = (function (){var statearr_12053 = state_12023;(statearr_12053[8] = inst_11983);
(statearr_12053[9] = inst_11982);
(statearr_12053[10] = inst_11981);
(statearr_12053[11] = inst_11980);
(statearr_12053[15] = inst_12005);
return statearr_12053;
})();var statearr_12054_12081 = state_12023__$1;(statearr_12054_12081[2] = null);
(statearr_12054_12081[1] = 8);
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
var state_machine__6812__auto____0 = (function (){var statearr_12058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12058[0] = state_machine__6812__auto__);
(statearr_12058[1] = 1);
return statearr_12058;
});
var state_machine__6812__auto____1 = (function (state_12023){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12059){if((e12059 instanceof Object))
{var ex__6815__auto__ = e12059;var statearr_12060_12082 = state_12023;(statearr_12060_12082[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12083 = state_12023;
state_12023 = G__12083;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12023){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12061 = f__6827__auto__.call(null);(statearr_12061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_12061;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6826__auto___12164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12143){var state_val_12144 = (state_12143[1]);if((state_val_12144 === 1))
{var state_12143__$1 = state_12143;var statearr_12145_12165 = state_12143__$1;(statearr_12145_12165[2] = null);
(statearr_12145_12165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 2))
{var state_12143__$1 = state_12143;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12143__$1,4,from);
} else
{if((state_val_12144 === 3))
{var inst_12141 = (state_12143[2]);var state_12143__$1 = state_12143;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12143__$1,inst_12141);
} else
{if((state_val_12144 === 4))
{var inst_12126 = (state_12143[7]);var inst_12126__$1 = (state_12143[2]);var inst_12127 = (inst_12126__$1 == null);var state_12143__$1 = (function (){var statearr_12146 = state_12143;(statearr_12146[7] = inst_12126__$1);
return statearr_12146;
})();if(cljs.core.truth_(inst_12127))
{var statearr_12147_12166 = state_12143__$1;(statearr_12147_12166[1] = 5);
} else
{var statearr_12148_12167 = state_12143__$1;(statearr_12148_12167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 5))
{var state_12143__$1 = state_12143;if(cljs.core.truth_(close_QMARK_))
{var statearr_12149_12168 = state_12143__$1;(statearr_12149_12168[1] = 8);
} else
{var statearr_12150_12169 = state_12143__$1;(statearr_12150_12169[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 6))
{var inst_12126 = (state_12143[7]);var state_12143__$1 = state_12143;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12143__$1,11,to,inst_12126);
} else
{if((state_val_12144 === 7))
{var inst_12139 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12151_12170 = state_12143__$1;(statearr_12151_12170[2] = inst_12139);
(statearr_12151_12170[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 8))
{var inst_12130 = cljs.core.async.close_BANG_.call(null,to);var state_12143__$1 = state_12143;var statearr_12152_12171 = state_12143__$1;(statearr_12152_12171[2] = inst_12130);
(statearr_12152_12171[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 9))
{var state_12143__$1 = state_12143;var statearr_12153_12172 = state_12143__$1;(statearr_12153_12172[2] = null);
(statearr_12153_12172[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 10))
{var inst_12133 = (state_12143[2]);var state_12143__$1 = state_12143;var statearr_12154_12173 = state_12143__$1;(statearr_12154_12173[2] = inst_12133);
(statearr_12154_12173[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12144 === 11))
{var inst_12136 = (state_12143[2]);var state_12143__$1 = (function (){var statearr_12155 = state_12143;(statearr_12155[8] = inst_12136);
return statearr_12155;
})();var statearr_12156_12174 = state_12143__$1;(statearr_12156_12174[2] = null);
(statearr_12156_12174[1] = 2);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_12160 = [null,null,null,null,null,null,null,null,null];(statearr_12160[0] = state_machine__6812__auto__);
(statearr_12160[1] = 1);
return statearr_12160;
});
var state_machine__6812__auto____1 = (function (state_12143){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12143);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12161){if((e12161 instanceof Object))
{var ex__6815__auto__ = e12161;var statearr_12162_12175 = state_12143;(statearr_12162_12175[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12143);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12176 = state_12143;
state_12143 = G__12176;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12143){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12163 = f__6827__auto__.call(null);(statearr_12163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___12164);
return statearr_12163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6826__auto___12263 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12241){var state_val_12242 = (state_12241[1]);if((state_val_12242 === 1))
{var state_12241__$1 = state_12241;var statearr_12243_12264 = state_12241__$1;(statearr_12243_12264[2] = null);
(statearr_12243_12264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 2))
{var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12241__$1,4,ch);
} else
{if((state_val_12242 === 3))
{var inst_12239 = (state_12241[2]);var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12241__$1,inst_12239);
} else
{if((state_val_12242 === 4))
{var inst_12222 = (state_12241[7]);var inst_12222__$1 = (state_12241[2]);var inst_12223 = (inst_12222__$1 == null);var state_12241__$1 = (function (){var statearr_12244 = state_12241;(statearr_12244[7] = inst_12222__$1);
return statearr_12244;
})();if(cljs.core.truth_(inst_12223))
{var statearr_12245_12265 = state_12241__$1;(statearr_12245_12265[1] = 5);
} else
{var statearr_12246_12266 = state_12241__$1;(statearr_12246_12266[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 5))
{var inst_12225 = cljs.core.async.close_BANG_.call(null,tc);var inst_12226 = cljs.core.async.close_BANG_.call(null,fc);var state_12241__$1 = (function (){var statearr_12247 = state_12241;(statearr_12247[8] = inst_12225);
return statearr_12247;
})();var statearr_12248_12267 = state_12241__$1;(statearr_12248_12267[2] = inst_12226);
(statearr_12248_12267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 6))
{var inst_12222 = (state_12241[7]);var inst_12228 = p.call(null,inst_12222);var state_12241__$1 = state_12241;if(cljs.core.truth_(inst_12228))
{var statearr_12249_12268 = state_12241__$1;(statearr_12249_12268[1] = 9);
} else
{var statearr_12250_12269 = state_12241__$1;(statearr_12250_12269[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 7))
{var inst_12237 = (state_12241[2]);var state_12241__$1 = state_12241;var statearr_12251_12270 = state_12241__$1;(statearr_12251_12270[2] = inst_12237);
(statearr_12251_12270[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 8))
{var inst_12234 = (state_12241[2]);var state_12241__$1 = (function (){var statearr_12252 = state_12241;(statearr_12252[9] = inst_12234);
return statearr_12252;
})();var statearr_12253_12271 = state_12241__$1;(statearr_12253_12271[2] = null);
(statearr_12253_12271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 9))
{var state_12241__$1 = state_12241;var statearr_12254_12272 = state_12241__$1;(statearr_12254_12272[2] = tc);
(statearr_12254_12272[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 10))
{var state_12241__$1 = state_12241;var statearr_12255_12273 = state_12241__$1;(statearr_12255_12273[2] = fc);
(statearr_12255_12273[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 11))
{var inst_12222 = (state_12241[7]);var inst_12232 = (state_12241[2]);var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12241__$1,8,inst_12232,inst_12222);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_12259 = [null,null,null,null,null,null,null,null,null,null];(statearr_12259[0] = state_machine__6812__auto__);
(statearr_12259[1] = 1);
return statearr_12259;
});
var state_machine__6812__auto____1 = (function (state_12241){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12241);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12260){if((e12260 instanceof Object))
{var ex__6815__auto__ = e12260;var statearr_12261_12274 = state_12241;(statearr_12261_12274[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12275 = state_12241;
state_12241 = G__12275;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12241){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12262 = f__6827__auto__.call(null);(statearr_12262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___12263);
return statearr_12262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12322){var state_val_12323 = (state_12322[1]);if((state_val_12323 === 7))
{var inst_12318 = (state_12322[2]);var state_12322__$1 = state_12322;var statearr_12324_12340 = state_12322__$1;(statearr_12324_12340[2] = inst_12318);
(statearr_12324_12340[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 6))
{var inst_12311 = (state_12322[7]);var inst_12308 = (state_12322[8]);var inst_12315 = f.call(null,inst_12308,inst_12311);var inst_12308__$1 = inst_12315;var state_12322__$1 = (function (){var statearr_12325 = state_12322;(statearr_12325[8] = inst_12308__$1);
return statearr_12325;
})();var statearr_12326_12341 = state_12322__$1;(statearr_12326_12341[2] = null);
(statearr_12326_12341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 5))
{var inst_12308 = (state_12322[8]);var state_12322__$1 = state_12322;var statearr_12327_12342 = state_12322__$1;(statearr_12327_12342[2] = inst_12308);
(statearr_12327_12342[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 4))
{var inst_12311 = (state_12322[7]);var inst_12311__$1 = (state_12322[2]);var inst_12312 = (inst_12311__$1 == null);var state_12322__$1 = (function (){var statearr_12328 = state_12322;(statearr_12328[7] = inst_12311__$1);
return statearr_12328;
})();if(cljs.core.truth_(inst_12312))
{var statearr_12329_12343 = state_12322__$1;(statearr_12329_12343[1] = 5);
} else
{var statearr_12330_12344 = state_12322__$1;(statearr_12330_12344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12323 === 3))
{var inst_12320 = (state_12322[2]);var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12322__$1,inst_12320);
} else
{if((state_val_12323 === 2))
{var state_12322__$1 = state_12322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12322__$1,4,ch);
} else
{if((state_val_12323 === 1))
{var inst_12308 = init;var state_12322__$1 = (function (){var statearr_12331 = state_12322;(statearr_12331[8] = inst_12308);
return statearr_12331;
})();var statearr_12332_12345 = state_12322__$1;(statearr_12332_12345[2] = null);
(statearr_12332_12345[1] = 2);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_12336 = [null,null,null,null,null,null,null,null,null];(statearr_12336[0] = state_machine__6812__auto__);
(statearr_12336[1] = 1);
return statearr_12336;
});
var state_machine__6812__auto____1 = (function (state_12322){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12322);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12337){if((e12337 instanceof Object))
{var ex__6815__auto__ = e12337;var statearr_12338_12346 = state_12322;(statearr_12338_12346[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12347 = state_12322;
state_12322 = G__12347;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12322){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12339 = f__6827__auto__.call(null);(statearr_12339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_12339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12409){var state_val_12410 = (state_12409[1]);if((state_val_12410 === 1))
{var inst_12389 = cljs.core.seq.call(null,coll);var inst_12390 = inst_12389;var state_12409__$1 = (function (){var statearr_12411 = state_12409;(statearr_12411[7] = inst_12390);
return statearr_12411;
})();var statearr_12412_12430 = state_12409__$1;(statearr_12412_12430[2] = null);
(statearr_12412_12430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 2))
{var inst_12390 = (state_12409[7]);var state_12409__$1 = state_12409;if(cljs.core.truth_(inst_12390))
{var statearr_12413_12431 = state_12409__$1;(statearr_12413_12431[1] = 4);
} else
{var statearr_12414_12432 = state_12409__$1;(statearr_12414_12432[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 3))
{var inst_12407 = (state_12409[2]);var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12409__$1,inst_12407);
} else
{if((state_val_12410 === 4))
{var inst_12390 = (state_12409[7]);var inst_12393 = cljs.core.first.call(null,inst_12390);var state_12409__$1 = state_12409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12409__$1,7,ch,inst_12393);
} else
{if((state_val_12410 === 5))
{var state_12409__$1 = state_12409;if(cljs.core.truth_(close_QMARK_))
{var statearr_12415_12433 = state_12409__$1;(statearr_12415_12433[1] = 8);
} else
{var statearr_12416_12434 = state_12409__$1;(statearr_12416_12434[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 6))
{var inst_12405 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12417_12435 = state_12409__$1;(statearr_12417_12435[2] = inst_12405);
(statearr_12417_12435[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 7))
{var inst_12390 = (state_12409[7]);var inst_12395 = (state_12409[2]);var inst_12396 = cljs.core.next.call(null,inst_12390);var inst_12390__$1 = inst_12396;var state_12409__$1 = (function (){var statearr_12418 = state_12409;(statearr_12418[8] = inst_12395);
(statearr_12418[7] = inst_12390__$1);
return statearr_12418;
})();var statearr_12419_12436 = state_12409__$1;(statearr_12419_12436[2] = null);
(statearr_12419_12436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 8))
{var inst_12400 = cljs.core.async.close_BANG_.call(null,ch);var state_12409__$1 = state_12409;var statearr_12420_12437 = state_12409__$1;(statearr_12420_12437[2] = inst_12400);
(statearr_12420_12437[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 9))
{var state_12409__$1 = state_12409;var statearr_12421_12438 = state_12409__$1;(statearr_12421_12438[2] = null);
(statearr_12421_12438[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12410 === 10))
{var inst_12403 = (state_12409[2]);var state_12409__$1 = state_12409;var statearr_12422_12439 = state_12409__$1;(statearr_12422_12439[2] = inst_12403);
(statearr_12422_12439[1] = 6);
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
var state_machine__6812__auto____0 = (function (){var statearr_12426 = [null,null,null,null,null,null,null,null,null];(statearr_12426[0] = state_machine__6812__auto__);
(statearr_12426[1] = 1);
return statearr_12426;
});
var state_machine__6812__auto____1 = (function (state_12409){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12409);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12427){if((e12427 instanceof Object))
{var ex__6815__auto__ = e12427;var statearr_12428_12440 = state_12409;(statearr_12428_12440[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12441 = state_12409;
state_12409 = G__12441;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12409){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12429 = f__6827__auto__.call(null);(statearr_12429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_12429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return c__6826__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12443 = {};return obj12443;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3431__auto__ = _;if(and__3431__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4070__auto__ = (((_ == null))?null:_);return (function (){var or__3443__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12445 = {};return obj12445;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12669 = (function (cs,ch,mult,meta12670){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12670 = meta12670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12669.cljs$lang$type = true;
cljs.core.async.t12669.cljs$lang$ctorStr = "cljs.core.async/t12669";
cljs.core.async.t12669.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12669");
});})(cs))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12669.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12669.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12671){var self__ = this;
var _12671__$1 = this;return self__.meta12670;
});})(cs))
;
cljs.core.async.t12669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12671,meta12670__$1){var self__ = this;
var _12671__$1 = this;return (new cljs.core.async.t12669(self__.cs,self__.ch,self__.mult,meta12670__$1));
});})(cs))
;
cljs.core.async.__GT_t12669 = ((function (cs){
return (function __GT_t12669(cs__$1,ch__$1,mult__$1,meta12670){return (new cljs.core.async.t12669(cs__$1,ch__$1,mult__$1,meta12670));
});})(cs))
;
}
return (new cljs.core.async.t12669(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6826__auto___12892 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12806){var state_val_12807 = (state_12806[1]);if((state_val_12807 === 32))
{var inst_12674 = (state_12806[7]);var inst_12750 = (state_12806[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12806,31,Object,null,30);var inst_12757 = cljs.core.async.put_BANG_.call(null,inst_12750,inst_12674,done);var state_12806__$1 = state_12806;var statearr_12808_12893 = state_12806__$1;(statearr_12808_12893[2] = inst_12757);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12806__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 1))
{var state_12806__$1 = state_12806;var statearr_12809_12894 = state_12806__$1;(statearr_12809_12894[2] = null);
(statearr_12809_12894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 33))
{var inst_12763 = (state_12806[9]);var inst_12765 = cljs.core.chunked_seq_QMARK_.call(null,inst_12763);var state_12806__$1 = state_12806;if(inst_12765)
{var statearr_12810_12895 = state_12806__$1;(statearr_12810_12895[1] = 36);
} else
{var statearr_12811_12896 = state_12806__$1;(statearr_12811_12896[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 2))
{var state_12806__$1 = state_12806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12806__$1,4,ch);
} else
{if((state_val_12807 === 34))
{var state_12806__$1 = state_12806;var statearr_12812_12897 = state_12806__$1;(statearr_12812_12897[2] = null);
(statearr_12812_12897[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 3))
{var inst_12804 = (state_12806[2]);var state_12806__$1 = state_12806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12806__$1,inst_12804);
} else
{if((state_val_12807 === 35))
{var inst_12788 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12813_12898 = state_12806__$1;(statearr_12813_12898[2] = inst_12788);
(statearr_12813_12898[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 4))
{var inst_12674 = (state_12806[7]);var inst_12674__$1 = (state_12806[2]);var inst_12675 = (inst_12674__$1 == null);var state_12806__$1 = (function (){var statearr_12814 = state_12806;(statearr_12814[7] = inst_12674__$1);
return statearr_12814;
})();if(cljs.core.truth_(inst_12675))
{var statearr_12815_12899 = state_12806__$1;(statearr_12815_12899[1] = 5);
} else
{var statearr_12816_12900 = state_12806__$1;(statearr_12816_12900[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 36))
{var inst_12763 = (state_12806[9]);var inst_12767 = cljs.core.chunk_first.call(null,inst_12763);var inst_12768 = cljs.core.chunk_rest.call(null,inst_12763);var inst_12769 = cljs.core.count.call(null,inst_12767);var inst_12742 = inst_12768;var inst_12743 = inst_12767;var inst_12744 = inst_12769;var inst_12745 = 0;var state_12806__$1 = (function (){var statearr_12817 = state_12806;(statearr_12817[10] = inst_12743);
(statearr_12817[11] = inst_12744);
(statearr_12817[12] = inst_12745);
(statearr_12817[13] = inst_12742);
return statearr_12817;
})();var statearr_12818_12901 = state_12806__$1;(statearr_12818_12901[2] = null);
(statearr_12818_12901[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 5))
{var inst_12681 = cljs.core.deref.call(null,cs);var inst_12682 = cljs.core.seq.call(null,inst_12681);var inst_12683 = inst_12682;var inst_12684 = null;var inst_12685 = 0;var inst_12686 = 0;var state_12806__$1 = (function (){var statearr_12819 = state_12806;(statearr_12819[14] = inst_12683);
(statearr_12819[15] = inst_12686);
(statearr_12819[16] = inst_12685);
(statearr_12819[17] = inst_12684);
return statearr_12819;
})();var statearr_12820_12902 = state_12806__$1;(statearr_12820_12902[2] = null);
(statearr_12820_12902[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 37))
{var inst_12763 = (state_12806[9]);var inst_12772 = cljs.core.first.call(null,inst_12763);var state_12806__$1 = (function (){var statearr_12821 = state_12806;(statearr_12821[18] = inst_12772);
return statearr_12821;
})();var statearr_12822_12903 = state_12806__$1;(statearr_12822_12903[2] = null);
(statearr_12822_12903[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 6))
{var inst_12734 = (state_12806[19]);var inst_12733 = cljs.core.deref.call(null,cs);var inst_12734__$1 = cljs.core.keys.call(null,inst_12733);var inst_12735 = cljs.core.count.call(null,inst_12734__$1);var inst_12736 = cljs.core.reset_BANG_.call(null,dctr,inst_12735);var inst_12741 = cljs.core.seq.call(null,inst_12734__$1);var inst_12742 = inst_12741;var inst_12743 = null;var inst_12744 = 0;var inst_12745 = 0;var state_12806__$1 = (function (){var statearr_12823 = state_12806;(statearr_12823[10] = inst_12743);
(statearr_12823[11] = inst_12744);
(statearr_12823[12] = inst_12745);
(statearr_12823[13] = inst_12742);
(statearr_12823[19] = inst_12734__$1);
(statearr_12823[20] = inst_12736);
return statearr_12823;
})();var statearr_12824_12904 = state_12806__$1;(statearr_12824_12904[2] = null);
(statearr_12824_12904[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 38))
{var inst_12785 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12825_12905 = state_12806__$1;(statearr_12825_12905[2] = inst_12785);
(statearr_12825_12905[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 7))
{var inst_12802 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12826_12906 = state_12806__$1;(statearr_12826_12906[2] = inst_12802);
(statearr_12826_12906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 39))
{var inst_12763 = (state_12806[9]);var inst_12781 = (state_12806[2]);var inst_12782 = cljs.core.next.call(null,inst_12763);var inst_12742 = inst_12782;var inst_12743 = null;var inst_12744 = 0;var inst_12745 = 0;var state_12806__$1 = (function (){var statearr_12827 = state_12806;(statearr_12827[21] = inst_12781);
(statearr_12827[10] = inst_12743);
(statearr_12827[11] = inst_12744);
(statearr_12827[12] = inst_12745);
(statearr_12827[13] = inst_12742);
return statearr_12827;
})();var statearr_12828_12907 = state_12806__$1;(statearr_12828_12907[2] = null);
(statearr_12828_12907[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 8))
{var inst_12686 = (state_12806[15]);var inst_12685 = (state_12806[16]);var inst_12688 = (inst_12686 < inst_12685);var inst_12689 = inst_12688;var state_12806__$1 = state_12806;if(cljs.core.truth_(inst_12689))
{var statearr_12829_12908 = state_12806__$1;(statearr_12829_12908[1] = 10);
} else
{var statearr_12830_12909 = state_12806__$1;(statearr_12830_12909[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 40))
{var inst_12772 = (state_12806[18]);var inst_12773 = (state_12806[2]);var inst_12774 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12775 = cljs.core.async.untap_STAR_.call(null,m,inst_12772);var state_12806__$1 = (function (){var statearr_12831 = state_12806;(statearr_12831[22] = inst_12774);
(statearr_12831[23] = inst_12773);
return statearr_12831;
})();var statearr_12832_12910 = state_12806__$1;(statearr_12832_12910[2] = inst_12775);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12806__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 9))
{var inst_12731 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12833_12911 = state_12806__$1;(statearr_12833_12911[2] = inst_12731);
(statearr_12833_12911[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 41))
{var inst_12674 = (state_12806[7]);var inst_12772 = (state_12806[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12806,40,Object,null,39);var inst_12779 = cljs.core.async.put_BANG_.call(null,inst_12772,inst_12674,done);var state_12806__$1 = state_12806;var statearr_12834_12912 = state_12806__$1;(statearr_12834_12912[2] = inst_12779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12806__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 10))
{var inst_12686 = (state_12806[15]);var inst_12684 = (state_12806[17]);var inst_12692 = cljs.core._nth.call(null,inst_12684,inst_12686);var inst_12693 = cljs.core.nth.call(null,inst_12692,0,null);var inst_12694 = cljs.core.nth.call(null,inst_12692,1,null);var state_12806__$1 = (function (){var statearr_12835 = state_12806;(statearr_12835[24] = inst_12693);
return statearr_12835;
})();if(cljs.core.truth_(inst_12694))
{var statearr_12836_12913 = state_12806__$1;(statearr_12836_12913[1] = 13);
} else
{var statearr_12837_12914 = state_12806__$1;(statearr_12837_12914[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 42))
{var state_12806__$1 = state_12806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12806__$1,45,dchan);
} else
{if((state_val_12807 === 11))
{var inst_12683 = (state_12806[14]);var inst_12703 = (state_12806[25]);var inst_12703__$1 = cljs.core.seq.call(null,inst_12683);var state_12806__$1 = (function (){var statearr_12838 = state_12806;(statearr_12838[25] = inst_12703__$1);
return statearr_12838;
})();if(inst_12703__$1)
{var statearr_12839_12915 = state_12806__$1;(statearr_12839_12915[1] = 16);
} else
{var statearr_12840_12916 = state_12806__$1;(statearr_12840_12916[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 43))
{var state_12806__$1 = state_12806;var statearr_12841_12917 = state_12806__$1;(statearr_12841_12917[2] = null);
(statearr_12841_12917[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 12))
{var inst_12729 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12842_12918 = state_12806__$1;(statearr_12842_12918[2] = inst_12729);
(statearr_12842_12918[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 44))
{var inst_12799 = (state_12806[2]);var state_12806__$1 = (function (){var statearr_12843 = state_12806;(statearr_12843[26] = inst_12799);
return statearr_12843;
})();var statearr_12844_12919 = state_12806__$1;(statearr_12844_12919[2] = null);
(statearr_12844_12919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 13))
{var inst_12693 = (state_12806[24]);var inst_12696 = cljs.core.async.close_BANG_.call(null,inst_12693);var state_12806__$1 = state_12806;var statearr_12845_12920 = state_12806__$1;(statearr_12845_12920[2] = inst_12696);
(statearr_12845_12920[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 45))
{var inst_12796 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12849_12921 = state_12806__$1;(statearr_12849_12921[2] = inst_12796);
(statearr_12849_12921[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 14))
{var state_12806__$1 = state_12806;var statearr_12850_12922 = state_12806__$1;(statearr_12850_12922[2] = null);
(statearr_12850_12922[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 15))
{var inst_12683 = (state_12806[14]);var inst_12686 = (state_12806[15]);var inst_12685 = (state_12806[16]);var inst_12684 = (state_12806[17]);var inst_12699 = (state_12806[2]);var inst_12700 = (inst_12686 + 1);var tmp12846 = inst_12683;var tmp12847 = inst_12685;var tmp12848 = inst_12684;var inst_12683__$1 = tmp12846;var inst_12684__$1 = tmp12848;var inst_12685__$1 = tmp12847;var inst_12686__$1 = inst_12700;var state_12806__$1 = (function (){var statearr_12851 = state_12806;(statearr_12851[27] = inst_12699);
(statearr_12851[14] = inst_12683__$1);
(statearr_12851[15] = inst_12686__$1);
(statearr_12851[16] = inst_12685__$1);
(statearr_12851[17] = inst_12684__$1);
return statearr_12851;
})();var statearr_12852_12923 = state_12806__$1;(statearr_12852_12923[2] = null);
(statearr_12852_12923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 16))
{var inst_12703 = (state_12806[25]);var inst_12705 = cljs.core.chunked_seq_QMARK_.call(null,inst_12703);var state_12806__$1 = state_12806;if(inst_12705)
{var statearr_12853_12924 = state_12806__$1;(statearr_12853_12924[1] = 19);
} else
{var statearr_12854_12925 = state_12806__$1;(statearr_12854_12925[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 17))
{var state_12806__$1 = state_12806;var statearr_12855_12926 = state_12806__$1;(statearr_12855_12926[2] = null);
(statearr_12855_12926[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 18))
{var inst_12727 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12856_12927 = state_12806__$1;(statearr_12856_12927[2] = inst_12727);
(statearr_12856_12927[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 19))
{var inst_12703 = (state_12806[25]);var inst_12707 = cljs.core.chunk_first.call(null,inst_12703);var inst_12708 = cljs.core.chunk_rest.call(null,inst_12703);var inst_12709 = cljs.core.count.call(null,inst_12707);var inst_12683 = inst_12708;var inst_12684 = inst_12707;var inst_12685 = inst_12709;var inst_12686 = 0;var state_12806__$1 = (function (){var statearr_12857 = state_12806;(statearr_12857[14] = inst_12683);
(statearr_12857[15] = inst_12686);
(statearr_12857[16] = inst_12685);
(statearr_12857[17] = inst_12684);
return statearr_12857;
})();var statearr_12858_12928 = state_12806__$1;(statearr_12858_12928[2] = null);
(statearr_12858_12928[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 20))
{var inst_12703 = (state_12806[25]);var inst_12713 = cljs.core.first.call(null,inst_12703);var inst_12714 = cljs.core.nth.call(null,inst_12713,0,null);var inst_12715 = cljs.core.nth.call(null,inst_12713,1,null);var state_12806__$1 = (function (){var statearr_12859 = state_12806;(statearr_12859[28] = inst_12714);
return statearr_12859;
})();if(cljs.core.truth_(inst_12715))
{var statearr_12860_12929 = state_12806__$1;(statearr_12860_12929[1] = 22);
} else
{var statearr_12861_12930 = state_12806__$1;(statearr_12861_12930[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 21))
{var inst_12724 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12862_12931 = state_12806__$1;(statearr_12862_12931[2] = inst_12724);
(statearr_12862_12931[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 22))
{var inst_12714 = (state_12806[28]);var inst_12717 = cljs.core.async.close_BANG_.call(null,inst_12714);var state_12806__$1 = state_12806;var statearr_12863_12932 = state_12806__$1;(statearr_12863_12932[2] = inst_12717);
(statearr_12863_12932[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 23))
{var state_12806__$1 = state_12806;var statearr_12864_12933 = state_12806__$1;(statearr_12864_12933[2] = null);
(statearr_12864_12933[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 24))
{var inst_12703 = (state_12806[25]);var inst_12720 = (state_12806[2]);var inst_12721 = cljs.core.next.call(null,inst_12703);var inst_12683 = inst_12721;var inst_12684 = null;var inst_12685 = 0;var inst_12686 = 0;var state_12806__$1 = (function (){var statearr_12865 = state_12806;(statearr_12865[14] = inst_12683);
(statearr_12865[29] = inst_12720);
(statearr_12865[15] = inst_12686);
(statearr_12865[16] = inst_12685);
(statearr_12865[17] = inst_12684);
return statearr_12865;
})();var statearr_12866_12934 = state_12806__$1;(statearr_12866_12934[2] = null);
(statearr_12866_12934[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 25))
{var inst_12744 = (state_12806[11]);var inst_12745 = (state_12806[12]);var inst_12747 = (inst_12745 < inst_12744);var inst_12748 = inst_12747;var state_12806__$1 = state_12806;if(cljs.core.truth_(inst_12748))
{var statearr_12867_12935 = state_12806__$1;(statearr_12867_12935[1] = 27);
} else
{var statearr_12868_12936 = state_12806__$1;(statearr_12868_12936[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 26))
{var inst_12734 = (state_12806[19]);var inst_12792 = (state_12806[2]);var inst_12793 = cljs.core.seq.call(null,inst_12734);var state_12806__$1 = (function (){var statearr_12869 = state_12806;(statearr_12869[30] = inst_12792);
return statearr_12869;
})();if(inst_12793)
{var statearr_12870_12937 = state_12806__$1;(statearr_12870_12937[1] = 42);
} else
{var statearr_12871_12938 = state_12806__$1;(statearr_12871_12938[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 27))
{var inst_12743 = (state_12806[10]);var inst_12745 = (state_12806[12]);var inst_12750 = cljs.core._nth.call(null,inst_12743,inst_12745);var state_12806__$1 = (function (){var statearr_12872 = state_12806;(statearr_12872[8] = inst_12750);
return statearr_12872;
})();var statearr_12873_12939 = state_12806__$1;(statearr_12873_12939[2] = null);
(statearr_12873_12939[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 28))
{var inst_12742 = (state_12806[13]);var inst_12763 = (state_12806[9]);var inst_12763__$1 = cljs.core.seq.call(null,inst_12742);var state_12806__$1 = (function (){var statearr_12877 = state_12806;(statearr_12877[9] = inst_12763__$1);
return statearr_12877;
})();if(inst_12763__$1)
{var statearr_12878_12940 = state_12806__$1;(statearr_12878_12940[1] = 33);
} else
{var statearr_12879_12941 = state_12806__$1;(statearr_12879_12941[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 29))
{var inst_12790 = (state_12806[2]);var state_12806__$1 = state_12806;var statearr_12880_12942 = state_12806__$1;(statearr_12880_12942[2] = inst_12790);
(statearr_12880_12942[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 30))
{var inst_12743 = (state_12806[10]);var inst_12744 = (state_12806[11]);var inst_12745 = (state_12806[12]);var inst_12742 = (state_12806[13]);var inst_12759 = (state_12806[2]);var inst_12760 = (inst_12745 + 1);var tmp12874 = inst_12743;var tmp12875 = inst_12744;var tmp12876 = inst_12742;var inst_12742__$1 = tmp12876;var inst_12743__$1 = tmp12874;var inst_12744__$1 = tmp12875;var inst_12745__$1 = inst_12760;var state_12806__$1 = (function (){var statearr_12881 = state_12806;(statearr_12881[31] = inst_12759);
(statearr_12881[10] = inst_12743__$1);
(statearr_12881[11] = inst_12744__$1);
(statearr_12881[12] = inst_12745__$1);
(statearr_12881[13] = inst_12742__$1);
return statearr_12881;
})();var statearr_12882_12943 = state_12806__$1;(statearr_12882_12943[2] = null);
(statearr_12882_12943[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12807 === 31))
{var inst_12750 = (state_12806[8]);var inst_12751 = (state_12806[2]);var inst_12752 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12753 = cljs.core.async.untap_STAR_.call(null,m,inst_12750);var state_12806__$1 = (function (){var statearr_12883 = state_12806;(statearr_12883[32] = inst_12752);
(statearr_12883[33] = inst_12751);
return statearr_12883;
})();var statearr_12884_12944 = state_12806__$1;(statearr_12884_12944[2] = inst_12753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12806__$1);
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
}
}
}
}
}
}
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_12888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12888[0] = state_machine__6812__auto__);
(statearr_12888[1] = 1);
return statearr_12888;
});
var state_machine__6812__auto____1 = (function (state_12806){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12806);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12889){if((e12889 instanceof Object))
{var ex__6815__auto__ = e12889;var statearr_12890_12945 = state_12806;(statearr_12890_12945[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12806);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12889;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12946 = state_12806;
state_12806 = G__12946;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12806){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12891 = f__6827__auto__.call(null);(statearr_12891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___12892);
return statearr_12891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12948 = {};return obj12948;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3431__auto__ = m;if(and__3431__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4070__auto__ = (((m == null))?null:m);return (function (){var or__3443__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13058 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13059){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13059 = meta13059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13058.cljs$lang$type = true;
cljs.core.async.t13058.cljs$lang$ctorStr = "cljs.core.async/t13058";
cljs.core.async.t13058.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13058");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13058.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13060){var self__ = this;
var _13060__$1 = this;return self__.meta13059;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13060,meta13059__$1){var self__ = this;
var _13060__$1 = this;return (new cljs.core.async.t13058(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13059__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13058 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13058(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13059){return (new cljs.core.async.t13058(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13059));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13058(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6826__auto___13167 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13125){var state_val_13126 = (state_13125[1]);if((state_val_13126 === 1))
{var inst_13064 = (state_13125[7]);var inst_13064__$1 = calc_state.call(null);var inst_13065 = cljs.core.seq_QMARK_.call(null,inst_13064__$1);var state_13125__$1 = (function (){var statearr_13127 = state_13125;(statearr_13127[7] = inst_13064__$1);
return statearr_13127;
})();if(inst_13065)
{var statearr_13128_13168 = state_13125__$1;(statearr_13128_13168[1] = 2);
} else
{var statearr_13129_13169 = state_13125__$1;(statearr_13129_13169[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 2))
{var inst_13064 = (state_13125[7]);var inst_13067 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13064);var state_13125__$1 = state_13125;var statearr_13130_13170 = state_13125__$1;(statearr_13130_13170[2] = inst_13067);
(statearr_13130_13170[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 3))
{var inst_13064 = (state_13125[7]);var state_13125__$1 = state_13125;var statearr_13131_13171 = state_13125__$1;(statearr_13131_13171[2] = inst_13064);
(statearr_13131_13171[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 4))
{var inst_13064 = (state_13125[7]);var inst_13070 = (state_13125[2]);var inst_13071 = cljs.core.get.call(null,inst_13070,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13072 = cljs.core.get.call(null,inst_13070,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13073 = cljs.core.get.call(null,inst_13070,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13074 = inst_13064;var state_13125__$1 = (function (){var statearr_13132 = state_13125;(statearr_13132[8] = inst_13073);
(statearr_13132[9] = inst_13072);
(statearr_13132[10] = inst_13074);
(statearr_13132[11] = inst_13071);
return statearr_13132;
})();var statearr_13133_13172 = state_13125__$1;(statearr_13133_13172[2] = null);
(statearr_13133_13172[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 5))
{var inst_13074 = (state_13125[10]);var inst_13077 = cljs.core.seq_QMARK_.call(null,inst_13074);var state_13125__$1 = state_13125;if(inst_13077)
{var statearr_13134_13173 = state_13125__$1;(statearr_13134_13173[1] = 7);
} else
{var statearr_13135_13174 = state_13125__$1;(statearr_13135_13174[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 6))
{var inst_13123 = (state_13125[2]);var state_13125__$1 = state_13125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13125__$1,inst_13123);
} else
{if((state_val_13126 === 7))
{var inst_13074 = (state_13125[10]);var inst_13079 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13074);var state_13125__$1 = state_13125;var statearr_13136_13175 = state_13125__$1;(statearr_13136_13175[2] = inst_13079);
(statearr_13136_13175[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 8))
{var inst_13074 = (state_13125[10]);var state_13125__$1 = state_13125;var statearr_13137_13176 = state_13125__$1;(statearr_13137_13176[2] = inst_13074);
(statearr_13137_13176[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 9))
{var inst_13082 = (state_13125[12]);var inst_13082__$1 = (state_13125[2]);var inst_13083 = cljs.core.get.call(null,inst_13082__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13084 = cljs.core.get.call(null,inst_13082__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13085 = cljs.core.get.call(null,inst_13082__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13125__$1 = (function (){var statearr_13138 = state_13125;(statearr_13138[13] = inst_13084);
(statearr_13138[14] = inst_13085);
(statearr_13138[12] = inst_13082__$1);
return statearr_13138;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13125__$1,10,inst_13083);
} else
{if((state_val_13126 === 10))
{var inst_13090 = (state_13125[15]);var inst_13089 = (state_13125[16]);var inst_13088 = (state_13125[2]);var inst_13089__$1 = cljs.core.nth.call(null,inst_13088,0,null);var inst_13090__$1 = cljs.core.nth.call(null,inst_13088,1,null);var inst_13091 = (inst_13089__$1 == null);var inst_13092 = cljs.core._EQ_.call(null,inst_13090__$1,change);var inst_13093 = (inst_13091) || (inst_13092);var state_13125__$1 = (function (){var statearr_13139 = state_13125;(statearr_13139[15] = inst_13090__$1);
(statearr_13139[16] = inst_13089__$1);
return statearr_13139;
})();if(cljs.core.truth_(inst_13093))
{var statearr_13140_13177 = state_13125__$1;(statearr_13140_13177[1] = 11);
} else
{var statearr_13141_13178 = state_13125__$1;(statearr_13141_13178[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 11))
{var inst_13089 = (state_13125[16]);var inst_13095 = (inst_13089 == null);var state_13125__$1 = state_13125;if(cljs.core.truth_(inst_13095))
{var statearr_13142_13179 = state_13125__$1;(statearr_13142_13179[1] = 14);
} else
{var statearr_13143_13180 = state_13125__$1;(statearr_13143_13180[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 12))
{var inst_13090 = (state_13125[15]);var inst_13085 = (state_13125[14]);var inst_13104 = (state_13125[17]);var inst_13104__$1 = inst_13085.call(null,inst_13090);var state_13125__$1 = (function (){var statearr_13144 = state_13125;(statearr_13144[17] = inst_13104__$1);
return statearr_13144;
})();if(cljs.core.truth_(inst_13104__$1))
{var statearr_13145_13181 = state_13125__$1;(statearr_13145_13181[1] = 17);
} else
{var statearr_13146_13182 = state_13125__$1;(statearr_13146_13182[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 13))
{var inst_13121 = (state_13125[2]);var state_13125__$1 = state_13125;var statearr_13147_13183 = state_13125__$1;(statearr_13147_13183[2] = inst_13121);
(statearr_13147_13183[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 14))
{var inst_13090 = (state_13125[15]);var inst_13097 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13090);var state_13125__$1 = state_13125;var statearr_13148_13184 = state_13125__$1;(statearr_13148_13184[2] = inst_13097);
(statearr_13148_13184[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 15))
{var state_13125__$1 = state_13125;var statearr_13149_13185 = state_13125__$1;(statearr_13149_13185[2] = null);
(statearr_13149_13185[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 16))
{var inst_13100 = (state_13125[2]);var inst_13101 = calc_state.call(null);var inst_13074 = inst_13101;var state_13125__$1 = (function (){var statearr_13150 = state_13125;(statearr_13150[10] = inst_13074);
(statearr_13150[18] = inst_13100);
return statearr_13150;
})();var statearr_13151_13186 = state_13125__$1;(statearr_13151_13186[2] = null);
(statearr_13151_13186[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 17))
{var inst_13104 = (state_13125[17]);var state_13125__$1 = state_13125;var statearr_13152_13187 = state_13125__$1;(statearr_13152_13187[2] = inst_13104);
(statearr_13152_13187[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 18))
{var inst_13090 = (state_13125[15]);var inst_13084 = (state_13125[13]);var inst_13085 = (state_13125[14]);var inst_13107 = cljs.core.empty_QMARK_.call(null,inst_13085);var inst_13108 = inst_13084.call(null,inst_13090);var inst_13109 = cljs.core.not.call(null,inst_13108);var inst_13110 = (inst_13107) && (inst_13109);var state_13125__$1 = state_13125;var statearr_13153_13188 = state_13125__$1;(statearr_13153_13188[2] = inst_13110);
(statearr_13153_13188[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 19))
{var inst_13112 = (state_13125[2]);var state_13125__$1 = state_13125;if(cljs.core.truth_(inst_13112))
{var statearr_13154_13189 = state_13125__$1;(statearr_13154_13189[1] = 20);
} else
{var statearr_13155_13190 = state_13125__$1;(statearr_13155_13190[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 20))
{var inst_13089 = (state_13125[16]);var state_13125__$1 = state_13125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13125__$1,23,out,inst_13089);
} else
{if((state_val_13126 === 21))
{var state_13125__$1 = state_13125;var statearr_13156_13191 = state_13125__$1;(statearr_13156_13191[2] = null);
(statearr_13156_13191[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 22))
{var inst_13082 = (state_13125[12]);var inst_13118 = (state_13125[2]);var inst_13074 = inst_13082;var state_13125__$1 = (function (){var statearr_13157 = state_13125;(statearr_13157[19] = inst_13118);
(statearr_13157[10] = inst_13074);
return statearr_13157;
})();var statearr_13158_13192 = state_13125__$1;(statearr_13158_13192[2] = null);
(statearr_13158_13192[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13126 === 23))
{var inst_13115 = (state_13125[2]);var state_13125__$1 = state_13125;var statearr_13159_13193 = state_13125__$1;(statearr_13159_13193[2] = inst_13115);
(statearr_13159_13193[1] = 22);
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
var state_machine__6812__auto____0 = (function (){var statearr_13163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13163[0] = state_machine__6812__auto__);
(statearr_13163[1] = 1);
return statearr_13163;
});
var state_machine__6812__auto____1 = (function (state_13125){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13125);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13164){if((e13164 instanceof Object))
{var ex__6815__auto__ = e13164;var statearr_13165_13194 = state_13125;(statearr_13165_13194[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13195 = state_13125;
state_13125 = G__13195;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13125){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13166 = f__6827__auto__.call(null);(statearr_13166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13167);
return statearr_13166;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13197 = {};return obj13197;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3431__auto__ = p;if(and__3431__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4070__auto__ = (((p == null))?null:p);return (function (){var or__3443__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3443__auto__,mults){
return (function (p1__13198_SHARP_){if(cljs.core.truth_(p1__13198_SHARP_.call(null,topic)))
{return p1__13198_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13198_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13323 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13323 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13324){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13324 = meta13324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13323.cljs$lang$type = true;
cljs.core.async.t13323.cljs$lang$ctorStr = "cljs.core.async/t13323";
cljs.core.async.t13323.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13323");
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13323.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13323.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13325){var self__ = this;
var _13325__$1 = this;return self__.meta13324;
});})(mults,ensure_mult))
;
cljs.core.async.t13323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13325,meta13324__$1){var self__ = this;
var _13325__$1 = this;return (new cljs.core.async.t13323(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13324__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13323 = ((function (mults,ensure_mult){
return (function __GT_t13323(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13324){return (new cljs.core.async.t13323(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13324));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13323(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6826__auto___13447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13399){var state_val_13400 = (state_13399[1]);if((state_val_13400 === 1))
{var state_13399__$1 = state_13399;var statearr_13401_13448 = state_13399__$1;(statearr_13401_13448[2] = null);
(statearr_13401_13448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 2))
{var state_13399__$1 = state_13399;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13399__$1,4,ch);
} else
{if((state_val_13400 === 3))
{var inst_13397 = (state_13399[2]);var state_13399__$1 = state_13399;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13399__$1,inst_13397);
} else
{if((state_val_13400 === 4))
{var inst_13328 = (state_13399[7]);var inst_13328__$1 = (state_13399[2]);var inst_13329 = (inst_13328__$1 == null);var state_13399__$1 = (function (){var statearr_13402 = state_13399;(statearr_13402[7] = inst_13328__$1);
return statearr_13402;
})();if(cljs.core.truth_(inst_13329))
{var statearr_13403_13449 = state_13399__$1;(statearr_13403_13449[1] = 5);
} else
{var statearr_13404_13450 = state_13399__$1;(statearr_13404_13450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 5))
{var inst_13335 = cljs.core.deref.call(null,mults);var inst_13336 = cljs.core.vals.call(null,inst_13335);var inst_13337 = cljs.core.seq.call(null,inst_13336);var inst_13338 = inst_13337;var inst_13339 = null;var inst_13340 = 0;var inst_13341 = 0;var state_13399__$1 = (function (){var statearr_13405 = state_13399;(statearr_13405[8] = inst_13338);
(statearr_13405[9] = inst_13339);
(statearr_13405[10] = inst_13340);
(statearr_13405[11] = inst_13341);
return statearr_13405;
})();var statearr_13406_13451 = state_13399__$1;(statearr_13406_13451[2] = null);
(statearr_13406_13451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 6))
{var inst_13376 = (state_13399[12]);var inst_13328 = (state_13399[7]);var inst_13378 = (state_13399[13]);var inst_13376__$1 = topic_fn.call(null,inst_13328);var inst_13377 = cljs.core.deref.call(null,mults);var inst_13378__$1 = cljs.core.get.call(null,inst_13377,inst_13376__$1);var state_13399__$1 = (function (){var statearr_13407 = state_13399;(statearr_13407[12] = inst_13376__$1);
(statearr_13407[13] = inst_13378__$1);
return statearr_13407;
})();if(cljs.core.truth_(inst_13378__$1))
{var statearr_13408_13452 = state_13399__$1;(statearr_13408_13452[1] = 19);
} else
{var statearr_13409_13453 = state_13399__$1;(statearr_13409_13453[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 7))
{var inst_13395 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13410_13454 = state_13399__$1;(statearr_13410_13454[2] = inst_13395);
(statearr_13410_13454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 8))
{var inst_13340 = (state_13399[10]);var inst_13341 = (state_13399[11]);var inst_13343 = (inst_13341 < inst_13340);var inst_13344 = inst_13343;var state_13399__$1 = state_13399;if(cljs.core.truth_(inst_13344))
{var statearr_13414_13455 = state_13399__$1;(statearr_13414_13455[1] = 10);
} else
{var statearr_13415_13456 = state_13399__$1;(statearr_13415_13456[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 9))
{var inst_13374 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13416_13457 = state_13399__$1;(statearr_13416_13457[2] = inst_13374);
(statearr_13416_13457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 10))
{var inst_13338 = (state_13399[8]);var inst_13339 = (state_13399[9]);var inst_13340 = (state_13399[10]);var inst_13341 = (state_13399[11]);var inst_13346 = cljs.core._nth.call(null,inst_13339,inst_13341);var inst_13347 = cljs.core.async.muxch_STAR_.call(null,inst_13346);var inst_13348 = cljs.core.async.close_BANG_.call(null,inst_13347);var inst_13349 = (inst_13341 + 1);var tmp13411 = inst_13338;var tmp13412 = inst_13339;var tmp13413 = inst_13340;var inst_13338__$1 = tmp13411;var inst_13339__$1 = tmp13412;var inst_13340__$1 = tmp13413;var inst_13341__$1 = inst_13349;var state_13399__$1 = (function (){var statearr_13417 = state_13399;(statearr_13417[14] = inst_13348);
(statearr_13417[8] = inst_13338__$1);
(statearr_13417[9] = inst_13339__$1);
(statearr_13417[10] = inst_13340__$1);
(statearr_13417[11] = inst_13341__$1);
return statearr_13417;
})();var statearr_13418_13458 = state_13399__$1;(statearr_13418_13458[2] = null);
(statearr_13418_13458[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 11))
{var inst_13352 = (state_13399[15]);var inst_13338 = (state_13399[8]);var inst_13352__$1 = cljs.core.seq.call(null,inst_13338);var state_13399__$1 = (function (){var statearr_13419 = state_13399;(statearr_13419[15] = inst_13352__$1);
return statearr_13419;
})();if(inst_13352__$1)
{var statearr_13420_13459 = state_13399__$1;(statearr_13420_13459[1] = 13);
} else
{var statearr_13421_13460 = state_13399__$1;(statearr_13421_13460[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 12))
{var inst_13372 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13422_13461 = state_13399__$1;(statearr_13422_13461[2] = inst_13372);
(statearr_13422_13461[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 13))
{var inst_13352 = (state_13399[15]);var inst_13354 = cljs.core.chunked_seq_QMARK_.call(null,inst_13352);var state_13399__$1 = state_13399;if(inst_13354)
{var statearr_13423_13462 = state_13399__$1;(statearr_13423_13462[1] = 16);
} else
{var statearr_13424_13463 = state_13399__$1;(statearr_13424_13463[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 14))
{var state_13399__$1 = state_13399;var statearr_13425_13464 = state_13399__$1;(statearr_13425_13464[2] = null);
(statearr_13425_13464[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 15))
{var inst_13370 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13426_13465 = state_13399__$1;(statearr_13426_13465[2] = inst_13370);
(statearr_13426_13465[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 16))
{var inst_13352 = (state_13399[15]);var inst_13356 = cljs.core.chunk_first.call(null,inst_13352);var inst_13357 = cljs.core.chunk_rest.call(null,inst_13352);var inst_13358 = cljs.core.count.call(null,inst_13356);var inst_13338 = inst_13357;var inst_13339 = inst_13356;var inst_13340 = inst_13358;var inst_13341 = 0;var state_13399__$1 = (function (){var statearr_13427 = state_13399;(statearr_13427[8] = inst_13338);
(statearr_13427[9] = inst_13339);
(statearr_13427[10] = inst_13340);
(statearr_13427[11] = inst_13341);
return statearr_13427;
})();var statearr_13428_13466 = state_13399__$1;(statearr_13428_13466[2] = null);
(statearr_13428_13466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 17))
{var inst_13352 = (state_13399[15]);var inst_13361 = cljs.core.first.call(null,inst_13352);var inst_13362 = cljs.core.async.muxch_STAR_.call(null,inst_13361);var inst_13363 = cljs.core.async.close_BANG_.call(null,inst_13362);var inst_13364 = cljs.core.next.call(null,inst_13352);var inst_13338 = inst_13364;var inst_13339 = null;var inst_13340 = 0;var inst_13341 = 0;var state_13399__$1 = (function (){var statearr_13429 = state_13399;(statearr_13429[16] = inst_13363);
(statearr_13429[8] = inst_13338);
(statearr_13429[9] = inst_13339);
(statearr_13429[10] = inst_13340);
(statearr_13429[11] = inst_13341);
return statearr_13429;
})();var statearr_13430_13467 = state_13399__$1;(statearr_13430_13467[2] = null);
(statearr_13430_13467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 18))
{var inst_13367 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13431_13468 = state_13399__$1;(statearr_13431_13468[2] = inst_13367);
(statearr_13431_13468[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 19))
{var state_13399__$1 = state_13399;var statearr_13432_13469 = state_13399__$1;(statearr_13432_13469[2] = null);
(statearr_13432_13469[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 20))
{var state_13399__$1 = state_13399;var statearr_13433_13470 = state_13399__$1;(statearr_13433_13470[2] = null);
(statearr_13433_13470[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 21))
{var inst_13392 = (state_13399[2]);var state_13399__$1 = (function (){var statearr_13434 = state_13399;(statearr_13434[17] = inst_13392);
return statearr_13434;
})();var statearr_13435_13471 = state_13399__$1;(statearr_13435_13471[2] = null);
(statearr_13435_13471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 22))
{var inst_13389 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13436_13472 = state_13399__$1;(statearr_13436_13472[2] = inst_13389);
(statearr_13436_13472[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 23))
{var inst_13376 = (state_13399[12]);var inst_13380 = (state_13399[2]);var inst_13381 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13376);var state_13399__$1 = (function (){var statearr_13437 = state_13399;(statearr_13437[18] = inst_13380);
return statearr_13437;
})();var statearr_13438_13473 = state_13399__$1;(statearr_13438_13473[2] = inst_13381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13399__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13400 === 24))
{var inst_13328 = (state_13399[7]);var inst_13378 = (state_13399[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13399,23,Object,null,22);var inst_13385 = cljs.core.async.muxch_STAR_.call(null,inst_13378);var state_13399__$1 = state_13399;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13399__$1,25,inst_13385,inst_13328);
} else
{if((state_val_13400 === 25))
{var inst_13387 = (state_13399[2]);var state_13399__$1 = state_13399;var statearr_13439_13474 = state_13399__$1;(statearr_13439_13474[2] = inst_13387);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13399__$1);
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
var state_machine__6812__auto____0 = (function (){var statearr_13443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13443[0] = state_machine__6812__auto__);
(statearr_13443[1] = 1);
return statearr_13443;
});
var state_machine__6812__auto____1 = (function (state_13399){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13399);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13444){if((e13444 instanceof Object))
{var ex__6815__auto__ = e13444;var statearr_13445_13475 = state_13399;(statearr_13445_13475[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13399);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13476 = state_13399;
state_13399 = G__13476;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13399){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13446 = f__6827__auto__.call(null);(statearr_13446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13447);
return statearr_13446;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6826__auto___13613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13583){var state_val_13584 = (state_13583[1]);if((state_val_13584 === 1))
{var state_13583__$1 = state_13583;var statearr_13585_13614 = state_13583__$1;(statearr_13585_13614[2] = null);
(statearr_13585_13614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 2))
{var inst_13546 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13547 = 0;var state_13583__$1 = (function (){var statearr_13586 = state_13583;(statearr_13586[7] = inst_13546);
(statearr_13586[8] = inst_13547);
return statearr_13586;
})();var statearr_13587_13615 = state_13583__$1;(statearr_13587_13615[2] = null);
(statearr_13587_13615[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 3))
{var inst_13581 = (state_13583[2]);var state_13583__$1 = state_13583;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13583__$1,inst_13581);
} else
{if((state_val_13584 === 4))
{var inst_13547 = (state_13583[8]);var inst_13549 = (inst_13547 < cnt);var state_13583__$1 = state_13583;if(cljs.core.truth_(inst_13549))
{var statearr_13588_13616 = state_13583__$1;(statearr_13588_13616[1] = 6);
} else
{var statearr_13589_13617 = state_13583__$1;(statearr_13589_13617[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 5))
{var inst_13567 = (state_13583[2]);var state_13583__$1 = (function (){var statearr_13590 = state_13583;(statearr_13590[9] = inst_13567);
return statearr_13590;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13583__$1,12,dchan);
} else
{if((state_val_13584 === 6))
{var state_13583__$1 = state_13583;var statearr_13591_13618 = state_13583__$1;(statearr_13591_13618[2] = null);
(statearr_13591_13618[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 7))
{var state_13583__$1 = state_13583;var statearr_13592_13619 = state_13583__$1;(statearr_13592_13619[2] = null);
(statearr_13592_13619[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 8))
{var inst_13565 = (state_13583[2]);var state_13583__$1 = state_13583;var statearr_13593_13620 = state_13583__$1;(statearr_13593_13620[2] = inst_13565);
(statearr_13593_13620[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 9))
{var inst_13547 = (state_13583[8]);var inst_13560 = (state_13583[2]);var inst_13561 = (inst_13547 + 1);var inst_13547__$1 = inst_13561;var state_13583__$1 = (function (){var statearr_13594 = state_13583;(statearr_13594[10] = inst_13560);
(statearr_13594[8] = inst_13547__$1);
return statearr_13594;
})();var statearr_13595_13621 = state_13583__$1;(statearr_13595_13621[2] = null);
(statearr_13595_13621[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 10))
{var inst_13551 = (state_13583[2]);var inst_13552 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13583__$1 = (function (){var statearr_13596 = state_13583;(statearr_13596[11] = inst_13551);
return statearr_13596;
})();var statearr_13597_13622 = state_13583__$1;(statearr_13597_13622[2] = inst_13552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13583__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 11))
{var inst_13547 = (state_13583[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13583,10,Object,null,9);var inst_13556 = chs__$1.call(null,inst_13547);var inst_13557 = done.call(null,inst_13547);var inst_13558 = cljs.core.async.take_BANG_.call(null,inst_13556,inst_13557);var state_13583__$1 = state_13583;var statearr_13598_13623 = state_13583__$1;(statearr_13598_13623[2] = inst_13558);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13583__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 12))
{var inst_13569 = (state_13583[12]);var inst_13569__$1 = (state_13583[2]);var inst_13570 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13569__$1);var state_13583__$1 = (function (){var statearr_13599 = state_13583;(statearr_13599[12] = inst_13569__$1);
return statearr_13599;
})();if(cljs.core.truth_(inst_13570))
{var statearr_13600_13624 = state_13583__$1;(statearr_13600_13624[1] = 13);
} else
{var statearr_13601_13625 = state_13583__$1;(statearr_13601_13625[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 13))
{var inst_13572 = cljs.core.async.close_BANG_.call(null,out);var state_13583__$1 = state_13583;var statearr_13602_13626 = state_13583__$1;(statearr_13602_13626[2] = inst_13572);
(statearr_13602_13626[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 14))
{var inst_13569 = (state_13583[12]);var inst_13574 = cljs.core.apply.call(null,f,inst_13569);var state_13583__$1 = state_13583;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13583__$1,16,out,inst_13574);
} else
{if((state_val_13584 === 15))
{var inst_13579 = (state_13583[2]);var state_13583__$1 = state_13583;var statearr_13603_13627 = state_13583__$1;(statearr_13603_13627[2] = inst_13579);
(statearr_13603_13627[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13584 === 16))
{var inst_13576 = (state_13583[2]);var state_13583__$1 = (function (){var statearr_13604 = state_13583;(statearr_13604[13] = inst_13576);
return statearr_13604;
})();var statearr_13605_13628 = state_13583__$1;(statearr_13605_13628[2] = null);
(statearr_13605_13628[1] = 2);
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
}
}
}
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_13609 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13609[0] = state_machine__6812__auto__);
(statearr_13609[1] = 1);
return statearr_13609;
});
var state_machine__6812__auto____1 = (function (state_13583){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13583);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13610){if((e13610 instanceof Object))
{var ex__6815__auto__ = e13610;var statearr_13611_13629 = state_13583;(statearr_13611_13629[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13583);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13630 = state_13583;
state_13583 = G__13630;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13583){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13612 = f__6827__auto__.call(null);(statearr_13612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13613);
return statearr_13612;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___13738 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13714){var state_val_13715 = (state_13714[1]);if((state_val_13715 === 1))
{var inst_13685 = cljs.core.vec.call(null,chs);var inst_13686 = inst_13685;var state_13714__$1 = (function (){var statearr_13716 = state_13714;(statearr_13716[7] = inst_13686);
return statearr_13716;
})();var statearr_13717_13739 = state_13714__$1;(statearr_13717_13739[2] = null);
(statearr_13717_13739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 2))
{var inst_13686 = (state_13714[7]);var inst_13688 = cljs.core.count.call(null,inst_13686);var inst_13689 = (inst_13688 > 0);var state_13714__$1 = state_13714;if(cljs.core.truth_(inst_13689))
{var statearr_13718_13740 = state_13714__$1;(statearr_13718_13740[1] = 4);
} else
{var statearr_13719_13741 = state_13714__$1;(statearr_13719_13741[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 3))
{var inst_13712 = (state_13714[2]);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13714__$1,inst_13712);
} else
{if((state_val_13715 === 4))
{var inst_13686 = (state_13714[7]);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13714__$1,7,inst_13686);
} else
{if((state_val_13715 === 5))
{var inst_13708 = cljs.core.async.close_BANG_.call(null,out);var state_13714__$1 = state_13714;var statearr_13720_13742 = state_13714__$1;(statearr_13720_13742[2] = inst_13708);
(statearr_13720_13742[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 6))
{var inst_13710 = (state_13714[2]);var state_13714__$1 = state_13714;var statearr_13721_13743 = state_13714__$1;(statearr_13721_13743[2] = inst_13710);
(statearr_13721_13743[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 7))
{var inst_13694 = (state_13714[8]);var inst_13693 = (state_13714[9]);var inst_13693__$1 = (state_13714[2]);var inst_13694__$1 = cljs.core.nth.call(null,inst_13693__$1,0,null);var inst_13695 = cljs.core.nth.call(null,inst_13693__$1,1,null);var inst_13696 = (inst_13694__$1 == null);var state_13714__$1 = (function (){var statearr_13722 = state_13714;(statearr_13722[8] = inst_13694__$1);
(statearr_13722[10] = inst_13695);
(statearr_13722[9] = inst_13693__$1);
return statearr_13722;
})();if(cljs.core.truth_(inst_13696))
{var statearr_13723_13744 = state_13714__$1;(statearr_13723_13744[1] = 8);
} else
{var statearr_13724_13745 = state_13714__$1;(statearr_13724_13745[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 8))
{var inst_13686 = (state_13714[7]);var inst_13694 = (state_13714[8]);var inst_13695 = (state_13714[10]);var inst_13693 = (state_13714[9]);var inst_13698 = (function (){var c = inst_13695;var v = inst_13694;var vec__13691 = inst_13693;var cs = inst_13686;return ((function (c,v,vec__13691,cs,inst_13686,inst_13694,inst_13695,inst_13693,state_val_13715){
return (function (p1__13631_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13631_SHARP_);
});
;})(c,v,vec__13691,cs,inst_13686,inst_13694,inst_13695,inst_13693,state_val_13715))
})();var inst_13699 = cljs.core.filterv.call(null,inst_13698,inst_13686);var inst_13686__$1 = inst_13699;var state_13714__$1 = (function (){var statearr_13725 = state_13714;(statearr_13725[7] = inst_13686__$1);
return statearr_13725;
})();var statearr_13726_13746 = state_13714__$1;(statearr_13726_13746[2] = null);
(statearr_13726_13746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 9))
{var inst_13694 = (state_13714[8]);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13714__$1,11,out,inst_13694);
} else
{if((state_val_13715 === 10))
{var inst_13706 = (state_13714[2]);var state_13714__$1 = state_13714;var statearr_13728_13747 = state_13714__$1;(statearr_13728_13747[2] = inst_13706);
(statearr_13728_13747[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 11))
{var inst_13686 = (state_13714[7]);var inst_13703 = (state_13714[2]);var tmp13727 = inst_13686;var inst_13686__$1 = tmp13727;var state_13714__$1 = (function (){var statearr_13729 = state_13714;(statearr_13729[7] = inst_13686__$1);
(statearr_13729[11] = inst_13703);
return statearr_13729;
})();var statearr_13730_13748 = state_13714__$1;(statearr_13730_13748[2] = null);
(statearr_13730_13748[1] = 2);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_13734 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13734[0] = state_machine__6812__auto__);
(statearr_13734[1] = 1);
return statearr_13734;
});
var state_machine__6812__auto____1 = (function (state_13714){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13735){if((e13735 instanceof Object))
{var ex__6815__auto__ = e13735;var statearr_13736_13749 = state_13714;(statearr_13736_13749[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13735;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13750 = state_13714;
state_13714 = G__13750;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13714){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13737 = f__6827__auto__.call(null);(statearr_13737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13738);
return statearr_13737;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___13843 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13820){var state_val_13821 = (state_13820[1]);if((state_val_13821 === 1))
{var inst_13797 = 0;var state_13820__$1 = (function (){var statearr_13822 = state_13820;(statearr_13822[7] = inst_13797);
return statearr_13822;
})();var statearr_13823_13844 = state_13820__$1;(statearr_13823_13844[2] = null);
(statearr_13823_13844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 2))
{var inst_13797 = (state_13820[7]);var inst_13799 = (inst_13797 < n);var state_13820__$1 = state_13820;if(cljs.core.truth_(inst_13799))
{var statearr_13824_13845 = state_13820__$1;(statearr_13824_13845[1] = 4);
} else
{var statearr_13825_13846 = state_13820__$1;(statearr_13825_13846[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 3))
{var inst_13817 = (state_13820[2]);var inst_13818 = cljs.core.async.close_BANG_.call(null,out);var state_13820__$1 = (function (){var statearr_13826 = state_13820;(statearr_13826[8] = inst_13817);
return statearr_13826;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13820__$1,inst_13818);
} else
{if((state_val_13821 === 4))
{var state_13820__$1 = state_13820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13820__$1,7,ch);
} else
{if((state_val_13821 === 5))
{var state_13820__$1 = state_13820;var statearr_13827_13847 = state_13820__$1;(statearr_13827_13847[2] = null);
(statearr_13827_13847[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 6))
{var inst_13815 = (state_13820[2]);var state_13820__$1 = state_13820;var statearr_13828_13848 = state_13820__$1;(statearr_13828_13848[2] = inst_13815);
(statearr_13828_13848[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 7))
{var inst_13802 = (state_13820[9]);var inst_13802__$1 = (state_13820[2]);var inst_13803 = (inst_13802__$1 == null);var inst_13804 = cljs.core.not.call(null,inst_13803);var state_13820__$1 = (function (){var statearr_13829 = state_13820;(statearr_13829[9] = inst_13802__$1);
return statearr_13829;
})();if(inst_13804)
{var statearr_13830_13849 = state_13820__$1;(statearr_13830_13849[1] = 8);
} else
{var statearr_13831_13850 = state_13820__$1;(statearr_13831_13850[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 8))
{var inst_13802 = (state_13820[9]);var state_13820__$1 = state_13820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13820__$1,11,out,inst_13802);
} else
{if((state_val_13821 === 9))
{var state_13820__$1 = state_13820;var statearr_13832_13851 = state_13820__$1;(statearr_13832_13851[2] = null);
(statearr_13832_13851[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 10))
{var inst_13812 = (state_13820[2]);var state_13820__$1 = state_13820;var statearr_13833_13852 = state_13820__$1;(statearr_13833_13852[2] = inst_13812);
(statearr_13833_13852[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13821 === 11))
{var inst_13797 = (state_13820[7]);var inst_13807 = (state_13820[2]);var inst_13808 = (inst_13797 + 1);var inst_13797__$1 = inst_13808;var state_13820__$1 = (function (){var statearr_13834 = state_13820;(statearr_13834[10] = inst_13807);
(statearr_13834[7] = inst_13797__$1);
return statearr_13834;
})();var statearr_13835_13853 = state_13820__$1;(statearr_13835_13853[2] = null);
(statearr_13835_13853[1] = 2);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_13839 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13839[0] = state_machine__6812__auto__);
(statearr_13839[1] = 1);
return statearr_13839;
});
var state_machine__6812__auto____1 = (function (state_13820){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13820);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13840){if((e13840 instanceof Object))
{var ex__6815__auto__ = e13840;var statearr_13841_13854 = state_13820;(statearr_13841_13854[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13820);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13840;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13855 = state_13820;
state_13820 = G__13855;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13820){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13842 = f__6827__auto__.call(null);(statearr_13842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13843);
return statearr_13842;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___13952 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13927){var state_val_13928 = (state_13927[1]);if((state_val_13928 === 1))
{var inst_13904 = null;var state_13927__$1 = (function (){var statearr_13929 = state_13927;(statearr_13929[7] = inst_13904);
return statearr_13929;
})();var statearr_13930_13953 = state_13927__$1;(statearr_13930_13953[2] = null);
(statearr_13930_13953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 2))
{var state_13927__$1 = state_13927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13927__$1,4,ch);
} else
{if((state_val_13928 === 3))
{var inst_13924 = (state_13927[2]);var inst_13925 = cljs.core.async.close_BANG_.call(null,out);var state_13927__$1 = (function (){var statearr_13931 = state_13927;(statearr_13931[8] = inst_13924);
return statearr_13931;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13927__$1,inst_13925);
} else
{if((state_val_13928 === 4))
{var inst_13907 = (state_13927[9]);var inst_13907__$1 = (state_13927[2]);var inst_13908 = (inst_13907__$1 == null);var inst_13909 = cljs.core.not.call(null,inst_13908);var state_13927__$1 = (function (){var statearr_13932 = state_13927;(statearr_13932[9] = inst_13907__$1);
return statearr_13932;
})();if(inst_13909)
{var statearr_13933_13954 = state_13927__$1;(statearr_13933_13954[1] = 5);
} else
{var statearr_13934_13955 = state_13927__$1;(statearr_13934_13955[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 5))
{var inst_13904 = (state_13927[7]);var inst_13907 = (state_13927[9]);var inst_13911 = cljs.core._EQ_.call(null,inst_13907,inst_13904);var state_13927__$1 = state_13927;if(inst_13911)
{var statearr_13935_13956 = state_13927__$1;(statearr_13935_13956[1] = 8);
} else
{var statearr_13936_13957 = state_13927__$1;(statearr_13936_13957[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 6))
{var state_13927__$1 = state_13927;var statearr_13938_13958 = state_13927__$1;(statearr_13938_13958[2] = null);
(statearr_13938_13958[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 7))
{var inst_13922 = (state_13927[2]);var state_13927__$1 = state_13927;var statearr_13939_13959 = state_13927__$1;(statearr_13939_13959[2] = inst_13922);
(statearr_13939_13959[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 8))
{var inst_13904 = (state_13927[7]);var tmp13937 = inst_13904;var inst_13904__$1 = tmp13937;var state_13927__$1 = (function (){var statearr_13940 = state_13927;(statearr_13940[7] = inst_13904__$1);
return statearr_13940;
})();var statearr_13941_13960 = state_13927__$1;(statearr_13941_13960[2] = null);
(statearr_13941_13960[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 9))
{var inst_13907 = (state_13927[9]);var state_13927__$1 = state_13927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13927__$1,11,out,inst_13907);
} else
{if((state_val_13928 === 10))
{var inst_13919 = (state_13927[2]);var state_13927__$1 = state_13927;var statearr_13942_13961 = state_13927__$1;(statearr_13942_13961[2] = inst_13919);
(statearr_13942_13961[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 11))
{var inst_13907 = (state_13927[9]);var inst_13916 = (state_13927[2]);var inst_13904 = inst_13907;var state_13927__$1 = (function (){var statearr_13943 = state_13927;(statearr_13943[7] = inst_13904);
(statearr_13943[10] = inst_13916);
return statearr_13943;
})();var statearr_13944_13962 = state_13927__$1;(statearr_13944_13962[2] = null);
(statearr_13944_13962[1] = 2);
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
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_13948 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13948[0] = state_machine__6812__auto__);
(statearr_13948[1] = 1);
return statearr_13948;
});
var state_machine__6812__auto____1 = (function (state_13927){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13927);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13949){if((e13949 instanceof Object))
{var ex__6815__auto__ = e13949;var statearr_13950_13963 = state_13927;(statearr_13950_13963[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13949;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13964 = state_13927;
state_13927 = G__13964;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13927){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13951 = f__6827__auto__.call(null);(statearr_13951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13952);
return statearr_13951;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___14099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_14069){var state_val_14070 = (state_14069[1]);if((state_val_14070 === 1))
{var inst_14032 = (new Array(n));var inst_14033 = inst_14032;var inst_14034 = 0;var state_14069__$1 = (function (){var statearr_14071 = state_14069;(statearr_14071[7] = inst_14033);
(statearr_14071[8] = inst_14034);
return statearr_14071;
})();var statearr_14072_14100 = state_14069__$1;(statearr_14072_14100[2] = null);
(statearr_14072_14100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 2))
{var state_14069__$1 = state_14069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14069__$1,4,ch);
} else
{if((state_val_14070 === 3))
{var inst_14067 = (state_14069[2]);var state_14069__$1 = state_14069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14069__$1,inst_14067);
} else
{if((state_val_14070 === 4))
{var inst_14037 = (state_14069[9]);var inst_14037__$1 = (state_14069[2]);var inst_14038 = (inst_14037__$1 == null);var inst_14039 = cljs.core.not.call(null,inst_14038);var state_14069__$1 = (function (){var statearr_14073 = state_14069;(statearr_14073[9] = inst_14037__$1);
return statearr_14073;
})();if(inst_14039)
{var statearr_14074_14101 = state_14069__$1;(statearr_14074_14101[1] = 5);
} else
{var statearr_14075_14102 = state_14069__$1;(statearr_14075_14102[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 5))
{var inst_14042 = (state_14069[10]);var inst_14037 = (state_14069[9]);var inst_14033 = (state_14069[7]);var inst_14034 = (state_14069[8]);var inst_14041 = (inst_14033[inst_14034] = inst_14037);var inst_14042__$1 = (inst_14034 + 1);var inst_14043 = (inst_14042__$1 < n);var state_14069__$1 = (function (){var statearr_14076 = state_14069;(statearr_14076[11] = inst_14041);
(statearr_14076[10] = inst_14042__$1);
return statearr_14076;
})();if(cljs.core.truth_(inst_14043))
{var statearr_14077_14103 = state_14069__$1;(statearr_14077_14103[1] = 8);
} else
{var statearr_14078_14104 = state_14069__$1;(statearr_14078_14104[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 6))
{var inst_14034 = (state_14069[8]);var inst_14055 = (inst_14034 > 0);var state_14069__$1 = state_14069;if(cljs.core.truth_(inst_14055))
{var statearr_14080_14105 = state_14069__$1;(statearr_14080_14105[1] = 12);
} else
{var statearr_14081_14106 = state_14069__$1;(statearr_14081_14106[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 7))
{var inst_14065 = (state_14069[2]);var state_14069__$1 = state_14069;var statearr_14082_14107 = state_14069__$1;(statearr_14082_14107[2] = inst_14065);
(statearr_14082_14107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 8))
{var inst_14042 = (state_14069[10]);var inst_14033 = (state_14069[7]);var tmp14079 = inst_14033;var inst_14033__$1 = tmp14079;var inst_14034 = inst_14042;var state_14069__$1 = (function (){var statearr_14083 = state_14069;(statearr_14083[7] = inst_14033__$1);
(statearr_14083[8] = inst_14034);
return statearr_14083;
})();var statearr_14084_14108 = state_14069__$1;(statearr_14084_14108[2] = null);
(statearr_14084_14108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 9))
{var inst_14033 = (state_14069[7]);var inst_14047 = cljs.core.vec.call(null,inst_14033);var state_14069__$1 = state_14069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14069__$1,11,out,inst_14047);
} else
{if((state_val_14070 === 10))
{var inst_14053 = (state_14069[2]);var state_14069__$1 = state_14069;var statearr_14085_14109 = state_14069__$1;(statearr_14085_14109[2] = inst_14053);
(statearr_14085_14109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 11))
{var inst_14049 = (state_14069[2]);var inst_14050 = (new Array(n));var inst_14033 = inst_14050;var inst_14034 = 0;var state_14069__$1 = (function (){var statearr_14086 = state_14069;(statearr_14086[12] = inst_14049);
(statearr_14086[7] = inst_14033);
(statearr_14086[8] = inst_14034);
return statearr_14086;
})();var statearr_14087_14110 = state_14069__$1;(statearr_14087_14110[2] = null);
(statearr_14087_14110[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 12))
{var inst_14033 = (state_14069[7]);var inst_14057 = cljs.core.vec.call(null,inst_14033);var state_14069__$1 = state_14069;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14069__$1,15,out,inst_14057);
} else
{if((state_val_14070 === 13))
{var state_14069__$1 = state_14069;var statearr_14088_14111 = state_14069__$1;(statearr_14088_14111[2] = null);
(statearr_14088_14111[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 14))
{var inst_14062 = (state_14069[2]);var inst_14063 = cljs.core.async.close_BANG_.call(null,out);var state_14069__$1 = (function (){var statearr_14089 = state_14069;(statearr_14089[13] = inst_14062);
return statearr_14089;
})();var statearr_14090_14112 = state_14069__$1;(statearr_14090_14112[2] = inst_14063);
(statearr_14090_14112[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14070 === 15))
{var inst_14059 = (state_14069[2]);var state_14069__$1 = state_14069;var statearr_14091_14113 = state_14069__$1;(statearr_14091_14113[2] = inst_14059);
(statearr_14091_14113[1] = 14);
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
}
}
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_14095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14095[0] = state_machine__6812__auto__);
(statearr_14095[1] = 1);
return statearr_14095;
});
var state_machine__6812__auto____1 = (function (state_14069){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_14069);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e14096){if((e14096 instanceof Object))
{var ex__6815__auto__ = e14096;var statearr_14097_14114 = state_14069;(statearr_14097_14114[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14115 = state_14069;
state_14069 = G__14115;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_14069){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_14069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_14098 = f__6827__auto__.call(null);(statearr_14098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___14099);
return statearr_14098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___14258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_14228){var state_val_14229 = (state_14228[1]);if((state_val_14229 === 1))
{var inst_14187 = [];var inst_14188 = inst_14187;var inst_14189 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14228__$1 = (function (){var statearr_14230 = state_14228;(statearr_14230[7] = inst_14189);
(statearr_14230[8] = inst_14188);
return statearr_14230;
})();var statearr_14231_14259 = state_14228__$1;(statearr_14231_14259[2] = null);
(statearr_14231_14259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 2))
{var state_14228__$1 = state_14228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14228__$1,4,ch);
} else
{if((state_val_14229 === 3))
{var inst_14226 = (state_14228[2]);var state_14228__$1 = state_14228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14228__$1,inst_14226);
} else
{if((state_val_14229 === 4))
{var inst_14192 = (state_14228[9]);var inst_14192__$1 = (state_14228[2]);var inst_14193 = (inst_14192__$1 == null);var inst_14194 = cljs.core.not.call(null,inst_14193);var state_14228__$1 = (function (){var statearr_14232 = state_14228;(statearr_14232[9] = inst_14192__$1);
return statearr_14232;
})();if(inst_14194)
{var statearr_14233_14260 = state_14228__$1;(statearr_14233_14260[1] = 5);
} else
{var statearr_14234_14261 = state_14228__$1;(statearr_14234_14261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 5))
{var inst_14192 = (state_14228[9]);var inst_14189 = (state_14228[7]);var inst_14196 = (state_14228[10]);var inst_14196__$1 = f.call(null,inst_14192);var inst_14197 = cljs.core._EQ_.call(null,inst_14196__$1,inst_14189);var inst_14198 = cljs.core.keyword_identical_QMARK_.call(null,inst_14189,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14199 = (inst_14197) || (inst_14198);var state_14228__$1 = (function (){var statearr_14235 = state_14228;(statearr_14235[10] = inst_14196__$1);
return statearr_14235;
})();if(cljs.core.truth_(inst_14199))
{var statearr_14236_14262 = state_14228__$1;(statearr_14236_14262[1] = 8);
} else
{var statearr_14237_14263 = state_14228__$1;(statearr_14237_14263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 6))
{var inst_14188 = (state_14228[8]);var inst_14213 = inst_14188.length;var inst_14214 = (inst_14213 > 0);var state_14228__$1 = state_14228;if(cljs.core.truth_(inst_14214))
{var statearr_14239_14264 = state_14228__$1;(statearr_14239_14264[1] = 12);
} else
{var statearr_14240_14265 = state_14228__$1;(statearr_14240_14265[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 7))
{var inst_14224 = (state_14228[2]);var state_14228__$1 = state_14228;var statearr_14241_14266 = state_14228__$1;(statearr_14241_14266[2] = inst_14224);
(statearr_14241_14266[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 8))
{var inst_14192 = (state_14228[9]);var inst_14188 = (state_14228[8]);var inst_14196 = (state_14228[10]);var inst_14201 = inst_14188.push(inst_14192);var tmp14238 = inst_14188;var inst_14188__$1 = tmp14238;var inst_14189 = inst_14196;var state_14228__$1 = (function (){var statearr_14242 = state_14228;(statearr_14242[11] = inst_14201);
(statearr_14242[7] = inst_14189);
(statearr_14242[8] = inst_14188__$1);
return statearr_14242;
})();var statearr_14243_14267 = state_14228__$1;(statearr_14243_14267[2] = null);
(statearr_14243_14267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 9))
{var inst_14188 = (state_14228[8]);var inst_14204 = cljs.core.vec.call(null,inst_14188);var state_14228__$1 = state_14228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14228__$1,11,out,inst_14204);
} else
{if((state_val_14229 === 10))
{var inst_14211 = (state_14228[2]);var state_14228__$1 = state_14228;var statearr_14244_14268 = state_14228__$1;(statearr_14244_14268[2] = inst_14211);
(statearr_14244_14268[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 11))
{var inst_14192 = (state_14228[9]);var inst_14196 = (state_14228[10]);var inst_14206 = (state_14228[2]);var inst_14207 = [];var inst_14208 = inst_14207.push(inst_14192);var inst_14188 = inst_14207;var inst_14189 = inst_14196;var state_14228__$1 = (function (){var statearr_14245 = state_14228;(statearr_14245[12] = inst_14206);
(statearr_14245[13] = inst_14208);
(statearr_14245[7] = inst_14189);
(statearr_14245[8] = inst_14188);
return statearr_14245;
})();var statearr_14246_14269 = state_14228__$1;(statearr_14246_14269[2] = null);
(statearr_14246_14269[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 12))
{var inst_14188 = (state_14228[8]);var inst_14216 = cljs.core.vec.call(null,inst_14188);var state_14228__$1 = state_14228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14228__$1,15,out,inst_14216);
} else
{if((state_val_14229 === 13))
{var state_14228__$1 = state_14228;var statearr_14247_14270 = state_14228__$1;(statearr_14247_14270[2] = null);
(statearr_14247_14270[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 14))
{var inst_14221 = (state_14228[2]);var inst_14222 = cljs.core.async.close_BANG_.call(null,out);var state_14228__$1 = (function (){var statearr_14248 = state_14228;(statearr_14248[14] = inst_14221);
return statearr_14248;
})();var statearr_14249_14271 = state_14228__$1;(statearr_14249_14271[2] = inst_14222);
(statearr_14249_14271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14229 === 15))
{var inst_14218 = (state_14228[2]);var state_14228__$1 = state_14228;var statearr_14250_14272 = state_14228__$1;(statearr_14250_14272[2] = inst_14218);
(statearr_14250_14272[1] = 14);
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
}
}
});return ((function (switch__6811__auto__){
return (function() {
var state_machine__6812__auto__ = null;
var state_machine__6812__auto____0 = (function (){var statearr_14254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14254[0] = state_machine__6812__auto__);
(statearr_14254[1] = 1);
return statearr_14254;
});
var state_machine__6812__auto____1 = (function (state_14228){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_14228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e14255){if((e14255 instanceof Object))
{var ex__6815__auto__ = e14255;var statearr_14256_14273 = state_14228;(statearr_14256_14273[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14274 = state_14228;
state_14228 = G__14274;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_14228){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_14228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_14257 = f__6827__auto__.call(null);(statearr_14257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___14258);
return statearr_14257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6828__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map