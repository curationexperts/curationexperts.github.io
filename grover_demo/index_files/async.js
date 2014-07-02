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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11651 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11651 = (function (f,fn_handler,meta11652){
this.f = f;
this.fn_handler = fn_handler;
this.meta11652 = meta11652;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11651.cljs$lang$type = true;
cljs.core.async.t11651.cljs$lang$ctorStr = "cljs.core.async/t11651";
cljs.core.async.t11651.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11651");
});
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11651.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11653){var self__ = this;
var _11653__$1 = this;return self__.meta11652;
});
cljs.core.async.t11651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11653,meta11652__$1){var self__ = this;
var _11653__$1 = this;return (new cljs.core.async.t11651(self__.f,self__.fn_handler,meta11652__$1));
});
cljs.core.async.__GT_t11651 = (function __GT_t11651(f__$1,fn_handler__$1,meta11652){return (new cljs.core.async.t11651(f__$1,fn_handler__$1,meta11652));
});
}
return (new cljs.core.async.t11651(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11655 = buff;if(G__11655)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto__ = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return G__11655.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11655.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11655);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11655);
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
{var val_11656 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11656);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11656);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4291__auto___11657 = n;var x_11658 = 0;while(true){
if((x_11658 < n__4291__auto___11657))
{(a[x_11658] = 0);
{
var G__11659 = (x_11658 + 1);
x_11658 = G__11659;
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
var G__11660 = (i + 1);
i = G__11660;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11664 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11664 = (function (flag,alt_flag,meta11665){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11665 = meta11665;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11664.cljs$lang$type = true;
cljs.core.async.t11664.cljs$lang$ctorStr = "cljs.core.async/t11664";
cljs.core.async.t11664.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11664");
});
cljs.core.async.t11664.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11666){var self__ = this;
var _11666__$1 = this;return self__.meta11665;
});
cljs.core.async.t11664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11666,meta11665__$1){var self__ = this;
var _11666__$1 = this;return (new cljs.core.async.t11664(self__.flag,self__.alt_flag,meta11665__$1));
});
cljs.core.async.__GT_t11664 = (function __GT_t11664(flag__$1,alt_flag__$1,meta11665){return (new cljs.core.async.t11664(flag__$1,alt_flag__$1,meta11665));
});
}
return (new cljs.core.async.t11664(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11670 = (function (cb,flag,alt_handler,meta11671){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11671 = meta11671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11670.cljs$lang$type = true;
cljs.core.async.t11670.cljs$lang$ctorStr = "cljs.core.async/t11670";
cljs.core.async.t11670.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11670");
});
cljs.core.async.t11670.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11672){var self__ = this;
var _11672__$1 = this;return self__.meta11671;
});
cljs.core.async.t11670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11672,meta11671__$1){var self__ = this;
var _11672__$1 = this;return (new cljs.core.async.t11670(self__.cb,self__.flag,self__.alt_handler,meta11671__$1));
});
cljs.core.async.__GT_t11670 = (function __GT_t11670(cb__$1,flag__$1,alt_handler__$1,meta11671){return (new cljs.core.async.t11670(cb__$1,flag__$1,alt_handler__$1,meta11671));
});
}
return (new cljs.core.async.t11670(cb,flag,alt_handler,null));
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
return (function (p1__11673_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11673_SHARP_,port], null));
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
var G__11674 = (i + 1);
i = G__11674;
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
var alts_BANG___delegate = function (ports,p__11675){var map__11677 = p__11675;var map__11677__$1 = ((cljs.core.seq_QMARK_.call(null,map__11677))?cljs.core.apply.call(null,cljs.core.hash_map,map__11677):map__11677);var opts = map__11677__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11675 = null;if (arguments.length > 1) {
  p__11675 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11675);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11678){
var ports = cljs.core.first(arglist__11678);
var p__11675 = cljs.core.rest(arglist__11678);
return alts_BANG___delegate(ports,p__11675);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11686 = (function (ch,f,map_LT_,meta11687){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11687 = meta11687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11686.cljs$lang$type = true;
cljs.core.async.t11686.cljs$lang$ctorStr = "cljs.core.async/t11686";
cljs.core.async.t11686.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11686");
});
cljs.core.async.t11686.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11686.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11686.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11686.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11689 = (function (fn1,_,meta11687,ch,f,map_LT_,meta11690){
this.fn1 = fn1;
this._ = _;
this.meta11687 = meta11687;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11690 = meta11690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11689.cljs$lang$type = true;
cljs.core.async.t11689.cljs$lang$ctorStr = "cljs.core.async/t11689";
cljs.core.async.t11689.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11689");
});
cljs.core.async.t11689.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11689.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11679_SHARP_){return f1.call(null,(((p1__11679_SHARP_ == null))?null:self__.f.call(null,p1__11679_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11691){var self__ = this;
var _11691__$1 = this;return self__.meta11690;
});
cljs.core.async.t11689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11691,meta11690__$1){var self__ = this;
var _11691__$1 = this;return (new cljs.core.async.t11689(self__.fn1,self__._,self__.meta11687,self__.ch,self__.f,self__.map_LT_,meta11690__$1));
});
cljs.core.async.__GT_t11689 = (function __GT_t11689(fn1__$1,___$2,meta11687__$1,ch__$2,f__$2,map_LT___$2,meta11690){return (new cljs.core.async.t11689(fn1__$1,___$2,meta11687__$1,ch__$2,f__$2,map_LT___$2,meta11690));
});
}
return (new cljs.core.async.t11689(fn1,___$1,self__.meta11687,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11686.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11686.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11688){var self__ = this;
var _11688__$1 = this;return self__.meta11687;
});
cljs.core.async.t11686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11688,meta11687__$1){var self__ = this;
var _11688__$1 = this;return (new cljs.core.async.t11686(self__.ch,self__.f,self__.map_LT_,meta11687__$1));
});
cljs.core.async.__GT_t11686 = (function __GT_t11686(ch__$1,f__$1,map_LT___$1,meta11687){return (new cljs.core.async.t11686(ch__$1,f__$1,map_LT___$1,meta11687));
});
}
return (new cljs.core.async.t11686(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11695 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11695 = (function (ch,f,map_GT_,meta11696){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11696 = meta11696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11695.cljs$lang$type = true;
cljs.core.async.t11695.cljs$lang$ctorStr = "cljs.core.async/t11695";
cljs.core.async.t11695.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11695");
});
cljs.core.async.t11695.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11695.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11695.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11695.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11695.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11695.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11697){var self__ = this;
var _11697__$1 = this;return self__.meta11696;
});
cljs.core.async.t11695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11697,meta11696__$1){var self__ = this;
var _11697__$1 = this;return (new cljs.core.async.t11695(self__.ch,self__.f,self__.map_GT_,meta11696__$1));
});
cljs.core.async.__GT_t11695 = (function __GT_t11695(ch__$1,f__$1,map_GT___$1,meta11696){return (new cljs.core.async.t11695(ch__$1,f__$1,map_GT___$1,meta11696));
});
}
return (new cljs.core.async.t11695(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11701 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11701 = (function (ch,p,filter_GT_,meta11702){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11702 = meta11702;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11701.cljs$lang$type = true;
cljs.core.async.t11701.cljs$lang$ctorStr = "cljs.core.async/t11701";
cljs.core.async.t11701.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t11701");
});
cljs.core.async.t11701.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11701.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11701.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11701.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11701.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11701.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11703){var self__ = this;
var _11703__$1 = this;return self__.meta11702;
});
cljs.core.async.t11701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11703,meta11702__$1){var self__ = this;
var _11703__$1 = this;return (new cljs.core.async.t11701(self__.ch,self__.p,self__.filter_GT_,meta11702__$1));
});
cljs.core.async.__GT_t11701 = (function __GT_t11701(ch__$1,p__$1,filter_GT___$1,meta11702){return (new cljs.core.async.t11701(ch__$1,p__$1,filter_GT___$1,meta11702));
});
}
return (new cljs.core.async.t11701(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___11786 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_11765){var state_val_11766 = (state_11765[1]);if((state_val_11766 === 1))
{var state_11765__$1 = state_11765;var statearr_11767_11787 = state_11765__$1;(statearr_11767_11787[2] = null);
(statearr_11767_11787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 2))
{var state_11765__$1 = state_11765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11765__$1,4,ch);
} else
{if((state_val_11766 === 3))
{var inst_11763 = (state_11765[2]);var state_11765__$1 = state_11765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11765__$1,inst_11763);
} else
{if((state_val_11766 === 4))
{var inst_11747 = (state_11765[7]);var inst_11747__$1 = (state_11765[2]);var inst_11748 = (inst_11747__$1 == null);var state_11765__$1 = (function (){var statearr_11768 = state_11765;(statearr_11768[7] = inst_11747__$1);
return statearr_11768;
})();if(cljs.core.truth_(inst_11748))
{var statearr_11769_11788 = state_11765__$1;(statearr_11769_11788[1] = 5);
} else
{var statearr_11770_11789 = state_11765__$1;(statearr_11770_11789[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 5))
{var inst_11750 = cljs.core.async.close_BANG_.call(null,out);var state_11765__$1 = state_11765;var statearr_11771_11790 = state_11765__$1;(statearr_11771_11790[2] = inst_11750);
(statearr_11771_11790[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 6))
{var inst_11747 = (state_11765[7]);var inst_11752 = p.call(null,inst_11747);var state_11765__$1 = state_11765;if(cljs.core.truth_(inst_11752))
{var statearr_11772_11791 = state_11765__$1;(statearr_11772_11791[1] = 8);
} else
{var statearr_11773_11792 = state_11765__$1;(statearr_11773_11792[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 7))
{var inst_11761 = (state_11765[2]);var state_11765__$1 = state_11765;var statearr_11774_11793 = state_11765__$1;(statearr_11774_11793[2] = inst_11761);
(statearr_11774_11793[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 8))
{var inst_11747 = (state_11765[7]);var state_11765__$1 = state_11765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11765__$1,11,out,inst_11747);
} else
{if((state_val_11766 === 9))
{var state_11765__$1 = state_11765;var statearr_11775_11794 = state_11765__$1;(statearr_11775_11794[2] = null);
(statearr_11775_11794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 10))
{var inst_11758 = (state_11765[2]);var state_11765__$1 = (function (){var statearr_11776 = state_11765;(statearr_11776[8] = inst_11758);
return statearr_11776;
})();var statearr_11777_11795 = state_11765__$1;(statearr_11777_11795[2] = null);
(statearr_11777_11795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11766 === 11))
{var inst_11755 = (state_11765[2]);var state_11765__$1 = state_11765;var statearr_11778_11796 = state_11765__$1;(statearr_11778_11796[2] = inst_11755);
(statearr_11778_11796[1] = 10);
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
var state_machine__6812__auto____0 = (function (){var statearr_11782 = [null,null,null,null,null,null,null,null,null];(statearr_11782[0] = state_machine__6812__auto__);
(statearr_11782[1] = 1);
return statearr_11782;
});
var state_machine__6812__auto____1 = (function (state_11765){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_11765);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e11783){if((e11783 instanceof Object))
{var ex__6815__auto__ = e11783;var statearr_11784_11797 = state_11765;(statearr_11784_11797[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11798 = state_11765;
state_11765 = G__11798;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_11765){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_11765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_11785 = f__6827__auto__.call(null);(statearr_11785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___11786);
return statearr_11785;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_11950){var state_val_11951 = (state_11950[1]);if((state_val_11951 === 1))
{var state_11950__$1 = state_11950;var statearr_11952_11989 = state_11950__$1;(statearr_11952_11989[2] = null);
(statearr_11952_11989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 2))
{var state_11950__$1 = state_11950;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11950__$1,4,in$);
} else
{if((state_val_11951 === 3))
{var inst_11948 = (state_11950[2]);var state_11950__$1 = state_11950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11950__$1,inst_11948);
} else
{if((state_val_11951 === 4))
{var inst_11896 = (state_11950[7]);var inst_11896__$1 = (state_11950[2]);var inst_11897 = (inst_11896__$1 == null);var state_11950__$1 = (function (){var statearr_11953 = state_11950;(statearr_11953[7] = inst_11896__$1);
return statearr_11953;
})();if(cljs.core.truth_(inst_11897))
{var statearr_11954_11990 = state_11950__$1;(statearr_11954_11990[1] = 5);
} else
{var statearr_11955_11991 = state_11950__$1;(statearr_11955_11991[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 5))
{var inst_11899 = cljs.core.async.close_BANG_.call(null,out);var state_11950__$1 = state_11950;var statearr_11956_11992 = state_11950__$1;(statearr_11956_11992[2] = inst_11899);
(statearr_11956_11992[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 6))
{var inst_11896 = (state_11950[7]);var inst_11901 = f.call(null,inst_11896);var inst_11906 = cljs.core.seq.call(null,inst_11901);var inst_11907 = inst_11906;var inst_11908 = null;var inst_11909 = 0;var inst_11910 = 0;var state_11950__$1 = (function (){var statearr_11957 = state_11950;(statearr_11957[8] = inst_11907);
(statearr_11957[9] = inst_11909);
(statearr_11957[10] = inst_11908);
(statearr_11957[11] = inst_11910);
return statearr_11957;
})();var statearr_11958_11993 = state_11950__$1;(statearr_11958_11993[2] = null);
(statearr_11958_11993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 7))
{var inst_11946 = (state_11950[2]);var state_11950__$1 = state_11950;var statearr_11959_11994 = state_11950__$1;(statearr_11959_11994[2] = inst_11946);
(statearr_11959_11994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 8))
{var inst_11909 = (state_11950[9]);var inst_11910 = (state_11950[11]);var inst_11912 = (inst_11910 < inst_11909);var inst_11913 = inst_11912;var state_11950__$1 = state_11950;if(cljs.core.truth_(inst_11913))
{var statearr_11960_11995 = state_11950__$1;(statearr_11960_11995[1] = 10);
} else
{var statearr_11961_11996 = state_11950__$1;(statearr_11961_11996[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 9))
{var inst_11943 = (state_11950[2]);var state_11950__$1 = (function (){var statearr_11962 = state_11950;(statearr_11962[12] = inst_11943);
return statearr_11962;
})();var statearr_11963_11997 = state_11950__$1;(statearr_11963_11997[2] = null);
(statearr_11963_11997[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 10))
{var inst_11908 = (state_11950[10]);var inst_11910 = (state_11950[11]);var inst_11915 = cljs.core._nth.call(null,inst_11908,inst_11910);var state_11950__$1 = state_11950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11950__$1,13,out,inst_11915);
} else
{if((state_val_11951 === 11))
{var inst_11907 = (state_11950[8]);var inst_11921 = (state_11950[13]);var inst_11921__$1 = cljs.core.seq.call(null,inst_11907);var state_11950__$1 = (function (){var statearr_11967 = state_11950;(statearr_11967[13] = inst_11921__$1);
return statearr_11967;
})();if(inst_11921__$1)
{var statearr_11968_11998 = state_11950__$1;(statearr_11968_11998[1] = 14);
} else
{var statearr_11969_11999 = state_11950__$1;(statearr_11969_11999[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 12))
{var inst_11941 = (state_11950[2]);var state_11950__$1 = state_11950;var statearr_11970_12000 = state_11950__$1;(statearr_11970_12000[2] = inst_11941);
(statearr_11970_12000[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 13))
{var inst_11907 = (state_11950[8]);var inst_11909 = (state_11950[9]);var inst_11908 = (state_11950[10]);var inst_11910 = (state_11950[11]);var inst_11917 = (state_11950[2]);var inst_11918 = (inst_11910 + 1);var tmp11964 = inst_11907;var tmp11965 = inst_11909;var tmp11966 = inst_11908;var inst_11907__$1 = tmp11964;var inst_11908__$1 = tmp11966;var inst_11909__$1 = tmp11965;var inst_11910__$1 = inst_11918;var state_11950__$1 = (function (){var statearr_11971 = state_11950;(statearr_11971[8] = inst_11907__$1);
(statearr_11971[9] = inst_11909__$1);
(statearr_11971[10] = inst_11908__$1);
(statearr_11971[14] = inst_11917);
(statearr_11971[11] = inst_11910__$1);
return statearr_11971;
})();var statearr_11972_12001 = state_11950__$1;(statearr_11972_12001[2] = null);
(statearr_11972_12001[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 14))
{var inst_11921 = (state_11950[13]);var inst_11923 = cljs.core.chunked_seq_QMARK_.call(null,inst_11921);var state_11950__$1 = state_11950;if(inst_11923)
{var statearr_11973_12002 = state_11950__$1;(statearr_11973_12002[1] = 17);
} else
{var statearr_11974_12003 = state_11950__$1;(statearr_11974_12003[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 15))
{var state_11950__$1 = state_11950;var statearr_11975_12004 = state_11950__$1;(statearr_11975_12004[2] = null);
(statearr_11975_12004[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 16))
{var inst_11939 = (state_11950[2]);var state_11950__$1 = state_11950;var statearr_11976_12005 = state_11950__$1;(statearr_11976_12005[2] = inst_11939);
(statearr_11976_12005[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 17))
{var inst_11921 = (state_11950[13]);var inst_11925 = cljs.core.chunk_first.call(null,inst_11921);var inst_11926 = cljs.core.chunk_rest.call(null,inst_11921);var inst_11927 = cljs.core.count.call(null,inst_11925);var inst_11907 = inst_11926;var inst_11908 = inst_11925;var inst_11909 = inst_11927;var inst_11910 = 0;var state_11950__$1 = (function (){var statearr_11977 = state_11950;(statearr_11977[8] = inst_11907);
(statearr_11977[9] = inst_11909);
(statearr_11977[10] = inst_11908);
(statearr_11977[11] = inst_11910);
return statearr_11977;
})();var statearr_11978_12006 = state_11950__$1;(statearr_11978_12006[2] = null);
(statearr_11978_12006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 18))
{var inst_11921 = (state_11950[13]);var inst_11930 = cljs.core.first.call(null,inst_11921);var state_11950__$1 = state_11950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11950__$1,20,out,inst_11930);
} else
{if((state_val_11951 === 19))
{var inst_11936 = (state_11950[2]);var state_11950__$1 = state_11950;var statearr_11979_12007 = state_11950__$1;(statearr_11979_12007[2] = inst_11936);
(statearr_11979_12007[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11951 === 20))
{var inst_11921 = (state_11950[13]);var inst_11932 = (state_11950[2]);var inst_11933 = cljs.core.next.call(null,inst_11921);var inst_11907 = inst_11933;var inst_11908 = null;var inst_11909 = 0;var inst_11910 = 0;var state_11950__$1 = (function (){var statearr_11980 = state_11950;(statearr_11980[8] = inst_11907);
(statearr_11980[15] = inst_11932);
(statearr_11980[9] = inst_11909);
(statearr_11980[10] = inst_11908);
(statearr_11980[11] = inst_11910);
return statearr_11980;
})();var statearr_11981_12008 = state_11950__$1;(statearr_11981_12008[2] = null);
(statearr_11981_12008[1] = 8);
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
var state_machine__6812__auto____0 = (function (){var statearr_11985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11985[0] = state_machine__6812__auto__);
(statearr_11985[1] = 1);
return statearr_11985;
});
var state_machine__6812__auto____1 = (function (state_11950){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_11950);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e11986){if((e11986 instanceof Object))
{var ex__6815__auto__ = e11986;var statearr_11987_12009 = state_11950;(statearr_11987_12009[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11950);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12010 = state_11950;
state_11950 = G__12010;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_11950){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_11950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_11988 = f__6827__auto__.call(null);(statearr_11988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_11988;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6826__auto___12091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12070){var state_val_12071 = (state_12070[1]);if((state_val_12071 === 1))
{var state_12070__$1 = state_12070;var statearr_12072_12092 = state_12070__$1;(statearr_12072_12092[2] = null);
(statearr_12072_12092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 2))
{var state_12070__$1 = state_12070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12070__$1,4,from);
} else
{if((state_val_12071 === 3))
{var inst_12068 = (state_12070[2]);var state_12070__$1 = state_12070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12070__$1,inst_12068);
} else
{if((state_val_12071 === 4))
{var inst_12053 = (state_12070[7]);var inst_12053__$1 = (state_12070[2]);var inst_12054 = (inst_12053__$1 == null);var state_12070__$1 = (function (){var statearr_12073 = state_12070;(statearr_12073[7] = inst_12053__$1);
return statearr_12073;
})();if(cljs.core.truth_(inst_12054))
{var statearr_12074_12093 = state_12070__$1;(statearr_12074_12093[1] = 5);
} else
{var statearr_12075_12094 = state_12070__$1;(statearr_12075_12094[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 5))
{var state_12070__$1 = state_12070;if(cljs.core.truth_(close_QMARK_))
{var statearr_12076_12095 = state_12070__$1;(statearr_12076_12095[1] = 8);
} else
{var statearr_12077_12096 = state_12070__$1;(statearr_12077_12096[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 6))
{var inst_12053 = (state_12070[7]);var state_12070__$1 = state_12070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12070__$1,11,to,inst_12053);
} else
{if((state_val_12071 === 7))
{var inst_12066 = (state_12070[2]);var state_12070__$1 = state_12070;var statearr_12078_12097 = state_12070__$1;(statearr_12078_12097[2] = inst_12066);
(statearr_12078_12097[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 8))
{var inst_12057 = cljs.core.async.close_BANG_.call(null,to);var state_12070__$1 = state_12070;var statearr_12079_12098 = state_12070__$1;(statearr_12079_12098[2] = inst_12057);
(statearr_12079_12098[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 9))
{var state_12070__$1 = state_12070;var statearr_12080_12099 = state_12070__$1;(statearr_12080_12099[2] = null);
(statearr_12080_12099[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 10))
{var inst_12060 = (state_12070[2]);var state_12070__$1 = state_12070;var statearr_12081_12100 = state_12070__$1;(statearr_12081_12100[2] = inst_12060);
(statearr_12081_12100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12071 === 11))
{var inst_12063 = (state_12070[2]);var state_12070__$1 = (function (){var statearr_12082 = state_12070;(statearr_12082[8] = inst_12063);
return statearr_12082;
})();var statearr_12083_12101 = state_12070__$1;(statearr_12083_12101[2] = null);
(statearr_12083_12101[1] = 2);
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
var state_machine__6812__auto____0 = (function (){var statearr_12087 = [null,null,null,null,null,null,null,null,null];(statearr_12087[0] = state_machine__6812__auto__);
(statearr_12087[1] = 1);
return statearr_12087;
});
var state_machine__6812__auto____1 = (function (state_12070){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12088){if((e12088 instanceof Object))
{var ex__6815__auto__ = e12088;var statearr_12089_12102 = state_12070;(statearr_12089_12102[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12103 = state_12070;
state_12070 = G__12103;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12070){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12090 = f__6827__auto__.call(null);(statearr_12090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___12091);
return statearr_12090;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6826__auto___12190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12168){var state_val_12169 = (state_12168[1]);if((state_val_12169 === 1))
{var state_12168__$1 = state_12168;var statearr_12170_12191 = state_12168__$1;(statearr_12170_12191[2] = null);
(statearr_12170_12191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 2))
{var state_12168__$1 = state_12168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12168__$1,4,ch);
} else
{if((state_val_12169 === 3))
{var inst_12166 = (state_12168[2]);var state_12168__$1 = state_12168;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12168__$1,inst_12166);
} else
{if((state_val_12169 === 4))
{var inst_12149 = (state_12168[7]);var inst_12149__$1 = (state_12168[2]);var inst_12150 = (inst_12149__$1 == null);var state_12168__$1 = (function (){var statearr_12171 = state_12168;(statearr_12171[7] = inst_12149__$1);
return statearr_12171;
})();if(cljs.core.truth_(inst_12150))
{var statearr_12172_12192 = state_12168__$1;(statearr_12172_12192[1] = 5);
} else
{var statearr_12173_12193 = state_12168__$1;(statearr_12173_12193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 5))
{var inst_12152 = cljs.core.async.close_BANG_.call(null,tc);var inst_12153 = cljs.core.async.close_BANG_.call(null,fc);var state_12168__$1 = (function (){var statearr_12174 = state_12168;(statearr_12174[8] = inst_12152);
return statearr_12174;
})();var statearr_12175_12194 = state_12168__$1;(statearr_12175_12194[2] = inst_12153);
(statearr_12175_12194[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 6))
{var inst_12149 = (state_12168[7]);var inst_12155 = p.call(null,inst_12149);var state_12168__$1 = state_12168;if(cljs.core.truth_(inst_12155))
{var statearr_12176_12195 = state_12168__$1;(statearr_12176_12195[1] = 9);
} else
{var statearr_12177_12196 = state_12168__$1;(statearr_12177_12196[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 7))
{var inst_12164 = (state_12168[2]);var state_12168__$1 = state_12168;var statearr_12178_12197 = state_12168__$1;(statearr_12178_12197[2] = inst_12164);
(statearr_12178_12197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 8))
{var inst_12161 = (state_12168[2]);var state_12168__$1 = (function (){var statearr_12179 = state_12168;(statearr_12179[9] = inst_12161);
return statearr_12179;
})();var statearr_12180_12198 = state_12168__$1;(statearr_12180_12198[2] = null);
(statearr_12180_12198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 9))
{var state_12168__$1 = state_12168;var statearr_12181_12199 = state_12168__$1;(statearr_12181_12199[2] = tc);
(statearr_12181_12199[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 10))
{var state_12168__$1 = state_12168;var statearr_12182_12200 = state_12168__$1;(statearr_12182_12200[2] = fc);
(statearr_12182_12200[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12169 === 11))
{var inst_12149 = (state_12168[7]);var inst_12159 = (state_12168[2]);var state_12168__$1 = state_12168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12168__$1,8,inst_12159,inst_12149);
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
var state_machine__6812__auto____0 = (function (){var statearr_12186 = [null,null,null,null,null,null,null,null,null,null];(statearr_12186[0] = state_machine__6812__auto__);
(statearr_12186[1] = 1);
return statearr_12186;
});
var state_machine__6812__auto____1 = (function (state_12168){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12187){if((e12187 instanceof Object))
{var ex__6815__auto__ = e12187;var statearr_12188_12201 = state_12168;(statearr_12188_12201[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12202 = state_12168;
state_12168 = G__12202;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12168){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12189 = f__6827__auto__.call(null);(statearr_12189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___12190);
return statearr_12189;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12249){var state_val_12250 = (state_12249[1]);if((state_val_12250 === 7))
{var inst_12245 = (state_12249[2]);var state_12249__$1 = state_12249;var statearr_12251_12267 = state_12249__$1;(statearr_12251_12267[2] = inst_12245);
(statearr_12251_12267[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 6))
{var inst_12235 = (state_12249[7]);var inst_12238 = (state_12249[8]);var inst_12242 = f.call(null,inst_12235,inst_12238);var inst_12235__$1 = inst_12242;var state_12249__$1 = (function (){var statearr_12252 = state_12249;(statearr_12252[7] = inst_12235__$1);
return statearr_12252;
})();var statearr_12253_12268 = state_12249__$1;(statearr_12253_12268[2] = null);
(statearr_12253_12268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 5))
{var inst_12235 = (state_12249[7]);var state_12249__$1 = state_12249;var statearr_12254_12269 = state_12249__$1;(statearr_12254_12269[2] = inst_12235);
(statearr_12254_12269[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 4))
{var inst_12238 = (state_12249[8]);var inst_12238__$1 = (state_12249[2]);var inst_12239 = (inst_12238__$1 == null);var state_12249__$1 = (function (){var statearr_12255 = state_12249;(statearr_12255[8] = inst_12238__$1);
return statearr_12255;
})();if(cljs.core.truth_(inst_12239))
{var statearr_12256_12270 = state_12249__$1;(statearr_12256_12270[1] = 5);
} else
{var statearr_12257_12271 = state_12249__$1;(statearr_12257_12271[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12250 === 3))
{var inst_12247 = (state_12249[2]);var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12249__$1,inst_12247);
} else
{if((state_val_12250 === 2))
{var state_12249__$1 = state_12249;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12249__$1,4,ch);
} else
{if((state_val_12250 === 1))
{var inst_12235 = init;var state_12249__$1 = (function (){var statearr_12258 = state_12249;(statearr_12258[7] = inst_12235);
return statearr_12258;
})();var statearr_12259_12272 = state_12249__$1;(statearr_12259_12272[2] = null);
(statearr_12259_12272[1] = 2);
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
var state_machine__6812__auto____0 = (function (){var statearr_12263 = [null,null,null,null,null,null,null,null,null];(statearr_12263[0] = state_machine__6812__auto__);
(statearr_12263[1] = 1);
return statearr_12263;
});
var state_machine__6812__auto____1 = (function (state_12249){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12249);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12264){if((e12264 instanceof Object))
{var ex__6815__auto__ = e12264;var statearr_12265_12273 = state_12249;(statearr_12265_12273[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12249);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12264;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12274 = state_12249;
state_12249 = G__12274;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12249){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12266 = f__6827__auto__.call(null);(statearr_12266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_12266;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6826__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12336){var state_val_12337 = (state_12336[1]);if((state_val_12337 === 1))
{var inst_12316 = cljs.core.seq.call(null,coll);var inst_12317 = inst_12316;var state_12336__$1 = (function (){var statearr_12338 = state_12336;(statearr_12338[7] = inst_12317);
return statearr_12338;
})();var statearr_12339_12357 = state_12336__$1;(statearr_12339_12357[2] = null);
(statearr_12339_12357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 2))
{var inst_12317 = (state_12336[7]);var state_12336__$1 = state_12336;if(cljs.core.truth_(inst_12317))
{var statearr_12340_12358 = state_12336__$1;(statearr_12340_12358[1] = 4);
} else
{var statearr_12341_12359 = state_12336__$1;(statearr_12341_12359[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 3))
{var inst_12334 = (state_12336[2]);var state_12336__$1 = state_12336;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12336__$1,inst_12334);
} else
{if((state_val_12337 === 4))
{var inst_12317 = (state_12336[7]);var inst_12320 = cljs.core.first.call(null,inst_12317);var state_12336__$1 = state_12336;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12336__$1,7,ch,inst_12320);
} else
{if((state_val_12337 === 5))
{var state_12336__$1 = state_12336;if(cljs.core.truth_(close_QMARK_))
{var statearr_12342_12360 = state_12336__$1;(statearr_12342_12360[1] = 8);
} else
{var statearr_12343_12361 = state_12336__$1;(statearr_12343_12361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 6))
{var inst_12332 = (state_12336[2]);var state_12336__$1 = state_12336;var statearr_12344_12362 = state_12336__$1;(statearr_12344_12362[2] = inst_12332);
(statearr_12344_12362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 7))
{var inst_12317 = (state_12336[7]);var inst_12322 = (state_12336[2]);var inst_12323 = cljs.core.next.call(null,inst_12317);var inst_12317__$1 = inst_12323;var state_12336__$1 = (function (){var statearr_12345 = state_12336;(statearr_12345[8] = inst_12322);
(statearr_12345[7] = inst_12317__$1);
return statearr_12345;
})();var statearr_12346_12363 = state_12336__$1;(statearr_12346_12363[2] = null);
(statearr_12346_12363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 8))
{var inst_12327 = cljs.core.async.close_BANG_.call(null,ch);var state_12336__$1 = state_12336;var statearr_12347_12364 = state_12336__$1;(statearr_12347_12364[2] = inst_12327);
(statearr_12347_12364[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 9))
{var state_12336__$1 = state_12336;var statearr_12348_12365 = state_12336__$1;(statearr_12348_12365[2] = null);
(statearr_12348_12365[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12337 === 10))
{var inst_12330 = (state_12336[2]);var state_12336__$1 = state_12336;var statearr_12349_12366 = state_12336__$1;(statearr_12349_12366[2] = inst_12330);
(statearr_12349_12366[1] = 6);
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
var state_machine__6812__auto____0 = (function (){var statearr_12353 = [null,null,null,null,null,null,null,null,null];(statearr_12353[0] = state_machine__6812__auto__);
(statearr_12353[1] = 1);
return statearr_12353;
});
var state_machine__6812__auto____1 = (function (state_12336){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12336);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12354){if((e12354 instanceof Object))
{var ex__6815__auto__ = e12354;var statearr_12355_12367 = state_12336;(statearr_12355_12367[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12336);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12354;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12368 = state_12336;
state_12336 = G__12368;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12336){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12356 = f__6827__auto__.call(null);(statearr_12356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto__);
return statearr_12356;
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
cljs.core.async.Mux = (function (){var obj12370 = {};return obj12370;
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
cljs.core.async.Mult = (function (){var obj12372 = {};return obj12372;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12596 = (function (cs,ch,mult,meta12597){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12597 = meta12597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12596.cljs$lang$type = true;
cljs.core.async.t12596.cljs$lang$ctorStr = "cljs.core.async/t12596";
cljs.core.async.t12596.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12596");
});})(cs))
;
cljs.core.async.t12596.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12596.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12596.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12596.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12596.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12596.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12598){var self__ = this;
var _12598__$1 = this;return self__.meta12597;
});})(cs))
;
cljs.core.async.t12596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12598,meta12597__$1){var self__ = this;
var _12598__$1 = this;return (new cljs.core.async.t12596(self__.cs,self__.ch,self__.mult,meta12597__$1));
});})(cs))
;
cljs.core.async.__GT_t12596 = ((function (cs){
return (function __GT_t12596(cs__$1,ch__$1,mult__$1,meta12597){return (new cljs.core.async.t12596(cs__$1,ch__$1,mult__$1,meta12597));
});})(cs))
;
}
return (new cljs.core.async.t12596(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6826__auto___12819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_12733){var state_val_12734 = (state_12733[1]);if((state_val_12734 === 32))
{var inst_12601 = (state_12733[7]);var inst_12677 = (state_12733[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12733,31,Object,null,30);var inst_12684 = cljs.core.async.put_BANG_.call(null,inst_12677,inst_12601,done);var state_12733__$1 = state_12733;var statearr_12735_12820 = state_12733__$1;(statearr_12735_12820[2] = inst_12684);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12733__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 1))
{var state_12733__$1 = state_12733;var statearr_12736_12821 = state_12733__$1;(statearr_12736_12821[2] = null);
(statearr_12736_12821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 33))
{var inst_12690 = (state_12733[9]);var inst_12692 = cljs.core.chunked_seq_QMARK_.call(null,inst_12690);var state_12733__$1 = state_12733;if(inst_12692)
{var statearr_12737_12822 = state_12733__$1;(statearr_12737_12822[1] = 36);
} else
{var statearr_12738_12823 = state_12733__$1;(statearr_12738_12823[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 2))
{var state_12733__$1 = state_12733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12733__$1,4,ch);
} else
{if((state_val_12734 === 34))
{var state_12733__$1 = state_12733;var statearr_12739_12824 = state_12733__$1;(statearr_12739_12824[2] = null);
(statearr_12739_12824[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 3))
{var inst_12731 = (state_12733[2]);var state_12733__$1 = state_12733;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12733__$1,inst_12731);
} else
{if((state_val_12734 === 35))
{var inst_12715 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12740_12825 = state_12733__$1;(statearr_12740_12825[2] = inst_12715);
(statearr_12740_12825[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 4))
{var inst_12601 = (state_12733[7]);var inst_12601__$1 = (state_12733[2]);var inst_12602 = (inst_12601__$1 == null);var state_12733__$1 = (function (){var statearr_12741 = state_12733;(statearr_12741[7] = inst_12601__$1);
return statearr_12741;
})();if(cljs.core.truth_(inst_12602))
{var statearr_12742_12826 = state_12733__$1;(statearr_12742_12826[1] = 5);
} else
{var statearr_12743_12827 = state_12733__$1;(statearr_12743_12827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 36))
{var inst_12690 = (state_12733[9]);var inst_12694 = cljs.core.chunk_first.call(null,inst_12690);var inst_12695 = cljs.core.chunk_rest.call(null,inst_12690);var inst_12696 = cljs.core.count.call(null,inst_12694);var inst_12669 = inst_12695;var inst_12670 = inst_12694;var inst_12671 = inst_12696;var inst_12672 = 0;var state_12733__$1 = (function (){var statearr_12744 = state_12733;(statearr_12744[10] = inst_12669);
(statearr_12744[11] = inst_12671);
(statearr_12744[12] = inst_12672);
(statearr_12744[13] = inst_12670);
return statearr_12744;
})();var statearr_12745_12828 = state_12733__$1;(statearr_12745_12828[2] = null);
(statearr_12745_12828[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 5))
{var inst_12608 = cljs.core.deref.call(null,cs);var inst_12609 = cljs.core.seq.call(null,inst_12608);var inst_12610 = inst_12609;var inst_12611 = null;var inst_12612 = 0;var inst_12613 = 0;var state_12733__$1 = (function (){var statearr_12746 = state_12733;(statearr_12746[14] = inst_12611);
(statearr_12746[15] = inst_12612);
(statearr_12746[16] = inst_12613);
(statearr_12746[17] = inst_12610);
return statearr_12746;
})();var statearr_12747_12829 = state_12733__$1;(statearr_12747_12829[2] = null);
(statearr_12747_12829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 37))
{var inst_12690 = (state_12733[9]);var inst_12699 = cljs.core.first.call(null,inst_12690);var state_12733__$1 = (function (){var statearr_12748 = state_12733;(statearr_12748[18] = inst_12699);
return statearr_12748;
})();var statearr_12749_12830 = state_12733__$1;(statearr_12749_12830[2] = null);
(statearr_12749_12830[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 6))
{var inst_12661 = (state_12733[19]);var inst_12660 = cljs.core.deref.call(null,cs);var inst_12661__$1 = cljs.core.keys.call(null,inst_12660);var inst_12662 = cljs.core.count.call(null,inst_12661__$1);var inst_12663 = cljs.core.reset_BANG_.call(null,dctr,inst_12662);var inst_12668 = cljs.core.seq.call(null,inst_12661__$1);var inst_12669 = inst_12668;var inst_12670 = null;var inst_12671 = 0;var inst_12672 = 0;var state_12733__$1 = (function (){var statearr_12750 = state_12733;(statearr_12750[19] = inst_12661__$1);
(statearr_12750[10] = inst_12669);
(statearr_12750[11] = inst_12671);
(statearr_12750[12] = inst_12672);
(statearr_12750[13] = inst_12670);
(statearr_12750[20] = inst_12663);
return statearr_12750;
})();var statearr_12751_12831 = state_12733__$1;(statearr_12751_12831[2] = null);
(statearr_12751_12831[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 38))
{var inst_12712 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12752_12832 = state_12733__$1;(statearr_12752_12832[2] = inst_12712);
(statearr_12752_12832[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 7))
{var inst_12729 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12753_12833 = state_12733__$1;(statearr_12753_12833[2] = inst_12729);
(statearr_12753_12833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 39))
{var inst_12690 = (state_12733[9]);var inst_12708 = (state_12733[2]);var inst_12709 = cljs.core.next.call(null,inst_12690);var inst_12669 = inst_12709;var inst_12670 = null;var inst_12671 = 0;var inst_12672 = 0;var state_12733__$1 = (function (){var statearr_12754 = state_12733;(statearr_12754[10] = inst_12669);
(statearr_12754[11] = inst_12671);
(statearr_12754[12] = inst_12672);
(statearr_12754[13] = inst_12670);
(statearr_12754[21] = inst_12708);
return statearr_12754;
})();var statearr_12755_12834 = state_12733__$1;(statearr_12755_12834[2] = null);
(statearr_12755_12834[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 8))
{var inst_12612 = (state_12733[15]);var inst_12613 = (state_12733[16]);var inst_12615 = (inst_12613 < inst_12612);var inst_12616 = inst_12615;var state_12733__$1 = state_12733;if(cljs.core.truth_(inst_12616))
{var statearr_12756_12835 = state_12733__$1;(statearr_12756_12835[1] = 10);
} else
{var statearr_12757_12836 = state_12733__$1;(statearr_12757_12836[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 40))
{var inst_12699 = (state_12733[18]);var inst_12700 = (state_12733[2]);var inst_12701 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12702 = cljs.core.async.untap_STAR_.call(null,m,inst_12699);var state_12733__$1 = (function (){var statearr_12758 = state_12733;(statearr_12758[22] = inst_12700);
(statearr_12758[23] = inst_12701);
return statearr_12758;
})();var statearr_12759_12837 = state_12733__$1;(statearr_12759_12837[2] = inst_12702);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12733__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 9))
{var inst_12658 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12760_12838 = state_12733__$1;(statearr_12760_12838[2] = inst_12658);
(statearr_12760_12838[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 41))
{var inst_12699 = (state_12733[18]);var inst_12601 = (state_12733[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12733,40,Object,null,39);var inst_12706 = cljs.core.async.put_BANG_.call(null,inst_12699,inst_12601,done);var state_12733__$1 = state_12733;var statearr_12761_12839 = state_12733__$1;(statearr_12761_12839[2] = inst_12706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12733__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 10))
{var inst_12611 = (state_12733[14]);var inst_12613 = (state_12733[16]);var inst_12619 = cljs.core._nth.call(null,inst_12611,inst_12613);var inst_12620 = cljs.core.nth.call(null,inst_12619,0,null);var inst_12621 = cljs.core.nth.call(null,inst_12619,1,null);var state_12733__$1 = (function (){var statearr_12762 = state_12733;(statearr_12762[24] = inst_12620);
return statearr_12762;
})();if(cljs.core.truth_(inst_12621))
{var statearr_12763_12840 = state_12733__$1;(statearr_12763_12840[1] = 13);
} else
{var statearr_12764_12841 = state_12733__$1;(statearr_12764_12841[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 42))
{var state_12733__$1 = state_12733;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12733__$1,45,dchan);
} else
{if((state_val_12734 === 11))
{var inst_12630 = (state_12733[25]);var inst_12610 = (state_12733[17]);var inst_12630__$1 = cljs.core.seq.call(null,inst_12610);var state_12733__$1 = (function (){var statearr_12765 = state_12733;(statearr_12765[25] = inst_12630__$1);
return statearr_12765;
})();if(inst_12630__$1)
{var statearr_12766_12842 = state_12733__$1;(statearr_12766_12842[1] = 16);
} else
{var statearr_12767_12843 = state_12733__$1;(statearr_12767_12843[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 43))
{var state_12733__$1 = state_12733;var statearr_12768_12844 = state_12733__$1;(statearr_12768_12844[2] = null);
(statearr_12768_12844[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 12))
{var inst_12656 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12769_12845 = state_12733__$1;(statearr_12769_12845[2] = inst_12656);
(statearr_12769_12845[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 44))
{var inst_12726 = (state_12733[2]);var state_12733__$1 = (function (){var statearr_12770 = state_12733;(statearr_12770[26] = inst_12726);
return statearr_12770;
})();var statearr_12771_12846 = state_12733__$1;(statearr_12771_12846[2] = null);
(statearr_12771_12846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 13))
{var inst_12620 = (state_12733[24]);var inst_12623 = cljs.core.async.close_BANG_.call(null,inst_12620);var state_12733__$1 = state_12733;var statearr_12772_12847 = state_12733__$1;(statearr_12772_12847[2] = inst_12623);
(statearr_12772_12847[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 45))
{var inst_12723 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12776_12848 = state_12733__$1;(statearr_12776_12848[2] = inst_12723);
(statearr_12776_12848[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 14))
{var state_12733__$1 = state_12733;var statearr_12777_12849 = state_12733__$1;(statearr_12777_12849[2] = null);
(statearr_12777_12849[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 15))
{var inst_12611 = (state_12733[14]);var inst_12612 = (state_12733[15]);var inst_12613 = (state_12733[16]);var inst_12610 = (state_12733[17]);var inst_12626 = (state_12733[2]);var inst_12627 = (inst_12613 + 1);var tmp12773 = inst_12611;var tmp12774 = inst_12612;var tmp12775 = inst_12610;var inst_12610__$1 = tmp12775;var inst_12611__$1 = tmp12773;var inst_12612__$1 = tmp12774;var inst_12613__$1 = inst_12627;var state_12733__$1 = (function (){var statearr_12778 = state_12733;(statearr_12778[14] = inst_12611__$1);
(statearr_12778[15] = inst_12612__$1);
(statearr_12778[16] = inst_12613__$1);
(statearr_12778[17] = inst_12610__$1);
(statearr_12778[27] = inst_12626);
return statearr_12778;
})();var statearr_12779_12850 = state_12733__$1;(statearr_12779_12850[2] = null);
(statearr_12779_12850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 16))
{var inst_12630 = (state_12733[25]);var inst_12632 = cljs.core.chunked_seq_QMARK_.call(null,inst_12630);var state_12733__$1 = state_12733;if(inst_12632)
{var statearr_12780_12851 = state_12733__$1;(statearr_12780_12851[1] = 19);
} else
{var statearr_12781_12852 = state_12733__$1;(statearr_12781_12852[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 17))
{var state_12733__$1 = state_12733;var statearr_12782_12853 = state_12733__$1;(statearr_12782_12853[2] = null);
(statearr_12782_12853[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 18))
{var inst_12654 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12783_12854 = state_12733__$1;(statearr_12783_12854[2] = inst_12654);
(statearr_12783_12854[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 19))
{var inst_12630 = (state_12733[25]);var inst_12634 = cljs.core.chunk_first.call(null,inst_12630);var inst_12635 = cljs.core.chunk_rest.call(null,inst_12630);var inst_12636 = cljs.core.count.call(null,inst_12634);var inst_12610 = inst_12635;var inst_12611 = inst_12634;var inst_12612 = inst_12636;var inst_12613 = 0;var state_12733__$1 = (function (){var statearr_12784 = state_12733;(statearr_12784[14] = inst_12611);
(statearr_12784[15] = inst_12612);
(statearr_12784[16] = inst_12613);
(statearr_12784[17] = inst_12610);
return statearr_12784;
})();var statearr_12785_12855 = state_12733__$1;(statearr_12785_12855[2] = null);
(statearr_12785_12855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 20))
{var inst_12630 = (state_12733[25]);var inst_12640 = cljs.core.first.call(null,inst_12630);var inst_12641 = cljs.core.nth.call(null,inst_12640,0,null);var inst_12642 = cljs.core.nth.call(null,inst_12640,1,null);var state_12733__$1 = (function (){var statearr_12786 = state_12733;(statearr_12786[28] = inst_12641);
return statearr_12786;
})();if(cljs.core.truth_(inst_12642))
{var statearr_12787_12856 = state_12733__$1;(statearr_12787_12856[1] = 22);
} else
{var statearr_12788_12857 = state_12733__$1;(statearr_12788_12857[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 21))
{var inst_12651 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12789_12858 = state_12733__$1;(statearr_12789_12858[2] = inst_12651);
(statearr_12789_12858[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 22))
{var inst_12641 = (state_12733[28]);var inst_12644 = cljs.core.async.close_BANG_.call(null,inst_12641);var state_12733__$1 = state_12733;var statearr_12790_12859 = state_12733__$1;(statearr_12790_12859[2] = inst_12644);
(statearr_12790_12859[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 23))
{var state_12733__$1 = state_12733;var statearr_12791_12860 = state_12733__$1;(statearr_12791_12860[2] = null);
(statearr_12791_12860[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 24))
{var inst_12630 = (state_12733[25]);var inst_12647 = (state_12733[2]);var inst_12648 = cljs.core.next.call(null,inst_12630);var inst_12610 = inst_12648;var inst_12611 = null;var inst_12612 = 0;var inst_12613 = 0;var state_12733__$1 = (function (){var statearr_12792 = state_12733;(statearr_12792[14] = inst_12611);
(statearr_12792[15] = inst_12612);
(statearr_12792[16] = inst_12613);
(statearr_12792[17] = inst_12610);
(statearr_12792[29] = inst_12647);
return statearr_12792;
})();var statearr_12793_12861 = state_12733__$1;(statearr_12793_12861[2] = null);
(statearr_12793_12861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 25))
{var inst_12671 = (state_12733[11]);var inst_12672 = (state_12733[12]);var inst_12674 = (inst_12672 < inst_12671);var inst_12675 = inst_12674;var state_12733__$1 = state_12733;if(cljs.core.truth_(inst_12675))
{var statearr_12794_12862 = state_12733__$1;(statearr_12794_12862[1] = 27);
} else
{var statearr_12795_12863 = state_12733__$1;(statearr_12795_12863[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 26))
{var inst_12661 = (state_12733[19]);var inst_12719 = (state_12733[2]);var inst_12720 = cljs.core.seq.call(null,inst_12661);var state_12733__$1 = (function (){var statearr_12796 = state_12733;(statearr_12796[30] = inst_12719);
return statearr_12796;
})();if(inst_12720)
{var statearr_12797_12864 = state_12733__$1;(statearr_12797_12864[1] = 42);
} else
{var statearr_12798_12865 = state_12733__$1;(statearr_12798_12865[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 27))
{var inst_12672 = (state_12733[12]);var inst_12670 = (state_12733[13]);var inst_12677 = cljs.core._nth.call(null,inst_12670,inst_12672);var state_12733__$1 = (function (){var statearr_12799 = state_12733;(statearr_12799[8] = inst_12677);
return statearr_12799;
})();var statearr_12800_12866 = state_12733__$1;(statearr_12800_12866[2] = null);
(statearr_12800_12866[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 28))
{var inst_12669 = (state_12733[10]);var inst_12690 = (state_12733[9]);var inst_12690__$1 = cljs.core.seq.call(null,inst_12669);var state_12733__$1 = (function (){var statearr_12804 = state_12733;(statearr_12804[9] = inst_12690__$1);
return statearr_12804;
})();if(inst_12690__$1)
{var statearr_12805_12867 = state_12733__$1;(statearr_12805_12867[1] = 33);
} else
{var statearr_12806_12868 = state_12733__$1;(statearr_12806_12868[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 29))
{var inst_12717 = (state_12733[2]);var state_12733__$1 = state_12733;var statearr_12807_12869 = state_12733__$1;(statearr_12807_12869[2] = inst_12717);
(statearr_12807_12869[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 30))
{var inst_12669 = (state_12733[10]);var inst_12671 = (state_12733[11]);var inst_12672 = (state_12733[12]);var inst_12670 = (state_12733[13]);var inst_12686 = (state_12733[2]);var inst_12687 = (inst_12672 + 1);var tmp12801 = inst_12669;var tmp12802 = inst_12671;var tmp12803 = inst_12670;var inst_12669__$1 = tmp12801;var inst_12670__$1 = tmp12803;var inst_12671__$1 = tmp12802;var inst_12672__$1 = inst_12687;var state_12733__$1 = (function (){var statearr_12808 = state_12733;(statearr_12808[10] = inst_12669__$1);
(statearr_12808[11] = inst_12671__$1);
(statearr_12808[12] = inst_12672__$1);
(statearr_12808[13] = inst_12670__$1);
(statearr_12808[31] = inst_12686);
return statearr_12808;
})();var statearr_12809_12870 = state_12733__$1;(statearr_12809_12870[2] = null);
(statearr_12809_12870[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12734 === 31))
{var inst_12677 = (state_12733[8]);var inst_12678 = (state_12733[2]);var inst_12679 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12680 = cljs.core.async.untap_STAR_.call(null,m,inst_12677);var state_12733__$1 = (function (){var statearr_12810 = state_12733;(statearr_12810[32] = inst_12678);
(statearr_12810[33] = inst_12679);
return statearr_12810;
})();var statearr_12811_12871 = state_12733__$1;(statearr_12811_12871[2] = inst_12680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12733__$1);
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
var state_machine__6812__auto____0 = (function (){var statearr_12815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12815[0] = state_machine__6812__auto__);
(statearr_12815[1] = 1);
return statearr_12815;
});
var state_machine__6812__auto____1 = (function (state_12733){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_12733);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e12816){if((e12816 instanceof Object))
{var ex__6815__auto__ = e12816;var statearr_12817_12872 = state_12733;(statearr_12817_12872[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12733);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12873 = state_12733;
state_12733 = G__12873;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_12733){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_12733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_12818 = f__6827__auto__.call(null);(statearr_12818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___12819);
return statearr_12818;
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
cljs.core.async.Mix = (function (){var obj12875 = {};return obj12875;
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
;var m = (function (){if(typeof cljs.core.async.t12985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12985 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12986){
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
this.meta12986 = meta12986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12985.cljs$lang$type = true;
cljs.core.async.t12985.cljs$lang$ctorStr = "cljs.core.async/t12985";
cljs.core.async.t12985.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t12985");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12985.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12987){var self__ = this;
var _12987__$1 = this;return self__.meta12986;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12987,meta12986__$1){var self__ = this;
var _12987__$1 = this;return (new cljs.core.async.t12985(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12986__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12985 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12985(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12986){return (new cljs.core.async.t12985(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12986));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12985(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6826__auto___13094 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13052){var state_val_13053 = (state_13052[1]);if((state_val_13053 === 1))
{var inst_12991 = (state_13052[7]);var inst_12991__$1 = calc_state.call(null);var inst_12992 = cljs.core.seq_QMARK_.call(null,inst_12991__$1);var state_13052__$1 = (function (){var statearr_13054 = state_13052;(statearr_13054[7] = inst_12991__$1);
return statearr_13054;
})();if(inst_12992)
{var statearr_13055_13095 = state_13052__$1;(statearr_13055_13095[1] = 2);
} else
{var statearr_13056_13096 = state_13052__$1;(statearr_13056_13096[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 2))
{var inst_12991 = (state_13052[7]);var inst_12994 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12991);var state_13052__$1 = state_13052;var statearr_13057_13097 = state_13052__$1;(statearr_13057_13097[2] = inst_12994);
(statearr_13057_13097[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 3))
{var inst_12991 = (state_13052[7]);var state_13052__$1 = state_13052;var statearr_13058_13098 = state_13052__$1;(statearr_13058_13098[2] = inst_12991);
(statearr_13058_13098[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 4))
{var inst_12991 = (state_13052[7]);var inst_12997 = (state_13052[2]);var inst_12998 = cljs.core.get.call(null,inst_12997,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12999 = cljs.core.get.call(null,inst_12997,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13000 = cljs.core.get.call(null,inst_12997,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13001 = inst_12991;var state_13052__$1 = (function (){var statearr_13059 = state_13052;(statearr_13059[8] = inst_13001);
(statearr_13059[9] = inst_13000);
(statearr_13059[10] = inst_12998);
(statearr_13059[11] = inst_12999);
return statearr_13059;
})();var statearr_13060_13099 = state_13052__$1;(statearr_13060_13099[2] = null);
(statearr_13060_13099[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 5))
{var inst_13001 = (state_13052[8]);var inst_13004 = cljs.core.seq_QMARK_.call(null,inst_13001);var state_13052__$1 = state_13052;if(inst_13004)
{var statearr_13061_13100 = state_13052__$1;(statearr_13061_13100[1] = 7);
} else
{var statearr_13062_13101 = state_13052__$1;(statearr_13062_13101[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 6))
{var inst_13050 = (state_13052[2]);var state_13052__$1 = state_13052;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13052__$1,inst_13050);
} else
{if((state_val_13053 === 7))
{var inst_13001 = (state_13052[8]);var inst_13006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13001);var state_13052__$1 = state_13052;var statearr_13063_13102 = state_13052__$1;(statearr_13063_13102[2] = inst_13006);
(statearr_13063_13102[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 8))
{var inst_13001 = (state_13052[8]);var state_13052__$1 = state_13052;var statearr_13064_13103 = state_13052__$1;(statearr_13064_13103[2] = inst_13001);
(statearr_13064_13103[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 9))
{var inst_13009 = (state_13052[12]);var inst_13009__$1 = (state_13052[2]);var inst_13010 = cljs.core.get.call(null,inst_13009__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13011 = cljs.core.get.call(null,inst_13009__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13012 = cljs.core.get.call(null,inst_13009__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13052__$1 = (function (){var statearr_13065 = state_13052;(statearr_13065[13] = inst_13012);
(statearr_13065[14] = inst_13011);
(statearr_13065[12] = inst_13009__$1);
return statearr_13065;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13052__$1,10,inst_13010);
} else
{if((state_val_13053 === 10))
{var inst_13017 = (state_13052[15]);var inst_13016 = (state_13052[16]);var inst_13015 = (state_13052[2]);var inst_13016__$1 = cljs.core.nth.call(null,inst_13015,0,null);var inst_13017__$1 = cljs.core.nth.call(null,inst_13015,1,null);var inst_13018 = (inst_13016__$1 == null);var inst_13019 = cljs.core._EQ_.call(null,inst_13017__$1,change);var inst_13020 = (inst_13018) || (inst_13019);var state_13052__$1 = (function (){var statearr_13066 = state_13052;(statearr_13066[15] = inst_13017__$1);
(statearr_13066[16] = inst_13016__$1);
return statearr_13066;
})();if(cljs.core.truth_(inst_13020))
{var statearr_13067_13104 = state_13052__$1;(statearr_13067_13104[1] = 11);
} else
{var statearr_13068_13105 = state_13052__$1;(statearr_13068_13105[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 11))
{var inst_13016 = (state_13052[16]);var inst_13022 = (inst_13016 == null);var state_13052__$1 = state_13052;if(cljs.core.truth_(inst_13022))
{var statearr_13069_13106 = state_13052__$1;(statearr_13069_13106[1] = 14);
} else
{var statearr_13070_13107 = state_13052__$1;(statearr_13070_13107[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 12))
{var inst_13031 = (state_13052[17]);var inst_13012 = (state_13052[13]);var inst_13017 = (state_13052[15]);var inst_13031__$1 = inst_13012.call(null,inst_13017);var state_13052__$1 = (function (){var statearr_13071 = state_13052;(statearr_13071[17] = inst_13031__$1);
return statearr_13071;
})();if(cljs.core.truth_(inst_13031__$1))
{var statearr_13072_13108 = state_13052__$1;(statearr_13072_13108[1] = 17);
} else
{var statearr_13073_13109 = state_13052__$1;(statearr_13073_13109[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 13))
{var inst_13048 = (state_13052[2]);var state_13052__$1 = state_13052;var statearr_13074_13110 = state_13052__$1;(statearr_13074_13110[2] = inst_13048);
(statearr_13074_13110[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 14))
{var inst_13017 = (state_13052[15]);var inst_13024 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13017);var state_13052__$1 = state_13052;var statearr_13075_13111 = state_13052__$1;(statearr_13075_13111[2] = inst_13024);
(statearr_13075_13111[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 15))
{var state_13052__$1 = state_13052;var statearr_13076_13112 = state_13052__$1;(statearr_13076_13112[2] = null);
(statearr_13076_13112[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 16))
{var inst_13027 = (state_13052[2]);var inst_13028 = calc_state.call(null);var inst_13001 = inst_13028;var state_13052__$1 = (function (){var statearr_13077 = state_13052;(statearr_13077[8] = inst_13001);
(statearr_13077[18] = inst_13027);
return statearr_13077;
})();var statearr_13078_13113 = state_13052__$1;(statearr_13078_13113[2] = null);
(statearr_13078_13113[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 17))
{var inst_13031 = (state_13052[17]);var state_13052__$1 = state_13052;var statearr_13079_13114 = state_13052__$1;(statearr_13079_13114[2] = inst_13031);
(statearr_13079_13114[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 18))
{var inst_13012 = (state_13052[13]);var inst_13011 = (state_13052[14]);var inst_13017 = (state_13052[15]);var inst_13034 = cljs.core.empty_QMARK_.call(null,inst_13012);var inst_13035 = inst_13011.call(null,inst_13017);var inst_13036 = cljs.core.not.call(null,inst_13035);var inst_13037 = (inst_13034) && (inst_13036);var state_13052__$1 = state_13052;var statearr_13080_13115 = state_13052__$1;(statearr_13080_13115[2] = inst_13037);
(statearr_13080_13115[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 19))
{var inst_13039 = (state_13052[2]);var state_13052__$1 = state_13052;if(cljs.core.truth_(inst_13039))
{var statearr_13081_13116 = state_13052__$1;(statearr_13081_13116[1] = 20);
} else
{var statearr_13082_13117 = state_13052__$1;(statearr_13082_13117[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 20))
{var inst_13016 = (state_13052[16]);var state_13052__$1 = state_13052;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13052__$1,23,out,inst_13016);
} else
{if((state_val_13053 === 21))
{var state_13052__$1 = state_13052;var statearr_13083_13118 = state_13052__$1;(statearr_13083_13118[2] = null);
(statearr_13083_13118[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 22))
{var inst_13009 = (state_13052[12]);var inst_13045 = (state_13052[2]);var inst_13001 = inst_13009;var state_13052__$1 = (function (){var statearr_13084 = state_13052;(statearr_13084[8] = inst_13001);
(statearr_13084[19] = inst_13045);
return statearr_13084;
})();var statearr_13085_13119 = state_13052__$1;(statearr_13085_13119[2] = null);
(statearr_13085_13119[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13053 === 23))
{var inst_13042 = (state_13052[2]);var state_13052__$1 = state_13052;var statearr_13086_13120 = state_13052__$1;(statearr_13086_13120[2] = inst_13042);
(statearr_13086_13120[1] = 22);
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
var state_machine__6812__auto____0 = (function (){var statearr_13090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13090[0] = state_machine__6812__auto__);
(statearr_13090[1] = 1);
return statearr_13090;
});
var state_machine__6812__auto____1 = (function (state_13052){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13052);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13091){if((e13091 instanceof Object))
{var ex__6815__auto__ = e13091;var statearr_13092_13121 = state_13052;(statearr_13092_13121[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13052);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13091;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13122 = state_13052;
state_13052 = G__13122;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13052){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13093 = f__6827__auto__.call(null);(statearr_13093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13094);
return statearr_13093;
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
cljs.core.async.Pub = (function (){var obj13124 = {};return obj13124;
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
return (function (p1__13125_SHARP_){if(cljs.core.truth_(p1__13125_SHARP_.call(null,topic)))
{return p1__13125_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13125_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3443__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13250 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13250 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13251){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13251 = meta13251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13250.cljs$lang$type = true;
cljs.core.async.t13250.cljs$lang$ctorStr = "cljs.core.async/t13250";
cljs.core.async.t13250.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core.async/t13250");
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13250.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13252){var self__ = this;
var _13252__$1 = this;return self__.meta13251;
});})(mults,ensure_mult))
;
cljs.core.async.t13250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13252,meta13251__$1){var self__ = this;
var _13252__$1 = this;return (new cljs.core.async.t13250(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13251__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13250 = ((function (mults,ensure_mult){
return (function __GT_t13250(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13251){return (new cljs.core.async.t13250(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13251));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13250(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6826__auto___13374 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13326){var state_val_13327 = (state_13326[1]);if((state_val_13327 === 1))
{var state_13326__$1 = state_13326;var statearr_13328_13375 = state_13326__$1;(statearr_13328_13375[2] = null);
(statearr_13328_13375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 2))
{var state_13326__$1 = state_13326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13326__$1,4,ch);
} else
{if((state_val_13327 === 3))
{var inst_13324 = (state_13326[2]);var state_13326__$1 = state_13326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13326__$1,inst_13324);
} else
{if((state_val_13327 === 4))
{var inst_13255 = (state_13326[7]);var inst_13255__$1 = (state_13326[2]);var inst_13256 = (inst_13255__$1 == null);var state_13326__$1 = (function (){var statearr_13329 = state_13326;(statearr_13329[7] = inst_13255__$1);
return statearr_13329;
})();if(cljs.core.truth_(inst_13256))
{var statearr_13330_13376 = state_13326__$1;(statearr_13330_13376[1] = 5);
} else
{var statearr_13331_13377 = state_13326__$1;(statearr_13331_13377[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 5))
{var inst_13262 = cljs.core.deref.call(null,mults);var inst_13263 = cljs.core.vals.call(null,inst_13262);var inst_13264 = cljs.core.seq.call(null,inst_13263);var inst_13265 = inst_13264;var inst_13266 = null;var inst_13267 = 0;var inst_13268 = 0;var state_13326__$1 = (function (){var statearr_13332 = state_13326;(statearr_13332[8] = inst_13268);
(statearr_13332[9] = inst_13267);
(statearr_13332[10] = inst_13265);
(statearr_13332[11] = inst_13266);
return statearr_13332;
})();var statearr_13333_13378 = state_13326__$1;(statearr_13333_13378[2] = null);
(statearr_13333_13378[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 6))
{var inst_13305 = (state_13326[12]);var inst_13255 = (state_13326[7]);var inst_13303 = (state_13326[13]);var inst_13303__$1 = topic_fn.call(null,inst_13255);var inst_13304 = cljs.core.deref.call(null,mults);var inst_13305__$1 = cljs.core.get.call(null,inst_13304,inst_13303__$1);var state_13326__$1 = (function (){var statearr_13334 = state_13326;(statearr_13334[12] = inst_13305__$1);
(statearr_13334[13] = inst_13303__$1);
return statearr_13334;
})();if(cljs.core.truth_(inst_13305__$1))
{var statearr_13335_13379 = state_13326__$1;(statearr_13335_13379[1] = 19);
} else
{var statearr_13336_13380 = state_13326__$1;(statearr_13336_13380[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 7))
{var inst_13322 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13337_13381 = state_13326__$1;(statearr_13337_13381[2] = inst_13322);
(statearr_13337_13381[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 8))
{var inst_13268 = (state_13326[8]);var inst_13267 = (state_13326[9]);var inst_13270 = (inst_13268 < inst_13267);var inst_13271 = inst_13270;var state_13326__$1 = state_13326;if(cljs.core.truth_(inst_13271))
{var statearr_13341_13382 = state_13326__$1;(statearr_13341_13382[1] = 10);
} else
{var statearr_13342_13383 = state_13326__$1;(statearr_13342_13383[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 9))
{var inst_13301 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13343_13384 = state_13326__$1;(statearr_13343_13384[2] = inst_13301);
(statearr_13343_13384[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 10))
{var inst_13268 = (state_13326[8]);var inst_13267 = (state_13326[9]);var inst_13265 = (state_13326[10]);var inst_13266 = (state_13326[11]);var inst_13273 = cljs.core._nth.call(null,inst_13266,inst_13268);var inst_13274 = cljs.core.async.muxch_STAR_.call(null,inst_13273);var inst_13275 = cljs.core.async.close_BANG_.call(null,inst_13274);var inst_13276 = (inst_13268 + 1);var tmp13338 = inst_13267;var tmp13339 = inst_13265;var tmp13340 = inst_13266;var inst_13265__$1 = tmp13339;var inst_13266__$1 = tmp13340;var inst_13267__$1 = tmp13338;var inst_13268__$1 = inst_13276;var state_13326__$1 = (function (){var statearr_13344 = state_13326;(statearr_13344[14] = inst_13275);
(statearr_13344[8] = inst_13268__$1);
(statearr_13344[9] = inst_13267__$1);
(statearr_13344[10] = inst_13265__$1);
(statearr_13344[11] = inst_13266__$1);
return statearr_13344;
})();var statearr_13345_13385 = state_13326__$1;(statearr_13345_13385[2] = null);
(statearr_13345_13385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 11))
{var inst_13279 = (state_13326[15]);var inst_13265 = (state_13326[10]);var inst_13279__$1 = cljs.core.seq.call(null,inst_13265);var state_13326__$1 = (function (){var statearr_13346 = state_13326;(statearr_13346[15] = inst_13279__$1);
return statearr_13346;
})();if(inst_13279__$1)
{var statearr_13347_13386 = state_13326__$1;(statearr_13347_13386[1] = 13);
} else
{var statearr_13348_13387 = state_13326__$1;(statearr_13348_13387[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 12))
{var inst_13299 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13349_13388 = state_13326__$1;(statearr_13349_13388[2] = inst_13299);
(statearr_13349_13388[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 13))
{var inst_13279 = (state_13326[15]);var inst_13281 = cljs.core.chunked_seq_QMARK_.call(null,inst_13279);var state_13326__$1 = state_13326;if(inst_13281)
{var statearr_13350_13389 = state_13326__$1;(statearr_13350_13389[1] = 16);
} else
{var statearr_13351_13390 = state_13326__$1;(statearr_13351_13390[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 14))
{var state_13326__$1 = state_13326;var statearr_13352_13391 = state_13326__$1;(statearr_13352_13391[2] = null);
(statearr_13352_13391[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 15))
{var inst_13297 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13353_13392 = state_13326__$1;(statearr_13353_13392[2] = inst_13297);
(statearr_13353_13392[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 16))
{var inst_13279 = (state_13326[15]);var inst_13283 = cljs.core.chunk_first.call(null,inst_13279);var inst_13284 = cljs.core.chunk_rest.call(null,inst_13279);var inst_13285 = cljs.core.count.call(null,inst_13283);var inst_13265 = inst_13284;var inst_13266 = inst_13283;var inst_13267 = inst_13285;var inst_13268 = 0;var state_13326__$1 = (function (){var statearr_13354 = state_13326;(statearr_13354[8] = inst_13268);
(statearr_13354[9] = inst_13267);
(statearr_13354[10] = inst_13265);
(statearr_13354[11] = inst_13266);
return statearr_13354;
})();var statearr_13355_13393 = state_13326__$1;(statearr_13355_13393[2] = null);
(statearr_13355_13393[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 17))
{var inst_13279 = (state_13326[15]);var inst_13288 = cljs.core.first.call(null,inst_13279);var inst_13289 = cljs.core.async.muxch_STAR_.call(null,inst_13288);var inst_13290 = cljs.core.async.close_BANG_.call(null,inst_13289);var inst_13291 = cljs.core.next.call(null,inst_13279);var inst_13265 = inst_13291;var inst_13266 = null;var inst_13267 = 0;var inst_13268 = 0;var state_13326__$1 = (function (){var statearr_13356 = state_13326;(statearr_13356[16] = inst_13290);
(statearr_13356[8] = inst_13268);
(statearr_13356[9] = inst_13267);
(statearr_13356[10] = inst_13265);
(statearr_13356[11] = inst_13266);
return statearr_13356;
})();var statearr_13357_13394 = state_13326__$1;(statearr_13357_13394[2] = null);
(statearr_13357_13394[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 18))
{var inst_13294 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13358_13395 = state_13326__$1;(statearr_13358_13395[2] = inst_13294);
(statearr_13358_13395[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 19))
{var state_13326__$1 = state_13326;var statearr_13359_13396 = state_13326__$1;(statearr_13359_13396[2] = null);
(statearr_13359_13396[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 20))
{var state_13326__$1 = state_13326;var statearr_13360_13397 = state_13326__$1;(statearr_13360_13397[2] = null);
(statearr_13360_13397[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 21))
{var inst_13319 = (state_13326[2]);var state_13326__$1 = (function (){var statearr_13361 = state_13326;(statearr_13361[17] = inst_13319);
return statearr_13361;
})();var statearr_13362_13398 = state_13326__$1;(statearr_13362_13398[2] = null);
(statearr_13362_13398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 22))
{var inst_13316 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13363_13399 = state_13326__$1;(statearr_13363_13399[2] = inst_13316);
(statearr_13363_13399[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 23))
{var inst_13303 = (state_13326[13]);var inst_13307 = (state_13326[2]);var inst_13308 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13303);var state_13326__$1 = (function (){var statearr_13364 = state_13326;(statearr_13364[18] = inst_13307);
return statearr_13364;
})();var statearr_13365_13400 = state_13326__$1;(statearr_13365_13400[2] = inst_13308);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13327 === 24))
{var inst_13305 = (state_13326[12]);var inst_13255 = (state_13326[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13326,23,Object,null,22);var inst_13312 = cljs.core.async.muxch_STAR_.call(null,inst_13305);var state_13326__$1 = state_13326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13326__$1,25,inst_13312,inst_13255);
} else
{if((state_val_13327 === 25))
{var inst_13314 = (state_13326[2]);var state_13326__$1 = state_13326;var statearr_13366_13401 = state_13326__$1;(statearr_13366_13401[2] = inst_13314);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326__$1);
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
var state_machine__6812__auto____0 = (function (){var statearr_13370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13370[0] = state_machine__6812__auto__);
(statearr_13370[1] = 1);
return statearr_13370;
});
var state_machine__6812__auto____1 = (function (state_13326){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13326);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13371){if((e13371 instanceof Object))
{var ex__6815__auto__ = e13371;var statearr_13372_13402 = state_13326;(statearr_13372_13402[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13403 = state_13326;
state_13326 = G__13403;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13326){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13373 = f__6827__auto__.call(null);(statearr_13373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13374);
return statearr_13373;
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
,cljs.core.range.call(null,cnt));var c__6826__auto___13540 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13510){var state_val_13511 = (state_13510[1]);if((state_val_13511 === 1))
{var state_13510__$1 = state_13510;var statearr_13512_13541 = state_13510__$1;(statearr_13512_13541[2] = null);
(statearr_13512_13541[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 2))
{var inst_13473 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13474 = 0;var state_13510__$1 = (function (){var statearr_13513 = state_13510;(statearr_13513[7] = inst_13474);
(statearr_13513[8] = inst_13473);
return statearr_13513;
})();var statearr_13514_13542 = state_13510__$1;(statearr_13514_13542[2] = null);
(statearr_13514_13542[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 3))
{var inst_13508 = (state_13510[2]);var state_13510__$1 = state_13510;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13510__$1,inst_13508);
} else
{if((state_val_13511 === 4))
{var inst_13474 = (state_13510[7]);var inst_13476 = (inst_13474 < cnt);var state_13510__$1 = state_13510;if(cljs.core.truth_(inst_13476))
{var statearr_13515_13543 = state_13510__$1;(statearr_13515_13543[1] = 6);
} else
{var statearr_13516_13544 = state_13510__$1;(statearr_13516_13544[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 5))
{var inst_13494 = (state_13510[2]);var state_13510__$1 = (function (){var statearr_13517 = state_13510;(statearr_13517[9] = inst_13494);
return statearr_13517;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13510__$1,12,dchan);
} else
{if((state_val_13511 === 6))
{var state_13510__$1 = state_13510;var statearr_13518_13545 = state_13510__$1;(statearr_13518_13545[2] = null);
(statearr_13518_13545[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 7))
{var state_13510__$1 = state_13510;var statearr_13519_13546 = state_13510__$1;(statearr_13519_13546[2] = null);
(statearr_13519_13546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 8))
{var inst_13492 = (state_13510[2]);var state_13510__$1 = state_13510;var statearr_13520_13547 = state_13510__$1;(statearr_13520_13547[2] = inst_13492);
(statearr_13520_13547[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 9))
{var inst_13474 = (state_13510[7]);var inst_13487 = (state_13510[2]);var inst_13488 = (inst_13474 + 1);var inst_13474__$1 = inst_13488;var state_13510__$1 = (function (){var statearr_13521 = state_13510;(statearr_13521[7] = inst_13474__$1);
(statearr_13521[10] = inst_13487);
return statearr_13521;
})();var statearr_13522_13548 = state_13510__$1;(statearr_13522_13548[2] = null);
(statearr_13522_13548[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 10))
{var inst_13478 = (state_13510[2]);var inst_13479 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13510__$1 = (function (){var statearr_13523 = state_13510;(statearr_13523[11] = inst_13478);
return statearr_13523;
})();var statearr_13524_13549 = state_13510__$1;(statearr_13524_13549[2] = inst_13479);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13510__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 11))
{var inst_13474 = (state_13510[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13510,10,Object,null,9);var inst_13483 = chs__$1.call(null,inst_13474);var inst_13484 = done.call(null,inst_13474);var inst_13485 = cljs.core.async.take_BANG_.call(null,inst_13483,inst_13484);var state_13510__$1 = state_13510;var statearr_13525_13550 = state_13510__$1;(statearr_13525_13550[2] = inst_13485);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13510__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 12))
{var inst_13496 = (state_13510[12]);var inst_13496__$1 = (state_13510[2]);var inst_13497 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13496__$1);var state_13510__$1 = (function (){var statearr_13526 = state_13510;(statearr_13526[12] = inst_13496__$1);
return statearr_13526;
})();if(cljs.core.truth_(inst_13497))
{var statearr_13527_13551 = state_13510__$1;(statearr_13527_13551[1] = 13);
} else
{var statearr_13528_13552 = state_13510__$1;(statearr_13528_13552[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 13))
{var inst_13499 = cljs.core.async.close_BANG_.call(null,out);var state_13510__$1 = state_13510;var statearr_13529_13553 = state_13510__$1;(statearr_13529_13553[2] = inst_13499);
(statearr_13529_13553[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 14))
{var inst_13496 = (state_13510[12]);var inst_13501 = cljs.core.apply.call(null,f,inst_13496);var state_13510__$1 = state_13510;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13510__$1,16,out,inst_13501);
} else
{if((state_val_13511 === 15))
{var inst_13506 = (state_13510[2]);var state_13510__$1 = state_13510;var statearr_13530_13554 = state_13510__$1;(statearr_13530_13554[2] = inst_13506);
(statearr_13530_13554[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13511 === 16))
{var inst_13503 = (state_13510[2]);var state_13510__$1 = (function (){var statearr_13531 = state_13510;(statearr_13531[13] = inst_13503);
return statearr_13531;
})();var statearr_13532_13555 = state_13510__$1;(statearr_13532_13555[2] = null);
(statearr_13532_13555[1] = 2);
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
var state_machine__6812__auto____0 = (function (){var statearr_13536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13536[0] = state_machine__6812__auto__);
(statearr_13536[1] = 1);
return statearr_13536;
});
var state_machine__6812__auto____1 = (function (state_13510){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13510);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13537){if((e13537 instanceof Object))
{var ex__6815__auto__ = e13537;var statearr_13538_13556 = state_13510;(statearr_13538_13556[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13510);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13557 = state_13510;
state_13510 = G__13557;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13510){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13539 = f__6827__auto__.call(null);(statearr_13539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13540);
return statearr_13539;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___13665 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13641){var state_val_13642 = (state_13641[1]);if((state_val_13642 === 1))
{var inst_13612 = cljs.core.vec.call(null,chs);var inst_13613 = inst_13612;var state_13641__$1 = (function (){var statearr_13643 = state_13641;(statearr_13643[7] = inst_13613);
return statearr_13643;
})();var statearr_13644_13666 = state_13641__$1;(statearr_13644_13666[2] = null);
(statearr_13644_13666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 2))
{var inst_13613 = (state_13641[7]);var inst_13615 = cljs.core.count.call(null,inst_13613);var inst_13616 = (inst_13615 > 0);var state_13641__$1 = state_13641;if(cljs.core.truth_(inst_13616))
{var statearr_13645_13667 = state_13641__$1;(statearr_13645_13667[1] = 4);
} else
{var statearr_13646_13668 = state_13641__$1;(statearr_13646_13668[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 3))
{var inst_13639 = (state_13641[2]);var state_13641__$1 = state_13641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13641__$1,inst_13639);
} else
{if((state_val_13642 === 4))
{var inst_13613 = (state_13641[7]);var state_13641__$1 = state_13641;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13641__$1,7,inst_13613);
} else
{if((state_val_13642 === 5))
{var inst_13635 = cljs.core.async.close_BANG_.call(null,out);var state_13641__$1 = state_13641;var statearr_13647_13669 = state_13641__$1;(statearr_13647_13669[2] = inst_13635);
(statearr_13647_13669[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 6))
{var inst_13637 = (state_13641[2]);var state_13641__$1 = state_13641;var statearr_13648_13670 = state_13641__$1;(statearr_13648_13670[2] = inst_13637);
(statearr_13648_13670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 7))
{var inst_13621 = (state_13641[8]);var inst_13620 = (state_13641[9]);var inst_13620__$1 = (state_13641[2]);var inst_13621__$1 = cljs.core.nth.call(null,inst_13620__$1,0,null);var inst_13622 = cljs.core.nth.call(null,inst_13620__$1,1,null);var inst_13623 = (inst_13621__$1 == null);var state_13641__$1 = (function (){var statearr_13649 = state_13641;(statearr_13649[10] = inst_13622);
(statearr_13649[8] = inst_13621__$1);
(statearr_13649[9] = inst_13620__$1);
return statearr_13649;
})();if(cljs.core.truth_(inst_13623))
{var statearr_13650_13671 = state_13641__$1;(statearr_13650_13671[1] = 8);
} else
{var statearr_13651_13672 = state_13641__$1;(statearr_13651_13672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 8))
{var inst_13622 = (state_13641[10]);var inst_13613 = (state_13641[7]);var inst_13621 = (state_13641[8]);var inst_13620 = (state_13641[9]);var inst_13625 = (function (){var c = inst_13622;var v = inst_13621;var vec__13618 = inst_13620;var cs = inst_13613;return ((function (c,v,vec__13618,cs,inst_13622,inst_13613,inst_13621,inst_13620,state_val_13642){
return (function (p1__13558_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13558_SHARP_);
});
;})(c,v,vec__13618,cs,inst_13622,inst_13613,inst_13621,inst_13620,state_val_13642))
})();var inst_13626 = cljs.core.filterv.call(null,inst_13625,inst_13613);var inst_13613__$1 = inst_13626;var state_13641__$1 = (function (){var statearr_13652 = state_13641;(statearr_13652[7] = inst_13613__$1);
return statearr_13652;
})();var statearr_13653_13673 = state_13641__$1;(statearr_13653_13673[2] = null);
(statearr_13653_13673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 9))
{var inst_13621 = (state_13641[8]);var state_13641__$1 = state_13641;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13641__$1,11,out,inst_13621);
} else
{if((state_val_13642 === 10))
{var inst_13633 = (state_13641[2]);var state_13641__$1 = state_13641;var statearr_13655_13674 = state_13641__$1;(statearr_13655_13674[2] = inst_13633);
(statearr_13655_13674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13642 === 11))
{var inst_13613 = (state_13641[7]);var inst_13630 = (state_13641[2]);var tmp13654 = inst_13613;var inst_13613__$1 = tmp13654;var state_13641__$1 = (function (){var statearr_13656 = state_13641;(statearr_13656[11] = inst_13630);
(statearr_13656[7] = inst_13613__$1);
return statearr_13656;
})();var statearr_13657_13675 = state_13641__$1;(statearr_13657_13675[2] = null);
(statearr_13657_13675[1] = 2);
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
var state_machine__6812__auto____0 = (function (){var statearr_13661 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13661[0] = state_machine__6812__auto__);
(statearr_13661[1] = 1);
return statearr_13661;
});
var state_machine__6812__auto____1 = (function (state_13641){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13641);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13662){if((e13662 instanceof Object))
{var ex__6815__auto__ = e13662;var statearr_13663_13676 = state_13641;(statearr_13663_13676[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13641);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13677 = state_13641;
state_13641 = G__13677;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13641){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13664 = f__6827__auto__.call(null);(statearr_13664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13665);
return statearr_13664;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___13770 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13747){var state_val_13748 = (state_13747[1]);if((state_val_13748 === 1))
{var inst_13724 = 0;var state_13747__$1 = (function (){var statearr_13749 = state_13747;(statearr_13749[7] = inst_13724);
return statearr_13749;
})();var statearr_13750_13771 = state_13747__$1;(statearr_13750_13771[2] = null);
(statearr_13750_13771[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 2))
{var inst_13724 = (state_13747[7]);var inst_13726 = (inst_13724 < n);var state_13747__$1 = state_13747;if(cljs.core.truth_(inst_13726))
{var statearr_13751_13772 = state_13747__$1;(statearr_13751_13772[1] = 4);
} else
{var statearr_13752_13773 = state_13747__$1;(statearr_13752_13773[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 3))
{var inst_13744 = (state_13747[2]);var inst_13745 = cljs.core.async.close_BANG_.call(null,out);var state_13747__$1 = (function (){var statearr_13753 = state_13747;(statearr_13753[8] = inst_13744);
return statearr_13753;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13747__$1,inst_13745);
} else
{if((state_val_13748 === 4))
{var state_13747__$1 = state_13747;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13747__$1,7,ch);
} else
{if((state_val_13748 === 5))
{var state_13747__$1 = state_13747;var statearr_13754_13774 = state_13747__$1;(statearr_13754_13774[2] = null);
(statearr_13754_13774[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 6))
{var inst_13742 = (state_13747[2]);var state_13747__$1 = state_13747;var statearr_13755_13775 = state_13747__$1;(statearr_13755_13775[2] = inst_13742);
(statearr_13755_13775[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 7))
{var inst_13729 = (state_13747[9]);var inst_13729__$1 = (state_13747[2]);var inst_13730 = (inst_13729__$1 == null);var inst_13731 = cljs.core.not.call(null,inst_13730);var state_13747__$1 = (function (){var statearr_13756 = state_13747;(statearr_13756[9] = inst_13729__$1);
return statearr_13756;
})();if(inst_13731)
{var statearr_13757_13776 = state_13747__$1;(statearr_13757_13776[1] = 8);
} else
{var statearr_13758_13777 = state_13747__$1;(statearr_13758_13777[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 8))
{var inst_13729 = (state_13747[9]);var state_13747__$1 = state_13747;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13747__$1,11,out,inst_13729);
} else
{if((state_val_13748 === 9))
{var state_13747__$1 = state_13747;var statearr_13759_13778 = state_13747__$1;(statearr_13759_13778[2] = null);
(statearr_13759_13778[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 10))
{var inst_13739 = (state_13747[2]);var state_13747__$1 = state_13747;var statearr_13760_13779 = state_13747__$1;(statearr_13760_13779[2] = inst_13739);
(statearr_13760_13779[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13748 === 11))
{var inst_13724 = (state_13747[7]);var inst_13734 = (state_13747[2]);var inst_13735 = (inst_13724 + 1);var inst_13724__$1 = inst_13735;var state_13747__$1 = (function (){var statearr_13761 = state_13747;(statearr_13761[10] = inst_13734);
(statearr_13761[7] = inst_13724__$1);
return statearr_13761;
})();var statearr_13762_13780 = state_13747__$1;(statearr_13762_13780[2] = null);
(statearr_13762_13780[1] = 2);
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
var state_machine__6812__auto____0 = (function (){var statearr_13766 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13766[0] = state_machine__6812__auto__);
(statearr_13766[1] = 1);
return statearr_13766;
});
var state_machine__6812__auto____1 = (function (state_13747){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13747);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13767){if((e13767 instanceof Object))
{var ex__6815__auto__ = e13767;var statearr_13768_13781 = state_13747;(statearr_13768_13781[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13747);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13782 = state_13747;
state_13747 = G__13782;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13747){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13769 = f__6827__auto__.call(null);(statearr_13769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13770);
return statearr_13769;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___13879 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13854){var state_val_13855 = (state_13854[1]);if((state_val_13855 === 1))
{var inst_13831 = null;var state_13854__$1 = (function (){var statearr_13856 = state_13854;(statearr_13856[7] = inst_13831);
return statearr_13856;
})();var statearr_13857_13880 = state_13854__$1;(statearr_13857_13880[2] = null);
(statearr_13857_13880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 2))
{var state_13854__$1 = state_13854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13854__$1,4,ch);
} else
{if((state_val_13855 === 3))
{var inst_13851 = (state_13854[2]);var inst_13852 = cljs.core.async.close_BANG_.call(null,out);var state_13854__$1 = (function (){var statearr_13858 = state_13854;(statearr_13858[8] = inst_13851);
return statearr_13858;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13854__$1,inst_13852);
} else
{if((state_val_13855 === 4))
{var inst_13834 = (state_13854[9]);var inst_13834__$1 = (state_13854[2]);var inst_13835 = (inst_13834__$1 == null);var inst_13836 = cljs.core.not.call(null,inst_13835);var state_13854__$1 = (function (){var statearr_13859 = state_13854;(statearr_13859[9] = inst_13834__$1);
return statearr_13859;
})();if(inst_13836)
{var statearr_13860_13881 = state_13854__$1;(statearr_13860_13881[1] = 5);
} else
{var statearr_13861_13882 = state_13854__$1;(statearr_13861_13882[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 5))
{var inst_13834 = (state_13854[9]);var inst_13831 = (state_13854[7]);var inst_13838 = cljs.core._EQ_.call(null,inst_13834,inst_13831);var state_13854__$1 = state_13854;if(inst_13838)
{var statearr_13862_13883 = state_13854__$1;(statearr_13862_13883[1] = 8);
} else
{var statearr_13863_13884 = state_13854__$1;(statearr_13863_13884[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 6))
{var state_13854__$1 = state_13854;var statearr_13865_13885 = state_13854__$1;(statearr_13865_13885[2] = null);
(statearr_13865_13885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 7))
{var inst_13849 = (state_13854[2]);var state_13854__$1 = state_13854;var statearr_13866_13886 = state_13854__$1;(statearr_13866_13886[2] = inst_13849);
(statearr_13866_13886[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 8))
{var inst_13831 = (state_13854[7]);var tmp13864 = inst_13831;var inst_13831__$1 = tmp13864;var state_13854__$1 = (function (){var statearr_13867 = state_13854;(statearr_13867[7] = inst_13831__$1);
return statearr_13867;
})();var statearr_13868_13887 = state_13854__$1;(statearr_13868_13887[2] = null);
(statearr_13868_13887[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 9))
{var inst_13834 = (state_13854[9]);var state_13854__$1 = state_13854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13854__$1,11,out,inst_13834);
} else
{if((state_val_13855 === 10))
{var inst_13846 = (state_13854[2]);var state_13854__$1 = state_13854;var statearr_13869_13888 = state_13854__$1;(statearr_13869_13888[2] = inst_13846);
(statearr_13869_13888[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13855 === 11))
{var inst_13834 = (state_13854[9]);var inst_13843 = (state_13854[2]);var inst_13831 = inst_13834;var state_13854__$1 = (function (){var statearr_13870 = state_13854;(statearr_13870[7] = inst_13831);
(statearr_13870[10] = inst_13843);
return statearr_13870;
})();var statearr_13871_13889 = state_13854__$1;(statearr_13871_13889[2] = null);
(statearr_13871_13889[1] = 2);
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
var state_machine__6812__auto____0 = (function (){var statearr_13875 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13875[0] = state_machine__6812__auto__);
(statearr_13875[1] = 1);
return statearr_13875;
});
var state_machine__6812__auto____1 = (function (state_13854){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e13876){if((e13876 instanceof Object))
{var ex__6815__auto__ = e13876;var statearr_13877_13890 = state_13854;(statearr_13877_13890[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13854);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13891 = state_13854;
state_13854 = G__13891;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13854){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_13878 = f__6827__auto__.call(null);(statearr_13878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___13879);
return statearr_13878;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___14026 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_13996){var state_val_13997 = (state_13996[1]);if((state_val_13997 === 1))
{var inst_13959 = (new Array(n));var inst_13960 = inst_13959;var inst_13961 = 0;var state_13996__$1 = (function (){var statearr_13998 = state_13996;(statearr_13998[7] = inst_13961);
(statearr_13998[8] = inst_13960);
return statearr_13998;
})();var statearr_13999_14027 = state_13996__$1;(statearr_13999_14027[2] = null);
(statearr_13999_14027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 2))
{var state_13996__$1 = state_13996;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13996__$1,4,ch);
} else
{if((state_val_13997 === 3))
{var inst_13994 = (state_13996[2]);var state_13996__$1 = state_13996;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13996__$1,inst_13994);
} else
{if((state_val_13997 === 4))
{var inst_13964 = (state_13996[9]);var inst_13964__$1 = (state_13996[2]);var inst_13965 = (inst_13964__$1 == null);var inst_13966 = cljs.core.not.call(null,inst_13965);var state_13996__$1 = (function (){var statearr_14000 = state_13996;(statearr_14000[9] = inst_13964__$1);
return statearr_14000;
})();if(inst_13966)
{var statearr_14001_14028 = state_13996__$1;(statearr_14001_14028[1] = 5);
} else
{var statearr_14002_14029 = state_13996__$1;(statearr_14002_14029[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 5))
{var inst_13969 = (state_13996[10]);var inst_13961 = (state_13996[7]);var inst_13960 = (state_13996[8]);var inst_13964 = (state_13996[9]);var inst_13968 = (inst_13960[inst_13961] = inst_13964);var inst_13969__$1 = (inst_13961 + 1);var inst_13970 = (inst_13969__$1 < n);var state_13996__$1 = (function (){var statearr_14003 = state_13996;(statearr_14003[10] = inst_13969__$1);
(statearr_14003[11] = inst_13968);
return statearr_14003;
})();if(cljs.core.truth_(inst_13970))
{var statearr_14004_14030 = state_13996__$1;(statearr_14004_14030[1] = 8);
} else
{var statearr_14005_14031 = state_13996__$1;(statearr_14005_14031[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 6))
{var inst_13961 = (state_13996[7]);var inst_13982 = (inst_13961 > 0);var state_13996__$1 = state_13996;if(cljs.core.truth_(inst_13982))
{var statearr_14007_14032 = state_13996__$1;(statearr_14007_14032[1] = 12);
} else
{var statearr_14008_14033 = state_13996__$1;(statearr_14008_14033[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 7))
{var inst_13992 = (state_13996[2]);var state_13996__$1 = state_13996;var statearr_14009_14034 = state_13996__$1;(statearr_14009_14034[2] = inst_13992);
(statearr_14009_14034[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 8))
{var inst_13969 = (state_13996[10]);var inst_13960 = (state_13996[8]);var tmp14006 = inst_13960;var inst_13960__$1 = tmp14006;var inst_13961 = inst_13969;var state_13996__$1 = (function (){var statearr_14010 = state_13996;(statearr_14010[7] = inst_13961);
(statearr_14010[8] = inst_13960__$1);
return statearr_14010;
})();var statearr_14011_14035 = state_13996__$1;(statearr_14011_14035[2] = null);
(statearr_14011_14035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 9))
{var inst_13960 = (state_13996[8]);var inst_13974 = cljs.core.vec.call(null,inst_13960);var state_13996__$1 = state_13996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13996__$1,11,out,inst_13974);
} else
{if((state_val_13997 === 10))
{var inst_13980 = (state_13996[2]);var state_13996__$1 = state_13996;var statearr_14012_14036 = state_13996__$1;(statearr_14012_14036[2] = inst_13980);
(statearr_14012_14036[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 11))
{var inst_13976 = (state_13996[2]);var inst_13977 = (new Array(n));var inst_13960 = inst_13977;var inst_13961 = 0;var state_13996__$1 = (function (){var statearr_14013 = state_13996;(statearr_14013[7] = inst_13961);
(statearr_14013[8] = inst_13960);
(statearr_14013[12] = inst_13976);
return statearr_14013;
})();var statearr_14014_14037 = state_13996__$1;(statearr_14014_14037[2] = null);
(statearr_14014_14037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 12))
{var inst_13960 = (state_13996[8]);var inst_13984 = cljs.core.vec.call(null,inst_13960);var state_13996__$1 = state_13996;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13996__$1,15,out,inst_13984);
} else
{if((state_val_13997 === 13))
{var state_13996__$1 = state_13996;var statearr_14015_14038 = state_13996__$1;(statearr_14015_14038[2] = null);
(statearr_14015_14038[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 14))
{var inst_13989 = (state_13996[2]);var inst_13990 = cljs.core.async.close_BANG_.call(null,out);var state_13996__$1 = (function (){var statearr_14016 = state_13996;(statearr_14016[13] = inst_13989);
return statearr_14016;
})();var statearr_14017_14039 = state_13996__$1;(statearr_14017_14039[2] = inst_13990);
(statearr_14017_14039[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13997 === 15))
{var inst_13986 = (state_13996[2]);var state_13996__$1 = state_13996;var statearr_14018_14040 = state_13996__$1;(statearr_14018_14040[2] = inst_13986);
(statearr_14018_14040[1] = 14);
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
var state_machine__6812__auto____0 = (function (){var statearr_14022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14022[0] = state_machine__6812__auto__);
(statearr_14022[1] = 1);
return statearr_14022;
});
var state_machine__6812__auto____1 = (function (state_13996){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_13996);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e14023){if((e14023 instanceof Object))
{var ex__6815__auto__ = e14023;var statearr_14024_14041 = state_13996;(statearr_14024_14041[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13996);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14023;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14042 = state_13996;
state_13996 = G__14042;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_13996){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_13996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_14025 = f__6827__auto__.call(null);(statearr_14025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___14026);
return statearr_14025;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6826__auto___14185 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6827__auto__ = (function (){var switch__6811__auto__ = (function (state_14155){var state_val_14156 = (state_14155[1]);if((state_val_14156 === 1))
{var inst_14114 = [];var inst_14115 = inst_14114;var inst_14116 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14155__$1 = (function (){var statearr_14157 = state_14155;(statearr_14157[7] = inst_14116);
(statearr_14157[8] = inst_14115);
return statearr_14157;
})();var statearr_14158_14186 = state_14155__$1;(statearr_14158_14186[2] = null);
(statearr_14158_14186[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 2))
{var state_14155__$1 = state_14155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14155__$1,4,ch);
} else
{if((state_val_14156 === 3))
{var inst_14153 = (state_14155[2]);var state_14155__$1 = state_14155;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14155__$1,inst_14153);
} else
{if((state_val_14156 === 4))
{var inst_14119 = (state_14155[9]);var inst_14119__$1 = (state_14155[2]);var inst_14120 = (inst_14119__$1 == null);var inst_14121 = cljs.core.not.call(null,inst_14120);var state_14155__$1 = (function (){var statearr_14159 = state_14155;(statearr_14159[9] = inst_14119__$1);
return statearr_14159;
})();if(inst_14121)
{var statearr_14160_14187 = state_14155__$1;(statearr_14160_14187[1] = 5);
} else
{var statearr_14161_14188 = state_14155__$1;(statearr_14161_14188[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 5))
{var inst_14123 = (state_14155[10]);var inst_14119 = (state_14155[9]);var inst_14116 = (state_14155[7]);var inst_14123__$1 = f.call(null,inst_14119);var inst_14124 = cljs.core._EQ_.call(null,inst_14123__$1,inst_14116);var inst_14125 = cljs.core.keyword_identical_QMARK_.call(null,inst_14116,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14126 = (inst_14124) || (inst_14125);var state_14155__$1 = (function (){var statearr_14162 = state_14155;(statearr_14162[10] = inst_14123__$1);
return statearr_14162;
})();if(cljs.core.truth_(inst_14126))
{var statearr_14163_14189 = state_14155__$1;(statearr_14163_14189[1] = 8);
} else
{var statearr_14164_14190 = state_14155__$1;(statearr_14164_14190[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 6))
{var inst_14115 = (state_14155[8]);var inst_14140 = inst_14115.length;var inst_14141 = (inst_14140 > 0);var state_14155__$1 = state_14155;if(cljs.core.truth_(inst_14141))
{var statearr_14166_14191 = state_14155__$1;(statearr_14166_14191[1] = 12);
} else
{var statearr_14167_14192 = state_14155__$1;(statearr_14167_14192[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 7))
{var inst_14151 = (state_14155[2]);var state_14155__$1 = state_14155;var statearr_14168_14193 = state_14155__$1;(statearr_14168_14193[2] = inst_14151);
(statearr_14168_14193[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 8))
{var inst_14123 = (state_14155[10]);var inst_14119 = (state_14155[9]);var inst_14115 = (state_14155[8]);var inst_14128 = inst_14115.push(inst_14119);var tmp14165 = inst_14115;var inst_14115__$1 = tmp14165;var inst_14116 = inst_14123;var state_14155__$1 = (function (){var statearr_14169 = state_14155;(statearr_14169[11] = inst_14128);
(statearr_14169[7] = inst_14116);
(statearr_14169[8] = inst_14115__$1);
return statearr_14169;
})();var statearr_14170_14194 = state_14155__$1;(statearr_14170_14194[2] = null);
(statearr_14170_14194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 9))
{var inst_14115 = (state_14155[8]);var inst_14131 = cljs.core.vec.call(null,inst_14115);var state_14155__$1 = state_14155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14155__$1,11,out,inst_14131);
} else
{if((state_val_14156 === 10))
{var inst_14138 = (state_14155[2]);var state_14155__$1 = state_14155;var statearr_14171_14195 = state_14155__$1;(statearr_14171_14195[2] = inst_14138);
(statearr_14171_14195[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 11))
{var inst_14123 = (state_14155[10]);var inst_14119 = (state_14155[9]);var inst_14133 = (state_14155[2]);var inst_14134 = [];var inst_14135 = inst_14134.push(inst_14119);var inst_14115 = inst_14134;var inst_14116 = inst_14123;var state_14155__$1 = (function (){var statearr_14172 = state_14155;(statearr_14172[12] = inst_14135);
(statearr_14172[13] = inst_14133);
(statearr_14172[7] = inst_14116);
(statearr_14172[8] = inst_14115);
return statearr_14172;
})();var statearr_14173_14196 = state_14155__$1;(statearr_14173_14196[2] = null);
(statearr_14173_14196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 12))
{var inst_14115 = (state_14155[8]);var inst_14143 = cljs.core.vec.call(null,inst_14115);var state_14155__$1 = state_14155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14155__$1,15,out,inst_14143);
} else
{if((state_val_14156 === 13))
{var state_14155__$1 = state_14155;var statearr_14174_14197 = state_14155__$1;(statearr_14174_14197[2] = null);
(statearr_14174_14197[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 14))
{var inst_14148 = (state_14155[2]);var inst_14149 = cljs.core.async.close_BANG_.call(null,out);var state_14155__$1 = (function (){var statearr_14175 = state_14155;(statearr_14175[14] = inst_14148);
return statearr_14175;
})();var statearr_14176_14198 = state_14155__$1;(statearr_14176_14198[2] = inst_14149);
(statearr_14176_14198[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14156 === 15))
{var inst_14145 = (state_14155[2]);var state_14155__$1 = state_14155;var statearr_14177_14199 = state_14155__$1;(statearr_14177_14199[2] = inst_14145);
(statearr_14177_14199[1] = 14);
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
var state_machine__6812__auto____0 = (function (){var statearr_14181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14181[0] = state_machine__6812__auto__);
(statearr_14181[1] = 1);
return statearr_14181;
});
var state_machine__6812__auto____1 = (function (state_14155){while(true){
var ret_value__6813__auto__ = (function (){try{while(true){
var result__6814__auto__ = switch__6811__auto__.call(null,state_14155);if(cljs.core.keyword_identical_QMARK_.call(null,result__6814__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6814__auto__;
}
break;
}
}catch (e14182){if((e14182 instanceof Object))
{var ex__6815__auto__ = e14182;var statearr_14183_14200 = state_14155;(statearr_14183_14200[5] = ex__6815__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14155);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14182;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6813__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14201 = state_14155;
state_14155 = G__14201;
continue;
}
} else
{return ret_value__6813__auto__;
}
break;
}
});
state_machine__6812__auto__ = function(state_14155){
switch(arguments.length){
case 0:
return state_machine__6812__auto____0.call(this);
case 1:
return state_machine__6812__auto____1.call(this,state_14155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6812__auto____0;
state_machine__6812__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6812__auto____1;
return state_machine__6812__auto__;
})()
;})(switch__6811__auto__))
})();var state__6828__auto__ = (function (){var statearr_14184 = f__6827__auto__.call(null);(statearr_14184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6826__auto___14185);
return statearr_14184;
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