(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ph="165",xs={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},X0=0,Jd=1,j0=2,pg=1,q0=2,Fi=3,Mr=0,bn=1,Bi=2,xr=0,ns=1,Qd=2,tp=3,ep=4,K0=5,Yr=100,Y0=101,$0=102,Z0=103,J0=104,Q0=200,t1=201,e1=202,n1=203,Lu=204,Du=205,i1=206,r1=207,s1=208,o1=209,a1=210,l1=211,c1=212,u1=213,h1=214,d1=0,p1=1,f1=2,yl=3,m1=4,g1=5,_1=6,v1=7,fg=0,b1=1,x1=2,yr=0,y1=1,E1=2,w1=3,S1=4,M1=5,T1=6,A1=7,mg=300,to=301,eo=302,Iu=303,Uu=304,Gl=306,Nu=1e3,Jr=1001,Ou=1002,$n=1003,C1=1004,Da=1005,ci=1006,Cc=1007,Qr=1008,Tr=1009,P1=1010,R1=1011,El=1012,gg=1013,no=1014,vr=1015,Wl=1016,_g=1017,vg=1018,io=1020,L1=35902,D1=1021,I1=1022,yi=1023,U1=1024,N1=1025,Xs=1026,ro=1027,O1=1028,bg=1029,F1=1030,xg=1031,yg=1033,Pc=33776,Rc=33777,Lc=33778,Dc=33779,np=35840,ip=35841,rp=35842,sp=35843,op=36196,ap=37492,lp=37496,cp=37808,up=37809,hp=37810,dp=37811,pp=37812,fp=37813,mp=37814,gp=37815,_p=37816,vp=37817,bp=37818,xp=37819,yp=37820,Ep=37821,Ic=36492,wp=36494,Sp=36495,k1=36283,Mp=36284,Tp=36285,Ap=36286,B1=3200,V1=3201,z1=0,H1=1,mr="",_i="srgb",Dr="srgb-linear",fh="display-p3",Xl="display-p3-linear",wl="linear",me="srgb",Sl="rec709",Ml="p3",Es=7680,Cp=519,G1=512,W1=513,X1=514,Eg=515,j1=516,q1=517,K1=518,Y1=519,Pp=35044,Rp="300 es",zi=2e3,Tl=2001;class gs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Fu=180/Math.PI;function ua(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[e&255]+en[e>>8&255]+en[e>>16&255]+en[e>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function cn(e,t,n){return Math.max(t,Math.min(n,e))}function $1(e,t){return(e%t+t)%t}function Uc(e,t,n){return(1-n)*e+n*t}function Do(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Z1={DEG2RAD:ul};class Ot{constructor(t=0,n=0){Ot.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(cn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,n,i,r,s,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,c)}set(t,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],b=r[0],f=r[3],p=r[6],M=r[1],E=r[4],T=r[7],k=r[2],C=r[5],A=r[8];return s[0]=o*b+a*M+l*k,s[3]=o*f+a*E+l*C,s[6]=o*p+a*T+l*A,s[1]=c*b+u*M+h*k,s[4]=c*f+u*E+h*C,s[7]=c*p+u*T+h*A,s[2]=d*b+m*M+_*k,s[5]=d*f+m*E+_*C,s[8]=d*p+m*T+_*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return t[0]=h*b,t[1]=(r*c-u*i)*b,t[2]=(a*i-r*o)*b,t[3]=d*b,t[4]=(u*n-r*l)*b,t[5]=(r*s-a*n)*b,t[6]=m*b,t[7]=(i*l-c*n)*b,t[8]=(o*n-i*s)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Nc.makeScale(t,n)),this}rotate(t){return this.premultiply(Nc.makeRotation(-t)),this}translate(t,n){return this.premultiply(Nc.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new kt;function wg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Al(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function J1(){const e=Al("canvas");return e.style.display="block",e}const Lp={};function Sg(e){e in Lp||(Lp[e]=!0,console.warn(e))}function Q1(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Dp=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ip=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[Dr]:{transfer:wl,primaries:Sl,toReference:e=>e,fromReference:e=>e},[_i]:{transfer:me,primaries:Sl,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Xl]:{transfer:wl,primaries:Ml,toReference:e=>e.applyMatrix3(Ip),fromReference:e=>e.applyMatrix3(Dp)},[fh]:{transfer:me,primaries:Ml,toReference:e=>e.convertSRGBToLinear().applyMatrix3(Ip),fromReference:e=>e.applyMatrix3(Dp).convertLinearToSRGB()}},tb=new Set([Dr,Xl]),le={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!tb.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Ia[t].toReference,r=Ia[n].fromReference;return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ia[e].primaries},getTransfer:function(e){return e===mr?wl:Ia[e].transfer}};function js(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Oc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let ws;class eb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ws===void 0&&(ws=Al("canvas")),ws.width=t.width,ws.height=t.height;const i=ws.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Al("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nb=0;class Mg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=ua(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function Fc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?eb.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ib=0;class xn extends gs{constructor(t=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Jr,r=Jr,s=ci,o=Qr,a=yi,l=Tr,c=xn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=ua(),this.name="",this.source=new Mg(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nu:t.x=t.x-Math.floor(t.x);break;case Jr:t.x=t.x<0?0:1;break;case Ou:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nu:t.y=t.y-Math.floor(t.y);break;case Jr:t.y=t.y<0?0:1;break;case Ou:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=mg;xn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,n=0,i=0,r=1){tn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],b=l[2],f=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,T=(m+1)/2,k=(p+1)/2,C=(u+d)/4,A=(h+b)/4,O=(_+f)/4;return E>T&&E>k?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=C/i,s=A/i):T>k?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=C/r,s=O/r):k<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(k),i=A/s,r=O/s),this.set(i,r,s,n),this}let M=Math.sqrt((f-_)*(f-_)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(h-b)/M,this.z=(d-u)/M,this.w=Math.acos((c+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rb extends gs{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new tn(0,0,t,n),this.scissorTest=!1,this.viewport=new tn(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new Mg(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends rb{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Tg extends xn{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sb extends xn{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],m=s[o+1],_=s[o+2],b=s[o+3];if(a===0){t[n+0]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h;return}if(a===1){t[n+0]=d,t[n+1]=m,t[n+2]=_,t[n+3]=b;return}if(h!==b||l!==d||c!==m||u!==_){let f=1-a;const p=l*d+c*m+u*_+h*b,M=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const k=Math.sqrt(E),C=Math.atan2(k,p*M);f=Math.sin(f*C)/k,a=Math.sin(a*C)/k}const T=a*M;if(l=l*f+d*T,c=c*f+m*T,u=u*f+_*T,h=h*f+b*T,f===1-a){const k=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=k,c*=k,u*=k,h*=k}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],m=s[o+2],_=s[o+3];return t[n]=a*_+u*h+l*m-c*d,t[n+1]=l*_+u*d+c*h-a*m,t[n+2]=c*_+u*m+a*d-l*h,t[n+3]=u*_-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(cn(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,n=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Up.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Up.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return kc.copy(this).projectOnVector(t),this.sub(kc)}reflect(t){return this.sub(kc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(cn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new I,Up=new cs;class ha{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ua.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(t.matrixWorld),this.union(Ua)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),Na.subVectors(this.max,Io),Ss.subVectors(t.a,Io),Ms.subVectors(t.b,Io),Ts.subVectors(t.c,Io),rr.subVectors(Ms,Ss),sr.subVectors(Ts,Ms),Br.subVectors(Ss,Ts);let n=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Br.z,Br.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Br.z,0,-Br.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Br.y,Br.x,0];return!Bc(n,Ss,Ms,Ts,Na)||(n=[1,0,0,0,1,0,0,0,1],!Bc(n,Ss,Ms,Ts,Na))?!1:(Oa.crossVectors(rr,sr),n=[Oa.x,Oa.y,Oa.z],Bc(n,Ss,Ms,Ts,Na))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ri=[new I,new I,new I,new I,new I,new I,new I,new I],si=new I,Ua=new ha,Ss=new I,Ms=new I,Ts=new I,rr=new I,sr=new I,Br=new I,Io=new I,Na=new I,Oa=new I,Vr=new I;function Bc(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){Vr.fromArray(e,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=t.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ob=new ha,Uo=new I,Vc=new I;class jl{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):ob.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(Vc)),this.expandByPoint(Uo.copy(t.center).sub(Vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new I,zc=new I,Fa=new I,or=new I,Hc=new I,ka=new I,Gc=new I;class mh{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Li.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){zc.copy(t).add(n).multiplyScalar(.5),Fa.copy(n).sub(t).normalize(),or.copy(this.origin).sub(zc);const s=t.distanceTo(n)*.5,o=-this.direction.dot(Fa),a=or.dot(this.direction),l=-or.dot(Fa),c=or.lengthSq(),u=Math.abs(1-o*o);let h,d,m,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const b=1/u;h*=b,d*=b,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(zc).addScaledVector(Fa,d),m}intersectSphere(t,n){Li.subVectors(t.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,n,i,r,s){Hc.subVectors(n,t),ka.subVectors(i,t),Gc.crossVectors(Hc,ka);let o=this.direction.dot(Gc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,t);const l=a*this.direction.dot(ka.crossVectors(or,ka));if(l<0)return null;const c=a*this.direction.dot(Hc.cross(or));if(c<0||l+c>o)return null;const u=-a*or.dot(Gc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(t,n,i,r,s,o,a,l,c,u,h,d,m,_,b,f){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,c,u,h,d,m,_,b,f)}set(t,n,i,r,s,o,a,l,c,u,h,d,m,_,b,f){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=_,p[11]=b,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/As.setFromMatrixColumn(t,0).length(),s=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,m=o*h,_=a*u,b=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=d-b*c,n[9]=-a*l,n[2]=b-d*c,n[6]=_+m*c,n[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,_=c*u,b=c*h;n[0]=d+b*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=b+d*a,n[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,_=c*u,b=c*h;n[0]=d-b*a,n[4]=-o*h,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=b-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*h,_=a*u,b=a*h;n[0]=l*u,n[4]=_*c-m,n[8]=d*c+b,n[1]=l*h,n[5]=b*c+d,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,_=a*l,b=a*c;n[0]=l*u,n[4]=b-d*h,n[8]=_*h+m,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*h+_,n[10]=d-b*h}else if(t.order==="XZY"){const d=o*l,m=o*c,_=a*l,b=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+b,n[5]=o*u,n[9]=m*h-_,n[2]=_*h-m,n[6]=a*u,n[10]=b*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ab,t,lb)}lookAt(t,n,i){const r=this.elements;return Pn.subVectors(t,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ar.crossVectors(i,Pn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ar.crossVectors(i,Pn)),ar.normalize(),Ba.crossVectors(Pn,ar),r[0]=ar.x,r[4]=Ba.x,r[8]=Pn.x,r[1]=ar.y,r[5]=Ba.y,r[9]=Pn.y,r[2]=ar.z,r[6]=Ba.z,r[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],b=i[6],f=i[10],p=i[14],M=i[3],E=i[7],T=i[11],k=i[15],C=r[0],A=r[4],O=r[8],w=r[12],y=r[1],R=r[5],X=r[9],z=r[13],j=r[2],K=r[6],G=r[10],Q=r[14],W=r[3],ct=r[7],ht=r[11],mt=r[15];return s[0]=o*C+a*y+l*j+c*W,s[4]=o*A+a*R+l*K+c*ct,s[8]=o*O+a*X+l*G+c*ht,s[12]=o*w+a*z+l*Q+c*mt,s[1]=u*C+h*y+d*j+m*W,s[5]=u*A+h*R+d*K+m*ct,s[9]=u*O+h*X+d*G+m*ht,s[13]=u*w+h*z+d*Q+m*mt,s[2]=_*C+b*y+f*j+p*W,s[6]=_*A+b*R+f*K+p*ct,s[10]=_*O+b*X+f*G+p*ht,s[14]=_*w+b*z+f*Q+p*mt,s[3]=M*C+E*y+T*j+k*W,s[7]=M*A+E*R+T*K+k*ct,s[11]=M*O+E*X+T*G+k*ht,s[15]=M*w+E*z+T*Q+k*mt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],_=t[3],b=t[7],f=t[11],p=t[15];return _*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*m-i*l*m)+b*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+f*(+n*c*h-n*a*m-s*o*h+i*o*m+s*a*u-i*c*u)+p*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],_=t[12],b=t[13],f=t[14],p=t[15],M=h*f*c-b*d*c+b*l*m-a*f*m-h*l*p+a*d*p,E=_*d*c-u*f*c-_*l*m+o*f*m+u*l*p-o*d*p,T=u*b*c-_*h*c+_*a*m-o*b*m-u*a*p+o*h*p,k=_*h*l-u*b*l-_*a*d+o*b*d+u*a*f-o*h*f,C=n*M+i*E+r*T+s*k;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=M*A,t[1]=(b*d*s-h*f*s-b*r*m+i*f*m+h*r*p-i*d*p)*A,t[2]=(a*f*s-b*l*s+b*r*c-i*f*c-a*r*p+i*l*p)*A,t[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*m-i*l*m)*A,t[4]=E*A,t[5]=(u*f*s-_*d*s+_*r*m-n*f*m-u*r*p+n*d*p)*A,t[6]=(_*l*s-o*f*s-_*r*c+n*f*c+o*r*p-n*l*p)*A,t[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*m+n*l*m)*A,t[8]=T*A,t[9]=(_*h*s-u*b*s-_*i*m+n*b*m+u*i*p-n*h*p)*A,t[10]=(o*b*s-_*a*s+_*i*c-n*b*c-o*i*p+n*a*p)*A,t[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*m-n*a*m)*A,t[12]=k*A,t[13]=(u*b*r-_*h*r+_*i*d-n*b*d-u*i*f+n*h*f)*A,t[14]=(_*a*r-o*b*r-_*i*l+n*b*l+o*i*f-n*a*f)*A,t[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,_=s*h,b=o*u,f=o*h,p=a*h,M=l*c,E=l*u,T=l*h,k=i.x,C=i.y,A=i.z;return r[0]=(1-(b+p))*k,r[1]=(m+T)*k,r[2]=(_-E)*k,r[3]=0,r[4]=(m-T)*C,r[5]=(1-(d+p))*C,r[6]=(f+M)*C,r[7]=0,r[8]=(_+E)*A,r[9]=(f-M)*A,r[10]=(1-(d+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=As.set(r[0],r[1],r[2]).length();const o=As.set(r[4],r[5],r[6]).length(),a=As.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],oi.copy(this);const c=1/s,u=1/o,h=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,n.setFromRotationMatrix(oi),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=zi){const l=this.elements,c=2*s/(n-t),u=2*s/(i-r),h=(n+t)/(n-t),d=(i+r)/(i-r);let m,_;if(a===zi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Tl)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=zi){const l=this.elements,c=1/(n-t),u=1/(i-r),h=1/(o-s),d=(n+t)*c,m=(i+r)*u;let _,b;if(a===zi)_=(o+s)*h,b=-2*h;else if(a===Tl)_=s*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=b,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const As=new I,oi=new ze,ab=new I(0,0,0),lb=new I(1,1,1),ar=new I,Ba=new I,Pn=new I,Np=new ze,Op=new cs;class Ki{constructor(t=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Np.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Np,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Op.setFromEuler(this),this.setFromQuaternion(Op,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class Ag{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cb=0;const Fp=new I,Cs=new cs,Di=new ze,Va=new I,No=new I,ub=new I,hb=new cs,kp=new I(1,0,0),Bp=new I(0,1,0),Vp=new I(0,0,1),zp={type:"added"},db={type:"removed"},Ps={type:"childadded",child:null},Wc={type:"childremoved",child:null};class yn extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new I,n=new Ki,i=new cs,r=new I(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new kt}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ag,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Cs.setFromAxisAngle(t,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,n){return Cs.setFromAxisAngle(t,n),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(kp,t)}rotateY(t){return this.rotateOnAxis(Bp,t)}rotateZ(t){return this.rotateOnAxis(Vp,t)}translateOnAxis(t,n){return Fp.copy(t).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(kp,t)}translateY(t){return this.translateOnAxis(Bp,t)}translateZ(t){return this.translateOnAxis(Vp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Va.copy(t):Va.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(No,Va,this.up):Di.lookAt(Va,No,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zp),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(db),Wc.child=t,this.dispatchEvent(Wc),Wc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Di.multiply(t.parent.matrixWorld)),t.applyMatrix4(Di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zp),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,ub),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new I(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new I,Ii=new I,Xc=new I,Ui=new I,Rs=new I,Ls=new I,Hp=new I,jc=new I,qc=new I,Kc=new I;class xi{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),ai.subVectors(t,n),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){ai.subVectors(r,n),Ii.subVectors(i,n),Xc.subVectors(t,n);const o=ai.dot(ai),a=ai.dot(Ii),l=ai.dot(Xc),c=Ii.dot(Ii),u=Ii.dot(Xc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,n,i,r,s,o,a,l){return this.getBarycoord(t,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static isFrontFacing(t,n,i,r){return ai.subVectors(i,n),Ii.subVectors(t,n),ai.cross(Ii).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ai.cross(Ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return xi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return xi.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;Rs.subVectors(r,i),Ls.subVectors(s,i),jc.subVectors(t,i);const l=Rs.dot(jc),c=Ls.dot(jc);if(l<=0&&c<=0)return n.copy(i);qc.subVectors(t,r);const u=Rs.dot(qc),h=Ls.dot(qc);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Rs,o);Kc.subVectors(t,s);const m=Rs.dot(Kc),_=Ls.dot(Kc);if(_>=0&&m<=_)return n.copy(s);const b=m*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Ls,a);const f=u*_-m*h;if(f<=0&&h-u>=0&&m-_>=0)return Hp.subVectors(s,r),a=(h-u)/(h-u+(m-_)),n.copy(r).addScaledVector(Hp,a);const p=1/(f+b+d);return o=b*p,a=d*p,n.copy(i).addScaledVector(Rs,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},za={h:0,s:0,l:0};function Yc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class re{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=le.workingColorSpace){return this.r=t,this.g=n,this.b=i,le.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=le.workingColorSpace){if(t=$1(t,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Yc(o,s,t+1/3),this.g=Yc(o,s,t),this.b=Yc(o,s,t-1/3)}return le.toWorkingColorSpace(this,r),this}setStyle(t,n=_i){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=_i){const i=Cg[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}copyLinearToSRGB(t){return this.r=Oc(t.r),this.g=Oc(t.g),this.b=Oc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return le.fromWorkingColorSpace(nn.copy(this),t),Math.round(cn(nn.r*255,0,255))*65536+Math.round(cn(nn.g*255,0,255))*256+Math.round(cn(nn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=le.workingColorSpace){le.fromWorkingColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=le.workingColorSpace){return le.fromWorkingColorSpace(nn.copy(this),n),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=_i){le.fromWorkingColorSpace(nn.copy(this),t);const n=nn.r,i=nn.g,r=nn.b;return t!==_i?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+n,lr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(lr),t.getHSL(za);const i=Uc(lr.h,za.h,n),r=Uc(lr.s,za.s,n),s=Uc(lr.l,za.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new re;re.NAMES=Cg;let pb=0;class da extends gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=ns,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=yl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Lu&&(i.blendSrc=this.blendSrc),this.blendDst!==Du&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pg extends da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new I,Ha=new Ot;class Qn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Sg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(t),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix3(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyMatrix4(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.applyNormalMatrix(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Fe.fromBufferAttribute(this,n),Fe.transformDirection(t),this.setXYZ(n,Fe.x,Fe.y,Fe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Do(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Do(n,this.array)),n}setX(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Do(n,this.array)),n}setY(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Do(n,this.array)),n}setZ(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Do(n,this.array)),n}setW(t,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pp&&(t.usage=this.usage),t}}class Rg extends Qn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Lg extends Qn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class is extends Qn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let fb=0;const Hn=new ze,$c=new yn,Ds=new I,Rn=new ha,Oo=new ha,$e=new I;class Qi extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wg(t)?Lg:Rg)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,n,i){return Hn.makeTranslation(t,n,i),this.applyMatrix4(Hn),this}scale(t,n,i){return Hn.makeScale(t,n,i),this.applyMatrix4(Hn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new is(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(Rn.min,Oo.min),Rn.expandByPoint($e),$e.addVectors(Rn.max,Oo.max),Rn.expandByPoint($e)):(Rn.expandByPoint(Oo.min),Rn.expandByPoint(Oo.max))}Rn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)$e.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared($e));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)$e.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),$e.add(Ds)),r=Math.max(r,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new I,l[O]=new I;const c=new I,u=new I,h=new I,d=new Ot,m=new Ot,_=new Ot,b=new I,f=new I;function p(O,w,y){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,O),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,y),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(R),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(R),a[O].add(b),a[w].add(b),a[y].add(b),l[O].add(f),l[w].add(f),l[y].add(f))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let O=0,w=M.length;O<w;++O){const y=M[O],R=y.start,X=y.count;for(let z=R,j=R+X;z<j;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const E=new I,T=new I,k=new I,C=new I;function A(O){k.fromBufferAttribute(r,O),C.copy(k);const w=a[O];E.copy(w),E.sub(k.multiplyScalar(k.dot(w))).normalize(),T.crossVectors(C,w);const R=T.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,R)}for(let O=0,w=M.length;O<w;++O){const y=M[O],R=y.start,X=y.count;for(let z=R,j=R+X;z<j;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),b=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,b),o.fromBufferAttribute(n,f),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let b=0,f=l.length;b<f;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*u;for(let p=0;p<u;p++)d[_++]=c[m++]}return new Qn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new ze,zr=new mh,Ga=new jl,Wp=new I,Is=new I,Us=new I,Ns=new I,Zc=new I,Wa=new I,Xa=new Ot,ja=new Ot,qa=new Ot,Xp=new I,jp=new I,qp=new I,Ka=new I,Ya=new I;class Hi extends yn{constructor(t=new Qi,n=new Pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Zc.fromBufferAttribute(h,t),o?Wa.addScaledVector(Zc,u):Wa.addScaledVector(Zc.sub(n),u))}n.add(Wa)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(s),zr.copy(t.ray).recast(t.near),!(Ga.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Ga,Wp)===null||zr.origin.distanceToSquared(Wp)>(t.far-t.near)**2))&&(Gp.copy(s).invert(),zr.copy(t.ray).applyMatrix4(Gp),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,zr)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=d.length;_<b;_++){const f=d[_],p=o[f.materialIndex],M=Math.max(f.start,m.start),E=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,k=E;T<k;T+=3){const C=a.getX(T),A=a.getX(T+1),O=a.getX(T+2);r=$a(this,p,t,i,c,u,h,C,A,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let f=_,p=b;f<p;f+=3){const M=a.getX(f),E=a.getX(f+1),T=a.getX(f+2);r=$a(this,o,t,i,c,u,h,M,E,T),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=d.length;_<b;_++){const f=d[_],p=o[f.materialIndex],M=Math.max(f.start,m.start),E=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let T=M,k=E;T<k;T+=3){const C=T,A=T+1,O=T+2;r=$a(this,p,t,i,c,u,h,C,A,O),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let f=_,p=b;f<p;f+=3){const M=f,E=f+1,T=f+2;r=$a(this,o,t,i,c,u,h,M,E,T),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function mb(e,t,n,i,r,s,o,a){let l;if(t.side===bn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Mr,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Ya);return c<n.near||c>n.far?null:{distance:c,point:Ya.clone(),object:e}}function $a(e,t,n,i,r,s,o,a,l,c){e.getVertexPosition(a,Is),e.getVertexPosition(l,Us),e.getVertexPosition(c,Ns);const u=mb(e,t,n,i,Is,Us,Ns,Ka);if(u){r&&(Xa.fromBufferAttribute(r,a),ja.fromBufferAttribute(r,l),qa.fromBufferAttribute(r,c),u.uv=xi.getInterpolation(Ka,Is,Us,Ns,Xa,ja,qa,new Ot)),s&&(Xa.fromBufferAttribute(s,a),ja.fromBufferAttribute(s,l),qa.fromBufferAttribute(s,c),u.uv1=xi.getInterpolation(Ka,Is,Us,Ns,Xa,ja,qa,new Ot)),o&&(Xp.fromBufferAttribute(o,a),jp.fromBufferAttribute(o,l),qp.fromBufferAttribute(o,c),u.normal=xi.getInterpolation(Ka,Is,Us,Ns,Xp,jp,qp,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};xi.getNormal(Is,Us,Ns,h.normal),u.face=h}return u}class pa extends Qi{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,t,o,s,0),_("z","y","x",1,-1,i,n,-t,o,s,1),_("x","z","y",1,1,t,i,n,r,o,2),_("x","z","y",1,-1,t,i,-n,r,o,3),_("x","y","z",1,-1,t,n,i,r,s,4),_("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new is(c,3)),this.setAttribute("normal",new is(u,3)),this.setAttribute("uv",new is(h,2));function _(b,f,p,M,E,T,k,C,A,O,w){const y=T/A,R=k/O,X=T/2,z=k/2,j=C/2,K=A+1,G=O+1;let Q=0,W=0;const ct=new I;for(let ht=0;ht<G;ht++){const mt=ht*R-z;for(let Wt=0;Wt<K;Wt++){const te=Wt*y-X;ct[b]=te*M,ct[f]=mt*E,ct[p]=j,c.push(ct.x,ct.y,ct.z),ct[b]=0,ct[f]=0,ct[p]=C>0?1:-1,u.push(ct.x,ct.y,ct.z),h.push(Wt/A),h.push(1-ht/O),Q+=1}}for(let ht=0;ht<O;ht++)for(let mt=0;mt<A;mt++){const Wt=d+mt+K*ht,te=d+mt+K*(ht+1),q=d+(mt+1)+K*(ht+1),tt=d+(mt+1)+K*ht;l.push(Wt,te,tt),l.push(te,q,tt),W+=6}a.addGroup(m,W,w),m+=W,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function so(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function an(e){const t={};for(let n=0;n<e.length;n++){const i=so(e[n]);for(const r in i)t[r]=i[r]}return t}function gb(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Dg(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const _b={clone:so,merge:an};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=so(t.uniforms),this.uniformsGroups=gb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ig extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=zi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new I,Kp=new Ot,Yp=new Ot;class qn extends Ig{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Fu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fu*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-t/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-t/cr.z)}getViewSize(t,n){return this.getViewBounds(t,Kp,Yp),n.subVectors(Yp,Kp)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Os=-90,Fs=1;class xb extends yn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Os,Fs,t,n);r.layers=this.layers,this.add(r);const s=new qn(Os,Fs,t,n);s.layers=this.layers,this.add(s);const o=new qn(Os,Fs,t,n);o.layers=this.layers,this.add(o);const a=new qn(Os,Fs,t,n);a.layers=this.layers,this.add(a);const l=new qn(Os,Fs,t,n);l.layers=this.layers,this.add(l);const c=new qn(Os,Fs,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(t===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Tl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,c),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,r),t.render(n,u),t.setRenderTarget(h,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ug extends xn{constructor(t,n,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],n=n!==void 0?n:to,super(t,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yb extends ls{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ug(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pa(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:xr});s.uniforms.tEquirect.value=n;const o=new Hi(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=ci),new xb(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}const Jc=new I,Eb=new I,wb=new kt;class fr{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Jc.subVectors(i,n).cross(Eb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||wb.getNormalMatrix(t),r=this.coplanarPoint(Jc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new jl,Za=new I;class Ng{constructor(t=new fr,n=new fr,i=new fr,r=new fr,s=new fr,o=new fr){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=zi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],b=r[10],f=r[11],p=r[12],M=r[13],E=r[14],T=r[15];if(i[0].setComponents(l-s,d-c,f-m,T-p).normalize(),i[1].setComponents(l+s,d+c,f+m,T+p).normalize(),i[2].setComponents(l+o,d+u,f+_,T+M).normalize(),i[3].setComponents(l-o,d-u,f-_,T-M).normalize(),i[4].setComponents(l-a,d-h,f-b,T-E).normalize(),n===zi)i[5].setComponents(l+a,d+h,f+b,T+E).normalize();else if(n===Tl)i[5].setComponents(a,h,b,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(t){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?t.max.x:t.min.x,Za.y=r.normal.y>0?t.max.y:t.min.y,Za.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Og(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Sb(e){const t=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(e.bindBuffer(c,a),h.count===-1&&d.length===0&&e.bufferSubData(c,0,u),d.length!==0){for(let m=0,_=d.length;m<_;m++){const b=d[m];e.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}h.count!==-1&&(e.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ql extends Qi{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=n/l,m=[],_=[],b=[],f=[];for(let p=0;p<u;p++){const M=p*d-o;for(let E=0;E<c;E++){const T=E*h-s;_.push(T,-M,0),b.push(0,0,1),f.push(E/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const E=M+c*p,T=M+c*(p+1),k=M+1+c*(p+1),C=M+1+c*p;m.push(E,T,C),m.push(T,k,C)}this.setIndex(m),this.setAttribute("position",new is(_,3)),this.setAttribute("normal",new is(b,3)),this.setAttribute("uv",new is(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ql(t.width,t.height,t.widthSegments,t.heightSegments)}}var Mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ab=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Db=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$b=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",nx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_x=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ux=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ox=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,t2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,a2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,c2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,u2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,f2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,g2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,w2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,D2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,I2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,U2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ty=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ny=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Mb,alphahash_pars_fragment:Tb,alphamap_fragment:Ab,alphamap_pars_fragment:Cb,alphatest_fragment:Pb,alphatest_pars_fragment:Rb,aomap_fragment:Lb,aomap_pars_fragment:Db,batching_pars_vertex:Ib,batching_vertex:Ub,begin_vertex:Nb,beginnormal_vertex:Ob,bsdfs:Fb,iridescence_fragment:kb,bumpmap_pars_fragment:Bb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Hb,clipping_planes_vertex:Gb,color_fragment:Wb,color_pars_fragment:Xb,color_pars_vertex:jb,color_vertex:qb,common:Kb,cube_uv_reflection_fragment:Yb,defaultnormal_vertex:$b,displacementmap_pars_vertex:Zb,displacementmap_vertex:Jb,emissivemap_fragment:Qb,emissivemap_pars_fragment:tx,colorspace_fragment:ex,colorspace_pars_fragment:nx,envmap_fragment:ix,envmap_common_pars_fragment:rx,envmap_pars_fragment:sx,envmap_pars_vertex:ox,envmap_physical_pars_fragment:_x,envmap_vertex:ax,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:ux,fog_pars_fragment:hx,gradientmap_pars_fragment:dx,lightmap_pars_fragment:px,lights_lambert_fragment:fx,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:vx,lights_toon_pars_fragment:bx,lights_phong_fragment:xx,lights_phong_pars_fragment:yx,lights_physical_fragment:Ex,lights_physical_pars_fragment:wx,lights_fragment_begin:Sx,lights_fragment_maps:Mx,lights_fragment_end:Tx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Rx,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Ix,map_particle_pars_fragment:Ux,metalnessmap_fragment:Nx,metalnessmap_pars_fragment:Ox,morphinstance_vertex:Fx,morphcolor_vertex:kx,morphnormal_vertex:Bx,morphtarget_pars_vertex:Vx,morphtarget_vertex:zx,normal_fragment_begin:Hx,normal_fragment_maps:Gx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:jx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:Kx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:$x,iridescence_pars_fragment:Zx,opaque_fragment:Jx,packing:Qx,premultiplied_alpha_fragment:t2,project_vertex:e2,dithering_fragment:n2,dithering_pars_fragment:i2,roughnessmap_fragment:r2,roughnessmap_pars_fragment:s2,shadowmap_pars_fragment:o2,shadowmap_pars_vertex:a2,shadowmap_vertex:l2,shadowmask_pars_fragment:c2,skinbase_vertex:u2,skinning_pars_vertex:h2,skinning_vertex:d2,skinnormal_vertex:p2,specularmap_fragment:f2,specularmap_pars_fragment:m2,tonemapping_fragment:g2,tonemapping_pars_fragment:_2,transmission_fragment:v2,transmission_pars_fragment:b2,uv_pars_fragment:x2,uv_pars_vertex:y2,uv_vertex:E2,worldpos_vertex:w2,background_vert:S2,background_frag:M2,backgroundCube_vert:T2,backgroundCube_frag:A2,cube_vert:C2,cube_frag:P2,depth_vert:R2,depth_frag:L2,distanceRGBA_vert:D2,distanceRGBA_frag:I2,equirect_vert:U2,equirect_frag:N2,linedashed_vert:O2,linedashed_frag:F2,meshbasic_vert:k2,meshbasic_frag:B2,meshlambert_vert:V2,meshlambert_frag:z2,meshmatcap_vert:H2,meshmatcap_frag:G2,meshnormal_vert:W2,meshnormal_frag:X2,meshphong_vert:j2,meshphong_frag:q2,meshphysical_vert:K2,meshphysical_frag:Y2,meshtoon_vert:$2,meshtoon_frag:Z2,points_vert:J2,points_frag:Q2,shadow_vert:ty,shadow_frag:ey,sprite_vert:ny,sprite_frag:iy},st={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},vi={basic:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new re(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:an([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:an([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:an([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new re(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:an([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:an([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:an([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:an([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:an([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:an([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:an([st.lights,st.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};vi.physical={uniforms:an([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ja={r:0,b:0,g:0},Gr=new Ki,ry=new ze;function sy(e,t,n,i,r,s,o){const a=new re(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(M){let E=M.isScene===!0?M.background:null;return E&&E.isTexture&&(E=(M.backgroundBlurriness>0?n:t).get(E)),E}function b(M){let E=!1;const T=_(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),E=!0);const k=e.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(M,E){const T=_(E);T&&(T.isCubeTexture||T.mapping===Gl)?(u===void 0&&(u=new Hi(new pa(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:so(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gr.copy(E.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(Gr)),u.material.toneMapped=le.getTransfer(T.colorSpace)!==me,(h!==T||d!==T.version||m!==e.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,m=e.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Hi(new ql(2,2),new Ar({name:"BackgroundMaterial",uniforms:so(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=le.getTransfer(T.colorSpace)!==me,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,m=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,E){M.getRGB(Ja,Dg(e)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),l=E,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:b,addToRenderList:f}}function oy(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,R,X,z,j){let K=!1;const G=h(z,X,R);s!==G&&(s=G,c(s.object)),K=m(y,z,X,j),K&&_(y,z,X,j),j!==null&&t.update(j,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,T(y,R,X,z),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return e.createVertexArray()}function c(y){return e.bindVertexArray(y)}function u(y){return e.deleteVertexArray(y)}function h(y,R,X){const z=X.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let K=j[R.id];K===void 0&&(K={},j[R.id]=K);let G=K[z];return G===void 0&&(G=d(l()),K[z]=G),G}function d(y){const R=[],X=[],z=[];for(let j=0;j<n;j++)R[j]=0,X[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:X,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,R,X,z){const j=s.attributes,K=R.attributes;let G=0;const Q=X.getAttributes();for(const W in Q)if(Q[W].location>=0){const ht=j[W];let mt=K[W];if(mt===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),ht===void 0||ht.attribute!==mt||mt&&ht.data!==mt.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(y,R,X,z){const j={},K=R.attributes;let G=0;const Q=X.getAttributes();for(const W in Q)if(Q[W].location>=0){let ht=K[W];ht===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const mt={};mt.attribute=ht,ht&&ht.data&&(mt.data=ht.data),j[W]=mt,G++}s.attributes=j,s.attributesNum=G,s.index=z}function b(){const y=s.newAttributes;for(let R=0,X=y.length;R<X;R++)y[R]=0}function f(y){p(y,0)}function p(y,R){const X=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;X[y]=1,z[y]===0&&(e.enableVertexAttribArray(y),z[y]=1),j[y]!==R&&(e.vertexAttribDivisor(y,R),j[y]=R)}function M(){const y=s.newAttributes,R=s.enabledAttributes;for(let X=0,z=R.length;X<z;X++)R[X]!==y[X]&&(e.disableVertexAttribArray(X),R[X]=0)}function E(y,R,X,z,j,K,G){G===!0?e.vertexAttribIPointer(y,R,X,j,K):e.vertexAttribPointer(y,R,X,z,j,K)}function T(y,R,X,z){b();const j=z.attributes,K=X.getAttributes(),G=R.defaultAttributeValues;for(const Q in K){const W=K[Q];if(W.location>=0){let ct=j[Q];if(ct===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const ht=ct.normalized,mt=ct.itemSize,Wt=t.get(ct);if(Wt===void 0)continue;const te=Wt.buffer,q=Wt.type,tt=Wt.bytesPerElement,dt=q===e.INT||q===e.UNSIGNED_INT||ct.gpuType===gg;if(ct.isInterleavedBufferAttribute){const ot=ct.data,Bt=ot.stride,Lt=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let Xt=0;Xt<W.locationSize;Xt++)p(W.location+Xt,ot.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Xt=0;Xt<W.locationSize;Xt++)f(W.location+Xt);e.bindBuffer(e.ARRAY_BUFFER,te);for(let Xt=0;Xt<W.locationSize;Xt++)E(W.location+Xt,mt/W.locationSize,q,ht,Bt*tt,(Lt+mt/W.locationSize*Xt)*tt,dt)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)p(W.location+ot,ct.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<W.locationSize;ot++)f(W.location+ot);e.bindBuffer(e.ARRAY_BUFFER,te);for(let ot=0;ot<W.locationSize;ot++)E(W.location+ot,mt/W.locationSize,q,ht,mt*tt,mt/W.locationSize*ot*tt,dt)}}else if(G!==void 0){const ht=G[Q];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(W.location,ht);break;case 3:e.vertexAttrib3fv(W.location,ht);break;case 4:e.vertexAttrib4fv(W.location,ht);break;default:e.vertexAttrib1fv(W.location,ht)}}}}M()}function k(){O();for(const y in i){const R=i[y];for(const X in R){const z=R[X];for(const j in z)u(z[j].object),delete z[j];delete R[X]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const X in R){const z=R[X];for(const j in z)u(z[j].object),delete z[j];delete R[X]}delete i[y.id]}function A(y){for(const R in i){const X=i[R];if(X[y.id]===void 0)continue;const z=X[y.id];for(const j in z)u(z[j].object),delete z[j];delete X[y.id]}}function O(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:f,disableUnusedAttributes:M}}function ay(e,t,n){let i;function r(c){i=c}function s(c,u){e.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(e.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h;m++)this.render(c[m],u[m]);else{d.multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];n.update(m,i,1)}}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let b=0;b<h;b++)_+=u[b];for(let b=0;b<d.length;b++)n.update(_,i,d[b])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ly(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==yi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===Wl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Tr&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vr&&!A)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),b=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),p=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,k=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:b,maxAttributes:f,maxVertexUniforms:p,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:T,maxSamples:k}}function cy(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new fr,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,b=h.clipIntersection,f=h.clipShadows,p=e.get(h);if(!r||_===null||_.length===0||s&&!f)s?u(null):c();else{const M=s?0:i,E=M*4;let T=p.clippingState||null;l.value=T,T=u(_,d,E,m);for(let k=0;k!==E;++k)T[k]=n[k];p.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,_){const b=h!==null?h.length:0;let f=null;if(b!==0){if(f=l.value,_!==!0||f===null){const p=m+b*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(f===null||f.length<p)&&(f=new Float32Array(p));for(let E=0,T=m;E!==b;++E,T+=4)o.copy(h[E]).applyMatrix4(M,a),o.normal.toArray(f,T),f[T+3]=o.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}function uy(e){let t=new WeakMap;function n(o,a){return a===Iu?o.mapping=to:a===Uu&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Iu||a===Uu)if(t.has(o)){const l=t.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yb(l.height);return c.fromEquirectangularTexture(e,o),t.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class hy extends Ig{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Gs=4,$p=[.125,.215,.35,.446,.526,.582],$r=20,Qc=new hy,Zp=new re;let tu=null,eu=0,nu=0,iu=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,Jp=[new I(-qr,ks,0),new I(qr,ks,0),new I(-ks,0,qr),new I(ks,0,qr),new I(0,qr,-ks),new I(0,qr,ks),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Qp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tu,eu,nu),this._renderer.xr.enabled=iu,t.scissorTest=!1,Qa(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===to||t.mapping===eo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tu=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),nu=this._renderer.getActiveMipmapLevel(),iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Wl,format:yi,colorSpace:Dr,depthBuffer:!1},r=tf(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dy(s)),this._blurMaterial=py(s,t,n)}return r}_compileMaterial(t){const n=new Hi(this._lodPlanes[0],t);this._renderer.compile(n,Qc)}_sceneToCubeUV(t,n,i,r){const a=new qn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zp),u.toneMapping=yr,u.autoClear=!1;const m=new Pg({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),_=new Hi(new pa,m);let b=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,b=!0):(m.color.copy(Zp),b=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Qa(r,M*E,p>2?E:0,E,E),u.setRenderTarget(r),b&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===to||t.mapping===eo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jp[(r-s-1)%Jp.length];this._blur(t,s-1,s,o,a)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Hi(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*$r-1),b=s/_,f=isFinite(s)?1+Math.floor(u*b):$r;f>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${$r}`);const p=[];let M=0;for(let A=0;A<$r;++A){const O=A/b,w=Math.exp(-O*O/2);p.push(w),A===0?M+=w:A<f&&(M+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const T=this._sizeLods[r],k=3*T*(r>E-Gs?r-E+Gs:0),C=4*(this._cubeSize-T);Qa(n,k,C,3*T,2*T),l.setRenderTarget(n),l.render(h,Qc)}}function dy(e){const t=[],n=[],i=[];let r=e;const s=e-Gs+1+$p.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>e-Gs?l=$p[o-e+Gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,b=3,f=2,p=1,M=new Float32Array(b*_*m),E=new Float32Array(f*_*m),T=new Float32Array(p*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,O=C>2?0:-1,w=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];M.set(w,b*_*C),E.set(d,f*_*C);const y=[C,C,C,C,C,C];T.set(y,p*_*C)}const k=new Qi;k.setAttribute("position",new Qn(M,b)),k.setAttribute("uv",new Qn(E,f)),k.setAttribute("faceIndex",new Qn(T,p)),t.push(k),r>Gs&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function tf(e,t,n){const i=new ls(e,t,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function py(e,t,n){const i=new Float32Array($r),r=new I(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function ef(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function nf(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function gh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fy(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Iu||l===Uu,u=l===to||l===eo;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Qp(e)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(n===null&&(n=new Qp(e)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function my(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Sg("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gy(e,t,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const b=d.morphAttributes[_];for(let f=0,p=b.length;f<p;f++)t.remove(b[f])}d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],e.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const b=m[_];for(let f=0,p=b.length;f<p;f++)t.update(b[f],e.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let b=0;if(m!==null){const M=m.array;b=m.version;for(let E=0,T=M.length;E<T;E+=3){const k=M[E+0],C=M[E+1],A=M[E+2];d.push(k,C,C,A,A,k)}}else if(_!==void 0){const M=_.array;b=_.version;for(let E=0,T=M.length/3-1;E<T;E+=3){const k=E+0,C=E+1,A=E+2;d.push(k,C,C,A,A,k)}}else return;const f=new(wg(d)?Lg:Rg)(d,1);f.version=b;const p=s.get(h);p&&t.remove(p),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function _y(e,t,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){e.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,_){_!==0&&(e.drawElementsInstanced(i,m,s,d*o,_),n.update(m,i,_))}function u(d,m,_){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let f=0;f<_;f++)this.render(d[f]/o,m[f]);else{b.multiDrawElementsWEBGL(i,m,0,s,d,0,_);let f=0;for(let p=0;p<_;p++)f+=m[p];n.update(f,i,1)}}function h(d,m,_,b){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)c(d[p]/o,m[p],b[p]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,b,0,_);let p=0;for(let M=0;M<_;M++)p+=m[M];for(let M=0;M<b.length;M++)n.update(p,i,b[M])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vy(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function by(e,t,n){const i=new WeakMap,r=new tn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let w=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let E=0;m===!0&&(E=1),_===!0&&(E=2),b===!0&&(E=3);let T=a.attributes.position.count*E,k=1;T>t.maxTextureSize&&(k=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const C=new Float32Array(T*k*4*h),A=new Tg(C,T,k,h);A.type=vr,A.needsUpdate=!0;const O=E*4;for(let y=0;y<h;y++){const R=f[y],X=p[y],z=M[y],j=T*k*4*y;for(let K=0;K<R.count;K++){const G=K*O;m===!0&&(r.fromBufferAttribute(R,K),C[j+G+0]=r.x,C[j+G+1]=r.y,C[j+G+2]=r.z,C[j+G+3]=0),_===!0&&(r.fromBufferAttribute(X,K),C[j+G+4]=r.x,C[j+G+5]=r.y,C[j+G+6]=r.z,C[j+G+7]=0),b===!0&&(r.fromBufferAttribute(z,K),C[j+G+8]=r.x,C[j+G+9]=r.y,C[j+G+10]=r.z,C[j+G+11]=z.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new Ot(T,k)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function xy(e,t,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class Fg extends xn{constructor(t,n,i,r,s,o,a,l,c,u=Xs){if(u!==Xs&&u!==ro)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=no),i===void 0&&u===ro&&(i=io),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:$n,this.minFilter=l!==void 0?l:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kg=new xn,Bg=new Fg(1,1);Bg.compareFunction=Eg;const Vg=new Tg,zg=new sb,Hg=new Ug,rf=[],sf=[],of=new Float32Array(16),af=new Float32Array(9),lf=new Float32Array(4);function vo(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=rf[r];if(s===void 0&&(s=new Float32Array(r),rf[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function qe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Kl(e,t){let n=sf[t];n===void 0&&(n=new Int32Array(t),sf[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function yy(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ey(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function wy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(qe(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function Sy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function My(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(qe(n,i))return;lf.set(i),e.uniformMatrix2fv(this.addr,!1,lf),Ke(n,i)}}function Ty(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(qe(n,i))return;af.set(i),e.uniformMatrix3fv(this.addr,!1,af),Ke(n,i)}}function Ay(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(qe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(qe(n,i))return;of.set(i),e.uniformMatrix4fv(this.addr,!1,of),Ke(n,i)}}function Cy(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Py(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function Ry(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function Ly(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function Dy(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Iy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(qe(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function Uy(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(qe(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function Ny(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(qe(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function Oy(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);const s=this.type===e.SAMPLER_2D_SHADOW?Bg:kg;n.setTexture2D(t||s,r)}function Fy(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||zg,r)}function ky(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Hg,r)}function By(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Vg,r)}function Vy(e){switch(e){case 5126:return yy;case 35664:return Ey;case 35665:return wy;case 35666:return Sy;case 35674:return My;case 35675:return Ty;case 35676:return Ay;case 5124:case 35670:return Cy;case 35667:case 35671:return Py;case 35668:case 35672:return Ry;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Iy;case 36295:return Uy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return ky;case 36289:case 36303:case 36311:case 36292:return By}}function zy(e,t){e.uniform1fv(this.addr,t)}function Hy(e,t){const n=vo(t,this.size,2);e.uniform2fv(this.addr,n)}function Gy(e,t){const n=vo(t,this.size,3);e.uniform3fv(this.addr,n)}function Wy(e,t){const n=vo(t,this.size,4);e.uniform4fv(this.addr,n)}function Xy(e,t){const n=vo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function jy(e,t){const n=vo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function qy(e,t){const n=vo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ky(e,t){e.uniform1iv(this.addr,t)}function Yy(e,t){e.uniform2iv(this.addr,t)}function $y(e,t){e.uniform3iv(this.addr,t)}function Zy(e,t){e.uniform4iv(this.addr,t)}function Jy(e,t){e.uniform1uiv(this.addr,t)}function Qy(e,t){e.uniform2uiv(this.addr,t)}function tE(e,t){e.uniform3uiv(this.addr,t)}function eE(e,t){e.uniform4uiv(this.addr,t)}function nE(e,t,n){const i=this.cache,r=t.length,s=Kl(n,r);qe(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||kg,s[o])}function iE(e,t,n){const i=this.cache,r=t.length,s=Kl(n,r);qe(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||zg,s[o])}function rE(e,t,n){const i=this.cache,r=t.length,s=Kl(n,r);qe(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||Hg,s[o])}function sE(e,t,n){const i=this.cache,r=t.length,s=Kl(n,r);qe(i,s)||(e.uniform1iv(this.addr,s),Ke(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||Vg,s[o])}function oE(e){switch(e){case 5126:return zy;case 35664:return Hy;case 35665:return Gy;case 35666:return Wy;case 35674:return Xy;case 35675:return jy;case 35676:return qy;case 5124:case 35670:return Ky;case 35667:case 35671:return Yy;case 35668:case 35672:return $y;case 35669:case 35673:return Zy;case 5125:return Jy;case 36294:return Qy;case 36295:return tE;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class aE{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Vy(n.type)}}class lE{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oE(n.type)}}class cE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const ru=/(\w+)(\])?(\[|\.)?/g;function cf(e,t){e.seq.push(t),e.map[t.id]=t}function uE(e,t,n){const i=e.name,r=i.length;for(ru.lastIndex=0;;){const s=ru.exec(i),o=ru.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cf(n,c===void 0?new aE(a,e,t):new lE(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new cE(a),cf(n,h)),n=h}}}class hl{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);uE(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function uf(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const hE=37297;let dE=0;function pE(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function fE(e){const t=le.getPrimaries(le.workingColorSpace),n=le.getPrimaries(e);let i;switch(t===n?i="":t===Ml&&n===Sl?i="LinearDisplayP3ToLinearSRGB":t===Sl&&n===Ml&&(i="LinearSRGBToLinearDisplayP3"),e){case Dr:case Xl:return[i,"LinearTransferOETF"];case _i:case fh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function hf(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+pE(e.getShaderSource(t),o)}else return r}function mE(e,t){const n=fE(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function gE(e,t){let n;switch(t){case y1:n="Linear";break;case E1:n="Reinhard";break;case w1:n="OptimizedCineon";break;case S1:n="ACESFilmic";break;case T1:n="AgX";break;case A1:n="Neutral";break;case M1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function _E(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function vE(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function bE(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Wo(e){return e!==""}function df(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pf(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ku(e){return e.replace(xE,EE)}const yE=new Map;function EE(e,t){let n=Ft[t];if(n===void 0){const i=yE.get(t);if(i!==void 0)n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ku(n)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ff(e){return e.replace(wE,SE)}function SE(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ME(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===pg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===q0?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function TE(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case to:case eo:t="ENVMAP_TYPE_CUBE";break;case Gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function AE(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case eo:t="ENVMAP_MODE_REFRACTION";break}return t}function CE(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case fg:t="ENVMAP_BLENDING_MULTIPLY";break;case b1:t="ENVMAP_BLENDING_MIX";break;case x1:t="ENVMAP_BLENDING_ADD";break}return t}function PE(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RE(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=ME(n),c=TE(n),u=AE(n),h=CE(n),d=PE(n),m=_E(n),_=vE(s),b=r.createProgram();let f,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Wo).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(f=[mf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[mf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?Ft.tonemapping_pars_fragment:"",n.toneMapping!==yr?gE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,mE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=ku(o),o=df(o,n),o=pf(o,n),a=ku(a),a=df(a,n),a=pf(a,n),o=ff(o),a=ff(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+f+o,T=M+p+a,k=uf(r,r.VERTEX_SHADER,E),C=uf(r,r.FRAGMENT_SHADER,T);r.attachShader(b,k),r.attachShader(b,C),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(R){if(e.debug.checkShaderErrors){const X=r.getProgramInfoLog(b).trim(),z=r.getShaderInfoLog(k).trim(),j=r.getShaderInfoLog(C).trim();let K=!0,G=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,b,k,C);else{const Q=hf(r,k,"vertex"),W=hf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+Q+`
`+W)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(z===""||j==="")&&(G=!1);G&&(R.diagnostics={runnable:K,programLog:X,vertexShader:{log:z,prefix:f},fragmentShader:{log:j,prefix:p}})}r.deleteShader(k),r.deleteShader(C),O=new hl(r,b),w=bE(r,b)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(b,hE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dE++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=C,this}let LE=0;class DE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new IE(t),n.set(t,i)),i}}class IE{constructor(t){this.id=LE++,this.code=t,this.usedTimes=0}}function UE(e,t,n,i,r,s,o){const a=new Ag,l=new DE,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return c.add(w),w===0?"uv":`uv${w}`}function f(w,y,R,X,z){const j=X.fog,K=z.geometry,G=w.isMeshStandardMaterial?X.environment:null,Q=(w.isMeshStandardMaterial?n:t).get(w.envMap||G),W=Q&&Q.mapping===Gl?Q.image.height:null,ct=_[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=ht!==void 0?ht.length:0;let Wt=0;K.morphAttributes.position!==void 0&&(Wt=1),K.morphAttributes.normal!==void 0&&(Wt=2),K.morphAttributes.color!==void 0&&(Wt=3);let te,q,tt,dt;if(ct){const ee=vi[ct];te=ee.vertexShader,q=ee.fragmentShader}else te=w.vertexShader,q=w.fragmentShader,l.update(w),tt=l.getVertexShaderID(w),dt=l.getFragmentShaderID(w);const ot=e.getRenderTarget(),Bt=z.isInstancedMesh===!0,Lt=z.isBatchedMesh===!0,Xt=!!w.map,P=!!w.matcap,jt=!!Q,Gt=!!w.aoMap,he=!!w.lightMap,Mt=!!w.bumpMap,Kt=!!w.normalMap,Vt=!!w.displacementMap,Dt=!!w.emissiveMap,ye=!!w.metalnessMap,S=!!w.roughnessMap,v=w.anisotropy>0,B=w.clearcoat>0,Y=w.dispersion>0,Z=w.iridescence>0,J=w.sheen>0,yt=w.transmission>0,rt=v&&!!w.anisotropyMap,it=B&&!!w.clearcoatMap,It=B&&!!w.clearcoatNormalMap,et=B&&!!w.clearcoatRoughnessMap,gt=Z&&!!w.iridescenceMap,Ht=Z&&!!w.iridescenceThicknessMap,At=J&&!!w.sheenColorMap,at=J&&!!w.sheenRoughnessMap,Ut=!!w.specularMap,Nt=!!w.specularColorMap,Se=!!w.specularIntensityMap,g=yt&&!!w.transmissionMap,V=yt&&!!w.thicknessMap,U=!!w.gradientMap,H=!!w.alphaMap,$=w.alphaTest>0,Et=!!w.alphaHash,Rt=!!w.extensions;let Me=yr;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Me=e.toneMapping);const Ue={shaderID:ct,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:q,defines:w.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Lt,batchingColor:Lt&&z._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&z.instanceColor!==null,instancingMorph:Bt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?e.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Dr,alphaToCoverage:!!w.alphaToCoverage,map:Xt,matcap:P,envMap:jt,envMapMode:jt&&Q.mapping,envMapCubeUVHeight:W,aoMap:Gt,lightMap:he,bumpMap:Mt,normalMap:Kt,displacementMap:d&&Vt,emissiveMap:Dt,normalMapObjectSpace:Kt&&w.normalMapType===H1,normalMapTangentSpace:Kt&&w.normalMapType===z1,metalnessMap:ye,roughnessMap:S,anisotropy:v,anisotropyMap:rt,clearcoat:B,clearcoatMap:it,clearcoatNormalMap:It,clearcoatRoughnessMap:et,dispersion:Y,iridescence:Z,iridescenceMap:gt,iridescenceThicknessMap:Ht,sheen:J,sheenColorMap:At,sheenRoughnessMap:at,specularMap:Ut,specularColorMap:Nt,specularIntensityMap:Se,transmission:yt,transmissionMap:g,thicknessMap:V,gradientMap:U,opaque:w.transparent===!1&&w.blending===ns&&w.alphaToCoverage===!1,alphaMap:H,alphaTest:$,alphaHash:Et,combine:w.combine,mapUv:Xt&&b(w.map.channel),aoMapUv:Gt&&b(w.aoMap.channel),lightMapUv:he&&b(w.lightMap.channel),bumpMapUv:Mt&&b(w.bumpMap.channel),normalMapUv:Kt&&b(w.normalMap.channel),displacementMapUv:Vt&&b(w.displacementMap.channel),emissiveMapUv:Dt&&b(w.emissiveMap.channel),metalnessMapUv:ye&&b(w.metalnessMap.channel),roughnessMapUv:S&&b(w.roughnessMap.channel),anisotropyMapUv:rt&&b(w.anisotropyMap.channel),clearcoatMapUv:it&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:It&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:at&&b(w.sheenRoughnessMap.channel),specularMapUv:Ut&&b(w.specularMap.channel),specularColorMapUv:Nt&&b(w.specularColorMap.channel),specularIntensityMapUv:Se&&b(w.specularIntensityMap.channel),transmissionMapUv:g&&b(w.transmissionMap.channel),thicknessMapUv:V&&b(w.thicknessMap.channel),alphaMapUv:H&&b(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Kt||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(Xt||H),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:Xt&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===me,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bi,flipSided:w.side===bn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Rt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Rt&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(w){const y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)y.push(R),y.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(M(y,w),E(y,w),y.push(e.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function M(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function E(w,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.doubleSided&&a.enable(10),y.flipSided&&a.enable(11),y.useDepthPacking&&a.enable(12),y.dithering&&a.enable(13),y.transmission&&a.enable(14),y.sheen&&a.enable(15),y.opaque&&a.enable(16),y.pointsUvs&&a.enable(17),y.decodeVideoTexture&&a.enable(18),y.alphaToCoverage&&a.enable(19),w.push(a.mask)}function T(w){const y=_[w.type];let R;if(y){const X=vi[y];R=_b.clone(X.uniforms)}else R=w.uniforms;return R}function k(w,y){let R;for(let X=0,z=u.length;X<z;X++){const j=u[X];if(j.cacheKey===y){R=j,++R.usedTimes;break}}return R===void 0&&(R=new RE(e,y,w,s),u.push(R)),R}function C(w){if(--w.usedTimes===0){const y=u.indexOf(w);u[y]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function O(){l.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:T,acquireProgram:k,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:O}}function NE(){let e=new WeakMap;function t(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,a){e.get(s)[o]=a}function r(){e=new WeakMap}return{get:t,remove:n,update:i,dispose:r}}function OE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function gf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function _f(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(h,d,m,_,b,f){let p=e[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:b,group:f},e[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=b,p.group=f),t++,p}function a(h,d,m,_,b,f){const p=o(h,d,m,_,b,f);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function l(h,d,m,_,b,f){const p=o(h,d,m,_,b,f);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function c(h,d){n.length>1&&n.sort(h||OE),i.length>1&&i.sort(d||gf),r.length>1&&r.sort(d||gf)}function u(){for(let h=t,d=e.length;h<d;h++){const m=e[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function FE(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new _f,e.set(i,[o])):r>=s.length?(o=new _f,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function kE(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new re};break;case"SpotLight":n={position:new I,direction:new I,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new re,groundColor:new re};break;case"RectAreaLight":n={color:new re,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function BE(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let VE=0;function zE(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function HE(e){const t=new kE,n=BE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new ze,o=new ze;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,_=0,b=0,f=0,p=0,M=0,E=0,T=0,k=0,C=0,A=0;c.sort(zE);for(let w=0,y=c.length;w<y;w++){const R=c[w],X=R.color,z=R.intensity,j=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=X.r*z,h+=X.g*z,d+=X.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],z);A++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,W=n.get(R);W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=R.shadow.matrix,M++}i.directional[m]=G,m++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(X).multiplyScalar(z),G.distance=j,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[b]=G;const Q=R.shadow;if(R.map&&(i.spotLightMap[k]=R.map,k++,Q.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[b]=Q.matrix,R.castShadow){const W=n.get(R);W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,i.spotShadow[b]=W,i.spotShadowMap[b]=K,T++}b++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(X).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[f]=G,f++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Q=R.shadow,W=n.get(R);W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=R.shadow.matrix,E++}i.point[_]=G,_++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),i.hemi[p]=G,p++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==m||O.pointLength!==_||O.spotLength!==b||O.rectAreaLength!==f||O.hemiLength!==p||O.numDirectionalShadows!==M||O.numPointShadows!==E||O.numSpotShadows!==T||O.numSpotMaps!==k||O.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=f,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+k-C,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,O.directionalLength=m,O.pointLength=_,O.spotLength=b,O.rectAreaLength=f,O.hemiLength=p,O.numDirectionalShadows=M,O.numPointShadows=E,O.numSpotShadows=T,O.numSpotMaps=k,O.numLightProbes=A,i.version=VE++)}function l(c,u){let h=0,d=0,m=0,_=0,b=0;const f=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const E=c[p];if(E.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),h++}else if(E.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),o.identity(),s.copy(E.matrixWorld),s.premultiply(f),o.extractRotation(s),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),d++}else if(E.isHemisphereLight){const T=i.hemi[b];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(f),b++}}}return{setup:a,setupView:l,state:i}}function vf(e){const t=new HE(e),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){t.setup(n)}function l(u){t.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function GE(e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new vf(e),t.set(r,[a])):s>=o.length?(a=new vf(e),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class WE extends da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class XE extends da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function KE(e,t,n){let i=new Ng;const r=new Ot,s=new Ot,o=new tn,a=new WE({depthPacking:V1}),l=new XE,c={},u=n.maxTextureSize,h={[Mr]:bn,[bn]:Mr,[Bi]:Bi},d=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:jE,fragmentShader:qE}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Qi;_.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Hi(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pg;let p=this.type;this.render=function(C,A,O){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const w=e.getRenderTarget(),y=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),X=e.state;X.setBlending(xr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const z=p!==Fi&&this.type===Fi,j=p===Fi&&this.type!==Fi;for(let K=0,G=C.length;K<G;K++){const Q=C[K],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ct=W.getFrameExtents();if(r.multiply(ct),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ct.x),r.x=s.x*ct.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ct.y),r.y=s.y*ct.y,W.mapSize.y=s.y)),W.map===null||z===!0||j===!0){const mt=this.type!==Fi?{minFilter:$n,magFilter:$n}:{};W.map!==null&&W.map.dispose(),W.map=new ls(r.x,r.y,mt),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}e.setRenderTarget(W.map),e.clear();const ht=W.getViewportCount();for(let mt=0;mt<ht;mt++){const Wt=W.getViewport(mt);o.set(s.x*Wt.x,s.y*Wt.y,s.x*Wt.z,s.y*Wt.w),X.viewport(o),W.updateMatrices(Q,mt),i=W.getFrustum(),T(A,O,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===Fi&&M(W,O),W.needsUpdate=!1}p=this.type,f.needsUpdate=!1,e.setRenderTarget(w,y,R)};function M(C,A){const O=t.update(b);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ls(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(A,null,O,d,b,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(A,null,O,m,b,null)}function E(C,A,O,w){let y=null;const R=O.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)y=R;else if(y=O.isPointLight===!0?l:a,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=y.uuid,z=A.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let K=j[z];K===void 0&&(K=y.clone(),j[z]=K,A.addEventListener("dispose",k)),y=K}if(y.visible=A.visible,y.wireframe=A.wireframe,w===Fi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=e.properties.get(y);X.light=O}return y}function T(C,A,O,w,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===Fi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,C.matrixWorld);const z=t.update(C),j=C.material;if(Array.isArray(j)){const K=z.groups;for(let G=0,Q=K.length;G<Q;G++){const W=K[G],ct=j[W.materialIndex];if(ct&&ct.visible){const ht=E(C,ct,w,y);C.onBeforeShadow(e,C,A,O,z,ht,W),e.renderBufferDirect(O,null,z,ht,C,W),C.onAfterShadow(e,C,A,O,z,ht,W)}}}else if(j.visible){const K=E(C,j,w,y);C.onBeforeShadow(e,C,A,O,z,K,null),e.renderBufferDirect(O,null,z,K,C,null),C.onAfterShadow(e,C,A,O,z,K,null)}}const X=C.children;for(let z=0,j=X.length;z<j;z++)T(X[z],A,O,w,y)}function k(C){C.target.removeEventListener("dispose",k);for(const O in c){const w=c[O],y=C.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function YE(e){function t(){let g=!1;const V=new tn;let U=null;const H=new tn(0,0,0,0);return{setMask:function($){U!==$&&!g&&(e.colorMask($,$,$,$),U=$)},setLocked:function($){g=$},setClear:function($,Et,Rt,Me,Ue){Ue===!0&&($*=Me,Et*=Me,Rt*=Me),V.set($,Et,Rt,Me),H.equals(V)===!1&&(e.clearColor($,Et,Rt,Me),H.copy(V))},reset:function(){g=!1,U=null,H.set(-1,0,0,0)}}}function n(){let g=!1,V=null,U=null,H=null;return{setTest:function($){$?dt(e.DEPTH_TEST):ot(e.DEPTH_TEST)},setMask:function($){V!==$&&!g&&(e.depthMask($),V=$)},setFunc:function($){if(U!==$){switch($){case d1:e.depthFunc(e.NEVER);break;case p1:e.depthFunc(e.ALWAYS);break;case f1:e.depthFunc(e.LESS);break;case yl:e.depthFunc(e.LEQUAL);break;case m1:e.depthFunc(e.EQUAL);break;case g1:e.depthFunc(e.GEQUAL);break;case _1:e.depthFunc(e.GREATER);break;case v1:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}U=$}},setLocked:function($){g=$},setClear:function($){H!==$&&(e.clearDepth($),H=$)},reset:function(){g=!1,V=null,U=null,H=null}}}function i(){let g=!1,V=null,U=null,H=null,$=null,Et=null,Rt=null,Me=null,Ue=null;return{setTest:function(ee){g||(ee?dt(e.STENCIL_TEST):ot(e.STENCIL_TEST))},setMask:function(ee){V!==ee&&!g&&(e.stencilMask(ee),V=ee)},setFunc:function(ee,Ne,Oe){(U!==ee||H!==Ne||$!==Oe)&&(e.stencilFunc(ee,Ne,Oe),U=ee,H=Ne,$=Oe)},setOp:function(ee,Ne,Oe){(Et!==ee||Rt!==Ne||Me!==Oe)&&(e.stencilOp(ee,Ne,Oe),Et=ee,Rt=Ne,Me=Oe)},setLocked:function(ee){g=ee},setClear:function(ee){Ue!==ee&&(e.clearStencil(ee),Ue=ee)},reset:function(){g=!1,V=null,U=null,H=null,$=null,Et=null,Rt=null,Me=null,Ue=null}}}const r=new t,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,_=!1,b=null,f=null,p=null,M=null,E=null,T=null,k=null,C=new re(0,0,0),A=0,O=!1,w=null,y=null,R=null,X=null,z=null;const j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=G>=1):Q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=G>=2);let W=null,ct={};const ht=e.getParameter(e.SCISSOR_BOX),mt=e.getParameter(e.VIEWPORT),Wt=new tn().fromArray(ht),te=new tn().fromArray(mt);function q(g,V,U,H){const $=new Uint8Array(4),Et=e.createTexture();e.bindTexture(g,Et),e.texParameteri(g,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(g,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Rt=0;Rt<U;Rt++)g===e.TEXTURE_3D||g===e.TEXTURE_2D_ARRAY?e.texImage3D(V,0,e.RGBA,1,1,H,0,e.RGBA,e.UNSIGNED_BYTE,$):e.texImage2D(V+Rt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,$);return Et}const tt={};tt[e.TEXTURE_2D]=q(e.TEXTURE_2D,e.TEXTURE_2D,1),tt[e.TEXTURE_CUBE_MAP]=q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[e.TEXTURE_2D_ARRAY]=q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),tt[e.TEXTURE_3D]=q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),dt(e.DEPTH_TEST),s.setFunc(yl),Mt(!1),Kt(Jd),dt(e.CULL_FACE),Gt(xr);function dt(g){c[g]!==!0&&(e.enable(g),c[g]=!0)}function ot(g){c[g]!==!1&&(e.disable(g),c[g]=!1)}function Bt(g,V){return u[g]!==V?(e.bindFramebuffer(g,V),u[g]=V,g===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=V),g===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=V),!0):!1}function Lt(g,V){let U=d,H=!1;if(g){U=h.get(V),U===void 0&&(U=[],h.set(V,U));const $=g.textures;if(U.length!==$.length||U[0]!==e.COLOR_ATTACHMENT0){for(let Et=0,Rt=$.length;Et<Rt;Et++)U[Et]=e.COLOR_ATTACHMENT0+Et;U.length=$.length,H=!0}}else U[0]!==e.BACK&&(U[0]=e.BACK,H=!0);H&&e.drawBuffers(U)}function Xt(g){return m!==g?(e.useProgram(g),m=g,!0):!1}const P={[Yr]:e.FUNC_ADD,[Y0]:e.FUNC_SUBTRACT,[$0]:e.FUNC_REVERSE_SUBTRACT};P[Z0]=e.MIN,P[J0]=e.MAX;const jt={[Q0]:e.ZERO,[t1]:e.ONE,[e1]:e.SRC_COLOR,[Lu]:e.SRC_ALPHA,[a1]:e.SRC_ALPHA_SATURATE,[s1]:e.DST_COLOR,[i1]:e.DST_ALPHA,[n1]:e.ONE_MINUS_SRC_COLOR,[Du]:e.ONE_MINUS_SRC_ALPHA,[o1]:e.ONE_MINUS_DST_COLOR,[r1]:e.ONE_MINUS_DST_ALPHA,[l1]:e.CONSTANT_COLOR,[c1]:e.ONE_MINUS_CONSTANT_COLOR,[u1]:e.CONSTANT_ALPHA,[h1]:e.ONE_MINUS_CONSTANT_ALPHA};function Gt(g,V,U,H,$,Et,Rt,Me,Ue,ee){if(g===xr){_===!0&&(ot(e.BLEND),_=!1);return}if(_===!1&&(dt(e.BLEND),_=!0),g!==K0){if(g!==b||ee!==O){if((f!==Yr||E!==Yr)&&(e.blendEquation(e.FUNC_ADD),f=Yr,E=Yr),ee)switch(g){case ns:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qd:e.blendFunc(e.ONE,e.ONE);break;case tp:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ep:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}else switch(g){case ns:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qd:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case tp:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ep:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",g);break}p=null,M=null,T=null,k=null,C.set(0,0,0),A=0,b=g,O=ee}return}$=$||V,Et=Et||U,Rt=Rt||H,(V!==f||$!==E)&&(e.blendEquationSeparate(P[V],P[$]),f=V,E=$),(U!==p||H!==M||Et!==T||Rt!==k)&&(e.blendFuncSeparate(jt[U],jt[H],jt[Et],jt[Rt]),p=U,M=H,T=Et,k=Rt),(Me.equals(C)===!1||Ue!==A)&&(e.blendColor(Me.r,Me.g,Me.b,Ue),C.copy(Me),A=Ue),b=g,O=!1}function he(g,V){g.side===Bi?ot(e.CULL_FACE):dt(e.CULL_FACE);let U=g.side===bn;V&&(U=!U),Mt(U),g.blending===ns&&g.transparent===!1?Gt(xr):Gt(g.blending,g.blendEquation,g.blendSrc,g.blendDst,g.blendEquationAlpha,g.blendSrcAlpha,g.blendDstAlpha,g.blendColor,g.blendAlpha,g.premultipliedAlpha),s.setFunc(g.depthFunc),s.setTest(g.depthTest),s.setMask(g.depthWrite),r.setMask(g.colorWrite);const H=g.stencilWrite;o.setTest(H),H&&(o.setMask(g.stencilWriteMask),o.setFunc(g.stencilFunc,g.stencilRef,g.stencilFuncMask),o.setOp(g.stencilFail,g.stencilZFail,g.stencilZPass)),Dt(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits),g.alphaToCoverage===!0?dt(e.SAMPLE_ALPHA_TO_COVERAGE):ot(e.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(g){w!==g&&(g?e.frontFace(e.CW):e.frontFace(e.CCW),w=g)}function Kt(g){g!==X0?(dt(e.CULL_FACE),g!==y&&(g===Jd?e.cullFace(e.BACK):g===j0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ot(e.CULL_FACE),y=g}function Vt(g){g!==R&&(K&&e.lineWidth(g),R=g)}function Dt(g,V,U){g?(dt(e.POLYGON_OFFSET_FILL),(X!==V||z!==U)&&(e.polygonOffset(V,U),X=V,z=U)):ot(e.POLYGON_OFFSET_FILL)}function ye(g){g?dt(e.SCISSOR_TEST):ot(e.SCISSOR_TEST)}function S(g){g===void 0&&(g=e.TEXTURE0+j-1),W!==g&&(e.activeTexture(g),W=g)}function v(g,V,U){U===void 0&&(W===null?U=e.TEXTURE0+j-1:U=W);let H=ct[U];H===void 0&&(H={type:void 0,texture:void 0},ct[U]=H),(H.type!==g||H.texture!==V)&&(W!==U&&(e.activeTexture(U),W=U),e.bindTexture(g,V||tt[g]),H.type=g,H.texture=V)}function B(){const g=ct[W];g!==void 0&&g.type!==void 0&&(e.bindTexture(g.type,null),g.type=void 0,g.texture=void 0)}function Y(){try{e.compressedTexImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Z(){try{e.compressedTexImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function J(){try{e.texSubImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function yt(){try{e.texSubImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function rt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function it(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function It(){try{e.texStorage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function et(){try{e.texStorage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function gt(){try{e.texImage2D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function Ht(){try{e.texImage3D.apply(e,arguments)}catch(g){console.error("THREE.WebGLState:",g)}}function At(g){Wt.equals(g)===!1&&(e.scissor(g.x,g.y,g.z,g.w),Wt.copy(g))}function at(g){te.equals(g)===!1&&(e.viewport(g.x,g.y,g.z,g.w),te.copy(g))}function Ut(g,V){let U=l.get(V);U===void 0&&(U=new WeakMap,l.set(V,U));let H=U.get(g);H===void 0&&(H=e.getUniformBlockIndex(V,g.name),U.set(g,H))}function Nt(g,V){const H=l.get(V).get(g);a.get(V)!==H&&(e.uniformBlockBinding(V,H,g.__bindingPointIndex),a.set(V,H))}function Se(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},W=null,ct={},u={},h=new WeakMap,d=[],m=null,_=!1,b=null,f=null,p=null,M=null,E=null,T=null,k=null,C=new re(0,0,0),A=0,O=!1,w=null,y=null,R=null,X=null,z=null,Wt.set(0,0,e.canvas.width,e.canvas.height),te.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:dt,disable:ot,bindFramebuffer:Bt,drawBuffers:Lt,useProgram:Xt,setBlending:Gt,setMaterial:he,setFlipSided:Mt,setCullFace:Kt,setLineWidth:Vt,setPolygonOffset:Dt,setScissorTest:ye,activeTexture:S,bindTexture:v,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:gt,texImage3D:Ht,updateUBOMapping:Ut,uniformBlockBinding:Nt,texStorage2D:It,texStorage3D:et,texSubImage2D:J,texSubImage3D:yt,compressedTexSubImage2D:rt,compressedTexSubImage3D:it,scissor:At,viewport:at,reset:Se}}function $E(e,t,n,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,v){return m?new OffscreenCanvas(S,v):Al("canvas")}function b(S,v,B){let Y=1;const Z=ye(S);if((Z.width>B||Z.height>B)&&(Y=B/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const J=Math.floor(Y*Z.width),yt=Math.floor(Y*Z.height);h===void 0&&(h=_(J,yt));const rt=v?_(J,yt):h;return rt.width=J,rt.height=yt,rt.getContext("2d").drawImage(S,0,0,J,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+J+"x"+yt+")."),rt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),S;return S}function f(S){return S.generateMipmaps&&S.minFilter!==$n&&S.minFilter!==ci}function p(S){e.generateMipmap(S)}function M(S,v,B,Y,Z=!1){if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=v;if(v===e.RED&&(B===e.FLOAT&&(J=e.R32F),B===e.HALF_FLOAT&&(J=e.R16F),B===e.UNSIGNED_BYTE&&(J=e.R8)),v===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(J=e.R8UI),B===e.UNSIGNED_SHORT&&(J=e.R16UI),B===e.UNSIGNED_INT&&(J=e.R32UI),B===e.BYTE&&(J=e.R8I),B===e.SHORT&&(J=e.R16I),B===e.INT&&(J=e.R32I)),v===e.RG&&(B===e.FLOAT&&(J=e.RG32F),B===e.HALF_FLOAT&&(J=e.RG16F),B===e.UNSIGNED_BYTE&&(J=e.RG8)),v===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(J=e.RG8UI),B===e.UNSIGNED_SHORT&&(J=e.RG16UI),B===e.UNSIGNED_INT&&(J=e.RG32UI),B===e.BYTE&&(J=e.RG8I),B===e.SHORT&&(J=e.RG16I),B===e.INT&&(J=e.RG32I)),v===e.RGB&&B===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),v===e.RGBA){const yt=Z?wl:le.getTransfer(Y);B===e.FLOAT&&(J=e.RGBA32F),B===e.HALF_FLOAT&&(J=e.RGBA16F),B===e.UNSIGNED_BYTE&&(J=yt===me?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(S,v){let B;return S?v===null||v===no||v===io?B=e.DEPTH24_STENCIL8:v===vr?B=e.DEPTH32F_STENCIL8:v===El&&(B=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===no||v===io?B=e.DEPTH_COMPONENT24:v===vr?B=e.DEPTH_COMPONENT32F:v===El&&(B=e.DEPTH_COMPONENT16),B}function T(S,v){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==$n&&S.minFilter!==ci?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function k(S){const v=S.target;v.removeEventListener("dispose",k),A(v),v.isVideoTexture&&u.delete(v)}function C(S){const v=S.target;v.removeEventListener("dispose",C),w(v)}function A(S){const v=i.get(S);if(v.__webglInit===void 0)return;const B=S.source,Y=d.get(B);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(S),Object.keys(Y).length===0&&d.delete(B)}i.remove(S)}function O(S){const v=i.get(S);e.deleteTexture(v.__webglTexture);const B=S.source,Y=d.get(B);delete Y[v.__cacheKey],o.memory.textures--}function w(S){const v=i.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)e.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else e.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)e.deleteFramebuffer(v.__webglFramebuffer[Y]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=S.textures;for(let Y=0,Z=B.length;Y<Z;Y++){const J=i.get(B[Y]);J.__webglTexture&&(e.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[Y])}i.remove(S)}let y=0;function R(){y=0}function X(){const S=y;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),y+=1,S}function z(S){const v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function j(S,v){const B=i.get(S);if(S.isVideoTexture&&Vt(S),S.isRenderTargetTexture===!1&&S.version>0&&B.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,S,v);return}}n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+v)}function K(S,v){const B=i.get(S);if(S.version>0&&B.__version!==S.version){te(B,S,v);return}n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+v)}function G(S,v){const B=i.get(S);if(S.version>0&&B.__version!==S.version){te(B,S,v);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+v)}function Q(S,v){const B=i.get(S);if(S.version>0&&B.__version!==S.version){q(B,S,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+v)}const W={[Nu]:e.REPEAT,[Jr]:e.CLAMP_TO_EDGE,[Ou]:e.MIRRORED_REPEAT},ct={[$n]:e.NEAREST,[C1]:e.NEAREST_MIPMAP_NEAREST,[Da]:e.NEAREST_MIPMAP_LINEAR,[ci]:e.LINEAR,[Cc]:e.LINEAR_MIPMAP_NEAREST,[Qr]:e.LINEAR_MIPMAP_LINEAR},ht={[G1]:e.NEVER,[Y1]:e.ALWAYS,[W1]:e.LESS,[Eg]:e.LEQUAL,[X1]:e.EQUAL,[K1]:e.GEQUAL,[j1]:e.GREATER,[q1]:e.NOTEQUAL};function mt(S,v){if(v.type===vr&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===ci||v.magFilter===Cc||v.magFilter===Da||v.magFilter===Qr||v.minFilter===ci||v.minFilter===Cc||v.minFilter===Da||v.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,W[v.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,W[v.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,W[v.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,ct[v.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,ct[v.minFilter]),v.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,ht[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$n||v.minFilter!==Da&&v.minFilter!==Qr||v.type===vr&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(S,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Wt(S,v){let B=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",k));const Y=v.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const J=z(v);if(J!==S.__cacheKey){Z[J]===void 0&&(Z[J]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[J].usedTimes++;const yt=Z[S.__cacheKey];yt!==void 0&&(Z[S.__cacheKey].usedTimes--,yt.usedTimes===0&&O(v)),S.__cacheKey=J,S.__webglTexture=Z[J].texture}return B}function te(S,v,B){let Y=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=e.TEXTURE_3D);const Z=Wt(S,v),J=v.source;n.bindTexture(Y,S.__webglTexture,e.TEXTURE0+B);const yt=i.get(J);if(J.version!==yt.__version||Z===!0){n.activeTexture(e.TEXTURE0+B);const rt=le.getPrimaries(le.workingColorSpace),it=v.colorSpace===mr?null:le.getPrimaries(v.colorSpace),It=v.colorSpace===mr||rt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let et=b(v.image,!1,r.maxTextureSize);et=Dt(v,et);const gt=s.convert(v.format,v.colorSpace),Ht=s.convert(v.type);let At=M(v.internalFormat,gt,Ht,v.colorSpace,v.isVideoTexture);mt(Y,v);let at;const Ut=v.mipmaps,Nt=v.isVideoTexture!==!0,Se=yt.__version===void 0||Z===!0,g=J.dataReady,V=T(v,et);if(v.isDepthTexture)At=E(v.format===ro,v.type),Se&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,At,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,At,et.width,et.height,0,gt,Ht,null));else if(v.isDataTexture)if(Ut.length>0){Nt&&Se&&n.texStorage2D(e.TEXTURE_2D,V,At,Ut[0].width,Ut[0].height);for(let U=0,H=Ut.length;U<H;U++)at=Ut[U],Nt?g&&n.texSubImage2D(e.TEXTURE_2D,U,0,0,at.width,at.height,gt,Ht,at.data):n.texImage2D(e.TEXTURE_2D,U,At,at.width,at.height,0,gt,Ht,at.data);v.generateMipmaps=!1}else Nt?(Se&&n.texStorage2D(e.TEXTURE_2D,V,At,et.width,et.height),g&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,et.width,et.height,gt,Ht,et.data)):n.texImage2D(e.TEXTURE_2D,0,At,et.width,et.height,0,gt,Ht,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&Se&&n.texStorage3D(e.TEXTURE_2D_ARRAY,V,At,Ut[0].width,Ut[0].height,et.depth);for(let U=0,H=Ut.length;U<H;U++)if(at=Ut[U],v.format!==yi)if(gt!==null)if(Nt){if(g)if(v.layerUpdates.size>0){for(const $ of v.layerUpdates){const Et=at.width*at.height;n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,U,0,0,$,at.width,at.height,1,gt,at.data.slice(Et*$,Et*($+1)),0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,U,0,0,0,at.width,at.height,et.depth,gt,at.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,U,At,at.width,at.height,et.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?g&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,U,0,0,0,at.width,at.height,et.depth,gt,Ht,at.data):n.texImage3D(e.TEXTURE_2D_ARRAY,U,At,at.width,at.height,et.depth,0,gt,Ht,at.data)}else{Nt&&Se&&n.texStorage2D(e.TEXTURE_2D,V,At,Ut[0].width,Ut[0].height);for(let U=0,H=Ut.length;U<H;U++)at=Ut[U],v.format!==yi?gt!==null?Nt?g&&n.compressedTexSubImage2D(e.TEXTURE_2D,U,0,0,at.width,at.height,gt,at.data):n.compressedTexImage2D(e.TEXTURE_2D,U,At,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?g&&n.texSubImage2D(e.TEXTURE_2D,U,0,0,at.width,at.height,gt,Ht,at.data):n.texImage2D(e.TEXTURE_2D,U,At,at.width,at.height,0,gt,Ht,at.data)}else if(v.isDataArrayTexture)if(Nt){if(Se&&n.texStorage3D(e.TEXTURE_2D_ARRAY,V,At,et.width,et.height,et.depth),g)if(v.layerUpdates.size>0){let U;switch(Ht){case e.UNSIGNED_BYTE:switch(gt){case e.ALPHA:U=1;break;case e.LUMINANCE:U=1;break;case e.LUMINANCE_ALPHA:U=2;break;case e.RGB:U=3;break;case e.RGBA:U=4;break;default:throw new Error(`Unknown texel size for format ${gt}.`)}break;case e.UNSIGNED_SHORT_4_4_4_4:case e.UNSIGNED_SHORT_5_5_5_1:case e.UNSIGNED_SHORT_5_6_5:U=1;break;default:throw new Error(`Unknown texel size for type ${Ht}.`)}const H=et.width*et.height*U;for(const $ of v.layerUpdates)n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,et.width,et.height,1,gt,Ht,et.data.slice(H*$,H*($+1)));v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Ht,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,At,et.width,et.height,et.depth,0,gt,Ht,et.data);else if(v.isData3DTexture)Nt?(Se&&n.texStorage3D(e.TEXTURE_3D,V,At,et.width,et.height,et.depth),g&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Ht,et.data)):n.texImage3D(e.TEXTURE_3D,0,At,et.width,et.height,et.depth,0,gt,Ht,et.data);else if(v.isFramebufferTexture){if(Se)if(Nt)n.texStorage2D(e.TEXTURE_2D,V,At,et.width,et.height);else{let U=et.width,H=et.height;for(let $=0;$<V;$++)n.texImage2D(e.TEXTURE_2D,$,At,U,H,0,gt,Ht,null),U>>=1,H>>=1}}else if(Ut.length>0){if(Nt&&Se){const U=ye(Ut[0]);n.texStorage2D(e.TEXTURE_2D,V,At,U.width,U.height)}for(let U=0,H=Ut.length;U<H;U++)at=Ut[U],Nt?g&&n.texSubImage2D(e.TEXTURE_2D,U,0,0,gt,Ht,at):n.texImage2D(e.TEXTURE_2D,U,At,gt,Ht,at);v.generateMipmaps=!1}else if(Nt){if(Se){const U=ye(et);n.texStorage2D(e.TEXTURE_2D,V,At,U.width,U.height)}g&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,gt,Ht,et)}else n.texImage2D(e.TEXTURE_2D,0,At,gt,Ht,et);f(v)&&p(Y),yt.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function q(S,v,B){if(v.image.length!==6)return;const Y=Wt(S,v),Z=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+B);const J=i.get(Z);if(Z.version!==J.__version||Y===!0){n.activeTexture(e.TEXTURE0+B);const yt=le.getPrimaries(le.workingColorSpace),rt=v.colorSpace===mr?null:le.getPrimaries(v.colorSpace),it=v.colorSpace===mr||yt===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const It=v.isCompressedTexture||v.image[0].isCompressedTexture,et=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let H=0;H<6;H++)!It&&!et?gt[H]=b(v.image[H],!0,r.maxCubemapSize):gt[H]=et?v.image[H].image:v.image[H],gt[H]=Dt(v,gt[H]);const Ht=gt[0],At=s.convert(v.format,v.colorSpace),at=s.convert(v.type),Ut=M(v.internalFormat,At,at,v.colorSpace),Nt=v.isVideoTexture!==!0,Se=J.__version===void 0||Y===!0,g=Z.dataReady;let V=T(v,Ht);mt(e.TEXTURE_CUBE_MAP,v);let U;if(It){Nt&&Se&&n.texStorage2D(e.TEXTURE_CUBE_MAP,V,Ut,Ht.width,Ht.height);for(let H=0;H<6;H++){U=gt[H].mipmaps;for(let $=0;$<U.length;$++){const Et=U[$];v.format!==yi?At!==null?Nt?g&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,0,0,Et.width,Et.height,At,Et.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,Ut,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?g&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,0,0,Et.width,Et.height,At,at,Et.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$,Ut,Et.width,Et.height,0,At,at,Et.data)}}}else{if(U=v.mipmaps,Nt&&Se){U.length>0&&V++;const H=ye(gt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,V,Ut,H.width,H.height)}for(let H=0;H<6;H++)if(et){Nt?g&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,gt[H].width,gt[H].height,At,at,gt[H].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ut,gt[H].width,gt[H].height,0,At,at,gt[H].data);for(let $=0;$<U.length;$++){const Rt=U[$].image[H].image;Nt?g&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,0,0,Rt.width,Rt.height,At,at,Rt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,Ut,Rt.width,Rt.height,0,At,at,Rt.data)}}else{Nt?g&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,At,at,gt[H]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ut,At,at,gt[H]);for(let $=0;$<U.length;$++){const Et=U[$];Nt?g&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,0,0,At,at,Et.image[H]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+H,$+1,Ut,At,at,Et.image[H])}}}f(v)&&p(e.TEXTURE_CUBE_MAP),J.__version=Z.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function tt(S,v,B,Y,Z,J){const yt=s.convert(B.format,B.colorSpace),rt=s.convert(B.type),it=M(B.internalFormat,yt,rt,B.colorSpace);if(!i.get(v).__hasExternalTextures){const et=Math.max(1,v.width>>J),gt=Math.max(1,v.height>>J);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,J,it,et,gt,v.depth,0,yt,rt,null):n.texImage2D(Z,J,it,et,gt,0,yt,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,S),Kt(v)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Y,Z,i.get(B).__webglTexture,0,Mt(v)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Y,Z,i.get(B).__webglTexture,J),n.bindFramebuffer(e.FRAMEBUFFER,null)}function dt(S,v,B){if(e.bindRenderbuffer(e.RENDERBUFFER,S),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,J=E(v.stencilBuffer,Z),yt=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=Mt(v);Kt(v)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,J,v.width,v.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,J,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,J,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,S)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const J=Y[Z],yt=s.convert(J.format,J.colorSpace),rt=s.convert(J.type),it=M(J.internalFormat,yt,rt,J.colorSpace),It=Mt(v);B&&Kt(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,It,it,v.width,v.height):Kt(v)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,It,it,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,it,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ot(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Y=i.get(v.depthTexture).__webglTexture,Z=Mt(v);if(v.depthTexture.format===Xs)Kt(v)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(v.depthTexture.format===ro)Kt(v)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,Z):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Bt(S){const v=i.get(S),B=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ot(v.__webglFramebuffer,S)}else if(B){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]=e.createRenderbuffer(),dt(v.__webglDepthbuffer[Y],S,!1)}else n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=e.createRenderbuffer(),dt(v.__webglDepthbuffer,S,!1);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Lt(S,v,B){const Y=i.get(S);v!==void 0&&tt(Y.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&Bt(S)}function Xt(S){const v=S.texture,B=i.get(S),Y=i.get(v);S.addEventListener("dispose",C);const Z=S.textures,J=S.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(Y.__webglTexture===void 0&&(Y.__webglTexture=e.createTexture()),Y.__version=v.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[rt]=[];for(let it=0;it<v.mipmaps.length;it++)B.__webglFramebuffer[rt][it]=e.createFramebuffer()}else B.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)B.__webglFramebuffer[rt]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(yt)for(let rt=0,it=Z.length;rt<it;rt++){const It=i.get(Z[rt]);It.__webglTexture===void 0&&(It.__webglTexture=e.createTexture(),o.memory.textures++)}if(S.samples>0&&Kt(S)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let rt=0;rt<Z.length;rt++){const it=Z[rt];B.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[rt]);const It=s.convert(it.format,it.colorSpace),et=s.convert(it.type),gt=M(it.internalFormat,It,et,it.colorSpace,S.isXRRenderTarget===!0),Ht=Mt(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ht,gt,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,B.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),dt(B.__webglDepthRenderbuffer,S,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),mt(e.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let it=0;it<v.mipmaps.length;it++)tt(B.__webglFramebuffer[rt][it],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,it);else tt(B.__webglFramebuffer[rt],S,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);f(v)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(yt){for(let rt=0,it=Z.length;rt<it;rt++){const It=Z[rt],et=i.get(It);n.bindTexture(e.TEXTURE_2D,et.__webglTexture),mt(e.TEXTURE_2D,It),tt(B.__webglFramebuffer,S,It,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,0),f(It)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(rt=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,Y.__webglTexture),mt(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let it=0;it<v.mipmaps.length;it++)tt(B.__webglFramebuffer[it],S,v,e.COLOR_ATTACHMENT0,rt,it);else tt(B.__webglFramebuffer,S,v,e.COLOR_ATTACHMENT0,rt,0);f(v)&&p(rt),n.unbindTexture()}S.depthBuffer&&Bt(S)}function P(S){const v=S.textures;for(let B=0,Y=v.length;B<Y;B++){const Z=v[B];if(f(Z)){const J=S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,yt=i.get(Z).__webglTexture;n.bindTexture(J,yt),p(J),n.unbindTexture()}}}const jt=[],Gt=[];function he(S){if(S.samples>0){if(Kt(S)===!1){const v=S.textures,B=S.width,Y=S.height;let Z=e.COLOR_BUFFER_BIT;const J=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=i.get(S),rt=v.length>1;if(rt)for(let it=0;it<v.length;it++)n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let it=0;it<v.length;it++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,yt.__webglColorRenderbuffer[it]);const It=i.get(v[it]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,It,0)}e.blitFramebuffer(0,0,B,Y,0,0,B,Y,Z,e.NEAREST),l===!0&&(jt.length=0,Gt.length=0,jt.push(e.COLOR_ATTACHMENT0+it),S.depthBuffer&&S.resolveDepthBuffer===!1&&(jt.push(J),Gt.push(J),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Gt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let it=0;it<v.length;it++){n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,yt.__webglColorRenderbuffer[it]);const It=i.get(v[it]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.TEXTURE_2D,It,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const v=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Mt(S){return Math.min(r.maxSamples,S.samples)}function Kt(S){const v=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Vt(S){const v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function Dt(S,v){const B=S.colorSpace,Y=S.format,Z=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||B!==Dr&&B!==mr&&(le.getTransfer(B)===me?(Y!==yi||Z!==Tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function ye(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=R,this.setTexture2D=j,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Kt}function ZE(e,t){function n(i,r=mr){let s;const o=le.getTransfer(r);if(i===Tr)return e.UNSIGNED_BYTE;if(i===_g)return e.UNSIGNED_SHORT_4_4_4_4;if(i===vg)return e.UNSIGNED_SHORT_5_5_5_1;if(i===L1)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===P1)return e.BYTE;if(i===R1)return e.SHORT;if(i===El)return e.UNSIGNED_SHORT;if(i===gg)return e.INT;if(i===no)return e.UNSIGNED_INT;if(i===vr)return e.FLOAT;if(i===Wl)return e.HALF_FLOAT;if(i===D1)return e.ALPHA;if(i===I1)return e.RGB;if(i===yi)return e.RGBA;if(i===U1)return e.LUMINANCE;if(i===N1)return e.LUMINANCE_ALPHA;if(i===Xs)return e.DEPTH_COMPONENT;if(i===ro)return e.DEPTH_STENCIL;if(i===O1)return e.RED;if(i===bg)return e.RED_INTEGER;if(i===F1)return e.RG;if(i===xg)return e.RG_INTEGER;if(i===yg)return e.RGBA_INTEGER;if(i===Pc||i===Rc||i===Lc||i===Dc)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Dc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===np||i===ip||i===rp||i===sp)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===np)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ip)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===op||i===ap||i===lp)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===op||i===ap)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cp||i===up||i===hp||i===dp||i===pp||i===fp||i===mp||i===gp||i===_p||i===vp||i===bp||i===xp||i===yp||i===Ep)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===up)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===dp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_p)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yp)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ep)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ic||i===wp||i===Sp)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ic)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===k1||i===Mp||i===Tp||i===Ap)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ap)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===io?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class JE extends qn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class tl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QE={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const b of t.hand.values()){const f=n.getJointPose(b,i),p=this._getHandJoint(c,b);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new tl;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new xn,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Ar({vertexShader:tw,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new ql(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class iw extends gs{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const b=new nw,f=n.getContextAttributes();let p=null,M=null;const E=[],T=[],k=new Ot;let C=null;const A=new qn;A.layers.enable(1),A.viewport=new tn;const O=new qn;O.layers.enable(2),O.viewport=new tn;const w=[A,O],y=new JE;y.layers.enable(1),y.layers.enable(2);let R=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=E[q];return tt===void 0&&(tt=new su,E[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=E[q];return tt===void 0&&(tt=new su,E[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=E[q];return tt===void 0&&(tt=new su,E[q]=tt),tt.getHandSpace()};function z(q){const tt=T.indexOf(q.inputSource);if(tt===-1)return;const dt=E[tt];dt!==void 0&&(dt.update(q.inputSource,q.frame,c||o),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function j(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",K);for(let q=0;q<E.length;q++){const tt=T[q];tt!==null&&(T[q]=null,E[q].disconnect(tt))}R=null,X=null,b.reset(),t.setRenderTarget(p),m=null,d=null,h=null,r=null,M=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",j),r.addEventListener("inputsourceschange",K),f.xrCompatible!==!0&&await n.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(k),r.renderState.layers===void 0){const tt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ls(m.framebufferWidth,m.framebufferHeight,{format:yi,type:Tr,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let tt=null,dt=null,ot=null;f.depth&&(ot=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=f.stencil?ro:Xs,dt=f.stencil?io:no);const Bt={colorFormat:n.RGBA8,depthFormat:ot,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Bt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ls(d.textureWidth,d.textureHeight,{format:yi,type:Tr,depthTexture:new Fg(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(q){for(let tt=0;tt<q.removed.length;tt++){const dt=q.removed[tt],ot=T.indexOf(dt);ot>=0&&(T[ot]=null,E[ot].disconnect(dt))}for(let tt=0;tt<q.added.length;tt++){const dt=q.added[tt];let ot=T.indexOf(dt);if(ot===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=T.length){T.push(dt),ot=Lt;break}else if(T[Lt]===null){T[Lt]=dt,ot=Lt;break}if(ot===-1)break}const Bt=E[ot];Bt&&Bt.connect(dt)}}const G=new I,Q=new I;function W(q,tt,dt){G.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(dt.matrixWorld);const ot=G.distanceTo(Q),Bt=tt.projectionMatrix.elements,Lt=dt.projectionMatrix.elements,Xt=Bt[14]/(Bt[10]-1),P=Bt[14]/(Bt[10]+1),jt=(Bt[9]+1)/Bt[5],Gt=(Bt[9]-1)/Bt[5],he=(Bt[8]-1)/Bt[0],Mt=(Lt[8]+1)/Lt[0],Kt=Xt*he,Vt=Xt*Mt,Dt=ot/(-he+Mt),ye=Dt*-he;tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(Dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const S=Xt+Dt,v=P+Dt,B=Kt-ye,Y=Vt+(ot-ye),Z=jt*P/v*S,J=Gt*P/v*S;q.projectionMatrix.makePerspective(B,Y,Z,J,S,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ct(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;b.texture!==null&&(q.near=b.depthNear,q.far=b.depthFar),y.near=O.near=A.near=q.near,y.far=O.far=A.far=q.far,(R!==y.near||X!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,X=y.far,A.near=R,A.far=X,O.near=R,O.far=X,A.updateProjectionMatrix(),O.updateProjectionMatrix(),q.updateProjectionMatrix());const tt=q.parent,dt=y.cameras;ct(y,tt);for(let ot=0;ot<dt.length;ot++)ct(dt[ot],tt);dt.length===2?W(y,A,O):y.projectionMatrix.copy(A.projectionMatrix),ht(q,y,tt)};function ht(q,tt,dt){dt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(y)};let mt=null;function Wt(q,tt){if(u=tt.getViewerPose(c||o),_=tt,u!==null){const dt=u.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let ot=!1;dt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let Lt=0;Lt<dt.length;Lt++){const Xt=dt[Lt];let P=null;if(m!==null)P=m.getViewport(Xt);else{const Gt=h.getViewSubImage(d,Xt);P=Gt.viewport,Lt===0&&(t.setRenderTargetTextures(M,Gt.colorTexture,d.ignoreDepthValues?void 0:Gt.depthStencilTexture),t.setRenderTarget(M))}let jt=w[Lt];jt===void 0&&(jt=new qn,jt.layers.enable(Lt),jt.viewport=new tn,w[Lt]=jt),jt.matrix.fromArray(Xt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Xt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(P.x,P.y,P.width,P.height),Lt===0&&(y.matrix.copy(jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(jt)}const Bt=r.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")){const Lt=h.getDepthInformation(dt[0]);Lt&&Lt.isValid&&Lt.texture&&b.init(t,Lt,r.renderState)}}for(let dt=0;dt<E.length;dt++){const ot=T[dt],Bt=E[dt];ot!==null&&Bt!==void 0&&Bt.update(ot,tt,c||o)}mt&&mt(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const te=new Og;te.setAnimationLoop(Wt),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}}const Wr=new Ki,rw=new ze;function sw(e,t){function n(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,Dg(e)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,M,E,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),h(f,p)):p.isMeshPhongMaterial?(s(f,p),u(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),_(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),b(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,M,E):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,n(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===bn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,n(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===bn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,n(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,n(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const M=t.get(p),E=M.envMap,T=M.envMapRotation;E&&(f.envMap.value=E,Wr.copy(T),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),f.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(Wr)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,M,E){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*M,f.scale.value=E*.5,p.map&&(f.map.value=p.map,n(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,M){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function b(f,p){const M=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ow(e,t,n,i){let r={},s={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const T=E.program;i.uniformBlockBinding(M,T)}function c(M,E){let T=r[M.id];T===void 0&&(_(M),T=u(M),r[M.id]=T,M.addEventListener("dispose",f));const k=E.program;i.updateUBOMapping(M,k);const C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){const E=h();M.__bindingPointIndex=E;const T=e.createBuffer(),k=M.__size,C=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,k,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=r[M.id],T=M.uniforms,k=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let C=0,A=T.length;C<A;C++){const O=Array.isArray(T[C])?T[C]:[T[C]];for(let w=0,y=O.length;w<y;w++){const R=O[w];if(m(R,C,w,k)===!0){const X=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let K=0;K<z.length;K++){const G=z[K],Q=b(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,X+j,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,j),j+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,X,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(M,E,T,k){const C=M.value,A=E+"_"+T;if(k[A]===void 0)return typeof C=="number"||typeof C=="boolean"?k[A]=C:k[A]=C.clone(),!0;{const O=k[A];if(typeof C=="number"||typeof C=="boolean"){if(O!==C)return k[A]=C,!0}else if(O.equals(C)===!1)return O.copy(C),!0}return!1}function _(M){const E=M.uniforms;let T=0;const k=16;for(let A=0,O=E.length;A<O;A++){const w=Array.isArray(E[A])?E[A]:[E[A]];for(let y=0,R=w.length;y<R;y++){const X=w[y],z=Array.isArray(X.value)?X.value:[X.value];for(let j=0,K=z.length;j<K;j++){const G=z[j],Q=b(G),W=T%k;W!==0&&k-W<Q.boundary&&(T+=k-W),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=T,T+=Q.storage}}}const C=T%k;return C>0&&(T+=k-C),M.__size=T,M.__cache={},this}function b(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function f(M){const E=M.target;E.removeEventListener("dispose",f);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const M in r)e.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class aw{constructor(t={}){const{canvas:n=J1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let b=null,f=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=yr,this.toneMappingExposure=1;const E=this;let T=!1,k=0,C=0,A=null,O=-1,w=null;const y=new tn,R=new tn;let X=null;const z=new re(0);let j=0,K=n.width,G=n.height,Q=1,W=null,ct=null;const ht=new tn(0,0,K,G),mt=new tn(0,0,K,G);let Wt=!1;const te=new Ng;let q=!1,tt=!1;const dt=new ze,ot=new I,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Xt(){return A===null?Q:1}let P=i;function jt(x,L){return n.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ph}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",H,!1),P===null){const L="webgl2";if(P=jt(L,x),P===null)throw jt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Gt,he,Mt,Kt,Vt,Dt,ye,S,v,B,Y,Z,J,yt,rt,it,It,et,gt,Ht,At,at,Ut,Nt;function Se(){Gt=new my(P),Gt.init(),at=new ZE(P,Gt),he=new ly(P,Gt,t,at),Mt=new YE(P),Kt=new vy(P),Vt=new NE,Dt=new $E(P,Gt,Mt,Vt,he,at,Kt),ye=new uy(E),S=new fy(E),v=new Sb(P),Ut=new oy(P,v),B=new gy(P,v,Kt,Ut),Y=new xy(P,B,v,Kt),gt=new by(P,he,Dt),it=new cy(Vt),Z=new UE(E,ye,S,Gt,he,Ut,it),J=new sw(E,Vt),yt=new FE,rt=new GE(Gt),et=new sy(E,ye,S,Mt,Y,d,l),It=new KE(E,Y,he),Nt=new ow(P,Kt,he,Mt),Ht=new ay(P,Gt,Kt),At=new _y(P,Gt,Kt),Kt.programs=Z.programs,E.capabilities=he,E.extensions=Gt,E.properties=Vt,E.renderLists=yt,E.shadowMap=It,E.state=Mt,E.info=Kt}Se();const g=new iw(E,P);this.xr=g,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=Gt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Gt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(x){x!==void 0&&(Q=x,this.setSize(K,G,!1))},this.getSize=function(x){return x.set(K,G)},this.setSize=function(x,L,N=!0){if(g.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,G=L,n.width=Math.floor(x*Q),n.height=Math.floor(L*Q),N===!0&&(n.style.width=x+"px",n.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(K*Q,G*Q).floor()},this.setDrawingBufferSize=function(x,L,N){K=x,G=L,Q=N,n.width=Math.floor(x*N),n.height=Math.floor(L*N),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(ht)},this.setViewport=function(x,L,N,F){x.isVector4?ht.set(x.x,x.y,x.z,x.w):ht.set(x,L,N,F),Mt.viewport(y.copy(ht).multiplyScalar(Q).round())},this.getScissor=function(x){return x.copy(mt)},this.setScissor=function(x,L,N,F){x.isVector4?mt.set(x.x,x.y,x.z,x.w):mt.set(x,L,N,F),Mt.scissor(R.copy(mt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(x){Mt.setScissorTest(Wt=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){ct=x},this.getClearColor=function(x){return x.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(x=!0,L=!0,N=!0){let F=0;if(x){let D=!1;if(A!==null){const nt=A.texture.format;D=nt===yg||nt===xg||nt===bg}if(D){const nt=A.texture.type,lt=nt===Tr||nt===no||nt===El||nt===io||nt===_g||nt===vg,pt=et.getClearColor(),vt=et.getClearAlpha(),Ct=pt.r,Pt=pt.g,Tt=pt.b;lt?(m[0]=Ct,m[1]=Pt,m[2]=Tt,m[3]=vt,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Ct,_[1]=Pt,_[2]=Tt,_[3]=vt,P.clearBufferiv(P.COLOR,0,_))}else F|=P.COLOR_BUFFER_BIT}L&&(F|=P.DEPTH_BUFFER_BIT),N&&(F|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",H,!1),yt.dispose(),rt.dispose(),Vt.dispose(),ye.dispose(),S.dispose(),Y.dispose(),Ut.dispose(),Nt.dispose(),Z.dispose(),g.dispose(),g.removeEventListener("sessionstart",Ne),g.removeEventListener("sessionend",Oe),Tn.stop()};function V(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=Kt.autoReset,L=It.enabled,N=It.autoUpdate,F=It.needsUpdate,D=It.type;Se(),Kt.autoReset=x,It.enabled=L,It.autoUpdate=N,It.needsUpdate=F,It.type=D}function H(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function $(x){const L=x.target;L.removeEventListener("dispose",$),Et(L)}function Et(x){Rt(x),Vt.remove(x)}function Rt(x){const L=Vt.get(x).programs;L!==void 0&&(L.forEach(function(N){Z.releaseProgram(N)}),x.isShaderMaterial&&Z.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,N,F,D,nt){L===null&&(L=Bt);const lt=D.isMesh&&D.matrixWorld.determinant()<0,pt=z0(x,L,N,F,D);Mt.setMaterial(F,lt);let vt=N.index,Ct=1;if(F.wireframe===!0){if(vt=B.getWireframeAttribute(N),vt===void 0)return;Ct=2}const Pt=N.drawRange,Tt=N.attributes.position;let ne=Pt.start*Ct,Te=(Pt.start+Pt.count)*Ct;nt!==null&&(ne=Math.max(ne,nt.start*Ct),Te=Math.min(Te,(nt.start+nt.count)*Ct)),vt!==null?(ne=Math.max(ne,0),Te=Math.min(Te,vt.count)):Tt!=null&&(ne=Math.max(ne,0),Te=Math.min(Te,Tt.count));const Ae=Te-ne;if(Ae<0||Ae===1/0)return;Ut.setup(D,F,pt,N,vt);let Cn,oe=Ht;if(vt!==null&&(Cn=v.get(vt),oe=At,oe.setIndex(Cn)),D.isMesh)F.wireframe===!0?(Mt.setLineWidth(F.wireframeLinewidth*Xt()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(D.isLine){let St=F.linewidth;St===void 0&&(St=1),Mt.setLineWidth(St*Xt()),D.isLineSegments?oe.setMode(P.LINES):D.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else D.isPoints?oe.setMode(P.POINTS):D.isSprite&&oe.setMode(P.TRIANGLES);if(D.isBatchedMesh)D._multiDrawInstances!==null?oe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances):oe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)oe.renderInstances(ne,Ae,D.count);else if(N.isInstancedBufferGeometry){const St=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,sn=Math.min(N.instanceCount,St);oe.renderInstances(ne,Ae,sn)}else oe.render(ne,Ae)};function Me(x,L,N){x.transparent===!0&&x.side===Bi&&x.forceSinglePass===!1?(x.side=bn,x.needsUpdate=!0,Ra(x,L,N),x.side=Mr,x.needsUpdate=!0,Ra(x,L,N),x.side=Bi):Ra(x,L,N)}this.compile=function(x,L,N=null){N===null&&(N=x),f=rt.get(N),f.init(L),M.push(f),N.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==N&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const F=new Set;return x.traverse(function(D){const nt=D.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const pt=nt[lt];Me(pt,N,D),F.add(pt)}else Me(nt,N,D),F.add(nt)}),M.pop(),f=null,F},this.compileAsync=function(x,L,N=null){const F=this.compile(x,L,N);return new Promise(D=>{function nt(){if(F.forEach(function(lt){Vt.get(lt).currentProgram.isReady()&&F.delete(lt)}),F.size===0){D(x);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ue=null;function ee(x){Ue&&Ue(x)}function Ne(){Tn.stop()}function Oe(){Tn.start()}const Tn=new Og;Tn.setAnimationLoop(ee),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(x){Ue=x,g.setAnimationLoop(x),x===null?Tn.stop():Tn.start()},g.addEventListener("sessionstart",Ne),g.addEventListener("sessionend",Oe),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),g.enabled===!0&&g.isPresenting===!0&&(g.cameraAutoUpdate===!0&&g.updateCamera(L),L=g.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,L,A),f=rt.get(x,M.length),f.init(L),M.push(f),dt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),te.setFromProjectionMatrix(dt),tt=this.localClippingEnabled,q=it.init(this.clippingPlanes,tt),b=yt.get(x,p.length),b.init(),p.push(b),g.enabled===!0&&g.isPresenting===!0){const nt=E.xr.getDepthSensingMesh();nt!==null&&An(nt,L,-1/0,E.sortObjects)}An(x,L,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(W,ct),Lt=g.enabled===!1||g.isPresenting===!1||g.hasDepthSensing()===!1,Lt&&et.addToRenderList(b,x),this.info.render.frame++,q===!0&&it.beginShadows();const N=f.state.shadowsArray;It.render(N,x,L),q===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=b.opaque,D=b.transmissive;if(f.setupLights(),L.isArrayCamera){const nt=L.cameras;if(D.length>0)for(let lt=0,pt=nt.length;lt<pt;lt++){const vt=nt[lt];Or(F,D,x,vt)}Lt&&et.render(x);for(let lt=0,pt=nt.length;lt<pt;lt++){const vt=nt[lt];nr(b,x,vt,vt.viewport)}}else D.length>0&&Or(F,D,x,L),Lt&&et.render(x),nr(b,x,L);A!==null&&(Dt.updateMultisampleRenderTarget(A),Dt.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(E,x,L),Ut.resetDefaultState(),O=-1,w=null,M.pop(),M.length>0?(f=M[M.length-1],q===!0&&it.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function An(x,L,N,F){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)N=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||te.intersectsSprite(x)){F&&ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(dt);const lt=Y.update(x),pt=x.material;pt.visible&&b.push(x,lt,pt,N,ot.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||te.intersectsObject(x))){const lt=Y.update(x),pt=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ot.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),ot.copy(lt.boundingSphere.center)),ot.applyMatrix4(x.matrixWorld).applyMatrix4(dt)),Array.isArray(pt)){const vt=lt.groups;for(let Ct=0,Pt=vt.length;Ct<Pt;Ct++){const Tt=vt[Ct],ne=pt[Tt.materialIndex];ne&&ne.visible&&b.push(x,lt,ne,N,ot.z,Tt)}}else pt.visible&&b.push(x,lt,pt,N,ot.z,null)}}const nt=x.children;for(let lt=0,pt=nt.length;lt<pt;lt++)An(nt[lt],L,N,F)}function nr(x,L,N,F){const D=x.opaque,nt=x.transmissive,lt=x.transparent;f.setupLightsView(N),q===!0&&it.setGlobalState(E.clippingPlanes,N),F&&Mt.viewport(y.copy(F)),D.length>0&&Fr(D,L,N),nt.length>0&&Fr(nt,L,N),lt.length>0&&Fr(lt,L,N),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Or(x,L,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[F.id]===void 0&&(f.state.transmissionRenderTarget[F.id]=new ls(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Wl:Tr,minFilter:Qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const nt=f.state.transmissionRenderTarget[F.id],lt=F.viewport||y;nt.setSize(lt.z,lt.w);const pt=E.getRenderTarget();E.setRenderTarget(nt),E.getClearColor(z),j=E.getClearAlpha(),j<1&&E.setClearColor(16777215,.5),Lt?et.render(N):E.clear();const vt=E.toneMapping;E.toneMapping=yr;const Ct=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),f.setupLightsView(F),q===!0&&it.setGlobalState(E.clippingPlanes,F),Fr(x,N,F),Dt.updateMultisampleRenderTarget(nt),Dt.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Tt=0,ne=L.length;Tt<ne;Tt++){const Te=L[Tt],Ae=Te.object,Cn=Te.geometry,oe=Te.material,St=Te.group;if(oe.side===Bi&&Ae.layers.test(F.layers)){const sn=oe.side;oe.side=bn,oe.needsUpdate=!0,Kd(Ae,N,F,Cn,oe,St),oe.side=sn,oe.needsUpdate=!0,Pt=!0}}Pt===!0&&(Dt.updateMultisampleRenderTarget(nt),Dt.updateRenderTargetMipmap(nt))}E.setRenderTarget(pt),E.setClearColor(z,j),Ct!==void 0&&(F.viewport=Ct),E.toneMapping=vt}function Fr(x,L,N){const F=L.isScene===!0?L.overrideMaterial:null;for(let D=0,nt=x.length;D<nt;D++){const lt=x[D],pt=lt.object,vt=lt.geometry,Ct=F===null?lt.material:F,Pt=lt.group;pt.layers.test(N.layers)&&Kd(pt,L,N,vt,Ct,Pt)}}function Kd(x,L,N,F,D,nt){x.onBeforeRender(E,L,N,F,D,nt),x.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(E,L,N,F,x,nt),D.transparent===!0&&D.side===Bi&&D.forceSinglePass===!1?(D.side=bn,D.needsUpdate=!0,E.renderBufferDirect(N,L,F,D,x,nt),D.side=Mr,D.needsUpdate=!0,E.renderBufferDirect(N,L,F,D,x,nt),D.side=Bi):E.renderBufferDirect(N,L,F,D,x,nt),x.onAfterRender(E,L,N,F,D,nt)}function Ra(x,L,N){L.isScene!==!0&&(L=Bt);const F=Vt.get(x),D=f.state.lights,nt=f.state.shadowsArray,lt=D.state.version,pt=Z.getParameters(x,D.state,nt,L,N),vt=Z.getProgramCacheKey(pt);let Ct=F.programs;F.environment=x.isMeshStandardMaterial?L.environment:null,F.fog=L.fog,F.envMap=(x.isMeshStandardMaterial?S:ye).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Ct===void 0&&(x.addEventListener("dispose",$),Ct=new Map,F.programs=Ct);let Pt=Ct.get(vt);if(Pt!==void 0){if(F.currentProgram===Pt&&F.lightsStateVersion===lt)return $d(x,pt),Pt}else pt.uniforms=Z.getUniforms(x),x.onBuild(N,pt,E),x.onBeforeCompile(pt,E),Pt=Z.acquireProgram(pt,vt),Ct.set(vt,Pt),F.uniforms=pt.uniforms;const Tt=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Tt.clippingPlanes=it.uniform),$d(x,pt),F.needsLights=G0(x),F.lightsStateVersion=lt,F.needsLights&&(Tt.ambientLightColor.value=D.state.ambient,Tt.lightProbe.value=D.state.probe,Tt.directionalLights.value=D.state.directional,Tt.directionalLightShadows.value=D.state.directionalShadow,Tt.spotLights.value=D.state.spot,Tt.spotLightShadows.value=D.state.spotShadow,Tt.rectAreaLights.value=D.state.rectArea,Tt.ltc_1.value=D.state.rectAreaLTC1,Tt.ltc_2.value=D.state.rectAreaLTC2,Tt.pointLights.value=D.state.point,Tt.pointLightShadows.value=D.state.pointShadow,Tt.hemisphereLights.value=D.state.hemi,Tt.directionalShadowMap.value=D.state.directionalShadowMap,Tt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Tt.spotShadowMap.value=D.state.spotShadowMap,Tt.spotLightMatrix.value=D.state.spotLightMatrix,Tt.spotLightMap.value=D.state.spotLightMap,Tt.pointShadowMap.value=D.state.pointShadowMap,Tt.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Pt,F.uniformsList=null,Pt}function Yd(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=hl.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function $d(x,L){const N=Vt.get(x);N.outputColorSpace=L.outputColorSpace,N.batching=L.batching,N.batchingColor=L.batchingColor,N.instancing=L.instancing,N.instancingColor=L.instancingColor,N.instancingMorph=L.instancingMorph,N.skinning=L.skinning,N.morphTargets=L.morphTargets,N.morphNormals=L.morphNormals,N.morphColors=L.morphColors,N.morphTargetsCount=L.morphTargetsCount,N.numClippingPlanes=L.numClippingPlanes,N.numIntersection=L.numClipIntersection,N.vertexAlphas=L.vertexAlphas,N.vertexTangents=L.vertexTangents,N.toneMapping=L.toneMapping}function z0(x,L,N,F,D){L.isScene!==!0&&(L=Bt),Dt.resetTextureUnits();const nt=L.fog,lt=F.isMeshStandardMaterial?L.environment:null,pt=A===null?E.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Dr,vt=(F.isMeshStandardMaterial?S:ye).get(F.envMap||lt),Ct=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pt=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Tt=!!N.morphAttributes.position,ne=!!N.morphAttributes.normal,Te=!!N.morphAttributes.color;let Ae=yr;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=E.toneMapping);const Cn=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,oe=Cn!==void 0?Cn.length:0,St=Vt.get(F),sn=f.state.lights;if(q===!0&&(tt===!0||x!==w)){const zn=x===w&&F.id===O;it.setState(F,x,zn)}let ce=!1;F.version===St.__version?(St.needsLights&&St.lightsStateVersion!==sn.state.version||St.outputColorSpace!==pt||D.isBatchedMesh&&St.batching===!1||!D.isBatchedMesh&&St.batching===!0||D.isBatchedMesh&&St.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&St.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&St.instancing===!1||!D.isInstancedMesh&&St.instancing===!0||D.isSkinnedMesh&&St.skinning===!1||!D.isSkinnedMesh&&St.skinning===!0||D.isInstancedMesh&&St.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&St.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&St.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&St.instancingMorph===!1&&D.morphTexture!==null||St.envMap!==vt||F.fog===!0&&St.fog!==nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==it.numPlanes||St.numIntersection!==it.numIntersection)||St.vertexAlphas!==Ct||St.vertexTangents!==Pt||St.morphTargets!==Tt||St.morphNormals!==ne||St.morphColors!==Te||St.toneMapping!==Ae||St.morphTargetsCount!==oe)&&(ce=!0):(ce=!0,St.__version=F.version);let Pi=St.currentProgram;ce===!0&&(Pi=Ra(F,L,D));let La=!1,kr=!1,Mc=!1;const Ye=Pi.getUniforms(),ir=St.uniforms;if(Mt.useProgram(Pi.program)&&(La=!0,kr=!0,Mc=!0),F.id!==O&&(O=F.id,kr=!0),La||w!==x){Ye.setValue(P,"projectionMatrix",x.projectionMatrix),Ye.setValue(P,"viewMatrix",x.matrixWorldInverse);const zn=Ye.map.cameraPosition;zn!==void 0&&zn.setValue(P,ot.setFromMatrixPosition(x.matrixWorld)),he.logarithmicDepthBuffer&&Ye.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ye.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),w!==x&&(w=x,kr=!0,Mc=!0)}if(D.isSkinnedMesh){Ye.setOptional(P,D,"bindMatrix"),Ye.setOptional(P,D,"bindMatrixInverse");const zn=D.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ye.setValue(P,"boneTexture",zn.boneTexture,Dt))}D.isBatchedMesh&&(Ye.setOptional(P,D,"batchingTexture"),Ye.setValue(P,"batchingTexture",D._matricesTexture,Dt),Ye.setOptional(P,D,"batchingColorTexture"),D._colorsTexture!==null&&Ye.setValue(P,"batchingColorTexture",D._colorsTexture,Dt));const Tc=N.morphAttributes;if((Tc.position!==void 0||Tc.normal!==void 0||Tc.color!==void 0)&&gt.update(D,N,Pi),(kr||St.receiveShadow!==D.receiveShadow)&&(St.receiveShadow=D.receiveShadow,Ye.setValue(P,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(ir.envMap.value=vt,ir.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&L.environment!==null&&(ir.envMapIntensity.value=L.environmentIntensity),kr&&(Ye.setValue(P,"toneMappingExposure",E.toneMappingExposure),St.needsLights&&H0(ir,Mc),nt&&F.fog===!0&&J.refreshFogUniforms(ir,nt),J.refreshMaterialUniforms(ir,F,Q,G,f.state.transmissionRenderTarget[x.id]),hl.upload(P,Yd(St),ir,Dt)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(hl.upload(P,Yd(St),ir,Dt),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ye.setValue(P,"center",D.center),Ye.setValue(P,"modelViewMatrix",D.modelViewMatrix),Ye.setValue(P,"normalMatrix",D.normalMatrix),Ye.setValue(P,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const zn=F.uniformsGroups;for(let Ac=0,W0=zn.length;Ac<W0;Ac++){const Zd=zn[Ac];Nt.update(Zd,Pi),Nt.bind(Zd,Pi)}}return Pi}function H0(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function G0(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,L,N){Vt.get(x.texture).__webglTexture=L,Vt.get(x.depthTexture).__webglTexture=N;const F=Vt.get(x);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const N=Vt.get(x);N.__webglFramebuffer=L,N.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,N=0){A=x,k=L,C=N;let F=!0,D=null,nt=!1,lt=!1;if(x){const vt=Vt.get(x);vt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(P.FRAMEBUFFER,null),F=!1):vt.__webglFramebuffer===void 0?Dt.setupRenderTarget(x):vt.__hasExternalTextures&&Dt.rebindTextures(x,Vt.get(x.texture).__webglTexture,Vt.get(x.depthTexture).__webglTexture);const Ct=x.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(lt=!0);const Pt=Vt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Pt[L])?D=Pt[L][N]:D=Pt[L],nt=!0):x.samples>0&&Dt.useMultisampledRTT(x)===!1?D=Vt.get(x).__webglMultisampledFramebuffer:Array.isArray(Pt)?D=Pt[N]:D=Pt,y.copy(x.viewport),R.copy(x.scissor),X=x.scissorTest}else y.copy(ht).multiplyScalar(Q).floor(),R.copy(mt).multiplyScalar(Q).floor(),X=Wt;if(Mt.bindFramebuffer(P.FRAMEBUFFER,D)&&F&&Mt.drawBuffers(x,D),Mt.viewport(y),Mt.scissor(R),Mt.setScissorTest(X),nt){const vt=Vt.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,vt.__webglTexture,N)}else if(lt){const vt=Vt.get(x.texture),Ct=L||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,N||0,Ct)}O=-1},this.readRenderTargetPixels=function(x,L,N,F,D,nt,lt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Mt.bindFramebuffer(P.FRAMEBUFFER,pt);try{const vt=x.texture,Ct=vt.format,Pt=vt.type;if(!he.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-F&&N>=0&&N<=x.height-D&&P.readPixels(L,N,F,D,at.convert(Ct),at.convert(Pt),nt)}finally{const vt=A!==null?Vt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(x,L,N,F,D,nt,lt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Vt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Mt.bindFramebuffer(P.FRAMEBUFFER,pt);try{const vt=x.texture,Ct=vt.format,Pt=vt.type;if(!he.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-F&&N>=0&&N<=x.height-D){const Tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(L,N,F,D,at.convert(Ct),at.convert(Pt),0),P.flush();const ne=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Q1(P,ne,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt)}finally{P.deleteBuffer(Tt),P.deleteSync(ne)}return nt}}finally{const vt=A!==null?Vt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(x,L=null,N=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const F=Math.pow(2,-N),D=Math.floor(x.image.width*F),nt=Math.floor(x.image.height*F),lt=L!==null?L.x:0,pt=L!==null?L.y:0;Dt.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,N,0,0,lt,pt,D,nt),Mt.unbindTexture()},this.copyTextureToTexture=function(x,L,N=null,F=null,D=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,N=null);let nt,lt,pt,vt,Ct,Pt;N!==null?(nt=N.max.x-N.min.x,lt=N.max.y-N.min.y,pt=N.min.x,vt=N.min.y):(nt=x.image.width,lt=x.image.height,pt=0,vt=0),F!==null?(Ct=F.x,Pt=F.y):(Ct=0,Pt=0);const Tt=at.convert(L.format),ne=at.convert(L.type);Dt.setTexture2D(L,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const Te=P.getParameter(P.UNPACK_ROW_LENGTH),Ae=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Cn=P.getParameter(P.UNPACK_SKIP_PIXELS),oe=P.getParameter(P.UNPACK_SKIP_ROWS),St=P.getParameter(P.UNPACK_SKIP_IMAGES),sn=x.isCompressedTexture?x.mipmaps[D]:x.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,sn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,sn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,D,Ct,Pt,nt,lt,Tt,ne,sn.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,D,Ct,Pt,sn.width,sn.height,Tt,sn.data):P.texSubImage2D(P.TEXTURE_2D,D,Ct,Pt,Tt,ne,sn),P.pixelStorei(P.UNPACK_ROW_LENGTH,Te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Cn),P.pixelStorei(P.UNPACK_SKIP_ROWS,oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,St),D===0&&L.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,N=null,F=null,D=0){x.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,F=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0);let nt,lt,pt,vt,Ct,Pt,Tt,ne,Te;const Ae=x.isCompressedTexture?x.mipmaps[D]:x.image;N!==null?(nt=N.max.x-N.min.x,lt=N.max.y-N.min.y,pt=N.max.z-N.min.z,vt=N.min.x,Ct=N.min.y,Pt=N.min.z):(nt=Ae.width,lt=Ae.height,pt=Ae.depth,vt=0,Ct=0,Pt=0),F!==null?(Tt=F.x,ne=F.y,Te=F.z):(Tt=0,ne=0,Te=0);const Cn=at.convert(L.format),oe=at.convert(L.type);let St;if(L.isData3DTexture)Dt.setTexture3D(L,0),St=P.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Dt.setTexture2DArray(L,0),St=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const sn=P.getParameter(P.UNPACK_ROW_LENGTH),ce=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pi=P.getParameter(P.UNPACK_SKIP_PIXELS),La=P.getParameter(P.UNPACK_SKIP_ROWS),kr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ct),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pt),x.isDataTexture||x.isData3DTexture?P.texSubImage3D(St,D,Tt,ne,Te,nt,lt,pt,Cn,oe,Ae.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(St,D,Tt,ne,Te,nt,lt,pt,Cn,Ae.data):P.texSubImage3D(St,D,Tt,ne,Te,nt,lt,pt,Cn,oe,Ae),P.pixelStorei(P.UNPACK_ROW_LENGTH,sn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,La),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kr),D===0&&L.generateMipmaps&&P.generateMipmap(St),Mt.unbindTexture()},this.initRenderTarget=function(x){Vt.get(x).__webglFramebuffer===void 0&&Dt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Dt.setTextureCube(x,0):x.isData3DTexture?Dt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Dt.setTexture2DArray(x,0):Dt.setTexture2D(x,0),Mt.unbindTexture()},this.resetState=function(){k=0,C=0,A=null,Mt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===fh?"display-p3":"srgb",n.unpackColorSpace=le.workingColorSpace===Xl?"display-p3":"srgb"}}class lw extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Gg extends da{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bf=new ze,Bu=new mh,el=new jl,nl=new I;class cw extends yn{constructor(t=new Qi,n=new Gg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(r),el.radius+=s,t.ray.intersectsSphere(el)===!1)return;bf.copy(r).invert(),Bu.copy(t.ray).applyMatrix4(bf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=d,b=m;_<b;_++){const f=c.getX(_);nl.fromBufferAttribute(h,f),xf(nl,f,l,r,t,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,b=m;_<b;_++)nl.fromBufferAttribute(h,_),xf(nl,_,l,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xf(e,t,n,i,r,s,o){const a=Bu.distanceSqToPoint(e);if(a<n){const l=new I;Bu.closestPointToPoint(e,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class yf{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(cn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ph);const Ef={type:"change"},ou={type:"start"},wf={type:"end"},il=new mh,Sf=new fr,uw=Math.cos(70*Z1.DEG2RAD);class hw extends gs{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(g){g.addEventListener("keydown",it),this._domElementKeyEvents=g},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",it),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ef),i.update(),s=r.NONE},this.update=function(){const g=new I,V=new cs().setFromUnitVectors(t.up,new I(0,1,0)),U=V.clone().invert(),H=new I,$=new cs,Et=new I,Rt=2*Math.PI;return function(Ue=null){const ee=i.object.position;g.copy(ee).sub(i.target),g.applyQuaternion(V),a.setFromVector3(g),i.autoRotate&&s===r.NONE&&X(y(Ue)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ne=i.minAzimuthAngle,Oe=i.maxAzimuthAngle;isFinite(Ne)&&isFinite(Oe)&&(Ne<-Math.PI?Ne+=Rt:Ne>Math.PI&&(Ne-=Rt),Oe<-Math.PI?Oe+=Rt:Oe>Math.PI&&(Oe-=Rt),Ne<=Oe?a.theta=Math.max(Ne,Math.min(Oe,a.theta)):a.theta=a.theta>(Ne+Oe)/2?Math.max(Ne,a.theta):Math.min(Oe,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Tn=!1;if(i.zoomToCursor&&C||i.object.isOrthographicCamera)a.radius=ht(a.radius);else{const An=a.radius;a.radius=ht(a.radius*c),Tn=An!=a.radius}if(g.setFromSpherical(a),g.applyQuaternion(U),ee.copy(i.target).add(g),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),i.zoomToCursor&&C){let An=null;if(i.object.isPerspectiveCamera){const nr=g.length();An=ht(nr*c);const Or=nr-An;i.object.position.addScaledVector(T,Or),i.object.updateMatrixWorld(),Tn=!!Or}else if(i.object.isOrthographicCamera){const nr=new I(k.x,k.y,0);nr.unproject(i.object);const Or=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Tn=Or!==i.object.zoom;const Fr=new I(k.x,k.y,0);Fr.unproject(i.object),i.object.position.sub(Fr).add(nr),i.object.updateMatrixWorld(),An=g.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;An!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(An).add(i.object.position):(il.origin.copy(i.object.position),il.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(il.direction))<uw?t.lookAt(i.target):(Sf.setFromNormalAndCoplanarPoint(i.object.up,i.target),il.intersectPlane(Sf,i.target))))}else if(i.object.isOrthographicCamera){const An=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),An!==i.object.zoom&&(i.object.updateProjectionMatrix(),Tn=!0)}return c=1,C=!1,Tn||H.distanceToSquared(i.object.position)>o||8*(1-$.dot(i.object.quaternion))>o||Et.distanceToSquared(i.target)>o?(i.dispatchEvent(Ef),H.copy(i.object.position),$.copy(i.object.quaternion),Et.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",gt),i.domElement.removeEventListener("pointerdown",ye),i.domElement.removeEventListener("pointercancel",v),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v),i.domElement.getRootNode().removeEventListener("keydown",yt,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",it),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new yf,l=new yf;let c=1;const u=new I,h=new Ot,d=new Ot,m=new Ot,_=new Ot,b=new Ot,f=new Ot,p=new Ot,M=new Ot,E=new Ot,T=new I,k=new Ot;let C=!1;const A=[],O={};let w=!1;function y(g){return g!==null?2*Math.PI/60*i.autoRotateSpeed*g:2*Math.PI/60/60*i.autoRotateSpeed}function R(g){const V=Math.abs(g*.01);return Math.pow(.95,i.zoomSpeed*V)}function X(g){l.theta-=g}function z(g){l.phi-=g}const j=function(){const g=new I;return function(U,H){g.setFromMatrixColumn(H,0),g.multiplyScalar(-U),u.add(g)}}(),K=function(){const g=new I;return function(U,H){i.screenSpacePanning===!0?g.setFromMatrixColumn(H,1):(g.setFromMatrixColumn(H,0),g.crossVectors(i.object.up,g)),g.multiplyScalar(U),u.add(g)}}(),G=function(){const g=new I;return function(U,H){const $=i.domElement;if(i.object.isPerspectiveCamera){const Et=i.object.position;g.copy(Et).sub(i.target);let Rt=g.length();Rt*=Math.tan(i.object.fov/2*Math.PI/180),j(2*U*Rt/$.clientHeight,i.object.matrix),K(2*H*Rt/$.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(U*(i.object.right-i.object.left)/i.object.zoom/$.clientWidth,i.object.matrix),K(H*(i.object.top-i.object.bottom)/i.object.zoom/$.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(g){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(g){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=g:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ct(g,V){if(!i.zoomToCursor)return;C=!0;const U=i.domElement.getBoundingClientRect(),H=g-U.left,$=V-U.top,Et=U.width,Rt=U.height;k.x=H/Et*2-1,k.y=-($/Rt)*2+1,T.set(k.x,k.y,1).unproject(i.object).sub(i.object.position).normalize()}function ht(g){return Math.max(i.minDistance,Math.min(i.maxDistance,g))}function mt(g){h.set(g.clientX,g.clientY)}function Wt(g){ct(g.clientX,g.clientX),p.set(g.clientX,g.clientY)}function te(g){_.set(g.clientX,g.clientY)}function q(g){d.set(g.clientX,g.clientY),m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const V=i.domElement;X(2*Math.PI*m.x/V.clientHeight),z(2*Math.PI*m.y/V.clientHeight),h.copy(d),i.update()}function tt(g){M.set(g.clientX,g.clientY),E.subVectors(M,p),E.y>0?Q(R(E.y)):E.y<0&&W(R(E.y)),p.copy(M),i.update()}function dt(g){b.set(g.clientX,g.clientY),f.subVectors(b,_).multiplyScalar(i.panSpeed),G(f.x,f.y),_.copy(b),i.update()}function ot(g){ct(g.clientX,g.clientY),g.deltaY<0?W(R(g.deltaY)):g.deltaY>0&&Q(R(g.deltaY)),i.update()}function Bt(g){let V=!1;switch(g.code){case i.keys.UP:g.ctrlKey||g.metaKey||g.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),V=!0;break;case i.keys.BOTTOM:g.ctrlKey||g.metaKey||g.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),V=!0;break;case i.keys.LEFT:g.ctrlKey||g.metaKey||g.shiftKey?X(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),V=!0;break;case i.keys.RIGHT:g.ctrlKey||g.metaKey||g.shiftKey?X(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),V=!0;break}V&&(g.preventDefault(),i.update())}function Lt(g){if(A.length===1)h.set(g.pageX,g.pageY);else{const V=Nt(g),U=.5*(g.pageX+V.x),H=.5*(g.pageY+V.y);h.set(U,H)}}function Xt(g){if(A.length===1)_.set(g.pageX,g.pageY);else{const V=Nt(g),U=.5*(g.pageX+V.x),H=.5*(g.pageY+V.y);_.set(U,H)}}function P(g){const V=Nt(g),U=g.pageX-V.x,H=g.pageY-V.y,$=Math.sqrt(U*U+H*H);p.set(0,$)}function jt(g){i.enableZoom&&P(g),i.enablePan&&Xt(g)}function Gt(g){i.enableZoom&&P(g),i.enableRotate&&Lt(g)}function he(g){if(A.length==1)d.set(g.pageX,g.pageY);else{const U=Nt(g),H=.5*(g.pageX+U.x),$=.5*(g.pageY+U.y);d.set(H,$)}m.subVectors(d,h).multiplyScalar(i.rotateSpeed);const V=i.domElement;X(2*Math.PI*m.x/V.clientHeight),z(2*Math.PI*m.y/V.clientHeight),h.copy(d)}function Mt(g){if(A.length===1)b.set(g.pageX,g.pageY);else{const V=Nt(g),U=.5*(g.pageX+V.x),H=.5*(g.pageY+V.y);b.set(U,H)}f.subVectors(b,_).multiplyScalar(i.panSpeed),G(f.x,f.y),_.copy(b)}function Kt(g){const V=Nt(g),U=g.pageX-V.x,H=g.pageY-V.y,$=Math.sqrt(U*U+H*H);M.set(0,$),E.set(0,Math.pow(M.y/p.y,i.zoomSpeed)),Q(E.y),p.copy(M);const Et=(g.pageX+V.x)*.5,Rt=(g.pageY+V.y)*.5;ct(Et,Rt)}function Vt(g){i.enableZoom&&Kt(g),i.enablePan&&Mt(g)}function Dt(g){i.enableZoom&&Kt(g),i.enableRotate&&he(g)}function ye(g){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(g.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",v)),!at(g)&&(Ht(g),g.pointerType==="touch"?It(g):B(g)))}function S(g){i.enabled!==!1&&(g.pointerType==="touch"?et(g):Y(g))}function v(g){switch(At(g),A.length){case 0:i.domElement.releasePointerCapture(g.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",v),i.dispatchEvent(wf),s=r.NONE;break;case 1:const V=A[0],U=O[V];It({pointerId:V,pageX:U.x,pageY:U.y});break}}function B(g){let V;switch(g.button){case 0:V=i.mouseButtons.LEFT;break;case 1:V=i.mouseButtons.MIDDLE;break;case 2:V=i.mouseButtons.RIGHT;break;default:V=-1}switch(V){case xs.DOLLY:if(i.enableZoom===!1)return;Wt(g),s=r.DOLLY;break;case xs.ROTATE:if(g.ctrlKey||g.metaKey||g.shiftKey){if(i.enablePan===!1)return;te(g),s=r.PAN}else{if(i.enableRotate===!1)return;mt(g),s=r.ROTATE}break;case xs.PAN:if(g.ctrlKey||g.metaKey||g.shiftKey){if(i.enableRotate===!1)return;mt(g),s=r.ROTATE}else{if(i.enablePan===!1)return;te(g),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ou)}function Y(g){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;q(g);break;case r.DOLLY:if(i.enableZoom===!1)return;tt(g);break;case r.PAN:if(i.enablePan===!1)return;dt(g);break}}function Z(g){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(g.preventDefault(),i.dispatchEvent(ou),ot(J(g)),i.dispatchEvent(wf))}function J(g){const V=g.deltaMode,U={clientX:g.clientX,clientY:g.clientY,deltaY:g.deltaY};switch(V){case 1:U.deltaY*=16;break;case 2:U.deltaY*=100;break}return g.ctrlKey&&!w&&(U.deltaY*=10),U}function yt(g){g.key==="Control"&&(w=!0,i.domElement.getRootNode().addEventListener("keyup",rt,{passive:!0,capture:!0}))}function rt(g){g.key==="Control"&&(w=!1,i.domElement.getRootNode().removeEventListener("keyup",rt,{passive:!0,capture:!0}))}function it(g){i.enabled===!1||i.enablePan===!1||Bt(g)}function It(g){switch(Ut(g),A.length){case 1:switch(i.touches.ONE){case ys.ROTATE:if(i.enableRotate===!1)return;Lt(g),s=r.TOUCH_ROTATE;break;case ys.PAN:if(i.enablePan===!1)return;Xt(g),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ys.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;jt(g),s=r.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Gt(g),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ou)}function et(g){switch(Ut(g),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;he(g),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Mt(g),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Vt(g),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Dt(g),i.update();break;default:s=r.NONE}}function gt(g){i.enabled!==!1&&g.preventDefault()}function Ht(g){A.push(g.pointerId)}function At(g){delete O[g.pointerId];for(let V=0;V<A.length;V++)if(A[V]==g.pointerId){A.splice(V,1);return}}function at(g){for(let V=0;V<A.length;V++)if(A[V]==g.pointerId)return!0;return!1}function Ut(g){let V=O[g.pointerId];V===void 0&&(V=new Ot,O[g.pointerId]=V),V.set(g.pageX,g.pageY)}function Nt(g){const V=g.pointerId===A[0]?A[1]:A[0];return O[V]}i.domElement.addEventListener("contextmenu",gt),i.domElement.addEventListener("pointerdown",ye),i.domElement.addEventListener("pointercancel",v),i.domElement.addEventListener("wheel",Z,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",yt,{passive:!0,capture:!0}),this.update()}}var us=typeof self<"u"?self:{};function Xr(){throw Error("Invalid UTF8")}function Mf(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let rl,au;const dw=typeof TextDecoder<"u";let pw;const fw=typeof TextEncoder<"u";function Wg(e){if(fw)e=(pw||(pw=new TextEncoder)).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<e.length){const s=e.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}var _h,Cl;t:{for(var Tf=["CLOSURE_FLAGS"],lu=us,cu=0;cu<Tf.length;cu++)if((lu=lu[Tf[cu]])==null){Cl=null;break t}Cl=lu}var Zo,Af=Cl&&Cl[610401301];_h=Af!=null&&Af;const Cf=us.navigator;function Vu(e){return!!_h&&!!Zo&&Zo.brands.some(({brand:t})=>t&&t.indexOf(e)!=-1)}function Kn(e){var t;return(t=us.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(e)!=-1}function gr(){return!!_h&&!!Zo&&Zo.brands.length>0}function uu(){return gr()?Vu("Chromium"):(Kn("Chrome")||Kn("CriOS"))&&!(!gr()&&Kn("Edge"))||Kn("Silk")}function vh(e){return vh[" "](e),e}Zo=Cf&&Cf.userAgentData||null,vh[" "]=function(){};var mw=!gr()&&(Kn("Trident")||Kn("MSIE"));!Kn("Android")||uu(),uu(),Kn("Safari")&&(uu()||!gr()&&Kn("Coast")||!gr()&&Kn("Opera")||!gr()&&Kn("Edge")||(gr()?Vu("Microsoft Edge"):Kn("Edg/"))||gr()&&Vu("Opera"));var Xg={},Xo=null;function gw(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return function(s,o){function a(c){for(;l<s.length;){const u=s.charAt(l++),h=Xo[u];if(h!=null)return h;if(!/^[\s\xa0]*$/.test(u))throw Error("Unknown base64 encoding at char: "+u)}return c}jg();let l=0;for(;;){const c=a(-1),u=a(0),h=a(64),d=a(64);if(d===64&&c===-1)break;o(c<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),d!=64&&o(h<<6&192|d))}}(e,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function jg(){if(!Xo){Xo={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));Xg[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Xo[s]===void 0&&(Xo[s]=r)}}}}var qg=typeof Uint8Array<"u",Kg=!mw&&typeof btoa=="function";function Pf(e){if(!Kg){var t;t===void 0&&(t=0),jg(),t=Xg[t];var n=Array(Math.floor(e.length/3)),i=t[64]||"";let l=0,c=0;for(;l<e.length-2;l+=3){var r=e[l],s=e[l+1],o=e[l+2],a=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|o>>6],o=t[63&o],n[c++]=a+r+s+o}switch(a=0,o=i,e.length-l){case 2:o=t[(15&(a=e[l+1]))<<2]||i;case 1:e=e[l],n[c]=t[e>>2]+t[(3&e)<<4|a>>4]+o+i}return n.join("")}for(t="",n=0,i=e.length-10240;n<i;)t+=String.fromCharCode.apply(null,e.subarray(n,n+=10240));return t+=String.fromCharCode.apply(null,n?e.subarray(n):e),btoa(t)}const Rf=/[-_.]/g,_w={"-":"+",_:"/",".":"="};function vw(e){return _w[e]||""}function Yg(e){if(!Kg)return gw(e);Rf.test(e)&&(e=e.replace(Rf,vw)),e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function fa(e){return qg&&e!=null&&e instanceof Uint8Array}var oo={};function hs(){return bw||(bw=new Xi(null,oo))}function bh(e){$g(oo);var t=e.g;return(t=t==null||fa(t)?t:typeof t=="string"?Yg(t):null)==null?t:e.g=t}var Xi=class{h(){return new Uint8Array(bh(this)||0)}constructor(e,t){if($g(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let bw,xw;function $g(e){if(e!==oo)throw Error("illegal external caller")}function Zg(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function zu(e){return Zg(e=Error(e),"warning"),e}var Yl=typeof Symbol=="function"&&typeof Symbol()=="symbol",yw=new Set;function ma(e,t,n=!1,i=!1){return e=typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t,n&&yw.add(e),e}var Ew=ma("jas",void 0,!0,!0),Lf=ma(void 0,"0di"),hu=ma(void 0,"2ex"),Fo=ma(void 0,"1oa",!0),ao=ma(void 0,Symbol(),!0);const xt=Yl?Ew:"Ga",Jg={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Qg=Object.defineProperties;function $l(e,t){Yl||xt in e||Qg(e,Jg),e[xt]|=t}function ke(e,t){Yl||xt in e||Qg(e,Jg),e[xt]=t}function bo(e){return $l(e,34),e}function ww(e,t){ke(t,-30975&(0|e))}function Hu(e,t){ke(t,-30941&(34|e))}function xh(){return typeof BigInt=="function"}function En(e){return Array.prototype.slice.call(e)}var yh,ga={},t_={};function Df(e){return!(!e||typeof e!="object"||e.Ia!==t_)}function Eh(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)&&e.constructor===Object}function wh(e,t){if(e!=null){if(typeof e=="string")e=e?new Xi(e,oo):hs();else if(e.constructor!==Xi)if(fa(e))e=e.length?new Xi(new Uint8Array(e),oo):hs();else{if(!t)throw Error();e=void 0}}return e}function Pl(e){return!(!Array.isArray(e)||e.length)&&!!(1&(0|e[xt]))}const If=[];function Ir(e){if(2&e)throw Error()}ke(If,55),yh=Object.freeze(If);class Rl{constructor(t,n,i){this.l=0,this.g=t,this.h=n,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Rl(this.g,this.h,this.m)}}function Sh(e){return ao?e[ao]:void 0}var Sw=Object.freeze({});function Zl(e){return e.Qa=!0,e}var Mw=Zl(e=>typeof e=="number"),Uf=Zl(e=>typeof e=="string"),Tw=Zl(e=>typeof e=="boolean"),Jl=typeof us.BigInt=="function"&&typeof us.BigInt(0)=="bigint",Gu=Zl(e=>Jl?e>=Cw&&e<=Rw:e[0]==="-"?Nf(e,Aw):Nf(e,Pw));const Aw=Number.MIN_SAFE_INTEGER.toString(),Cw=Jl?BigInt(Number.MIN_SAFE_INTEGER):void 0,Pw=Number.MAX_SAFE_INTEGER.toString(),Rw=Jl?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Nf(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i>r)return!1;if(i<r)return!0}}const Lw=typeof Uint8Array.prototype.slice=="function";let e_,ue=0,Pe=0;function Of(e){const t=e>>>0;ue=t,Pe=(e-t)/4294967296>>>0}function lo(e){if(e<0){Of(-e);const[t,n]=Ch(ue,Pe);ue=t>>>0,Pe=n>>>0}else Of(e)}function Mh(e){const t=e_||(e_=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+e,!0),Pe=0,ue=t.getUint32(0,!0)}function Th(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Jo(e,t)}function Ah(e,t){const n=2147483648&t;return n&&(t=~t>>>0,(e=1+~e>>>0)==0&&(t=t+1>>>0)),typeof(e=Th(e,t))=="number"?n?-e:e:n?"-"+e:e}function Jo(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else xh()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Ff(n)+Ff(e));return n}function Ff(e){return e=String(e),"0000000".slice(e.length)+e}function Ql(e){if(e.length<16)lo(Number(e));else if(xh())e=BigInt(e),ue=Number(e&BigInt(4294967295))>>>0,Pe=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Pe=ue=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));Pe*=1e6,ue=1e6*ue+s,ue>=4294967296&&(Pe+=Math.trunc(ue/4294967296),Pe>>>=0,ue>>>=0)}if(t){const[i,r]=Ch(ue,Pe);ue=i,Pe=r}}}function Ch(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}const Ph=typeof BigInt=="function"?BigInt.asIntN:void 0,Dw=typeof BigInt=="function"?BigInt.asUintN:void 0,qs=Number.isSafeInteger,tc=Number.isFinite,Ll=Math.trunc;function Ur(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function n_(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const Iw=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function ec(e){switch(typeof e){case"bigint":return!0;case"number":return tc(e);case"string":return Iw.test(e);default:return!1}}function xo(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return tc(e)?0|e:void 0}function i_(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return tc(e)?e>>>0:void 0}function kf(e){if(e[0]==="-")return!1;const t=e.length;return t<20||t===20&&Number(e.substring(0,6))<184467}function Rh(e){return e=Ll(e),qs(e)||(lo(e),e=Ah(ue,Pe)),e}function Lh(e){var t=Ll(Number(e));if(qs(t))return String(t);if((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),t=e.length,!(e[0]==="-"?t<20||t===20&&Number(e.substring(0,7))>-922337:t<19||t===19&&Number(e.substring(0,6))<922337))if(Ql(e),e=ue,2147483648&(t=Pe))if(xh())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Ch(e,t);e="-"+Jo(n,i)}else e=Jo(e,t);return e}function Dl(e){return e==null?e:typeof e=="bigint"?(Gu(e)?e=Number(e):(e=Ph(64,e),e=Gu(e)?Number(e):String(e)),e):ec(e)?typeof e=="number"?Rh(e):Lh(e):void 0}function Uw(e){if(e==null)return e;var t=typeof e;if(t==="bigint")return String(Dw(64,e));if(ec(e)){if(t==="string")return t=Ll(Number(e)),qs(t)&&t>=0?e=String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),kf(e)||(Ql(e),e=Jo(ue,Pe))),e;if(t==="number")return(e=Ll(e))>=0&&qs(e)?e:function(n){if(n<0){lo(n);var i=Jo(ue,Pe);return n=Number(i),qs(n)?n:i}return kf(i=String(n))?i:(lo(n),Th(ue,Pe))}(e)}}function r_(e){if(typeof e!="string")throw Error();return e}function yo(e){if(e!=null&&typeof e!="string")throw Error();return e}function co(e){return e==null||typeof e=="string"?e:void 0}function Dh(e,t,n,i){if(e!=null&&typeof e=="object"&&e.W===ga)return e;if(!Array.isArray(e))return n?2&i?((e=t[Lf])||(bo((e=new t).u),e=t[Lf]=e),t=e):t=new t:t=void 0,t;let r=n=0|e[xt];return r===0&&(r|=32&i),r|=2&i,r!==n&&ke(e,r),new t(e)}function Nw(e,t,n){if(t)t:{if(!ec(t=e))throw zu("int64");switch(typeof t){case"string":t=Lh(t);break t;case"bigint":if(e=t=Ph(64,t),Uf(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(Mw(e)&&!Number.isSafeInteger(e))throw Error(String(e));t=Jl?BigInt(t):Tw(t)?t?"1":"0":Uf(t)?t.trim()||"0":String(t);break t;default:t=Rh(t)}}else t=Dl(e);return typeof(n=(e=t)==null?n?0:void 0:e)=="string"&&qs(t=+n)?t:n}const Ow={};let Fw=function(){try{return vh(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class du{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const kw=Fw?(Object.setPrototypeOf(du.prototype,Map.prototype),Object.defineProperties(du.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),du):class extends Map{constructor(){super()}};function Bf(e){return e}function pu(e){if(2&e.L)throw Error("Cannot mutate an immutable Map")}var ti=class extends kw{constructor(e,t,n=Bf,i=Bf){super();let r=0|e[xt];r|=64,ke(e,r),this.L=r,this.S=t,this.R=n,this.Y=this.S?Bw:i;for(let s=0;s<e.length;s++){const o=e[s],a=n(o[0],!1,!0);let l=o[1];t?l===void 0&&(l=null):l=i(o[1],!1,!0,void 0,void 0,r),super.set(a,l)}}na(e=Vf){if(this.size!==0)return this.X(e)}X(e=Vf){const t=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=e(i[0]),i[1]=e(i[1]),t.push(i);return t}clear(){pu(this),super.clear()}delete(e){return pu(this),super.delete(this.R(e,!0,!1))}entries(){var e=this.ma();return new Rl(e,Vw,this)}keys(){return this.Ha()}values(){var e=this.ma();return new Rl(e,ti.prototype.get,this)}forEach(e,t){super.forEach((n,i)=>{e.call(t,this.get(i),i,this)})}set(e,t){return pu(this),(e=this.R(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.Y(t,!0,!0,this.S,!1,this.L))}Na(e){const t=this.R(e[0],!1,!0);e=e[1],e=this.S?e===void 0?null:e:this.Y(e,!1,!0,void 0,!1,this.L),super.set(t,e)}has(e){return super.has(this.R(e,!1,!1))}get(e){e=this.R(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.S;return n?((n=this.Y(t,!1,!0,n,this.ra,this.L))!==t&&super.set(e,n),n):t}}ma(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function Bw(e,t,n,i,r,s){return e=Dh(e,i,n,s),r&&(e=ic(e)),e}function Vf(e){return e}function Vw(e){return[e,this.get(e)]}let zw,s_,Hw;function zf(){return zw||(zw=new ti(bo([]),void 0,void 0,void 0,Ow))}function Ih(e,t,n,i,r){if(e!=null){if(Array.isArray(e))e=Pl(e)?void 0:r&&2&(0|e[xt])?e:Uh(e,t,n,i!==void 0,r);else if(Eh(e)){const s={};for(let o in e)s[o]=Ih(e[o],t,n,i,r);e=s}else e=t(e,i);return e}}function Uh(e,t,n,i,r){const s=i||n?0|e[xt]:0,o=i?!!(32&s):void 0;i=En(e);for(let a=0;a<i.length;a++)i[a]=Ih(i[a],t,n,o,r);return n&&((e=Sh(e))&&(i[ao]=En(e)),n(s,i)),i}function Gw(e){return Ih(e,o_,void 0,void 0,!1)}function o_(e){return e.W===ga?e.toJSON():e instanceof ti?e.na(Gw):function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"bigint":return Gu(t)?Number(t):String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(Pl(t))return}else{if(fa(t))return Pf(t);if(t instanceof Xi){const n=t.g;return n==null?"":typeof n=="string"?n:t.g=Pf(n)}if(t instanceof ti)return t.na()}}return t}(e)}function a_(e){return Uh(e,o_,void 0,void 0,!1)}function Er(e,t,n){return e=l_(e,t[0],t[1],n?1:2),t!==s_&&n&&$l(e,16384),e}function l_(e,t,n,i){if(e==null){var r=96;n?(e=[n],r|=512):e=[],t&&(r=-33521665&r|(1023&t)<<15)}else{if(!Array.isArray(e))throw Error("narr");if(2048&(r=0|e[xt]))throw Error("farr");if(64&r)return e;if(i===1||i===2||(r|=64),n&&(r|=512,n!==e[0]))throw Error("mid");t:{if(i=(n=e).length){const s=i-1;if(Eh(n[s])){if((t=s-(512&(r|=256)?0:-1))>=1024)throw Error("pvtlmt");r=-33521665&r|(1023&t)<<15;break t}}if(t){if((t=Math.max(t,i-(512&r?0:-1)))>1024)throw Error("spvt");r=-33521665&r|(1023&t)<<15}}}return ke(e,r),e}function Wu(e,t,n=Hu){if(e!=null){if(qg&&e instanceof Uint8Array)return t?e:new Uint8Array(e);if(Array.isArray(e)){var i=0|e[xt];return 2&i?e:(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),t?(ke(e,-12293&(34|i)),e):Uh(e,Wu,4&i?Hu:n,!0,!0))}return e.W===ga?e=2&(i=0|(n=e.u)[xt])?e:new e.constructor(nc(n,i,!0)):e instanceof ti&&!(2&e.L)&&(n=bo(e.X(Wu)),e=new ti(n,e.S,e.R,e.Y)),e}}function nc(e,t,n){const i=n||2&t?Hu:ww,r=!!(32&t);return e=function(s,o,a){const l=En(s);var c=l.length;const u=256&o?l[c-1]:void 0;for(c+=u?-1:0,o=512&o?1:0;o<c;o++)l[o]=a(l[o]);if(u){o=l[o]={};for(const h in u)o[h]=a(u[h])}return(s=Sh(s))&&(l[ao]=En(s)),l}(e,t,s=>Wu(s,r,i)),$l(e,32|(n?2:0)),e}function ic(e){const t=e.u,n=0|t[xt];return 2&n?new e.constructor(nc(t,n,!1)):e}function uo(e,t){return tr(e=e.u,0|e[xt],t)}function tr(e,t,n,i){if(n===-1)return null;var r=n+(512&t?0:-1);const s=e.length-1;return r>=s&&256&t?e[s][n]:i&&256&t&&(t=e[s][n])!=null?(e[r]!=null&&hu!=null&&((r=(e=xw??(xw={}))[hu]||0)>=4||(e[hu]=r+1,Zg(e=Error(),"incident"),function(o){us.setTimeout(()=>{throw o},0)}(e))),t):r<=s?e[r]:void 0}function de(e,t,n){const i=e.u;let r=0|i[xt];return Ir(r),Ee(i,r,t,n),e}function Ee(e,t,n,i){const r=512&t?0:-1,s=n+r;var o=e.length-1;return s>=o&&256&t?(e[o][n]=i,t):s<=o?(e[s]=i,256&t&&n in(e=e[o])&&delete e[n],t):(i!==void 0&&(n>=(o=t>>15&1023||536870912)?i!=null&&(e[o+r]={[n]:i},ke(e,t|=256)):e[s]=i),t)}function dl(e,t){let n=0|(e=e.u)[xt];const i=tr(e,n,t),r=Ur(i);return r!=null&&r!==i&&Ee(e,n,t,r),r}function c_(e){let t=0|(e=e.u)[xt];const n=tr(e,t,1),i=wh(n,!0);return i!=null&&i!==n&&Ee(e,t,1,i),i}function ts(){return Sw===void 0?2:4}function es(e,t,n,i,r){const s=e.u,o=2&(e=0|s[xt])?1:i;r=!!r;let a=0|(i=Nh(s,e,t))[xt];if(!(4&a)){4&a&&(i=En(i),a=ji(a,e),e=Ee(s,e,t,i));let l=0,c=0;for(;l<i.length;l++){const u=n(i[l]);u!=null&&(i[c++]=u)}c<l&&(i.length=c),a=Oh(a,e),n=-4097&(20|a),a=n&=-8193,ke(i,a),2&a&&Object.freeze(i)}return o===1||o===4&&32&a?Gi(a)||(r=a,a|=2,a!==r&&ke(i,a),Object.freeze(i)):(o===2&&Gi(a)&&(i=En(i),a=ji(a,e),a=wr(a,e,r),ke(i,a),e=Ee(s,e,t,i)),Gi(a)||(t=a,a=wr(a,e,r),a!==t&&ke(i,a))),i}function Nh(e,t,n,i){return e=tr(e,t,n,i),Array.isArray(e)?e:yh}function Oh(e,t){return e===0&&(e=ji(e,t)),1|e}function Gi(e){return!!(2&e)&&!!(4&e)||!!(2048&e)}function u_(e){e=En(e);for(let t=0;t<e.length;t++){const n=e[t]=En(e[t]);Array.isArray(n[1])&&(n[1]=bo(n[1]))}return e}function Xu(e,t,n,i){let r=0|(e=e.u)[xt];Ir(r),Ee(e,r,t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Eo(e,t,n,i,r){Ir(t);var s=!(!(64&t)&&16384&t);const o=(r=Nh(e,t,n,r))!==yh;if(s||!o){let a=s=o?0|r[xt]:0;(!o||2&a||Gi(a)||4&a&&!(32&a))&&(r=En(r),a=ji(a,t),t=Ee(e,t,n,r)),a=-13&Oh(a,t),a=wr(i?-17&a:16|a,t,!0),a!==s&&ke(r,a)}return r}function fu(e,t){var n=Q_;return kh(Fh(e=e.u),e,0|e[xt],n)===t?t:-1}function Fh(e){if(Yl)return e[Fo]??(e[Fo]=new Map);if(Fo in e)return e[Fo];const t=new Map;return Object.defineProperty(e,Fo,{value:t}),t}function h_(e,t,n,i){const r=Fh(e),s=kh(r,e,t,n);return s!==i&&(s&&(t=Ee(e,t,s)),r.set(n,i)),t}function kh(e,t,n,i){let r=e.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const o=i[s];tr(t,n,o)!=null&&(r!==0&&(n=Ee(t,n,r)),r=o)}return e.set(i,r),r}function Bh(e,t,n,i){let r,s=0|e[xt];if((i=tr(e,s,n,i))!=null&&i.W===ga)return(t=ic(i))!==i&&Ee(e,s,n,t),t.u;if(Array.isArray(i)){const o=0|i[xt];r=2&o?Er(nc(i,o,!1),t,!0):64&o?i:Er(r,t,!0)}else r=Er(void 0,t,!0);return r!==i&&Ee(e,s,n,r),r}function d_(e,t,n,i){let r=0|(e=e.u)[xt];return(t=Dh(i=tr(e,r,n,i),t,!1,r))!==i&&t!=null&&Ee(e,r,n,t),t}function $t(e,t,n,i=!1){if((t=d_(e,t,n,i))==null)return t;if(!(2&(i=0|(e=e.u)[xt]))){const r=ic(t);r!==t&&Ee(e,i,n,t=r)}return t}function p_(e,t,n,i,r,s,o){e=e.u;var a=!!(2&t);const l=a?1:r;s=!!s,o&&(o=!a);var c=0|(r=Nh(e,t,i))[xt];if(!(a=!!(4&c))){var u=r,h=t;const d=!!(2&(c=Oh(c,t)));d&&(h|=2);let m=!d,_=!0,b=0,f=0;for(;b<u.length;b++){const p=Dh(u[b],n,!1,h);if(p instanceof n){if(!d){const M=!!(2&(0|p.u[xt]));m&&(m=!M),_&&(_=M)}u[f++]=p}}f<b&&(u.length=f),c|=4,c=_?16|c:-17&c,ke(u,c=m?8|c:-9&c),d&&Object.freeze(u)}if(o&&!(8&c||!r.length&&(l===1||l===4&&32&c))){for(Gi(c)&&(r=En(r),c=ji(c,t),t=Ee(e,t,i,r)),n=r,o=c,u=0;u<n.length;u++)(c=n[u])!==(h=ic(c))&&(n[u]=h);o|=8,ke(n,o=n.length?-17&o:16|o),c=o}return l===1||l===4&&32&c?Gi(c)||(t=c,(c|=!r.length||16&c&&(!a||32&c)?2:2048)!==t&&ke(r,c),Object.freeze(r)):(l===2&&Gi(c)&&(ke(r=En(r),c=wr(c=ji(c,t),t,s)),t=Ee(e,t,i,r)),Gi(c)||(i=c,(c=wr(c,t,s))!==i&&ke(r,c))),r}function Yi(e,t,n){const i=0|e.u[xt];return p_(e,i,t,n,ts(),!1,!(2&i))}function wt(e,t,n,i){return i==null&&(i=void 0),de(e,n,i)}function qo(e,t,n,i){i==null&&(i=void 0);t:{let r=0|(e=e.u)[xt];if(Ir(r),i==null){const s=Fh(e);if(kh(s,e,r,n)!==t)break t;s.set(n,0)}else r=h_(e,r,n,t);Ee(e,r,t,i)}}function ji(e,t){return-2049&(e=32|(2&t?2|e:-3&e))}function wr(e,t,n){return 32&t&&n||(e&=-33),e}function Il(e,t,n,i){const r=0|e.u[xt];Ir(r),e=p_(e,r,n,t,2,!0),i=i??new n,e.push(i),e[xt]=2&(0|i.u[xt])?-9&e[xt]:-17&e[xt]}function Zn(e,t){return xo(uo(e,t))}function ei(e,t){return co(uo(e,t))}function De(e,t){return dl(e,t)??0}function Qo(e,t,n){if(n!=null&&typeof n!="boolean")throw e=typeof n,Error(`Expected boolean but got ${e!="object"?e:n?Array.isArray(n)?"array":e:"null"}: ${n}`);de(e,t,n)}function Si(e,t,n){if(n!=null){if(typeof n!="number"||!tc(n))throw zu("int32");n|=0}de(e,t,n)}function _t(e,t,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);de(e,t,n)}function Ul(e,t,n){{const o=e.u;let a=0|o[xt];if(Ir(a),n==null)Ee(o,a,t);else{var i=e=0|n[xt],r=Gi(e),s=r||Object.isFrozen(n);for(r||(e=0),s||(n=En(n),i=0,e=wr(e=ji(e,a),a,!0),s=!1),e|=21,r=0;r<n.length;r++){const l=n[r],c=r_(l);Object.is(l,c)||(s&&(n=En(n),i=0,e=wr(e=ji(e,a),a,!0),s=!1),n[r]=c)}e!==i&&(s&&(n=En(n),e=wr(e=ji(e,a),a,!0)),ke(n,e)),Ee(o,a,t,n)}}}function rc(e,t,n){Ir(0|e.u[xt]),es(e,t,co,2,!0).push(r_(n))}function f_(e,t){return Error(`Invalid wire type: ${e} (at position ${t})`)}function Vh(){return Error("Failed to read varint, encoding is invalid.")}function m_(e,t){return Error(`Tried to read past the end of the data ${t} > ${e}`)}function zh(e){if(typeof e=="string")return{buffer:Yg(e),N:!1};if(Array.isArray(e))return{buffer:new Uint8Array(e),N:!1};if(e.constructor===Uint8Array)return{buffer:e,N:!1};if(e.constructor===ArrayBuffer)return{buffer:new Uint8Array(e),N:!1};if(e.constructor===Xi)return{buffer:bh(e)||new Uint8Array(0),N:!0};if(e instanceof Uint8Array)return{buffer:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),N:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Hh(e,t){let n,i=0,r=0,s=0;const o=e.h;let a=e.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(rs(e,a),n<128)return t(i>>>0,r>>>0);throw Vh()}function Gh(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return rs(e,n),!!(127&t)}throw Vh()}function Cr(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Vh();return rs(e,n),r}function $i(e){return Cr(e)>>>0}function ju(e){var t=e.h;const n=e.g,i=t[n],r=t[n+1],s=t[n+2];return t=t[n+3],rs(e,e.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function qu(e){var t=ju(e);e=2*(t>>31)+1;const n=t>>>23&255;return t&=8388607,n==255?t?NaN:e*(1/0):n==0?1401298464324817e-60*e*t:e*Math.pow(2,n-150)*(t+8388608)}function Ww(e){return Cr(e)}function mu(e,t,{ba:n=!1}={}){e.ba=n,t&&(t=zh(t),e.h=t.buffer,e.m=t.N,e.j=0,e.l=e.h.length,e.g=e.j)}function rs(e,t){if(e.g=t,t>e.l)throw m_(e.l,t)}function g_(e,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const n=e.g,i=n+t;if(i>e.l)throw m_(t,e.l-n);return e.g=i,n}function __(e,t){if(t==0)return hs();var n=g_(e,t);return e.ba&&e.m?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):Lw?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?hs():new Xi(n,oo)}ti.prototype.toJSON=void 0,ti.prototype.Ia=t_;var Hf=[];function v_(e){var t=e.g;if(t.g==t.l)return!1;e.l=e.g.g;var n=$i(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5))throw f_(n,e.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${e.l})`);return e.m=t,e.h=n,!0}function pl(e){switch(e.h){case 0:e.h!=0?pl(e):Gh(e.g);break;case 1:rs(e=e.g,e.g+8);break;case 2:if(e.h!=2)pl(e);else{var t=$i(e.g);rs(e=e.g,e.g+t)}break;case 5:rs(e=e.g,e.g+4);break;case 3:for(t=e.m;;){if(!v_(e))throw Error("Unmatched start-group tag: stream EOF");if(e.h==4){if(e.m!=t)throw Error("Unmatched end-group tag");break}pl(e)}break;default:throw f_(e.h,e.l)}}function _a(e,t,n){const i=e.g.l,r=$i(e.g),s=e.g.g+r;let o=s-i;if(o<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),o=s-e.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return e.g.g=s,e.g.l=i,t}function Wh(e){var t=$i(e.g),n=g_(e=e.g,t);if(e=e.h,dw){var i,r=e;(i=au)||(i=au=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(a){if(rl===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),rl=!0}catch{rl=!1}}throw!rl&&(au=void 0),a}}else{t=(s=n)+t,n=[];let a,l=null;for(;s<t;){var o=e[s++];o<128?n.push(o):o<224?s>=t?Xr():(a=e[s++],o<194||(192&a)!=128?(s--,Xr()):n.push((31&o)<<6|63&a)):o<240?s>=t-1?Xr():(a=e[s++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[s++]))!=128?(s--,Xr()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?s>=t-2?Xr():(a=e[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,Xr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Xr(),n.length>=8192&&(l=Mf(l,n),n.length=0)}s=Mf(l,n)}return s}function b_(e){const t=$i(e.g);return __(e.g,t)}function sc(e,t,n){var i=$i(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var sl=[];function Xw(e){return e}let Ks;function ui(e,t,n){t.g?t.m(e,t.g,t.h,n):t.m(e,t.h,n)}var ft=class{constructor(e,t){this.u=l_(e,t)}toJSON(){const e=!Ks;try{return e&&(Ks=a_),x_(this)}finally{e&&(Ks=void 0)}}l(){var e=AS;return e.g?e.l(this,e.g,e.h,!0):e.l(this,e.h,e.defaultValue,!0)}clone(){const e=this.u;return new this.constructor(nc(e,0|e[xt],!1))}N(){return!!(2&(0|this.u[xt]))}};function x_(e){var t=e.u;{t=(e=Ks(t))!==t;let c=e.length;if(c){var n=e[c-1],i=Eh(n);i?c--:n=void 0;var r=e;if(i){t:{var s,o=n,a=!1;if(o)for(let u in o)isNaN(+u)?(s??(s={}))[u]=o[u]:(i=o[u],Array.isArray(i)&&(Pl(i)||Df(i)&&i.size===0)&&(i=null),i==null&&(a=!0),i!=null&&((s??(s={}))[u]=i));if(a||(s=o),s)for(let u in s){a=s;break t}a=null}o=a==null?n!=null:a!==n}for(;c>0&&((s=r[c-1])==null||Pl(s)||Df(s)&&s.size===0);c--)var l=!0;(r!==e||o||l)&&(t?(l||o||a)&&(r.length=c):r=Array.prototype.slice.call(r,0,c),a&&r.push(a)),l=r}else l=e}return l}function Gf(e){return e?/^\d+$/.test(e)?(Ql(e),new Ku(ue,Pe)):null:jw||(jw=new Ku(0,0))}ft.prototype.W=ga,ft.prototype.toString=function(){try{return Ks=Xw,x_(this).toString()}finally{Ks=void 0}};var Ku=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let jw;function Wf(e){return e?/^-?\d+$/.test(e)?(Ql(e),new Yu(ue,Pe)):null:qw||(qw=new Yu(0,0))}var Yu=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let qw;function Ys(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function wo(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function oc(e,t){if(t>=0)wo(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function ta(e,t){e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function ho(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function On(e,t,n){wo(e.g,8*t+n)}function Xh(e,t){return On(e,t,2),t=e.g.end(),ho(e,t),t.push(e.h),t}function jh(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function ac(e,t,n){On(e,t,2),wo(e.g,n.length),ho(e,e.g.end()),ho(e,n)}function Nl(e,t,n,i){n!=null&&(t=Xh(e,t),i(n,e),jh(e,t))}function hi(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var qh=hi(),y_=hi(),Kh=hi(),Yh=hi(),E_=hi(),w_=hi(),$h=hi(),S_=hi(),M_=hi(),So=class{constructor(e,t,n){this.g=e,this.h=t,e=qh,this.l=!!e&&n===e||!1}};function lc(e,t){return new So(e,t,qh)}function T_(e,t,n,i,r){Nl(e,n,R_(t,i),r)}const Kw=lc(function(e,t,n,i,r){return e.h===2&&(_a(e,Bh(t,i,n),r),!0)},T_),Yw=lc(function(e,t,n,i,r){return e.h===2&&(_a(e,Bh(t,i,n,!0),r),!0)},T_);var cc=Symbol(),Zh=Symbol(),Xf=Symbol(),jf=Symbol();let A_,C_;function _s(e,t,n,i){var r=i[e];if(r)return r;(r={}).Pa=i,r.V=function(h){switch(typeof h){case"boolean":return s_||(s_=[0,void 0,!0]);case"number":return h>0?void 0:h===0?Hw||(Hw=[0,void 0]):[-h,void 0];case"string":return[0,h];case"object":return h}}(i[0]);var s=i[1];let o=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++o])=="function"&&(r.la=!0,A_??(A_=s),C_??(C_=i[o+1]),s=i[o+=2]));const a={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)a[s[l]]=s;s=i[++o]}for(l=1;s!==void 0;){let h;typeof s=="number"&&(l+=s,s=i[++o]);var c=void 0;if(s instanceof So?h=s:(h=Kw,o--),h==null?void 0:h.l){s=i[++o],c=i;var u=o;typeof s=="function"&&(s=s(),c[u]=s),c=s}for(u=l+1,typeof(s=i[++o])=="number"&&s<0&&(u-=s,s=i[++o]);l<u;l++){const d=a[l];c?n(r,l,h,c,d):t(r,l,h,d)}}return i[e]=r}function P_(e){return Array.isArray(e)?e[0]instanceof So?e:[Yw,e]:[e,void 0]}function R_(e,t){return e instanceof ft?e.u:Array.isArray(e)?Er(e,t,!1):void 0}function Jh(e,t,n,i){const r=n.g;e[t]=i?(s,o,a)=>r(s,o,a,i):r}function Qh(e,t,n,i,r){const s=n.g;let o,a;e[t]=(l,c,u)=>s(l,c,u,a||(a=_s(Zh,Jh,Qh,i).V),o||(o=td(i)),r)}function td(e){let t=e[Xf];if(t!=null)return t;const n=_s(Zh,Jh,Qh,e);return t=n.la?(i,r)=>A_(i,r,n):(i,r)=>{const s=0|i[xt];for(;v_(r)&&r.h!=4;){var o=r.m,a=n[o];if(a==null){var l=n.ga;l&&(l=l[o])&&(l=$w(l))!=null&&(a=n[o]=l)}a!=null&&a(r,i,o)||(o=(a=r).l,pl(a),a.fa?a=void 0:(l=a.g.g-o,a.g.g=o,a=__(a.g,l)),o=i,a&&((l=o[ao])?l.push(a):o[ao]=[a]))}return 16384&s&&bo(i),!0},e[Xf]=t}function $w(e){const t=(e=P_(e))[0].g;if(e=e[1]){const n=td(e),i=_s(Zh,Jh,Qh,e).V;return(r,s,o)=>t(r,s,o,i,n)}return t}function uc(e,t,n){e[t]=n.h}function hc(e,t,n,i){let r,s;const o=n.h;e[t]=(a,l,c)=>o(a,l,c,s||(s=_s(cc,uc,hc,i).V),r||(r=L_(i)))}function L_(e){let t=e[jf];if(!t){const n=_s(cc,uc,hc,e);t=(i,r)=>D_(i,r,n),e[jf]=t}return t}function D_(e,t,n){for(var i=0|e[xt],r=512&i?0:-1,s=e.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const l=e[o];if(l==null)continue;const c=o-r,u=qf(n,c);u&&u(t,l,c)}if(256&i){i=e[s-1];for(const l in i)r=+l,Number.isNaN(r)||(s=i[r])!=null&&(a=qf(n,r))&&a(t,s,r)}if(e=Sh(e))for(ho(t,t.g.end()),n=0;n<e.length;n++)ho(t,bh(e[n])||new Uint8Array(0))}function qf(e,t){var n=e[t];if(n)return n;if((n=e.ga)&&(n=n[t])){var i=(n=P_(n))[0].h;if(n=n[1]){const r=L_(n),s=_s(cc,uc,hc,n).V;n=e.la?C_(s,r):(o,a,l)=>i(o,a,l,s,r)}else n=i;return e[t]=n}}function Mo(e,t){if(Array.isArray(t)){var n=0|t[xt];if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),ke(t,-12289&(5|n)),2&n&&Object.freeze(t),t}}function pn(e,t,n){return new So(e,t,n)}function To(e,t,n){return new So(e,t,n)}function fn(e,t,n){Ee(e,0|e[xt],t,n)}var Zw=lc(function(e,t,n,i,r){return e.h===2&&(e=_a(e,Er([void 0,void 0],i,!0),r),Ir(i=0|t[xt]),(r=tr(t,i,n))instanceof ti?2&r.L?((r=r.X()).push(e),Ee(t,i,n,r)):r.Na(e):Array.isArray(r)?(2&(0|r[xt])&&Ee(t,i,n,r=u_(r)),r.push(e)):Ee(t,i,n,[e]),!0)},function(e,t,n,i,r){if(t instanceof ti)t.forEach((s,o)=>{Nl(e,n,Er([o,s],i,!1),r)});else if(Array.isArray(t))for(let s=0;s<t.length;s++){const o=t[s];Array.isArray(o)&&Nl(e,n,Er(o,i,!1),r)}});function I_(e,t,n){if(t=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Ph(64,i));if(ec(i)){if(r==="string")return Lh(i);if(r==="number")return Rh(i)}}(t),t!=null&&(typeof t=="string"&&Wf(t),t!=null))switch(On(e,n,0),typeof t){case"number":e=e.g,lo(t),Ys(e,ue,Pe);break;case"bigint":n=BigInt.asUintN(64,t),n=new Yu(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Ys(e.g,n.h,n.g);break;default:n=Wf(t),Ys(e.g,n.h,n.g)}}function U_(e,t,n){(t=xo(t))!=null&&t!=null&&(On(e,n,0),oc(e.g,t))}function N_(e,t,n){(t=n_(t))!=null&&(On(e,n,0),e.g.g.push(t?1:0))}function O_(e,t,n){(t=co(t))!=null&&ac(e,n,Wg(t))}function F_(e,t,n,i,r){Nl(e,n,R_(t,i),r)}function k_(e,t,n){(t=t==null||typeof t=="string"||fa(t)||t instanceof Xi?t:void 0)!=null&&ac(e,n,zh(t).buffer)}function B_(e,t,n){return(e.h===5||e.h===2)&&(t=Eo(t,0|t[xt],n,!1,!1),e.h==2?sc(e,qu,t):t.push(qu(e.g)),!0)}var ki=pn(function(e,t,n){if(e.h!==1)return!1;var i=e.g;e=ju(i);const r=ju(i);i=2*(r>>31)+1;const s=r>>>20&2047;return e=4294967296*(1048575&r)+e,fn(t,n,s==2047?e?NaN:i*(1/0):s==0?5e-324*i*e:i*Math.pow(2,s-1075)*(e+4503599627370496)),!0},function(e,t,n){(t=Ur(t))!=null&&(On(e,n,1),e=e.g,(n=e_||(e_=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),ue=n.getUint32(0,!0),Pe=n.getUint32(4,!0),ta(e,ue),ta(e,Pe))},hi()),Ve=pn(function(e,t,n){return e.h===5&&(fn(t,n,qu(e.g)),!0)},function(e,t,n){(t=Ur(t))!=null&&(On(e,n,5),e=e.g,Mh(t),ta(e,ue))},$h),Jw=To(B_,function(e,t,n){if((t=Mo(Ur,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&(On(i,r,5),i=i.g,Mh(s),ta(i,ue))}},$h),ed=To(B_,function(e,t,n){if((t=Mo(Ur,t))!=null&&t.length){On(e,n,2),wo(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Mh(t[i]),ta(n,ue)}},$h),Pr=pn(function(e,t,n){return e.h===0&&(fn(t,n,Hh(e.g,Ah)),!0)},I_,w_),gu=pn(function(e,t,n){return e.h===0&&(fn(t,n,(e=Hh(e.g,Ah))===0?void 0:e),!0)},I_,w_),Qw=pn(function(e,t,n){return e.h===0&&(fn(t,n,Hh(e.g,Th)),!0)},function(e,t,n){if((t=Uw(t))!=null&&(typeof t=="string"&&Gf(t),t!=null))switch(On(e,n,0),typeof t){case"number":e=e.g,lo(t),Ys(e,ue,Pe);break;case"bigint":n=BigInt.asUintN(64,t),n=new Ku(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Ys(e.g,n.h,n.g);break;default:n=Gf(t),Ys(e.g,n.h,n.g)}},hi()),Le=pn(function(e,t,n){return e.h===0&&(fn(t,n,Cr(e.g)),!0)},U_,Yh),dc=To(function(e,t,n){return(e.h===0||e.h===2)&&(t=Eo(t,0|t[xt],n,!1,!1),e.h==2?sc(e,Cr,t):t.push(Cr(e.g)),!0)},function(e,t,n){if((t=Mo(xo,t))!=null&&t.length){n=Xh(e,n);for(let i=0;i<t.length;i++)oc(e.g,t[i]);jh(e,n)}},Yh),Ws=pn(function(e,t,n){return e.h===0&&(fn(t,n,(e=Cr(e.g))===0?void 0:e),!0)},U_,Yh),ve=pn(function(e,t,n){return e.h===0&&(fn(t,n,Gh(e.g)),!0)},N_,y_),$s=pn(function(e,t,n){return e.h===0&&(fn(t,n,(e=Gh(e.g))===!1?void 0:e),!0)},N_,y_),rn=To(function(e,t,n){return e.h===2&&(e=Wh(e),Eo(t,0|t[xt],n,!1).push(e),!0)},function(e,t,n){if((t=Mo(co,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&ac(i,r,Wg(s))}},Kh),_r=pn(function(e,t,n){return e.h===2&&(fn(t,n,(e=Wh(e))===""?void 0:e),!0)},O_,Kh),ie=pn(function(e,t,n){return e.h===2&&(fn(t,n,Wh(e)),!0)},O_,Kh),Xe=function(e,t,n=qh){return new So(e,t,n)}(function(e,t,n,i,r){return e.h===2&&(i=Er(void 0,i,!0),Eo(t,0|t[xt],n,!0).push(i),_a(e,i,r),!0)},function(e,t,n,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)F_(e,t[s],n,i,r)}),ae=lc(function(e,t,n,i,r,s){return e.h===2&&(h_(t,0|t[xt],s,n),_a(e,t=Bh(t,i,n),r),!0)},F_),V_=pn(function(e,t,n){return e.h===2&&(fn(t,n,b_(e)),!0)},k_,S_),tS=To(function(e,t,n){return(e.h===0||e.h===2)&&(t=Eo(t,0|t[xt],n,!1,!1),e.h==2?sc(e,$i,t):t.push($i(e.g)),!0)},function(e,t,n){if((t=Mo(i_,t))!=null)for(let o=0;o<t.length;o++){var i=e,r=n,s=t[o];s!=null&&(On(i,r,0),wo(i.g,s))}},E_),eS=pn(function(e,t,n){return e.h===0&&(fn(t,n,(e=$i(e.g))===0?void 0:e),!0)},function(e,t,n){(t=i_(t))!=null&&t!=null&&(On(e,n,0),wo(e.g,t))},E_),ni=pn(function(e,t,n){return e.h===0&&(fn(t,n,Cr(e.g)),!0)},function(e,t,n){(t=xo(t))!=null&&(t=parseInt(t,10),On(e,n,0),oc(e.g,t))},M_);class nS{constructor(t,n){this.h=t,this.g=n,this.l=$t,this.m=wt,this.defaultValue=void 0}}function di(e,t){return new nS(e,t)}function Nr(e,t){return(n,i)=>{if(sl.length){const s=sl.pop();s.o(i),mu(s.g,n,i),n=s}else n=new class{constructor(s,o){if(Hf.length){const a=Hf.pop();mu(a,s,o),s=a}else s=new class{constructor(a,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,mu(this,a,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ba=!1}}(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({fa:s=!1}={}){this.fa=s}}(n,i);try{const s=new e,o=s.u;td(t)(o,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,sl.length<100&&sl.push(n)}return r}}function pc(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};D_(this.u,t,_s(cc,uc,hc,e)),ho(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return t.l=[n],n}}var Kf=class extends ft{constructor(e){super(e)}},Yf=[0,_r,pn(function(e,t,n){return e.h===2&&(fn(t,n,(e=b_(e))===hs()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof ft){const i=t.Ra;return void(i&&(t=i(t),t!=null&&ac(e,n,zh(t).buffer)))}if(Array.isArray(t))return}k_(e,t,n)},S_)];let _u,$f=globalThis.trustedTypes;function Zf(e){_u===void 0&&(_u=function(){let n=null;if(!$f)return n;try{const i=r=>r;n=$f.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}());var t=_u;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(t?t.createScriptURL(e):e)}function iS(e,...t){if(t.length===0)return Zf(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return Zf(n)}var z_=[0,Le,ni,ve,-1,dc,ni,-1],rS=class extends ft{constructor(e){super(e)}},H_=[0,ve,ie,ve,ni,-1,To(function(e,t,n){return(e.h===0||e.h===2)&&(t=Eo(t,0|t[xt],n,!1,!1),e.h==2?sc(e,Ww,t):t.push(Cr(e.g)),!0)},function(e,t,n){if((t=Mo(xo,t))!=null&&t.length){n=Xh(e,n);for(let i=0;i<t.length;i++)oc(e.g,t[i]);jh(e,n)}},M_),ie,-1,[0,ve,-1],ni,ve,-1],G_=[0,ie,-2],Jf=class extends ft{constructor(e){super(e)}},W_=[0],X_=[0,Le,ve,1,ve,-3],Nn=class extends ft{constructor(e){super(e,2)}},He={};He[336783863]=[0,ie,ve,-1,Le,[0,[1,2,3,4,5,6,7,8],ae,W_,ae,H_,ae,G_,ae,X_,ae,z_,ae,[0,ie,-2],ae,[0,ie,ni],ae,[0,ni,ie]],[0,ie],ve,[0,[1,3],[2,4],ae,[0,dc],-1,ae,[0,rn],-1,Xe,[0,ie,-1]],ie];var Qf=[0,gu,-1,$s,-3,gu,dc,_r,Ws,gu,-1,$s,Ws,$s,-2,_r];function Fn(e,t){Xu(e,2,yo(t),"")}function fe(e,t){rc(e,3,t)}function Yt(e,t){rc(e,4,t)}var dn=class extends ft{constructor(e){super(e,500)}o(e){return wt(this,0,7,e)}},Ko=[-1,{}],tm=[0,ie,1,Ko],em=[0,ie,rn,Ko];function kn(e,t){Il(e,1,dn,t)}function ge(e,t){rc(e,10,t)}function Jt(e,t){rc(e,15,t)}var Mn=class extends ft{constructor(e){super(e,500)}o(e){return wt(this,0,1001,e)}},j_=[-500,Xe,[-500,_r,-1,rn,-3,[-2,He,ve],Xe,Yf,Ws,-1,tm,em,Xe,[0,_r,$s],_r,Qf,Ws,rn,987,rn],4,Xe,[-500,ie,-1,[-1,{}],998,ie],Xe,[-500,ie,rn,-1,[-2,{},ve],997,rn,-1],Ws,Xe,[-500,ie,rn,Ko,998,rn],rn,Ws,tm,em,Xe,[0,_r,-1,Ko],rn,-2,Qf,_r,-1,$s,[0,$s,eS],978,Ko,Xe,Yf];Mn.prototype.g=pc(j_);var sS=Nr(Mn,j_),oS=class extends ft{constructor(e){super(e)}},q_=class extends ft{constructor(e){super(e)}g(){return Yi(this,oS,1)}},K_=[0,Xe,[0,Le,Ve,ie,-1]],fc=Nr(q_,K_),aS=class extends ft{constructor(e){super(e)}},lS=class extends ft{constructor(e){super(e)}},vu=class extends ft{constructor(e){super(e)}h(){return $t(this,aS,2)}g(){return Yi(this,lS,5)}},Y_=Nr(class extends ft{constructor(e){super(e)}},[0,rn,dc,ed,[0,ni,[0,Le,-3],[0,Ve,-3],[0,Le,-1,[0,Xe,[0,Le,-2]]],Xe,[0,Ve,-1,ie,Ve]],ie,-1,Pr,Xe,[0,Le,Ve],rn,Pr]),$_=class extends ft{constructor(e){super(e)}},Zs=Nr(class extends ft{constructor(e){super(e)}},[0,Xe,[0,Ve,-4]]),Z_=class extends ft{constructor(e){super(e)}},va=Nr(class extends ft{constructor(e){super(e)}},[0,Xe,[0,Ve,-4]]),cS=class extends ft{constructor(e){super(e)}},uS=[0,Le,-1,ed,ni],J_=class extends ft{constructor(e){super(e)}};J_.prototype.g=pc([0,Ve,-4,Pr]);var hS=class extends ft{constructor(e){super(e)}},dS=Nr(class extends ft{constructor(e){super(e)}},[0,Xe,[0,1,Le,ie,K_],Pr]),nm=class extends ft{constructor(e){super(e)}},pS=class extends ft{constructor(e){super(e)}oa(){const e=c_(this);return e??hs()}},fS=class extends ft{constructor(e){super(e)}},Q_=[1,2],mS=Nr(class extends ft{constructor(e){super(e)}},[0,Xe,[0,Q_,ae,[0,ed],ae,[0,V_],Le,ie],Pr]),nd=class extends ft{constructor(e){super(e)}},tv=[0,ie,Le,Ve,rn,-1],im=class extends ft{constructor(e){super(e)}},gS=[0,ve,-1],rm=class extends ft{constructor(e){super(e)}},fl=[1,2,3,4,5],Ol=class extends ft{constructor(e){super(e)}g(){return c_(this)!=null}h(){return ei(this,2)!=null}},be=class extends ft{constructor(e){super(e)}g(){return n_(uo(this,2))??!1}},ev=[0,V_,ie,[0,Le,Pr,-1],[0,Qw,Pr]],Ie=[0,ev,ve,[0,fl,ae,X_,ae,H_,ae,z_,ae,W_,ae,G_],ni],mc=class extends ft{constructor(e){super(e)}},id=[0,Ie,Ve,-1,Le],_S=di(502141897,mc);He[502141897]=id;var vS=Nr(class extends ft{constructor(e){super(e)}},[0,[0,ni,-1,Jw,tS],uS]),nv=class extends ft{constructor(e){super(e)}},iv=class extends ft{constructor(e){super(e)}},rd=[0,Ie,Ve,[0,Ie],ve],rv=[0,Ie,id,rd,Ve,[0,[0,ev]]],bS=di(508968150,iv);He[508968150]=rv,He[508968149]=rd;var sv=class extends ft{constructor(e){super(e)}},xS=di(513916220,sv);He[513916220]=[0,Ie,rv,Le];var Bs=class extends ft{constructor(e){super(e)}h(){return $t(this,nd,2)}g(){de(this,2)}},ov=[0,Ie,tv];He[478825465]=ov;var yS=class extends ft{constructor(e){super(e)}},av=class extends ft{constructor(e){super(e)}},sd=class extends ft{constructor(e){super(e)}},od=class extends ft{constructor(e){super(e)}},lv=class extends ft{constructor(e){super(e)}},sm=[0,Ie,[0,Ie],ov,-1],cv=[0,Ie,Ve,Le],ad=[0,Ie,Ve],uv=[0,Ie,cv,ad,Ve],ES=di(479097054,lv);He[479097054]=[0,Ie,uv,sm],He[463370452]=sm,He[464864288]=cv;var wS=di(462713202,od);He[462713202]=uv,He[474472470]=ad;var SS=class extends ft{constructor(e){super(e)}},hv=class extends ft{constructor(e){super(e)}},dv=class extends ft{constructor(e){super(e)}},pv=class extends ft{constructor(e){super(e)}},ld=[0,Ie,Ve,-1,Le],$u=[0,Ie,Ve,ve];pv.prototype.g=pc([0,Ie,ad,[0,Ie],id,rd,ld,$u]);var fv=class extends ft{constructor(e){super(e)}},MS=di(456383383,fv);He[456383383]=[0,Ie,tv];var mv=class extends ft{constructor(e){super(e)}},TS=di(476348187,mv);He[476348187]=[0,Ie,gS];var gv=class extends ft{constructor(e){super(e)}},om=class extends ft{constructor(e){super(e)}},_v=[0,ni,-1],AS=di(458105876,class extends ft{constructor(e){super(e)}g(){var e=this.u;const t=0|e[xt],n=2&t;return e=function(i,r,s){var o=om;const a=2&r;let l=!1;if(s==null){if(a)return zf();s=[]}else if(s.constructor===ti){if(!(2&s.L)||a)return s;s=s.X()}else Array.isArray(s)?l=!!(2&(0|s[xt])):s=[];if(a){if(!s.length)return zf();l||(l=!0,bo(s))}else l&&(l=!1,s=u_(s));return l||(64&(0|s[xt])?s[xt]&=-33:32&r&&$l(s,32)),Ee(i,r,2,o=new ti(s,o,Nw,void 0)),o}(e,t,tr(e,t,2)),!n&&om&&(e.ra=!0),e}});He[458105876]=[0,_v,Zw,[!0,Pr,[0,ie,-1,rn]]];var cd=class extends ft{constructor(e){super(e)}},vv=di(458105758,cd);He[458105758]=[0,Ie,ie,_v];var bv=class extends ft{constructor(e){super(e)}},CS=di(443442058,bv);He[443442058]=[0,Ie,ie,Le,Ve,rn,-1,ve,Ve],He[514774813]=ld;var xv=class extends ft{constructor(e){super(e)}},PS=di(516587230,xv);function Zu(e,t){return t=t?t.clone():new nd,e.displayNamesLocale!==void 0?de(t,1,yo(e.displayNamesLocale)):e.displayNamesLocale===void 0&&de(t,1),e.maxResults!==void 0?Si(t,2,e.maxResults):"maxResults"in e&&de(t,2),e.scoreThreshold!==void 0?_t(t,3,e.scoreThreshold):"scoreThreshold"in e&&de(t,3),e.categoryAllowlist!==void 0?Ul(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&de(t,4),e.categoryDenylist!==void 0?Ul(t,5,e.categoryDenylist):"categoryDenylist"in e&&de(t,5),t}function ud(e,t=-1,n=""){return{categories:e.map(i=>({index:Zn(i,1)??0??-1,score:De(i,2)??0,categoryName:ei(i,3)??""??"",displayName:ei(i,4)??""??""})),headIndex:t,headName:n}}function yv(e){var o,a;var t=es(e,3,Ur,ts()),n=es(e,2,xo,ts()),i=es(e,1,co,ts()),r=es(e,9,co,ts());const s={categories:[],keypoints:[]};for(let l=0;l<t.length;l++)s.categories.push({score:t[l],index:n[l]??-1,categoryName:i[l]??"",displayName:r[l]??""});if((t=(o=$t(e,vu,4))==null?void 0:o.h())&&(s.boundingBox={originX:Zn(t,1)??0,originY:Zn(t,2)??0,width:Zn(t,3)??0,height:Zn(t,4)??0,angle:0}),(a=$t(e,vu,4))==null?void 0:a.g().length)for(const l of $t(e,vu,4).g())s.keypoints.push({x:dl(l,1)??0,y:dl(l,2)??0,score:dl(l,4)??0,label:ei(l,3)??""});return s}function gc(e){const t=[];for(const n of Yi(e,Z_,1))t.push({x:De(n,1)??0,y:De(n,2)??0,z:De(n,3)??0,visibility:De(n,4)??0});return t}function Yo(e){const t=[];for(const n of Yi(e,$_,1))t.push({x:De(n,1)??0,y:De(n,2)??0,z:De(n,3)??0,visibility:De(n,4)??0});return t}function am(e){return Array.from(e,t=>t>127?t-256:t)}function lm(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ol;He[516587230]=[0,Ie,ld,$u,Ve],He[518928384]=$u;const RS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function Ev(){if(ol===void 0)try{await WebAssembly.instantiate(RS),ol=!0}catch{ol=!1}return ol}async function ko(e,t=iS``){const n=await Ev()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${e}_${n}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Kr=class{};function wv(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function cm(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(t)})}importScripts(e.toString())}function Sv(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function bt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function um(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Sv(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function hm(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function fi(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function ur(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}Kr.forVisionTasks=function(e){return ko("vision",e)},Kr.forTextTasks=function(e){return ko("text",e)},Kr.forGenAiExperimentalTasks=function(e){return ko("genai_experimental",e)},Kr.forGenAiTasks=function(e){return ko("genai",e)},Kr.forAudioTasks=function(e){return ko("audio",e)},Kr.isSimdSupported=function(){return Ev()};async function LS(e,t,n,i){return e=await(async(r,s,o,a,l)=>{if(s&&await cm(s),!self.ModuleFactory||o&&(await cm(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function bu(e,t){const n=$t(e.baseOptions,Ol,1)||new Ol;typeof t=="string"?(de(n,2,yo(t)),de(n,1)):t instanceof Uint8Array&&(de(n,1,wh(t,!1)),de(n,2)),wt(e.baseOptions,0,1,n)}function dm(e){try{const t=e.G.length;if(t===1)throw Error(e.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.G.map(n=>n.message).join(", "))}finally{e.G=[]}}function ut(e,t){e.B=Math.max(e.B,t)}function _c(e,t){e.A=new dn,Fn(e.A,"PassThroughCalculator"),fe(e.A,"free_memory"),Yt(e.A,"free_memory_unused_out"),ge(t,"free_memory"),kn(t,e.A)}function po(e,t){fe(e.A,t),Yt(e.A,t+"_unused_out")}function vc(e){e.g.addBoolToStream(!0,"free_memory",e.B)}var ml=class{constructor(e){this.g=e,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){var n,i,r,s,o,a;if(t){const l=e.baseOptions||{};if((n=e.baseOptions)!=null&&n.modelAssetBuffer&&((i=e.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=$t(this.baseOptions,Ol,1))!=null&&r.g()||(s=$t(this.baseOptions,Ol,1))!=null&&s.h()||(o=e.baseOptions)!=null&&o.modelAssetBuffer||(a=e.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(c,u){let h=$t(c.baseOptions,rm,3);if(!h){var d=h=new rm,m=new Jf;qo(d,4,fl,m)}"delegate"in u&&(u.delegate==="GPU"?(u=h,d=new rS,qo(u,2,fl,d)):(u=h,d=new Jf,qo(u,4,fl,d))),wt(c.baseOptions,0,3,h)}(this,l),l.modelAssetPath)return fetch(l.modelAssetPath.toString()).then(c=>{if(c.ok)return c.arrayBuffer();throw Error(`Failed to fetch model: ${l.modelAssetPath} (${c.status})`)}).then(c=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(c),!0,!1,!1),bu(this,"/model.dat"),this.m(),this.I()});if(l.modelAssetBuffer instanceof Uint8Array)bu(this,l.modelAssetBuffer);else if(l.modelAssetBuffer)return async function(c){const u=[];for(var h=0;;){const{done:d,value:m}=await c.read();if(d)break;u.push(m),h+=m.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];c=new Uint8Array(h),h=0;for(const d of u)c.set(d,h),h+=d.length;return c}(l.modelAssetBuffer).then(c=>{bu(this,c),this.m(),this.I()})}return this.m(),this.I(),Promise.resolve()}I(){}da(){let e;if(this.g.da(t=>{e=sS(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.G.push(Error(i))}),this.g.La(),this.g.setGraph(e,t),this.A=void 0,dm(this)}finishProcessing(){this.g.finishProcessing(),dm(this)}close(){this.A=void 0,this.g.closeGraph()}};function un(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}ml.prototype.close=ml.prototype.close,function(e,t){e=e.split(".");var n,i=us;for((e[0]in i)||i.execScript===void 0||i.execScript("var "+e[0]);e.length&&(n=e.shift());)e.length||t===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=t}("TaskRunner",ml);class DS{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function pm(e,t,n){const i=e.g;if(n=un(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function fm(e,t){const n=e.g,i=un(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=un(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=un(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.I),n.vertexAttribPointer(e.I,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new DS(n,i,r,s)}function hd(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function ba(e,t,n,i){return hd(e,t),e.h||(e.m(),e.C()),n?(e.s||(e.s=fm(e,!0)),n=e.s):(e.v||(e.v=fm(e,!1)),n=e.v),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Rr(e,t,n){return hd(e,t),e=un(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function bc(e,t,n){hd(e,t),e.A||(e.A=un(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function dd(e){var t;(t=e.g)==null||t.bindFramebuffer(e.g.FRAMEBUFFER,null)}var Ao=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=un(e.createProgram(),"Failed to create WebGL program"),this.aa=pm(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.Z=pm(this,this.G(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.I=e.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.aa),e.deleteShader(this.Z)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}},IS=class extends Ao{G(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}C(){const e=this.g;e.activeTexture(e.TEXTURE1),this.B=Rr(this,e,e.LINEAR),e.activeTexture(e.TEXTURE2),this.j=Rr(this,e,e.NEAREST)}m(){super.m();const e=this.g;this.K=un(e.getUniformLocation(this.h,"backgroundTexture"),"Uniform location"),this.T=un(e.getUniformLocation(this.h,"colorMappingTexture"),"Uniform location"),this.J=un(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const e=this.g;e.uniform1i(this.J,0),e.uniform1i(this.K,1),e.uniform1i(this.T,2)}close(){this.B&&this.g.deleteTexture(this.B),this.j&&this.g.deleteTexture(this.j),super.close()}},US=class extends Ao{G(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}C(){const e=this.g;e.activeTexture(e.TEXTURE1),this.j=Rr(this,e),e.activeTexture(e.TEXTURE2),this.B=Rr(this,e)}m(){super.m();const e=this.g;this.J=un(e.getUniformLocation(this.h,"defaultTexture"),"Uniform location"),this.K=un(e.getUniformLocation(this.h,"overlayTexture"),"Uniform location"),this.H=un(e.getUniformLocation(this.h,"maskTexture"),"Uniform location")}l(){super.l();const e=this.g;e.uniform1i(this.H,0),e.uniform1i(this.J,1),e.uniform1i(this.K,2)}close(){this.j&&this.g.deleteTexture(this.j),this.B&&this.g.deleteTexture(this.B),super.close()}};function Vi(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Ju(e){var t=Vi(e,1);if(!t){if(t=Vi(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=fo(e);var n=pd(e);if(bc(n,i,Mv(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Mv(e){let t=Vi(e,2);if(!t){const n=fo(e);t=Av(e);const i=Ju(e),r=Tv(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),Qu(e)}return t}function fo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=un(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Tv(e){if(e=fo(e),!al)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))al=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");al=e.R16F}return al}function pd(e){return e.l||(e.l=new Ao),e.l}function Av(e){const t=fo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=Vi(e,2);return n||(n=Rr(pd(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Qu(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var al,We=class{constructor(e,t,n,i,r,s,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--mm===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!Vi(this,0)}ja(){return!!Vi(this,1)}P(){return!!Vi(this,2)}ia(){return(t=Vi(e=this,0))||(t=Ju(e),t=new Uint8Array(t.map(n=>255*n)),e.g.push(t)),t;var e,t}ha(){return Ju(this)}M(){return Mv(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=fo(this),r=pd(this);i.activeTexture(i.TEXTURE1),n=Rr(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Tv(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),bc(r,i,n),ba(r,i,!1,()=>{Av(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Qu(this)}),dd(r),Qu(this)}}e.push(n)}return new We(e,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&fo(this).deleteTexture(Vi(this,2)),mm=-1}};We.prototype.close=We.prototype.close,We.prototype.clone=We.prototype.clone,We.prototype.getAsWebGLTexture=We.prototype.M,We.prototype.getAsFloat32Array=We.prototype.ha,We.prototype.getAsUint8Array=We.prototype.ia,We.prototype.hasWebGLTexture=We.prototype.P,We.prototype.hasFloat32Array=We.prototype.ja,We.prototype.hasUint8Array=We.prototype.Fa;var mm=250;const NS={color:"white",lineWidth:4,radius:6};function xu(e){return{...NS,fillColor:(e=e||{}).color,...e}}function Ni(e,t){return e instanceof Function?e(t):e}function gm(e,t,n){return Math.max(Math.min(t,n),Math.min(Math.max(t,n),e))}function Bo(e){if(!e.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return e.l}function ea(e){if(!e.j)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return e.j}function _m(e,t,n){if(t.P())n(t.M());else{const i=t.ja()?t.ha():t.ia();e.m=e.m??new Ao;const r=ea(e);n((e=new We([i],t.m,!1,r.canvas,e.m,t.width,t.height)).M()),e.close()}}function vm(e,t,n,i){const r=function(a){return a.g||(a.g=new IS),a.g}(e),s=ea(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;ba(r,s,!0,()=>{(function(l,c,u,h){const d=l.g;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,c),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,l.B),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,u),l.H&&function(m,_){if(m!==_)return!1;m=m.entries(),_=_.entries();for(const[f,p]of m){m=f;const M=p;var b=_.next();if(b.done)return!1;const[E,T]=b.value;if(b=T,m!==E||M[0]!==b[0]||M[1]!==b[1]||M[2]!==b[2]||M[3]!==b[3])return!1}return!!_.next().done}(l.H,h))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,l.j);else{l.H=h;const m=Array(1024).fill(0);h.forEach((_,b)=>{if(_.length!==4)throw Error(`Color at index ${b} is not a four-channel value.`);m[4*b]=_[0],m[4*b+1]=_[1],m[4*b+2]=_[2],m[4*b+3]=_[3]}),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,l.j),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(m))}})(r,t,o,i),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4);const a=r.g;a.activeTexture(a.TEXTURE0),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE1),a.bindTexture(a.TEXTURE_2D,null),a.activeTexture(a.TEXTURE2),a.bindTexture(a.TEXTURE_2D,null)})}function bm(e,t,n,i){const r=ea(e),s=function(l){return l.h||(l.h=new US),l.h}(e),o=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,a=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;ba(s,r,!0,()=>{var l=s.g;l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,t),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,s.j),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,o),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,s.B),l.texImage2D(l.TEXTURE_2D,0,l.RGBA,l.RGBA,l.UNSIGNED_BYTE,a),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4),r.bindTexture(r.TEXTURE_2D,null),(l=s.g).activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,null),l.activeTexture(l.TEXTURE2),l.bindTexture(l.TEXTURE_2D,null)})}var on=class{constructor(e,t){e instanceof CanvasRenderingContext2D||e instanceof OffscreenCanvasRenderingContext2D?(this.l=e,this.j=t):this.j=e}ya(e,t){if(e){var n=Bo(this);t=xu(t),n.save();var i=n.canvas,r=0;for(const s of e)n.fillStyle=Ni(t.fillColor,{index:r,from:s}),n.strokeStyle=Ni(t.color,{index:r,from:s}),n.lineWidth=Ni(t.lineWidth,{index:r,from:s}),(e=new Path2D).arc(s.x*i.width,s.y*i.height,Ni(t.radius,{index:r,from:s}),0,2*Math.PI),n.fill(e),n.stroke(e),++r;n.restore()}}xa(e,t,n){if(e&&t){var i=Bo(this);n=xu(n),i.save();var r=i.canvas,s=0;for(const o of t){i.beginPath(),t=e[o.start];const a=e[o.end];t&&a&&(i.strokeStyle=Ni(n.color,{index:s,from:t,to:a}),i.lineWidth=Ni(n.lineWidth,{index:s,from:t,to:a}),i.moveTo(t.x*r.width,t.y*r.height),i.lineTo(a.x*r.width,a.y*r.height)),++s,i.stroke()}i.restore()}}ua(e,t){const n=Bo(this);t=xu(t),n.save(),n.beginPath(),n.lineWidth=Ni(t.lineWidth,{}),n.strokeStyle=Ni(t.color,{}),n.fillStyle=Ni(t.fillColor,{}),n.moveTo(e.originX,e.originY),n.lineTo(e.originX+e.width,e.originY),n.lineTo(e.originX+e.width,e.originY+e.height),n.lineTo(e.originX,e.originY+e.height),n.lineTo(e.originX,e.originY),n.stroke(),n.fill(),n.restore()}va(e,t,n=[0,0,0,255]){this.l?function(i,r,s,o){const a=ea(i);_m(i,r,l=>{vm(i,l,s,o),(l=Bo(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)})}(this,e,n,t):vm(this,e.M(),n,t)}wa(e,t,n){this.l?function(i,r,s,o){const a=ea(i);_m(i,r,l=>{bm(i,l,s,o),(l=Bo(i)).drawImage(a.canvas,0,0,l.canvas.width,l.canvas.height)})}(this,e,t,n):bm(this,e.M(),t,n)}close(){var e,t,n;(e=this.g)==null||e.close(),this.g=void 0,(t=this.h)==null||t.close(),this.h=void 0,(n=this.m)==null||n.close(),this.m=void 0}};function bi(e,t){switch(t){case 0:return e.g.find(n=>n instanceof ImageData);case 1:return e.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function Cv(e){var t=bi(e,0);if(!t){t=mo(e);const n=xc(e),i=new Uint8Array(e.width*e.height*4);bc(n,t,gl(e)),t.readPixels(0,0,e.width,e.height,t.RGBA,t.UNSIGNED_BYTE,i),dd(n),t=new ImageData(new Uint8ClampedArray(i.buffer),e.width,e.height),e.g.push(t)}return t}function gl(e){let t=bi(e,2);if(!t){const n=mo(e);t=_l(e);const i=bi(e,1)||Cv(e);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),jo(e)}return t}function mo(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=un(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function xc(e){return e.l||(e.l=new Ao),e.l}function _l(e){const t=mo(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=bi(e,2);return n||(n=Rr(xc(e),t),e.g.push(n),e.m=!0),t.bindTexture(t.TEXTURE_2D,n),n}function jo(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}function xm(e){const t=mo(e);return ba(xc(e),t,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,o=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=o,n}(e,()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(e.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return e.canvas.transferToImageBitmap()}))}on.prototype.close=on.prototype.close,on.prototype.drawConfidenceMask=on.prototype.wa,on.prototype.drawCategoryMask=on.prototype.va,on.prototype.drawBoundingBox=on.prototype.ua,on.prototype.drawConnectors=on.prototype.xa,on.prototype.drawLandmarks=on.prototype.ya,on.lerp=function(e,t,n,i,r){return gm(i*(1-(e-t)/(n-t))+r*(1-(n-e)/(n-t)),i,r)},on.clamp=gm;var Ze=class{constructor(e,t,n,i,r,s,o){this.g=e,this.j=t,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--ym===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!bi(this,0)}ka(){return!!bi(this,1)}P(){return!!bi(this,2)}Ca(){return Cv(this)}Ba(){var e=bi(this,1);return e||(gl(this),_l(this),e=xm(this),jo(this),this.g.push(e),this.j=!0),e}M(){return gl(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof ImageData)n=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=mo(this),r=xc(this);i.activeTexture(i.TEXTURE1),n=Rr(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),bc(r,i,n),ba(r,i,!1,()=>{_l(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),jo(this)}),dd(r),jo(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);gl(this),_l(this),n=xm(this),jo(this)}e.push(n)}return new Ze(e,this.ka(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&bi(this,1).close(),this.m&&mo(this).deleteTexture(bi(this,2)),ym=-1}};Ze.prototype.close=Ze.prototype.close,Ze.prototype.clone=Ze.prototype.clone,Ze.prototype.getAsWebGLTexture=Ze.prototype.M,Ze.prototype.getAsImageBitmap=Ze.prototype.Ba,Ze.prototype.getAsImageData=Ze.prototype.Ca,Ze.prototype.hasWebGLTexture=Ze.prototype.P,Ze.prototype.hasImageBitmap=Ze.prototype.ka,Ze.prototype.hasImageData=Ze.prototype.Ea;var ym=250;function pi(...e){return e.map(([t,n])=>({start:t,end:n}))}const OS=function(e){return class extends e{La(){this.i._registerModelResourcesGraphService()}}}((Em=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:wv()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),bt(this,i||"input_audio",s=>{bt(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}da(e){fi(this,"__graph_config__",t=>{e(t)}),bt(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),bt(this,i,o=>{this.i._addAudioToInputStream(this.g,t,n,o,r)})}addGpuBufferToStream(e,t,n){bt(this,t,i=>{const[r,s]=um(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(e,t,n){bt(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){bt(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){bt(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){bt(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){bt(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){bt(this,t,i=>{bt(this,e,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(e,t,n){bt(this,t,i=>{hm(this,Object.keys(e),r=>{hm(this,Object.values(e),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){bt(this,n,r=>{bt(this,t,s=>{const o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(e,t){bt(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){bt(this,t,i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(e,t,n){bt(this,t,i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(e,t,n){bt(this,t,i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(e,t,n){bt(this,t,i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(e,t,n){bt(this,t,i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(e,t,n){bt(this,t,i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)bt(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(e,t){bt(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){bt(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){bt(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){bt(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){bt(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){bt(this,t,n=>{bt(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){bt(this,n,i=>{bt(this,t,r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(e,t){bt(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){bt(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){bt(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){bt(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){bt(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){bt(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)bt(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){fi(this,e,t),bt(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){ur(this,e,t),bt(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){fi(this,e,t),bt(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){ur(this,e,t),bt(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){fi(this,e,t),bt(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){ur(this,e,t),bt(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){fi(this,e,t),bt(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){ur(this,e,t),bt(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){fi(this,e,t),bt(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){ur(this,e,t),bt(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){fi(this,e,t),bt(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){ur(this,e,t),bt(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){fi(this,e,t),bt(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){ur(this,e,t),bt(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),fi(this,e,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)}),bt(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Em{get ea(){return this.i}qa(e,t,n){bt(this,t,i=>{const[r,s]=um(this,e,i);this.ea._addBoundTextureAsImageToStream(i,r,s,n)})}U(e,t){fi(this,e,t),bt(this,e,n=>{this.ea._attachImageListener(n)})}ca(e,t){ur(this,e,t),bt(this,e,n=>{this.ea._attachImageVectorListener(n)})}}));var Em,ii=class extends OS{};async function qt(e,t,n){return async function(i,r,s,o){return LS(i,r,s,o)}(e,n.canvas??(wv()?void 0:document.createElement("canvas")),t,n)}function Pv(e,t,n,i){if(e.T){const s=new J_;if(n!=null&&n.regionOfInterest){if(!e.pa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");_t(s,1,(r.left+r.right)/2),_t(s,2,(r.top+r.bottom)/2),_t(s,4,r.right-r.left),_t(s,3,r.bottom-r.top)}else _t(s,1,.5),_t(s,2,.5),_t(s,4,1),_t(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(_t(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=Sv(t);n=De(s,3)*a/o,r=De(s,4)*o/a,_t(s,4,n),_t(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.T,i)}e.g.qa(t,e.aa,i??performance.now()),e.finishProcessing()}function ri(e,t,n){var i;if((i=e.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Pv(e,t,n,e.B+1)}function Ci(e,t,n,i){var r;if(!((r=e.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Pv(e,t,n,i)}function go(e,t,n,i){var r=t.data;const s=t.width,o=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return e=new We([r],n,!1,e.g.i.canvas,e.O,s,t),i?e.clone():e}var wn=class extends ml{constructor(e,t,n,i){super(e),this.g=e,this.aa=t,this.T=n,this.pa=i,this.O=new Ao}l(e,t=!0){if("runningMode"in e&&Qo(this.baseOptions,2,!!e.runningMode&&e.runningMode!=="IMAGE"),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.O.close(),super.close()}};wn.prototype.close=wn.prototype.close;var Gn=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},wt(e=this.h=new mc,0,1,t=new be),_t(this.h,2,.5),_t(this.h,3,.3)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&_t(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&_t(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}D(e,t){return this.j={detections:[]},ri(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Ci(this,e,n,t),this.j}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect_in"),Jt(e,"detections");const t=new Nn;ui(t,_S,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect_in"),Yt(n,"DETECTIONS:detections"),n.o(t),kn(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Y_(s),this.j.detections.push(yv(i));ut(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Gn.prototype.detectForVideo=Gn.prototype.F,Gn.prototype.detect=Gn.prototype.D,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=async function(e,t){return qt(Gn,e,{baseOptions:{modelAssetPath:t}})},Gn.createFromModelBuffer=function(e,t){return qt(Gn,e,{baseOptions:{modelAssetBuffer:t}})},Gn.createFromOptions=function(e,t){return qt(Gn,e,t)};var fd=pi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),md=pi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),gd=pi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Rv=pi([474,475],[475,476],[476,477],[477,474]),_d=pi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),vd=pi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Lv=pi([469,470],[470,471],[471,472],[472,469]),bd=pi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Dv=[...fd,...md,...gd,..._d,...vd,...bd],Iv=pi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function wm(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ce=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,wt(e=this.h=new iv,0,1,t=new be),this.v=new nv,wt(this.h,0,3,this.v),this.s=new mc,wt(this.h,0,2,this.s),Si(this.s,4,1),_t(this.s,2,.5),_t(this.v,2,.5),_t(this.h,4,.5)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"numFaces"in e&&Si(this.s,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&_t(this.s,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&_t(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&_t(this.v,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}D(e,t){return wm(this),ri(this,e,t),this.j}F(e,t,n){return wm(this),Ci(this,e,n,t),this.j}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect"),Jt(e,"face_landmarks");const t=new Nn;ui(t,bS,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),kn(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=va(s),this.j.faceLandmarks.push(gc(i));ut(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ut(this,i)}),this.outputFaceBlendshapes&&(Jt(e,"blendshapes"),Yt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=fc(s),this.j.faceBlendshapes.push(ud(i.g()??[]));ut(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ut(this,i)})),this.outputFacialTransformationMatrixes&&(Jt(e,"face_geometry"),Yt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=$t(vS(s),cS,2))&&this.j.facialTransformationMatrixes.push({rows:Zn(i,1)??0??0,columns:Zn(i,2)??0??0,data:es(i,3,Ur,ts()).slice()??[]});ut(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ut(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ce.prototype.detectForVideo=Ce.prototype.F,Ce.prototype.detect=Ce.prototype.D,Ce.prototype.setOptions=Ce.prototype.o,Ce.createFromModelPath=function(e,t){return qt(Ce,e,{baseOptions:{modelAssetPath:t}})},Ce.createFromModelBuffer=function(e,t){return qt(Ce,e,{baseOptions:{modelAssetBuffer:t}})},Ce.createFromOptions=function(e,t){return qt(Ce,e,t)},Ce.FACE_LANDMARKS_LIPS=fd,Ce.FACE_LANDMARKS_LEFT_EYE=md,Ce.FACE_LANDMARKS_LEFT_EYEBROW=gd,Ce.FACE_LANDMARKS_LEFT_IRIS=Rv,Ce.FACE_LANDMARKS_RIGHT_EYE=_d,Ce.FACE_LANDMARKS_RIGHT_EYEBROW=vd,Ce.FACE_LANDMARKS_RIGHT_IRIS=Lv,Ce.FACE_LANDMARKS_FACE_OVAL=bd,Ce.FACE_LANDMARKS_CONTOURS=Dv,Ce.FACE_LANDMARKS_TESSELATION=Iv;var mi=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!0),wt(e=this.j=new sv,0,1,t=new be)}get baseOptions(){return $t(this.j,be,1)}set baseOptions(e){wt(this.j,0,1,e)}o(e){return super.l(e)}Oa(e,t,n){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:n,ri(this,e,i??{}),!this.h)return this.s}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect"),Jt(e,"stylized_image");const t=new Nn;ui(t,xS,this.j);const n=new dn;Fn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"STYLIZED_IMAGE:stylized_image"),n.o(t),kn(e,n),this.g.U("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const l=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*l){const c=new Uint8ClampedArray(4*l);for(let u=0;u<l;++u)c[4*u]=o[3*u],c[4*u+1]=o[3*u+1],c[4*u+2]=o[3*u+2],c[4*u+3]=255;o=new ImageData(c,a,i)}else{if(o.length!==4*l)throw Error("Unsupported channel count: "+o.length/l);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Ze([o],!1,!1,this.g.i.canvas,this.O,a,i),this.s=s=s?a.clone():a,this.h&&this.h(s),ut(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mi.prototype.stylize=mi.prototype.Oa,mi.prototype.setOptions=mi.prototype.o,mi.createFromModelPath=function(e,t){return qt(mi,e,{baseOptions:{modelAssetPath:t}})},mi.createFromModelBuffer=function(e,t){return qt(mi,e,{baseOptions:{modelAssetBuffer:t}})},mi.createFromOptions=function(e,t){return qt(mi,e,t)};var xd=pi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Sm(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Mm(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Tm(e,t=!0){const n=[];for(const r of e){var i=fc(r);e=[];for(const s of i.g())i=t&&Zn(s,1)!=null?Zn(s,1)??0:-1,e.push({score:De(s,2)??0,index:i,categoryName:ei(s,3)??""??"",displayName:ei(s,4)??""??""});n.push(e)}return n}var Ln=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],wt(e=this.j=new lv,0,1,t=new be),this.s=new od,wt(this.j,0,2,this.s),this.C=new sd,wt(this.s,0,3,this.C),this.v=new av,wt(this.s,0,2,this.v),this.h=new yS,wt(this.j,0,3,this.h),_t(this.v,2,.5),_t(this.s,4,.5),_t(this.C,2,.5)}get baseOptions(){return $t(this.j,be,1)}set baseOptions(e){wt(this.j,0,1,e)}o(e){var r,s,o,a;if(Si(this.v,3,e.numHands??1),"minHandDetectionConfidence"in e&&_t(this.v,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&_t(this.s,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&_t(this.C,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Bs,n=t,i=Zu(e.cannedGesturesClassifierOptions,(r=$t(this.h,Bs,3))==null?void 0:r.h());wt(n,0,2,i),wt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&((s=$t(this.h,Bs,3))==null||s.g());return e.customGesturesClassifierOptions?(wt(n=t=new Bs,0,2,i=Zu(e.customGesturesClassifierOptions,(o=$t(this.h,Bs,4))==null?void 0:o.h())),wt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&((a=$t(this.h,Bs,4))==null||a.g()),this.l(e)}Ja(e,t){return Sm(this),ri(this,e,t),Mm(this)}Ka(e,t,n){return Sm(this),Ci(this,e,n,t),Mm(this)}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect"),Jt(e,"hand_gestures"),Jt(e,"hand_landmarks"),Jt(e,"world_hand_landmarks"),Jt(e,"handedness");const t=new Nn;ui(t,ES,this.j);const n=new dn;Fn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"HAND_GESTURES:hand_gestures"),Yt(n,"LANDMARKS:hand_landmarks"),Yt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Yt(n,"HANDEDNESS:handedness"),n.o(t),kn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=va(s);const o=[];for(const a of Yi(i,Z_,1))o.push({x:De(a,1)??0,y:De(a,2)??0,z:De(a,3)??0,visibility:De(a,4)??0});this.landmarks.push(o)}ut(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Zs(s);const o=[];for(const a of Yi(i,$_,1))o.push({x:De(a,1)??0,y:De(a,2)??0,z:De(a,3)??0,visibility:De(a,4)??0});this.worldLandmarks.push(o)}ut(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Tm(i,!1)),ut(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ut(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Tm(i)),ut(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Am(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}Ln.prototype.recognizeForVideo=Ln.prototype.Ka,Ln.prototype.recognize=Ln.prototype.Ja,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(e,t){return qt(Ln,e,{baseOptions:{modelAssetPath:t}})},Ln.createFromModelBuffer=function(e,t){return qt(Ln,e,{baseOptions:{modelAssetBuffer:t}})},Ln.createFromOptions=function(e,t){return qt(Ln,e,t)},Ln.HAND_CONNECTIONS=xd;var ln=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],wt(e=this.h=new od,0,1,t=new be),this.s=new sd,wt(this.h,0,3,this.s),this.j=new av,wt(this.h,0,2,this.j),Si(this.j,3,1),_t(this.j,2,.5),_t(this.s,2,.5),_t(this.h,4,.5)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"numHands"in e&&Si(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&_t(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&_t(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&_t(this.s,2,e.minHandPresenceConfidence??.5),this.l(e)}D(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ri(this,e,t),Am(this)}F(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ci(this,e,n,t),Am(this)}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect"),Jt(e,"hand_landmarks"),Jt(e,"world_hand_landmarks"),Jt(e,"handedness");const t=new Nn;ui(t,wS,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"LANDMARKS:hand_landmarks"),Yt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Yt(n,"HANDEDNESS:handedness"),n.o(t),kn(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=va(s),this.landmarks.push(gc(i));ut(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Zs(s),this.worldLandmarks.push(Yo(i));ut(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const l of i){i=fc(l);const c=[];for(const u of i.g())c.push({score:De(u,2)??0,index:Zn(u,1)??0??-1,categoryName:ei(u,3)??""??"",displayName:ei(u,4)??""??""});a.push(c)}o.call(s,...a),ut(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};ln.prototype.detectForVideo=ln.prototype.F,ln.prototype.detect=ln.prototype.D,ln.prototype.setOptions=ln.prototype.o,ln.createFromModelPath=function(e,t){return qt(ln,e,{baseOptions:{modelAssetPath:t}})},ln.createFromModelBuffer=function(e,t){return qt(ln,e,{baseOptions:{modelAssetBuffer:t}})},ln.createFromOptions=function(e,t){return qt(ln,e,t)},ln.HAND_CONNECTIONS=xd;var Uv=pi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Cm(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Pm(e){try{if(!e.C)return e.h;e.C(e.h)}finally{vc(e)}}function ll(e,t){e=va(e),t.push(gc(e))}var _e=class extends wn{constructor(e,t){super(new ii(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,wt(e=this.j=new pv,0,1,t=new be),this.J=new sd,wt(this.j,0,2,this.J),this.Z=new SS,wt(this.j,0,3,this.Z),this.s=new mc,wt(this.j,0,4,this.s),this.H=new nv,wt(this.j,0,5,this.H),this.v=new hv,wt(this.j,0,6,this.v),this.K=new dv,wt(this.j,0,7,this.K),_t(this.s,2,.5),_t(this.s,3,.3),_t(this.H,2,.5),_t(this.v,2,.5),_t(this.v,3,.3),_t(this.K,2,.5),_t(this.J,2,.5)}get baseOptions(){return $t(this.j,be,1)}set baseOptions(e){wt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&_t(this.s,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&_t(this.s,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&_t(this.H,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&_t(this.v,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&_t(this.v,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&_t(this.K,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&_t(this.J,2,e.minHandLandmarksConfidence??.5),this.l(e)}D(e,t,n){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:n,Cm(this),ri(this,e,i),Pm(this)}F(e,t,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,Cm(this),Ci(this,e,r,t),Pm(this)}m(){var e=new Mn;ge(e,"input_frames_image"),Jt(e,"pose_landmarks"),Jt(e,"pose_world_landmarks"),Jt(e,"face_landmarks"),Jt(e,"left_hand_landmarks"),Jt(e,"left_hand_world_landmarks"),Jt(e,"right_hand_landmarks"),Jt(e,"right_hand_world_landmarks");const t=new Nn,n=new Kf;Xu(n,1,yo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))de(r,2,a_(s));else{if(!(typeof s=="string"||s instanceof Xi||fa(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Xu(r,2,wh(s,!1),hs())}}(n,this.j.g());const i=new dn;Fn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Il(i,8,Kf,n),fe(i,"IMAGE:input_frames_image"),Yt(i,"POSE_LANDMARKS:pose_landmarks"),Yt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Yt(i,"FACE_LANDMARKS:face_landmarks"),Yt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Yt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Yt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Yt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),kn(e,i),_c(this,e),this.g.attachProtoListener("pose_landmarks",(r,s)=>{ll(r,this.h.poseLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=Zs(r),o.push(Yo(r)),ut(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ut(this,r)}),this.outputPoseSegmentationMasks&&(Yt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),po(this,"pose_segmentation_mask"),this.g.U("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[go(this,r,!0,!this.C)],ut(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ut(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{ll(r,this.h.faceLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ut(this,r)}),this.outputFaceBlendshapes&&(Jt(e,"extra_blendshapes"),Yt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=fc(r),o.push(ud(r.g()??[]))),ut(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ut(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{ll(r,this.h.leftHandLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=Zs(r),o.push(Yo(r)),ut(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{ll(r,this.h.rightHandLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=Zs(r),o.push(Yo(r)),ut(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ut(this,r)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};_e.prototype.detectForVideo=_e.prototype.F,_e.prototype.detect=_e.prototype.D,_e.prototype.setOptions=_e.prototype.o,_e.createFromModelPath=function(e,t){return qt(_e,e,{baseOptions:{modelAssetPath:t}})},_e.createFromModelBuffer=function(e,t){return qt(_e,e,{baseOptions:{modelAssetBuffer:t}})},_e.createFromOptions=function(e,t){return qt(_e,e,t)},_e.HAND_CONNECTIONS=xd,_e.POSE_CONNECTIONS=Uv,_e.FACE_LANDMARKS_LIPS=fd,_e.FACE_LANDMARKS_LEFT_EYE=md,_e.FACE_LANDMARKS_LEFT_EYEBROW=gd,_e.FACE_LANDMARKS_LEFT_IRIS=Rv,_e.FACE_LANDMARKS_RIGHT_EYE=_d,_e.FACE_LANDMARKS_RIGHT_EYEBROW=vd,_e.FACE_LANDMARKS_RIGHT_IRIS=Lv,_e.FACE_LANDMARKS_FACE_OVAL=bd,_e.FACE_LANDMARKS_CONTOURS=Dv,_e.FACE_LANDMARKS_TESSELATION=Iv;var Wn=class extends wn{constructor(e,t){super(new ii(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},wt(e=this.h=new fv,0,1,t=new be)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return wt(this.h,0,2,Zu(e,$t(this.h,nd,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},ri(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},Ci(this,e,n,t),this.j}m(){var e=new Mn;ge(e,"input_image"),ge(e,"norm_rect"),Jt(e,"classifications");const t=new Nn;ui(t,MS,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),fe(n,"IMAGE:input_image"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"CLASSIFICATIONS:classifications"),n.o(t),kn(e,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:Yi(s,hS,1).map(a=>{var l;return ud(((l=$t(a,q_,4))==null?void 0:l.g())??[],Zn(a,2)??0,ei(a,3)??"")})};return Dl(uo(s,2))!=null&&(o.timestampMs=Dl(uo(s,2))??0),o}(dS(i)),ut(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Wn.prototype.classifyForVideo=Wn.prototype.ta,Wn.prototype.classify=Wn.prototype.sa,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(e,t){return qt(Wn,e,{baseOptions:{modelAssetPath:t}})},Wn.createFromModelBuffer=function(e,t){return qt(Wn,e,{baseOptions:{modelAssetBuffer:t}})},Wn.createFromOptions=function(e,t){return qt(Wn,e,t)};var Dn=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!0),this.h=new mv,this.embeddings={embeddings:[]},wt(e=this.h,0,1,t=new be)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){var t=this.h,n=$t(this.h,im,2);return n=n?n.clone():new im,e.l2Normalize!==void 0?Qo(n,1,e.l2Normalize):"l2Normalize"in e&&de(n,1),e.quantize!==void 0?Qo(n,2,e.quantize):"quantize"in e&&de(n,2),wt(t,0,2,n),this.l(e)}za(e,t){return ri(this,e,t),this.embeddings}Aa(e,t,n){return Ci(this,e,n,t),this.embeddings}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect"),Jt(e,"embeddings_out");const t=new Nn;ui(t,TS,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"EMBEDDINGS:embeddings_out"),n.o(t),kn(e,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=mS(i),this.embeddings=function(s){return{embeddings:Yi(s,fS,1).map(o=>{var l,c;const a={headIndex:Zn(o,3)??0??-1,headName:ei(o,4)??""??""};if(d_(o,nm,fu(o,1))!==void 0)o=es(o=$t(o,nm,fu(o,1)),1,Ur,ts()),a.floatEmbedding=o.slice();else{const u=new Uint8Array(0);a.quantizedEmbedding=((c=(l=$t(o,pS,fu(o,2)))==null?void 0:l.oa())==null?void 0:c.h())??u}return a}),timestampMs:Dl(uo(s,2))??0}}(i),ut(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Dn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=lm(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=lm(am(e.quantizedEmbedding),am(t.quantizedEmbedding))}return e},Dn.prototype.embedForVideo=Dn.prototype.Aa,Dn.prototype.embed=Dn.prototype.za,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=function(e,t){return qt(Dn,e,{baseOptions:{modelAssetPath:t}})},Dn.createFromModelBuffer=function(e,t){return qt(Dn,e,{baseOptions:{modelAssetBuffer:t}})},Dn.createFromOptions=function(e,t){return qt(Dn,e,t)};var th=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};function Rm(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Lm(e){try{const t=new th(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{vc(e)}}th.prototype.close=th.prototype.close;var _n=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new cd,this.v=new gv,wt(this.h,0,3,this.v),wt(e=this.h,0,1,t=new be)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?de(this.h,2,yo(e.displayNamesLocale)):"displayNamesLocale"in e&&de(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}I(){(function(e){var n,i;const t=Yi(e.da(),dn,1).filter(r=>(ei(r,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(n=$t(t[0],Nn,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{e.s[Number(s)]=ei(r,1)??""})})(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,Rm(this),ri(this,e,i),Lm(this)}Ma(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Rm(this),Ci(this,e,r,t),Lm(this)}Da(){return this.s}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect");const t=new Nn;ui(t,vv,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),n.o(t),kn(e,n),_c(this,e),this.outputConfidenceMasks&&(Jt(e,"confidence_masks"),Yt(n,"CONFIDENCE_MASKS:confidence_masks"),po(this,"confidence_masks"),this.g.ca("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>go(this,s,!0,!this.j)),ut(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ut(this,i)})),this.outputCategoryMask&&(Jt(e,"category_mask"),Yt(n,"CATEGORY_MASK:category_mask"),po(this,"category_mask"),this.g.U("category_mask",(i,r)=>{this.categoryMask=go(this,i,!1,!this.j),ut(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ut(this,i)})),Jt(e,"quality_scores"),Yt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ut(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};_n.prototype.getLabels=_n.prototype.Da,_n.prototype.segmentForVideo=_n.prototype.Ma,_n.prototype.segment=_n.prototype.segment,_n.prototype.setOptions=_n.prototype.o,_n.createFromModelPath=function(e,t){return qt(_n,e,{baseOptions:{modelAssetPath:t}})},_n.createFromModelBuffer=function(e,t){return qt(_n,e,{baseOptions:{modelAssetBuffer:t}})},_n.createFromOptions=function(e,t){return qt(_n,e,t)};var eh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){var e,t;(e=this.confidenceMasks)==null||e.forEach(n=>{n.close()}),(t=this.categoryMask)==null||t.close()}};eh.prototype.close=eh.prototype.close;var FS=class extends ft{constructor(e){super(e)}},Vs=[0,Le,-2],Fl=[0,ki,-3,ve,ki,-1],Dm=[0,Fl],Im=[0,Fl,Le,-1],yu=class extends ft{constructor(e){super(e)}},Um=[0,ki,-1,ve],kS=class extends ft{constructor(e){super(e)}},Nm=class extends ft{constructor(e){super(e)}},nh=[1,2,3,4,5,6,7,8,9,10,14,15],Nv=class extends ft{constructor(e){super(e)}};Nv.prototype.g=pc([0,Xe,[0,nh,ae,Fl,ae,[0,Fl,Vs],ae,Dm,ae,[0,Dm,Vs],ae,Um,ae,[0,ki,-3,ve,ni],ae,[0,ki,-3,ve],ae,[0,ie,ki,-2,ve,Le,ve,-1,2,ki,Vs],ae,Im,ae,[0,Im,Vs],ki,Vs,ie,ae,[0,ki,-3,ve,Vs,-1],ae,[0,Xe,Um]],ie,[0,ie,Le,-1,ve]]);var gi=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new cd,this.s=new gv,wt(this.h,0,3,this.s),wt(e=this.h,0,1,t=new be)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Nv;const s=new Nm;var o=new FS;if(Si(o,1,255),wt(s,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new yu;Qo(a,3,!0),_t(a,1,t.keypoint.x),_t(a,2,t.keypoint.y),qo(s,5,nh,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new kS,t.scribble))Qo(t=new yu,3,!0),_t(t,1,a.x),_t(t,2,a.y),Il(o,1,yu,t);qo(s,15,nh,o)}Il(i,1,Nm,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),ri(this,e,r);t:{try{const c=new eh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break t}this.j(c)}finally{vc(this)}l=void 0}return l}m(){var e=new Mn;ge(e,"image_in"),ge(e,"roi_in"),ge(e,"norm_rect_in");const t=new Nn;ui(t,vv,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),fe(n,"IMAGE:image_in"),fe(n,"ROI:roi_in"),fe(n,"NORM_RECT:norm_rect_in"),n.o(t),kn(e,n),_c(this,e),this.outputConfidenceMasks&&(Jt(e,"confidence_masks"),Yt(n,"CONFIDENCE_MASKS:confidence_masks"),po(this,"confidence_masks"),this.g.ca("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>go(this,s,!0,!this.j)),ut(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ut(this,i)})),this.outputCategoryMask&&(Jt(e,"category_mask"),Yt(n,"CATEGORY_MASK:category_mask"),po(this,"category_mask"),this.g.U("category_mask",(i,r)=>{this.categoryMask=go(this,i,!1,!this.j),ut(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ut(this,i)})),Jt(e,"quality_scores"),Yt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ut(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};gi.prototype.segment=gi.prototype.segment,gi.prototype.setOptions=gi.prototype.o,gi.createFromModelPath=function(e,t){return qt(gi,e,{baseOptions:{modelAssetPath:t}})},gi.createFromModelBuffer=function(e,t){return qt(gi,e,{baseOptions:{modelAssetBuffer:t}})},gi.createFromOptions=function(e,t){return qt(gi,e,t)};var Xn=class extends wn{constructor(e,t){super(new ii(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},wt(e=this.h=new bv,0,1,t=new be)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?de(this.h,2,yo(e.displayNamesLocale)):"displayNamesLocale"in e&&de(this.h,2),e.maxResults!==void 0?Si(this.h,3,e.maxResults):"maxResults"in e&&de(this.h,3),e.scoreThreshold!==void 0?_t(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&de(this.h,4),e.categoryAllowlist!==void 0?Ul(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&de(this.h,5),e.categoryDenylist!==void 0?Ul(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&de(this.h,6),this.l(e)}D(e,t){return this.j={detections:[]},ri(this,e,t),this.j}F(e,t,n){return this.j={detections:[]},Ci(this,e,n,t),this.j}m(){var e=new Mn;ge(e,"input_frame_gpu"),ge(e,"norm_rect"),Jt(e,"detections");const t=new Nn;ui(t,CS,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),fe(n,"IMAGE:input_frame_gpu"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"DETECTIONS:detections"),n.o(t),kn(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Y_(s),this.j.detections.push(yv(i));ut(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Xn.prototype.detectForVideo=Xn.prototype.F,Xn.prototype.detect=Xn.prototype.D,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=async function(e,t){return qt(Xn,e,{baseOptions:{modelAssetPath:t}})},Xn.createFromModelBuffer=function(e,t){return qt(Xn,e,{baseOptions:{modelAssetBuffer:t}})},Xn.createFromOptions=function(e,t){return qt(Xn,e,t)};var ih=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){var e;(e=this.segmentationMasks)==null||e.forEach(t=>{t.close()})}};function Om(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Fm(e){try{const t=new ih(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.s)return t;e.s(t)}finally{vc(e)}}ih.prototype.close=ih.prototype.close;var In=class extends wn{constructor(e,t){super(new ii(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,wt(e=this.h=new xv,0,1,t=new be),this.v=new dv,wt(this.h,0,3,this.v),this.j=new hv,wt(this.h,0,2,this.j),Si(this.j,4,1),_t(this.j,2,.5),_t(this.v,2,.5),_t(this.h,4,.5)}get baseOptions(){return $t(this.h,be,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"numPoses"in e&&Si(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&_t(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&_t(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&_t(this.v,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}D(e,t,n){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:n,Om(this),ri(this,e,i),Fm(this)}F(e,t,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,Om(this),Ci(this,e,r,t),Fm(this)}m(){var e=new Mn;ge(e,"image_in"),ge(e,"norm_rect"),Jt(e,"normalized_landmarks"),Jt(e,"world_landmarks"),Jt(e,"segmentation_masks");const t=new Nn;ui(t,PS,this.h);const n=new dn;Fn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),fe(n,"IMAGE:image_in"),fe(n,"NORM_RECT:norm_rect"),Yt(n,"NORM_LANDMARKS:normalized_landmarks"),Yt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),kn(e,n),_c(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=va(s),this.landmarks.push(gc(i));ut(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ut(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Zs(s),this.worldLandmarks.push(Yo(i));ut(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ut(this,i)}),this.outputSegmentationMasks&&(Yt(n,"SEGMENTATION_MASK:segmentation_masks"),po(this,"segmentation_masks"),this.g.ca("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>go(this,s,!0,!this.s)),ut(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ut(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};In.prototype.detectForVideo=In.prototype.F,In.prototype.detect=In.prototype.D,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(e,t){return qt(In,e,{baseOptions:{modelAssetPath:t}})},In.createFromModelBuffer=function(e,t){return qt(In,e,{baseOptions:{modelAssetBuffer:t}})},In.createFromOptions=function(e,t){return qt(In,e,t)},In.POSE_CONNECTIONS=Uv;/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function pe(e){return e==null}function yd(e){return e!==null&&typeof e=="object"}function rh(e){return e!==null&&typeof e=="object"}function BS(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ds(e,t){return Array.from(new Set([...Object.keys(e),...Object.keys(t)])).reduce((i,r)=>{const s=e[r],o=t[r];return rh(s)&&rh(o)?Object.assign(Object.assign({},i),{[r]:ds(s,o)}):Object.assign(Object.assign({},i),{[r]:r in t?o:s})},{})}function Ed(e){return yd(e)?"target"in e:!1}const VS={alreadydisposed:()=>"View has been already disposed",invalidparams:e=>`Invalid parameters for '${e.name}'`,nomatchingcontroller:e=>`No matching controller for '${e.key}'`,nomatchingview:e=>`No matching view for '${JSON.stringify(e.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:e=>`Not compatible with  plugin '${e.id}'`,propertynotfound:e=>`Property '${e.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class Re{static alreadyDisposed(){return new Re({type:"alreadydisposed"})}static notBindable(){return new Re({type:"notbindable"})}static notCompatible(t,n){return new Re({type:"notcompatible",context:{id:`${t}.${n}`}})}static propertyNotFound(t){return new Re({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new Re({type:"shouldneverhappen"})}constructor(t){var n;this.message=(n=VS[t.type](t.context))!==null&&n!==void 0?n:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class kl{constructor(t,n){this.obj_=t,this.key=n}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,n){const i=this.read();if(!kl.isBindable(i))throw Re.notBindable();if(!(t in i))throw Re.propertyNotFound(t);i[t]=n}}class Ge{constructor(){this.observers_={}}on(t,n,i){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:n,key:(r=i==null?void 0:i.key)!==null&&r!==void 0?r:n}),this}off(t,n){const i=this.observers_[t];return i&&(this.observers_[t]=i.filter(r=>r.key!==n)),this}emit(t,n){const i=this.observers_[t];i&&i.forEach(r=>{r.handler(n)})}}class zS{constructor(t,n){var i;this.constraint_=n==null?void 0:n.constraint,this.equals_=(i=n==null?void 0:n.equals)!==null&&i!==void 0?i:(r,s)=>r===s,this.emitter=new Ge,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,n){const i=n??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:i,previousRawValue:s,rawValue:r,sender:this}))}}class HS{constructor(t){this.emitter=new Ge,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,n){const i=n??{forceEmit:!1,last:!0},r=this.value_;r===t&&!i.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:i,previousRawValue:r,rawValue:this.value_,sender:this}))}}class GS{constructor(t){this.emitter=new Ge,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function xe(e,t){const n=t==null?void 0:t.constraint,i=t==null?void 0:t.equals;return!n&&!i?new HS(e):new zS(e,t)}function WS(e){return[new GS(e),(t,n)=>{e.setRawValue(t,n)}]}class zt{constructor(t){this.emitter=new Ge,this.valMap_=t;for(const n in this.valMap_)this.valMap_[n].emitter.on("change",()=>{this.emitter.emit("change",{key:n,sender:this})})}static createCore(t){return Object.keys(t).reduce((i,r)=>Object.assign(i,{[r]:xe(t[r])}),{})}static fromObject(t){const n=this.createCore(t);return new zt(n)}get(t){return this.valMap_[t].rawValue}set(t,n){this.valMap_[t].rawValue=n}value(t){return this.valMap_[t]}}class xa{constructor(t){this.values=zt.fromObject({max:t.max,min:t.min})}constrain(t){const n=this.values.get("max"),i=this.values.get("min");return Math.min(Math.max(t,i),n)}}class XS{constructor(t){this.values=zt.fromObject({max:t.max,min:t.min})}constrain(t){const n=this.values.get("max"),i=this.values.get("min");let r=t;return pe(i)||(r=Math.max(r,i)),pe(n)||(r=Math.min(r,n)),r}}class jS{constructor(t,n=0){this.step=t,this.origin=n}constrain(t){const n=this.origin%this.step,i=Math.round((t-n)/this.step);return n+i*this.step}}class qS{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const KS={"**":(e,t)=>Math.pow(e,t),"*":(e,t)=>e*t,"/":(e,t)=>e/t,"%":(e,t)=>e%t,"+":(e,t)=>e+t,"-":(e,t)=>e-t,"<<":(e,t)=>e<<t,">>":(e,t)=>e>>t,">>>":(e,t)=>e>>>t,"&":(e,t)=>e&t,"^":(e,t)=>e^t,"|":(e,t)=>e|t};class YS{constructor(t,n,i){this.left=n,this.operator=t,this.right=i}evaluate(){const t=KS[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const $S={"+":e=>e,"-":e=>-e,"~":e=>~e};class ZS{constructor(t,n){this.operator=t,this.expression=n}evaluate(){const t=$S[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function wd(e){return(t,n)=>{for(let i=0;i<e.length;i++){const r=e[i](t,n);if(r!=="")return r}return""}}function na(e,t){var n;const i=e.substr(t).match(/^\s+/);return(n=i&&i[0])!==null&&n!==void 0?n:""}function JS(e,t){const n=e.substr(t,1);return n.match(/^[1-9]$/)?n:""}function ia(e,t){var n;const i=e.substr(t).match(/^[0-9]+/);return(n=i&&i[0])!==null&&n!==void 0?n:""}function QS(e,t){const n=ia(e,t);if(n!=="")return n;const i=e.substr(t,1);if(t+=1,i!=="-"&&i!=="+")return"";const r=ia(e,t);return r===""?"":i+r}function Sd(e,t){const n=e.substr(t,1);if(t+=1,n.toLowerCase()!=="e")return"";const i=QS(e,t);return i===""?"":n+i}function Ov(e,t){const n=e.substr(t,1);if(n==="0")return n;const i=JS(e,t);return t+=i.length,i===""?"":i+ia(e,t)}function t3(e,t){const n=Ov(e,t);if(t+=n.length,n==="")return"";const i=e.substr(t,1);if(t+=i.length,i!==".")return"";const r=ia(e,t);return t+=r.length,n+i+r+Sd(e,t)}function e3(e,t){const n=e.substr(t,1);if(t+=n.length,n!==".")return"";const i=ia(e,t);return t+=i.length,i===""?"":n+i+Sd(e,t)}function n3(e,t){const n=Ov(e,t);return t+=n.length,n===""?"":n+Sd(e,t)}const i3=wd([t3,e3,n3]);function r3(e,t){var n;const i=e.substr(t).match(/^[01]+/);return(n=i&&i[0])!==null&&n!==void 0?n:""}function s3(e,t){const n=e.substr(t,2);if(t+=n.length,n.toLowerCase()!=="0b")return"";const i=r3(e,t);return i===""?"":n+i}function o3(e,t){var n;const i=e.substr(t).match(/^[0-7]+/);return(n=i&&i[0])!==null&&n!==void 0?n:""}function a3(e,t){const n=e.substr(t,2);if(t+=n.length,n.toLowerCase()!=="0o")return"";const i=o3(e,t);return i===""?"":n+i}function l3(e,t){var n;const i=e.substr(t).match(/^[0-9a-f]+/i);return(n=i&&i[0])!==null&&n!==void 0?n:""}function c3(e,t){const n=e.substr(t,2);if(t+=n.length,n.toLowerCase()!=="0x")return"";const i=l3(e,t);return i===""?"":n+i}const u3=wd([s3,a3,c3]),h3=wd([u3,i3]);function d3(e,t){const n=h3(e,t);return t+=n.length,n===""?null:{evaluable:new qS(n),cursor:t}}function p3(e,t){const n=e.substr(t,1);if(t+=n.length,n!=="(")return null;const i=kv(e,t);if(!i)return null;t=i.cursor,t+=na(e,t).length;const r=e.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:i.evaluable,cursor:t}}function f3(e,t){var n;return(n=d3(e,t))!==null&&n!==void 0?n:p3(e,t)}function Fv(e,t){const n=f3(e,t);if(n)return n;const i=e.substr(t,1);if(t+=i.length,i!=="+"&&i!=="-"&&i!=="~")return null;const r=Fv(e,t);return r?(t=r.cursor,{cursor:t,evaluable:new ZS(i,r.evaluable)}):null}function m3(e,t,n){n+=na(t,n).length;const i=e.filter(r=>t.startsWith(r,n))[0];return i?(n+=i.length,n+=na(t,n).length,{cursor:n,operator:i}):null}function g3(e,t){return(n,i)=>{const r=e(n,i);if(!r)return null;i=r.cursor;let s=r.evaluable;for(;;){const o=m3(t,n,i);if(!o)break;i=o.cursor;const a=e(n,i);if(!a)return null;i=a.cursor,s=new YS(o.operator,s,a.evaluable)}return s?{cursor:i,evaluable:s}:null}}const _3=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((e,t)=>g3(e,t),Fv);function kv(e,t){return t+=na(e,t).length,_3(e,t)}function v3(e){const t=kv(e,0);return!t||t.cursor+na(e,t.cursor).length!==e.length?null:t.evaluable}function Zi(e){var t;const n=v3(e);return(t=n==null?void 0:n.evaluate())!==null&&t!==void 0?t:null}function Bv(e){if(typeof e=="number")return e;if(typeof e=="string"){const t=Zi(e);if(!pe(t))return t}return 0}function b3(e){return String(e)}function Sn(e){return t=>t.toFixed(Math.max(Math.min(e,20),0))}function se(e,t,n,i,r){const s=(e-t)/(n-t);return i+s*(r-i)}function km(e){return String(e.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function je(e,t,n){return Math.min(Math.max(e,t),n)}function Vv(e,t){return(e%t+t)%t}function x3(e,t){return pe(e.step)?Math.max(km(t),2):km(e.step)}function zv(e){var t;return(t=e.step)!==null&&t!==void 0?t:1}function Hv(e,t){var n;const i=Math.abs((n=e.step)!==null&&n!==void 0?n:t);return i===0?.1:Math.pow(10,Math.floor(Math.log10(i))-1)}function Gv(e,t){return pe(e.step)?null:new jS(e.step,t)}function Wv(e){return!pe(e.max)&&!pe(e.min)?new xa({max:e.max,min:e.min}):!pe(e.max)||!pe(e.min)?new XS({max:e.max,min:e.min}):null}function Xv(e,t){var n,i,r;return{formatter:(n=e.format)!==null&&n!==void 0?n:Sn(x3(e,t)),keyScale:(i=e.keyScale)!==null&&i!==void 0?i:zv(e),pointerScale:(r=e.pointerScale)!==null&&r!==void 0?r:Hv(e,t)}}function jv(e){return{format:e.optional.function,keyScale:e.optional.number,max:e.optional.number,min:e.optional.number,pointerScale:e.optional.number,step:e.optional.number}}function Md(e){return{constraint:e.constraint,textProps:zt.fromObject(Xv(e.params,e.initialValue))}}class vs{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class yc{constructor(t){this.target=t}}class ya extends yc{constructor(t,n,i){super(t),this.value=n,this.last=i??!0}}class y3 extends yc{constructor(t,n){super(t),this.expanded=n}}class E3 extends yc{constructor(t,n){super(t),this.index=n}}class w3 extends yc{constructor(t,n){super(t),this.native=n}}class ra extends vs{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new Ge,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const n=this.controller.value;this.emitter_.emit("change",new ya(this,n.binding.target.read(),t.options.last))}}class S3{constructor(t,n){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=n,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new Ge}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,n){this.value_.setRawValue(t,n)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function M3(e){if(!("binding"in e))return!1;const t=e.binding;return Ed(t)&&"read"in t&&"write"in t}function T3(e,t){const i=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const o=t[s],a=o(e[s]);return a.succeeded?Object.assign(Object.assign({},r),{[s]:a.value}):void 0},{});return i}function A3(e,t){return e.reduce((n,i)=>{if(n===void 0)return;const r=t(i);if(!(!r.succeeded||r.value===void 0))return[...n,r.value]},[])}function C3(e){return e===null?!1:typeof e=="object"}function Oi(e){return t=>n=>{if(!t&&n===void 0)return{succeeded:!1,value:void 0};if(t&&n===void 0)return{succeeded:!0,value:void 0};const i=e(n);return i!==void 0?{succeeded:!0,value:i}:{succeeded:!1,value:void 0}}}function Bm(e){return{custom:t=>Oi(t)(e),boolean:Oi(t=>typeof t=="boolean"?t:void 0)(e),number:Oi(t=>typeof t=="number"?t:void 0)(e),string:Oi(t=>typeof t=="string"?t:void 0)(e),function:Oi(t=>typeof t=="function"?t:void 0)(e),constant:t=>Oi(n=>n===t?t:void 0)(e),raw:Oi(t=>t)(e),object:t=>Oi(n=>{if(C3(n))return T3(n,t)})(e),array:t=>Oi(n=>{if(Array.isArray(n))return A3(n,t)})(e)}}const sh={optional:Bm(!0),required:Bm(!1)};function we(e,t){const n=t(sh),i=sh.required.object(n)(e);return i.succeeded?i.value:void 0}function Bn(e,t,n,i){if(t&&!t(e))return!1;const r=we(e,n);return r?i(r):!1}function Vn(e,t){var n;return ds((n=e==null?void 0:e())!==null&&n!==void 0?n:{},t)}function ss(e){return"value"in e}function qv(e){if(!yd(e)||!("binding"in e))return!1;const t=e.binding;return Ed(t)}const Ei="http://www.w3.org/2000/svg";function Bl(e){e.offsetHeight}function P3(e,t){const n=e.style.transition;e.style.transition="none",t(),e.style.transition=n}function Td(e){return e.ontouchstart!==void 0}function R3(){return globalThis}function L3(){return R3().document}function D3(e){const t=e.ownerDocument.defaultView;return t&&"document"in t?e.getContext("2d",{willReadFrequently:!0}):null}const I3={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Ec(e,t){const n=e.createElementNS(Ei,"svg");return n.innerHTML=I3[t],n}function Kv(e,t,n){e.insertBefore(t,e.children[n])}function Ad(e){e.parentElement&&e.parentElement.removeChild(e)}function Yv(e){for(;e.children.length>0;)e.removeChild(e.children[0])}function U3(e){for(;e.childNodes.length>0;)e.removeChild(e.childNodes[0])}function $v(e){return e.relatedTarget?e.relatedTarget:"explicitOriginalTarget"in e?e.explicitOriginalTarget:null}function qi(e,t){e.emitter.on("change",n=>{t(n.rawValue)}),t(e.rawValue)}function Mi(e,t,n){qi(e.value(t),n)}const N3="tp";function Zt(e){return(n,i)=>[N3,"-",e,"v",n?`_${n}`:"",i?`-${i}`:""].join("")}const Vo=Zt("lbl");function O3(e,t){const n=e.createDocumentFragment();return t.split(`
`).map(r=>e.createTextNode(r)).forEach((r,s)=>{s>0&&n.appendChild(e.createElement("br")),n.appendChild(r)}),n}class Zv{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(Vo()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Vo("l")),Mi(n.props,"label",s=>{pe(s)?this.element.classList.add(Vo(void 0,"nol")):(this.element.classList.remove(Vo(void 0,"nol")),U3(i),i.appendChild(O3(t,s)))}),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("div");r.classList.add(Vo("v")),this.element.appendChild(r),this.valueElement=r}}class Jv{constructor(t,n){this.props=n.props,this.valueController=n.valueController,this.viewProps=n.valueController.viewProps,this.view=new Zv(t,{props:n.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return Bn(t,null,n=>({label:n.optional.string}),n=>(this.props.set("label",n.label),!0))}exportProps(){return Vn(null,{label:this.props.get("label")})}}function F3(){return["veryfirst","first","last","verylast"]}const Vm=Zt(""),zm={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class wc{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const n=this.view.element;this.blade.value("positions").emitter.on("change",()=>{F3().forEach(i=>{n.classList.remove(Vm(void 0,zm[i]))}),this.blade.get("positions").forEach(i=>{n.classList.add(Vm(void 0,zm[i]))})}),this.viewProps.handleDispose(()=>{Ad(n)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return Bn(t,null,n=>({disabled:n.required.boolean,hidden:n.required.boolean}),n=>(this.viewProps.importState(n),!0))}exportState(){return Vn(null,Object.assign({},this.viewProps.exportState()))}}class ps extends wc{constructor(t,n){if(n.value!==n.valueController.value)throw Re.shouldNeverHappen();const i=n.valueController.viewProps,r=new Jv(t,{blade:n.blade,props:n.props,valueController:n.valueController});super(Object.assign(Object.assign({},n),{view:new Zv(t,{props:n.props,viewProps:i}),viewProps:i})),this.labelController=r,this.value=n.value,this.valueController=n.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return Bn(t,n=>{var i,r,s;return super.importState(n)&&this.labelController.importProps(n)&&((s=(r=(i=this.valueController).importProps)===null||r===void 0?void 0:r.call(i,t))!==null&&s!==void 0?s:!0)},n=>({value:n.optional.raw}),n=>(n.value&&(this.value.rawValue=n.value),!0))}exportState(){var t,n,i;return Vn(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(i=(n=(t=this.valueController).exportProps)===null||n===void 0?void 0:n.call(t))!==null&&i!==void 0?i:{}))}}function Hm(e){const t=Object.assign({},e);return delete t.value,t}class Qv extends ps{constructor(t,n){super(t,n),this.tag=n.tag}importState(t){return Bn(t,n=>super.importState(Hm(t)),n=>({tag:n.optional.string}),n=>(this.tag=n.tag,!0))}exportState(){return Vn(()=>Hm(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function k3(e){return ss(e)&&qv(e.value)}class B3 extends Qv{importState(t){return Bn(t,n=>super.importState(n),n=>({binding:n.required.object({value:n.required.raw})}),n=>(this.value.binding.inject(n.binding.value),this.value.fetch(),!0))}}function V3(e){return ss(e)&&M3(e.value)}function t0(e,t){for(;e.length<t;)e.push(void 0)}function z3(e){const t=[];return t0(t,e),t}function H3(e){const t=e.indexOf(void 0);return t<0?e:e.slice(0,t)}function G3(e,t){const n=[...H3(e),t];return n.length>e.length?n.splice(0,n.length-e.length):t0(n,e.length),n}class W3{constructor(t){this.emitter=new Ge,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=xe(z3(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,n){this.value_.setRawValue(t,n)}fetch(){this.value_.rawValue=G3(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function X3(e){if(!("binding"in e))return!1;const t=e.binding;return Ed(t)&&"read"in t&&!("write"in t)}class j3 extends Qv{exportState(){return Vn(()=>super.exportState(),{binding:{readonly:!0}})}}function q3(e){return ss(e)&&X3(e.value)}class K3 extends vs{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,n){const i=n.bind(this);return this.controller.buttonController.emitter.on(t,s=>{i(new w3(this,s.nativeEvent))}),this}off(t,n){return this.controller.buttonController.emitter.off(t,n),this}}function Y3(e,t,n){n?e.classList.add(t):e.classList.remove(t)}function Co(e,t){return n=>{Y3(e,t,n)}}function Cd(e,t){qi(e,n=>{t.textContent=n??""})}const Eu=Zt("btn");class $3{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(Eu()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("button");i.classList.add(Eu("b")),n.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(Eu("t")),Cd(n.props.value("title"),r),this.buttonElement.appendChild(r)}}class Z3{constructor(t,n){this.emitter=new Ge,this.onClick_=this.onClick_.bind(this),this.props=n.props,this.viewProps=n.viewProps,this.view=new $3(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return Bn(t,null,n=>({title:n.optional.string}),n=>(this.props.set("title",n.title),!0))}exportProps(){return Vn(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class Gm extends wc{constructor(t,n){const i=new Z3(t,{props:n.buttonProps,viewProps:n.viewProps}),r=new Jv(t,{blade:n.blade,props:n.labelProps,valueController:i});super({blade:n.blade,view:r.view,viewProps:n.viewProps}),this.buttonController=i,this.labelController=r}importState(t){return Bn(t,n=>super.importState(n)&&this.buttonController.importProps(n)&&this.labelController.importProps(n),()=>({}),()=>!0)}exportState(){return Vn(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class e0{constructor(t){const[n,i]=t.split("-"),r=n.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=i??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const Po=new e0("2.0.5");function mn(e){return Object.assign({core:Po},e)}const J3=mn({id:"button",type:"blade",accept(e){const t=we(e,n=>({title:n.required.string,view:n.required.constant("button"),label:n.optional.string}));return t?{params:t}:null},controller(e){return new Gm(e.document,{blade:e.blade,buttonProps:zt.fromObject({title:e.params.title}),labelProps:zt.fromObject({label:e.params.label}),viewProps:e.viewProps})},api(e){return e.controller instanceof Gm?new K3(e.controller):null}});function Q3(e,t){return e.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function tM(e,t){return e.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function eM(e,t){return e.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function nM(e){return yd(e)?"refresh"in e&&typeof e.refresh=="function":!1}function iM(e,t){if(!kl.isBindable(e))throw Re.notBindable();return new kl(e,t)}class rM{constructor(t,n){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new Ge,this.pool_=n,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,n,i){const r=i??{},s=this.controller_.element.ownerDocument,o=this.pool_.createBinding(s,iM(t,n),r),a=this.pool_.createBindingApi(o);return this.add(a,r.index)}addFolder(t){return tM(this,t)}addButton(t){return Q3(this,t)}addTab(t){return eM(this,t)}add(t,n){const i=t.controller;return this.controller_.rack.add(i,n),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const n=this.controller_.element.ownerDocument,i=this.pool_.createBlade(n,t),r=this.pool_.createApi(i);return this.add(r,t.index)}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}refresh(){this.children.forEach(t=>{nM(t)&&t.refresh()})}onRackValueChange_(t){const n=t.bladeController,i=this.pool_.createApi(n),r=qv(n.value)?n.value.binding:null;this.emitter_.emit("change",new ya(i,r?r.target.read():n.value.rawValue,t.options.last))}}class Pd extends vs{constructor(t,n){super(t),this.rackApi_=new rM(t.rackController,n)}refresh(){this.rackApi_.refresh()}}class Rd extends wc{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return Bn(t,n=>super.importState(n),n=>({children:n.required.array(n.required.raw)}),n=>this.rackController.rack.children.every((i,r)=>i.importState(n.children[r])))}exportState(){return Vn(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function oh(e){return"rackController"in e}class sM{constructor(t){this.emitter=new Ge,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const n of this.allItems())if(t(n))return n;return null}includes(t){return this.cache_.has(t)}add(t,n){if(this.includes(t))throw Re.shouldNeverHappen();const i=n!==void 0?n:this.items_.length;this.items_.splice(i,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:i,item:t,root:this,target:this})}remove(t){const n=this.items_.indexOf(t);if(n<0)return;this.items_.splice(n,1),this.cache_.delete(t);const i=this.extract_(t);i&&(i.allItems().forEach(r=>{this.cache_.delete(r)}),i.emitter.off("add",this.onSubListAdd_),i.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:n,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function oM(e,t){for(let n=0;n<e.length;n++){const i=e[n];if(ss(i)&&i.value===t)return i}return null}function aM(e){return oh(e)?e.rackController.rack.bcSet_:null}class lM{constructor(t){var n,i;this.emitter=new Ge,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(n=t.blade)!==null&&n!==void 0?n:null,(i=this.blade_)===null||i===void 0||i.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new sM(aM),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,n){var i;(i=t.parent)===null||i===void 0||i.remove(t),t.parent=this,this.bcSet_.add(t,n)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const n=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:n,sender:this}),!n)return;const i=t.item;if(i.viewProps.emitter.on("change",this.onChildViewPropsChange_),i.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),i.viewProps.handleDispose(this.onChildDispose_),ss(i))i.value.emitter.on("change",this.onChildValueChange_);else if(oh(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const n=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:n,sender:this}),!n)return;const i=t.item;if(ss(i))i.value.emitter.off("change",this.onChildValueChange_);else if(oh(i)){const r=i.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),n=t[0],i=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===n&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===i&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(n=>n.viewProps.get("disposed")).forEach(n=>{this.bcSet_.remove(n)})}onChildValueChange_(t){const n=oM(this.find(ss),t.sender);if(!n)throw Re.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:n,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Ld{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const n=new lM({blade:t.root?void 0:t.blade,viewProps:t.viewProps});n.emitter.on("add",this.onRackAdd_),n.emitter.on("remove",this.onRackRemove_),this.rack=n,this.viewProps.handleDispose(()=>{for(let i=this.rack.children.length-1;i>=0;i--)this.rack.children[i].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&Kv(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&Ad(t.bladeController.view.element)}}function Ro(){return new zt({positions:xe([],{equals:BS})})}class Ea extends zt{constructor(t){super(t)}static create(t){const n={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},i=zt.createCore(n);return new Ea(i)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!pe(t)?`${t}px`:"auto"}bindExpandedClass(t,n){const i=()=>{this.styleExpanded?t.classList.add(n):t.classList.remove(n)};Mi(this,"expanded",i),Mi(this,"temporaryExpanded",i)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function cM(e,t){let n=0;return P3(t,()=>{e.set("expandedHeight",null),e.set("temporaryExpanded",!0),Bl(t),n=t.clientHeight,e.set("temporaryExpanded",null),Bl(t)}),n}function Wm(e,t){t.style.height=e.styleHeight}function Dd(e,t){e.value("expanded").emitter.on("beforechange",()=>{if(e.set("completed",!1),pe(e.get("expandedHeight"))){const n=cM(e,t);n>0&&e.set("expandedHeight",n)}e.set("shouldFixHeight",!0),Bl(t)}),e.emitter.on("change",()=>{Wm(e,t)}),Wm(e,t),t.addEventListener("transitionend",n=>{n.propertyName==="height"&&e.cleanUpTransition()})}class n0 extends Pd{constructor(t,n){super(t,n),this.emitter_=new Ge,this.controller.foldable.value("expanded").emitter.on("change",i=>{this.emitter_.emit("fold",new y3(this,i.sender.rawValue))}),this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,n,i){return this.rackApi_.addBinding(t,n,i)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,n){return this.rackApi_.add(t,n)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}}const i0=Zt("cnt");class uM{constructor(t,n){var i;this.className_=Zt((i=n.viewName)!==null&&i!==void 0?i:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),i0()),n.viewProps.bindClassModifiers(this.element),this.foldable_=n.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),Mi(this.foldable_,"completed",Co(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),Mi(n.props,"title",c=>{pe(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),n.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const o=t.createElement("div");o.classList.add(this.className_("t")),Cd(n.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;const a=t.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class ah extends Rd{constructor(t,n){var i;const r=Ea.create((i=n.expanded)!==null&&i!==void 0?i:!0),s=new uM(t,{foldable:r,props:n.props,viewName:n.root?"rot":void 0,viewProps:n.viewProps});super(Object.assign(Object.assign({},n),{rackController:new Ld({blade:n.blade,element:s.containerElement,root:n.root,viewProps:n.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=n.props,this.foldable=r,Dd(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return Bn(t,n=>super.importState(n),n=>({expanded:n.required.boolean,title:n.optional.string}),n=>(this.foldable.set("expanded",n.expanded),this.props.set("title",n.title),!0))}exportState(){return Vn(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const hM=mn({id:"folder",type:"blade",accept(e){const t=we(e,n=>({title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean}));return t?{params:t}:null},controller(e){return new ah(e.document,{blade:e.blade,expanded:e.params.expanded,props:zt.fromObject({title:e.params.title}),viewProps:e.viewProps})},api(e){return e.controller instanceof ah?new n0(e.controller,e.pool):null}}),dM=Zt("");function Xm(e,t){return Co(e,dM(void 0,t))}class er extends zt{constructor(t){var n;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=WS(xe(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(n=this.get("parent"))===null||n===void 0||n.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var n,i,r;const s=t??{};return new er(zt.createCore({disabled:(n=s.disabled)!==null&&n!==void 0?n:!1,disposed:!1,hidden:(i=s.hidden)!==null&&i!==void 0?i:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){qi(this.globalDisabled_,Xm(t,"disabled")),Mi(this,"hidden",Xm(t,"hidden"))}bindDisabled(t){qi(this.globalDisabled_,n=>{t.disabled=n})}bindTabIndex(t){qi(this.globalDisabled_,n=>{t.tabIndex=n?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",n=>{n&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var n;const i=t.previousRawValue;i==null||i.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(n=this.get("parent"))===null||n===void 0||n.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const jm=Zt("tbp");class pM{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(jm()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(jm("c")),this.element.appendChild(i),this.containerElement=i}}const zo=Zt("tbi");class fM{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(zo()),n.viewProps.bindClassModifiers(this.element),Mi(n.props,"selected",s=>{s?this.element.classList.add(zo(void 0,"sel")):this.element.classList.remove(zo(void 0,"sel"))});const i=t.createElement("button");i.classList.add(zo("b")),n.viewProps.bindDisabled(i),this.element.appendChild(i),this.buttonElement=i;const r=t.createElement("div");r.classList.add(zo("t")),Cd(n.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class mM{constructor(t,n){this.emitter=new Ge,this.onClick_=this.onClick_.bind(this),this.props=n.props,this.viewProps=n.viewProps,this.view=new fM(t,{props:n.props,viewProps:n.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class lh extends Rd{constructor(t,n){const i=new pM(t,{viewProps:n.viewProps});super(Object.assign(Object.assign({},n),{rackController:new Ld({blade:n.blade,element:i.containerElement,viewProps:n.viewProps}),view:i})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new mM(t,{props:n.itemProps,viewProps:er.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=n.props,Mi(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return Bn(t,n=>super.importState(n),n=>({selected:n.required.boolean,title:n.required.string}),n=>(this.ic_.props.set("selected",n.selected),this.ic_.props.set("title",n.title),!0))}exportState(){return Vn(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class gM extends Pd{constructor(t,n){super(t,n),this.emitter_=new Ge,this.onSelect_=this.onSelect_.bind(this),this.pool_=n,this.rackApi_.on("change",i=>{this.emitter_.emit("change",i)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const n=this.controller.view.element.ownerDocument,i=new lh(n,{blade:Ro(),itemProps:zt.fromObject({selected:!1,title:t.title}),props:zt.fromObject({selected:!1}),viewProps:er.create()}),r=this.pool_.createApi(i);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}onSelect_(t){this.emitter_.emit("select",new E3(this,t.rawValue))}}class _M extends Pd{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,n){this.rackApi_.add(t,n)}remove(t){this.rackApi_.remove(t)}addBinding(t,n,i){return this.rackApi_.addBinding(t,n,i)}addBlade(t){return this.rackApi_.addBlade(t)}}const qm=-1;class vM{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=xe(!0),this.selectedIndex=xe(qm),this.items_=[]}add(t,n){const i=n??this.items_.length;this.items_.splice(i,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const n=this.items_.indexOf(t);n<0||(this.items_.splice(n,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=qm,this.empty.rawValue=!0;return}const t=this.items_.findIndex(n=>n.rawValue);t<0?(this.items_.forEach((n,i)=>{n.rawValue=i===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((n,i)=>{n.rawValue=i===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const n=this.items_.findIndex(i=>i===t.sender);this.items_.forEach((i,r)=>{i.rawValue=r===n}),this.selectedIndex.rawValue=n}else this.keepSelection_()}}const Ho=Zt("tab");class bM{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(Ho(),i0()),n.viewProps.bindClassModifiers(this.element),qi(n.empty,Co(this.element,Ho(void 0,"nop")));const i=t.createElement("div");i.classList.add(Ho("t")),this.element.appendChild(i),this.itemsElement=i;const r=t.createElement("div");r.classList.add(Ho("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(Ho("c")),this.element.appendChild(s),this.contentsElement=s}}class Km extends Rd{constructor(t,n){const i=new vM,r=new bM(t,{empty:i.empty,viewProps:n.viewProps});super({blade:n.blade,rackController:new Ld({blade:n.blade,element:r.contentsElement,viewProps:n.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=i}add(t,n){this.rackController.rack.add(t,n)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const n=t.bladeController;Kv(this.view.itemsElement,n.itemController.view.element,t.index),n.itemController.viewProps.set("parent",this.viewProps),this.tab.add(n.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const n=t.bladeController;Ad(n.itemController.view.element),n.itemController.viewProps.set("parent",null),this.tab.remove(n.props.value("selected"))}}const r0=mn({id:"tab",type:"blade",accept(e){const t=we(e,n=>({pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(e){const t=new Km(e.document,{blade:e.blade,viewProps:e.viewProps});return e.params.pages.forEach(n=>{const i=new lh(e.document,{blade:Ro(),itemProps:zt.fromObject({selected:!1,title:n.title}),props:zt.fromObject({selected:!1}),viewProps:er.create()});t.add(i)}),t},api(e){return e.controller instanceof Km?new gM(e.controller,e.pool):e.controller instanceof lh?new _M(e.controller,e.pool):null}});function xM(e,t){const n=e.accept(t.params);if(!n)return null;const i=we(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return e.controller({blade:Ro(),document:t.document,params:Object.assign(Object.assign({},n.params),{disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden}),viewProps:er.create({disabled:i==null?void 0:i.disabled,hidden:i==null?void 0:i.hidden})})}class Id extends ra{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class yM{constructor(){this.disabled=!1,this.emitter=new Ge}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class EM{constructor(t,n){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new Ge,this.interval_=n,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class wa{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((n,i)=>i.constrain(n),t)}}function Vl(e,t){if(e instanceof t)return e;if(e instanceof wa){const n=e.constraints.reduce((i,r)=>i||(r instanceof t?r:null),null);if(n)return n}return null}class Sa{constructor(t){this.values=zt.fromObject({options:t})}constrain(t){const n=this.values.get("options");return n.length===0||n.filter(r=>r.value===t).length>0?t:n[0].value}}function Ma(e){var t;const n=sh;if(Array.isArray(e))return(t=we({items:e},i=>({items:i.required.array(i.required.object({text:i.required.string,value:i.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof e=="object")return n.required.raw(e).value}function Ud(e){if(Array.isArray(e))return e;const t=[];return Object.keys(e).forEach(n=>{t.push({text:n,value:e[n]})}),t}function Nd(e){return pe(e)?null:new Sa(Ud(e))}const wu=Zt("lst");class wM{constructor(t,n){this.onValueChange_=this.onValueChange_.bind(this),this.props_=n.props,this.element=t.createElement("div"),this.element.classList.add(wu()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("select");i.classList.add(wu("s")),n.viewProps.bindDisabled(i),this.element.appendChild(i),this.selectElement=i;const r=t.createElement("div");r.classList.add(wu("m")),r.appendChild(Ec(t,"dropdown")),this.element.appendChild(r),n.value.emitter.on("change",this.onValueChange_),this.value_=n.value,Mi(this.props_,"options",s=>{Yv(this.selectElement),s.forEach(o=>{const a=t.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){const t=this.props_.get("options").map(n=>n.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class Lr{constructor(t,n){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=n.props,this.value=n.value,this.viewProps=n.viewProps,this.view=new wM(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const n=t.currentTarget;this.value.rawValue=this.props.get("options")[n.selectedIndex].value}importProps(t){return Bn(t,null,n=>({options:n.required.custom(Ma)}),n=>(this.props.set("options",Ud(n.options)),!0))}exportProps(){return Vn(null,{options:this.props.get("options")})}}const Ym=Zt("pop");class SM{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(Ym()),n.viewProps.bindClassModifiers(this.element),qi(n.shows,Co(this.element,Ym(void 0,"v")))}}class s0{constructor(t,n){this.shows=xe(!1),this.viewProps=n.viewProps,this.view=new SM(t,{shows:this.shows,viewProps:this.viewProps})}}const $m=Zt("txt");class MM{constructor(t,n){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add($m()),n.viewProps.bindClassModifiers(this.element),this.props_=n.props,this.props_.emitter.on("change",this.onChange_);const i=t.createElement("input");i.classList.add($m("i")),i.type="text",n.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,n.value.emitter.on("change",this.onChange_),this.value_=n.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class sa{constructor(t,n){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=n.parser,this.props=n.props,this.value=n.value,this.viewProps=n.viewProps,this.view=new MM(t,{props:n.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);pe(r)||(this.value.rawValue=r),this.view.refresh()}}function TM(e){return String(e)}function o0(e){return e==="false"?!1:!!e}function Zm(e){return TM(e)}function AM(e){return t=>e.reduce((n,i)=>n!==null?n:i(t),null)}const CM=Sn(0);function zl(e){return CM(e)+"%"}function a0(e){return String(e)}function ch(e){return e}function Lo({primary:e,secondary:t,forward:n,backward:i}){let r=!1;function s(o){r||(r=!0,o(),r=!1)}e.emitter.on("change",o=>{s(()=>{t.setRawValue(n(e.rawValue,t.rawValue),o.options)})}),t.emitter.on("change",o=>{s(()=>{e.setRawValue(i(e.rawValue,t.rawValue),o.options)}),s(()=>{t.setRawValue(n(e.rawValue,t.rawValue),o.options)})}),s(()=>{t.setRawValue(n(e.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function vn(e,t){const n=e*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+n:t.downKey?-n:0}function oa(e){return{altKey:e.altKey,downKey:e.key==="ArrowDown",shiftKey:e.shiftKey,upKey:e.key==="ArrowUp"}}function Ji(e){return{altKey:e.altKey,downKey:e.key==="ArrowLeft",shiftKey:e.shiftKey,upKey:e.key==="ArrowRight"}}function PM(e){return e==="ArrowUp"||e==="ArrowDown"}function l0(e){return PM(e)||e==="ArrowLeft"||e==="ArrowRight"}function Su(e,t){var n,i;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:e.pageX-(((n=r&&r.scrollX)!==null&&n!==void 0?n:0)+s.left),y:e.pageY-(((i=r&&r.scrollY)!==null&&i!==void 0?i:0)+s.top)}}class bs{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new Ge,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const n=this.elem_.getBoundingClientRect();return{bounds:{width:n.width,height:n.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var n;t.preventDefault(),(n=t.currentTarget)===null||n===void 0||n.focus();const i=this.elem_.ownerDocument;i.addEventListener("mousemove",this.onDocumentMouseMove_),i.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Su(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Su(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const n=this.elem_.ownerDocument;n.removeEventListener("mousemove",this.onDocumentMouseMove_),n.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Su(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const n=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(n?{x:n.clientX-i.left,y:n.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=n}onTouchMove_(t){const n=t.targetTouches.item(0),i=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(n?{x:n.clientX-i.left,y:n.clientY-i.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=n}onTouchEnd_(t){var n;const i=(n=t.targetTouches.item(0))!==null&&n!==void 0?n:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(i?{x:i.clientX-r.left,y:i.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const jn=Zt("txt");class RM{constructor(t,n){this.onChange_=this.onChange_.bind(this),this.props_=n.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(jn(),jn(void 0,"num")),n.arrayPosition&&this.element.classList.add(jn(void 0,n.arrayPosition)),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(jn("i")),i.type="text",n.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=n.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(jn()),this.inputElement.classList.add(jn("i"));const r=t.createElement("div");r.classList.add(jn("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(Ei,"svg");s.classList.add(jn("g")),this.knobElement.appendChild(s);const o=t.createElementNS(Ei,"path");o.classList.add(jn("gb")),s.appendChild(o),this.guideBodyElem_=o;const a=t.createElementNS(Ei,"path");a.classList.add(jn("gh")),s.appendChild(a),this.guideHeadElem_=a;const l=t.createElement("div");l.classList.add(Zt("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,n.value.emitter.on("change",this.onChange_),this.value=n.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(jn(void 0,"drg"));return}this.element.classList.add(jn(void 0,"drg"));const n=t.rawValue/this.props_.get("pointerScale"),i=n+(n>0?-1:n<0?1:0),r=je(-i,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${i+r},0 L${i},4 L${i+r},8`,`M ${n},-1 L${n},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${n},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${n}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class Ta{constructor(t,n){var i;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=n.parser,this.props=n.props,this.sliderProps_=(i=n.sliderProps)!==null&&i!==void 0?i:null,this.value=n.value,this.viewProps=n.viewProps,this.dragging_=xe(null),this.view=new RM(t,{arrayPosition:n.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new bs(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var n,i;const r=(n=this.sliderProps_)===null||n===void 0?void 0:n.get("min"),s=(i=this.sliderProps_)===null||i===void 0?void 0:i.get("max");let o=t;return r!==void 0&&(o=Math.max(o,r)),s!==void 0&&(o=Math.min(o,s)),o}onInputChange_(t){const i=t.currentTarget.value,r=this.parser_(i);pe(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const n=vn(this.props.get("keyScale"),oa(t));n!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+n),{forceEmit:!1,last:!1})}onInputKeyUp_(t){vn(this.props.get("keyScale"),oa(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const n=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+n*this.props.get("pointerScale"))}onPointerMove_(t){const n=this.computeDraggingValue_(t.data);n!==null&&(this.value.setRawValue(n,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const n=this.computeDraggingValue_(t.data);n!==null&&(this.value.setRawValue(n,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Mu=Zt("sld");class LM{constructor(t,n){this.onChange_=this.onChange_.bind(this),this.props_=n.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Mu()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Mu("t")),n.viewProps.bindTabIndex(i),this.element.appendChild(i),this.trackElement=i;const r=t.createElement("div");r.classList.add(Mu("k")),this.trackElement.appendChild(r),this.knobElement=r,n.value.emitter.on("change",this.onChange_),this.value=n.value,this.update_()}update_(){const t=je(se(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class DM{constructor(t,n){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.props=n.props,this.view=new LM(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new bs(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,n){t.point&&this.value.setRawValue(se(je(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),n)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const n=vn(this.props.get("keyScale"),Ji(t));n!==0&&this.value.setRawValue(this.value.rawValue+n,{forceEmit:!1,last:!1})}onKeyUp_(t){vn(this.props.get("keyScale"),Ji(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Tu=Zt("sldtxt");class IM{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(Tu());const i=t.createElement("div");i.classList.add(Tu("s")),this.sliderView_=n.sliderView,i.appendChild(this.sliderView_.element),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Tu("t")),this.textView_=n.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Hl{constructor(t,n){this.value=n.value,this.viewProps=n.viewProps,this.sliderC_=new DM(t,{props:n.sliderProps,value:n.value,viewProps:this.viewProps}),this.textC_=new Ta(t,{parser:n.parser,props:n.textProps,sliderProps:n.sliderProps,value:n.value,viewProps:n.viewProps}),this.view=new IM(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return Bn(t,null,n=>({max:n.required.number,min:n.required.number}),n=>{const i=this.sliderC_.props;return i.set("max",n.max),i.set("min",n.min),!0})}exportProps(){const t=this.sliderC_.props;return Vn(null,{max:t.get("max"),min:t.get("min")})}}function c0(e){return{sliderProps:new zt({keyScale:e.keyScale,max:e.max,min:e.min}),textProps:new zt({formatter:xe(e.formatter),keyScale:e.keyScale,pointerScale:xe(e.pointerScale)})}}const UM={containerUnitSize:"cnt-usz"};function u0(e){return`--${UM[e]}`}function aa(e){return jv(e)}function br(e){if(rh(e))return we(e,aa)}function Wi(e,t){if(!e)return;const n=[],i=Gv(e,t);i&&n.push(i);const r=Wv(e);return r&&n.push(r),new wa(n)}function NM(e){return e?e.major===Po.major:!1}function h0(e){if(e==="inline"||e==="popup")return e}function Aa(e,t){e.write(t)}const cl=Zt("ckb");class OM{constructor(t,n){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(cl()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("label");i.classList.add(cl("l")),this.element.appendChild(i),this.labelElement=i;const r=t.createElement("input");r.classList.add(cl("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,n.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(cl("w")),this.labelElement.appendChild(s);const o=Ec(t,"check");s.appendChild(o),n.value.emitter.on("change",this.onValueChange_),this.value=n.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class FM{constructor(t,n){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.view=new OM(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const n=t.currentTarget;this.value.rawValue=n.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function kM(e){const t=[],n=Nd(e.options);return n&&t.push(n),new wa(t)}const BM=mn({id:"input-bool",type:"input",accept:(e,t)=>{if(typeof e!="boolean")return null;const n=we(t,i=>({options:i.optional.custom(Ma),readonly:i.optional.constant(!1)}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>o0,constraint:e=>kM(e.params),writer:e=>Aa},controller:e=>{const t=e.document,n=e.value,i=e.constraint,r=i&&Vl(i,Sa);return r?new Lr(t,{props:new zt({options:r.values.value("options")}),value:n,viewProps:e.viewProps}):new FM(t,{value:n,viewProps:e.viewProps})},api(e){return typeof e.controller.value.rawValue!="boolean"?null:e.controller.valueController instanceof Lr?new Id(e.controller):null}}),jr=Zt("col");class VM{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(jr()),n.foldable.bindExpandedClass(this.element,jr(void 0,"expanded")),Mi(n.foldable,"completed",Co(this.element,jr(void 0,"cpl")));const i=t.createElement("div");i.classList.add(jr("h")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(jr("s")),i.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(jr("t")),i.appendChild(s),this.textElement=s,n.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(jr("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}function zM(e,t,n){const i=je(e/255,0,1),r=je(t/255,0,1),s=je(n/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c=0,u=0;const h=(a+o)/2;return l!==0&&(u=l/(1-Math.abs(o+a-1)),i===o?c=(r-s)/l:r===o?c=2+(s-i)/l:c=4+(i-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function HM(e,t,n){const i=(e%360+360)%360,r=je(t/100,0,1),s=je(n/100,0,1),o=(1-Math.abs(2*s-1))*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o/2;let c,u,h;return i>=0&&i<60?[c,u,h]=[o,a,0]:i>=60&&i<120?[c,u,h]=[a,o,0]:i>=120&&i<180?[c,u,h]=[0,o,a]:i>=180&&i<240?[c,u,h]=[0,a,o]:i>=240&&i<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function GM(e,t,n){const i=je(e/255,0,1),r=je(t/255,0,1),s=je(n/255,0,1),o=Math.max(i,r,s),a=Math.min(i,r,s),l=o-a;let c;l===0?c=0:o===i?c=60*(((r-s)/l%6+6)%6):o===r?c=60*((s-i)/l+2):c=60*((i-r)/l+4);const u=o===0?0:l/o,h=o;return[c,u*100,h*100]}function d0(e,t,n){const i=Vv(e,360),r=je(t/100,0,1),s=je(n/100,0,1),o=s*r,a=o*(1-Math.abs(i/60%2-1)),l=s-o;let c,u,h;return i>=0&&i<60?[c,u,h]=[o,a,0]:i>=60&&i<120?[c,u,h]=[a,o,0]:i>=120&&i<180?[c,u,h]=[0,o,a]:i>=180&&i<240?[c,u,h]=[0,a,o]:i>=240&&i<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function WM(e,t,n){const i=n+t*(100-Math.abs(2*n-100))/200;return[e,i!==0?t*(100-Math.abs(2*n-100))/i:0,n+t*(100-Math.abs(2*n-100))/(2*100)]}function XM(e,t,n){const i=100-Math.abs(n*(200-t)/100-100);return[e,i!==0?t*n/i:0,n*(200-t)/(2*100)]}function Ti(e){return[e[0],e[1],e[2]]}function Sc(e,t){return[e[0],e[1],e[2],t]}const jM={hsl:{hsl:(e,t,n)=>[e,t,n],hsv:WM,rgb:HM},hsv:{hsl:XM,hsv:(e,t,n)=>[e,t,n],rgb:d0},rgb:{hsl:zM,hsv:GM,rgb:(e,t,n)=>[e,t,n]}};function _o(e,t){return[t==="float"?1:e==="rgb"?255:360,t==="float"?1:e==="rgb"?255:100,t==="float"?1:e==="rgb"?255:100]}function qM(e,t){return e===t?t:Vv(e,t)}function p0(e,t,n){var i;const r=_o(t,n);return[t==="rgb"?je(e[0],0,r[0]):qM(e[0],r[0]),je(e[1],0,r[1]),je(e[2],0,r[2]),je((i=e[3])!==null&&i!==void 0?i:1,0,1)]}function Jm(e,t,n,i){const r=_o(t,n),s=_o(t,i);return e.map((o,a)=>o/r[a]*s[a])}function f0(e,t,n){const i=Jm(e,t.mode,t.type,"int"),r=jM[t.mode][n.mode](...i);return Jm(r,n.mode,"int",n.type)}class Qt{static black(){return new Qt([0,0,0],"rgb")}constructor(t,n){this.type="int",this.mode=n,this.comps_=p0(t,n,this.type)}getComponents(t){return Sc(f0(Ti(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const hr=Zt("colp");class KM{constructor(t,n){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(hr()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(hr("hsv"));const r=t.createElement("div");r.classList.add(hr("sv")),this.svPaletteView_=n.svPaletteView,r.appendChild(this.svPaletteView_.element),i.appendChild(r);const s=t.createElement("div");s.classList.add(hr("h")),this.hPaletteView_=n.hPaletteView,s.appendChild(this.hPaletteView_.element),i.appendChild(s),this.element.appendChild(i);const o=t.createElement("div");if(o.classList.add(hr("rgb")),this.textsView_=n.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),n.alphaViews){this.alphaViews_={palette:n.alphaViews.palette,text:n.alphaViews.text};const a=t.createElement("div");a.classList.add(hr("a"));const l=t.createElement("div");l.classList.add(hr("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);const c=t.createElement("div");c.classList.add(hr("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(n=>n.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function YM(e){return e==="int"?"int":e==="float"?"float":void 0}function Od(e){return we(e,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(YM)}),expanded:t.optional.boolean,picker:t.optional.custom(h0),readonly:t.optional.constant(!1)}))}function fs(e){return e?.1:1}function m0(e){var t;return(t=e.color)===null||t===void 0?void 0:t.type}class Fd{constructor(t,n){this.type="float",this.mode=n,this.comps_=p0(t,n,this.type)}getComponents(t){return Sc(f0(Ti(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const $M={int:(e,t)=>new Qt(e,t),float:(e,t)=>new Fd(e,t)};function kd(e,t,n){return $M[n](e,t)}function ZM(e){return e.type==="float"}function JM(e){return e.type==="int"}function QM(e){const t=e.getComponents(),n=_o(e.mode,"int");return new Qt([Math.round(se(t[0],0,1,0,n[0])),Math.round(se(t[1],0,1,0,n[1])),Math.round(se(t[2],0,1,0,n[2])),t[3]],e.mode)}function tT(e){const t=e.getComponents(),n=_o(e.mode,"int");return new Fd([se(t[0],0,n[0],0,1),se(t[1],0,n[1],0,1),se(t[2],0,n[2],0,1),t[3]],e.mode)}function hn(e,t){if(e.type===t)return e;if(JM(e)&&t==="float")return tT(e);if(ZM(e)&&t==="int")return QM(e);throw Re.shouldNeverHappen()}function eT(e,t){return e.alpha===t.alpha&&e.mode===t.mode&&e.notation===t.notation&&e.type===t.type}function Jn(e,t){const n=e.match(/^(.+)%$/);return Math.min(n?parseFloat(n[1])*.01*t:parseFloat(e),t)}const nT={deg:e=>e,grad:e=>e*360/400,rad:e=>e*360/(2*Math.PI),turn:e=>e*360};function g0(e){const t=e.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(e);const n=parseFloat(t[1]),i=t[2];return nT[i](n)}function _0(e){const t=e.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const n=[Jn(t[1],255),Jn(t[2],255),Jn(t[3],255)];return isNaN(n[0])||isNaN(n[1])||isNaN(n[2])?null:n}function iT(e){const t=_0(e);return t?new Qt(t,"rgb"):null}function v0(e){const t=e.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const n=[Jn(t[1],255),Jn(t[2],255),Jn(t[3],255),Jn(t[4],1)];return isNaN(n[0])||isNaN(n[1])||isNaN(n[2])||isNaN(n[3])?null:n}function rT(e){const t=v0(e);return t?new Qt(t,"rgb"):null}function b0(e){const t=e.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const n=[g0(t[1]),Jn(t[2],100),Jn(t[3],100)];return isNaN(n[0])||isNaN(n[1])||isNaN(n[2])?null:n}function sT(e){const t=b0(e);return t?new Qt(t,"hsl"):null}function x0(e){const t=e.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const n=[g0(t[1]),Jn(t[2],100),Jn(t[3],100),Jn(t[4],1)];return isNaN(n[0])||isNaN(n[1])||isNaN(n[2])||isNaN(n[3])?null:n}function oT(e){const t=x0(e);return t?new Qt(t,"hsl"):null}function y0(e){const t=e.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const n=e.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:null}function aT(e){const t=y0(e);return t?new Qt(t,"rgb"):null}function E0(e){const t=e.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),se(parseInt(t[4]+t[4],16),0,255,0,1)];const n=e.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return n?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16),se(parseInt(n[4],16),0,255,0,1)]:null}function lT(e){const t=E0(e);return t?new Qt(t,"rgb"):null}function w0(e){const t=e.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const n=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(n[0])||isNaN(n[1])||isNaN(n[2])?null:n}function cT(e){return t=>{const n=w0(t);return n?kd(n,"rgb",e):null}}function S0(e){const t=e.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const n=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(n[0])||isNaN(n[1])||isNaN(n[2])||isNaN(n[3])?null:n}function uT(e){return t=>{const n=S0(t);return n?kd(n,"rgb",e):null}}const hT=[{parser:y0,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:E0,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:_0,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:v0,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:b0,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:x0,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:w0,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:S0,result:{alpha:!0,mode:"rgb",notation:"object"}}];function dT(e){return hT.reduce((t,{parser:n,result:i})=>t||(n(e)?i:null),null)}function pT(e,t="int"){const n=dT(e);return n?n.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},n),{type:"int"}):n.notation==="func"?Object.assign(Object.assign({},n),{type:t}):null:null}function Ca(e){const t=[aT,lT,iT,rT,sT,oT];t.push(cT("int"),uT("int"));const n=AM(t);return i=>{const r=n(i);return r?hn(r,e):null}}function fT(e){const t=Ca("int");if(typeof e!="string")return Qt.black();const n=t(e);return n??Qt.black()}function M0(e){const t=je(Math.floor(e),0,255).toString(16);return t.length===1?`0${t}`:t}function Bd(e,t="#"){const n=Ti(e.getComponents("rgb")).map(M0).join("");return`${t}${n}`}function Vd(e,t="#"){const n=e.getComponents("rgb"),i=[n[0],n[1],n[2],n[3]*255].map(M0).join("");return`${t}${i}`}function T0(e){const t=Sn(0),n=hn(e,"int");return`rgb(${Ti(n.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function vl(e){const t=Sn(2),n=Sn(0);return`rgba(${hn(e,"int").getComponents("rgb").map((s,o)=>(o===3?t:n)(s)).join(", ")})`}function mT(e){const t=[Sn(0),zl,zl],n=hn(e,"int");return`hsl(${Ti(n.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function gT(e){const t=[Sn(0),zl,zl,Sn(2)];return`hsla(${hn(e,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function A0(e,t){const n=Sn(t==="float"?2:0),i=["r","g","b"],r=hn(e,t);return`{${Ti(r.getComponents("rgb")).map((o,a)=>`${i[a]}: ${n(o)}`).join(", ")}}`}function _T(e){return t=>A0(t,e)}function C0(e,t){const n=Sn(2),i=Sn(t==="float"?2:0),r=["r","g","b","a"];return`{${hn(e,t).getComponents("rgb").map((a,l)=>{const c=l===3?n:i;return`${r[l]}: ${c(a)}`}).join(", ")}}`}function vT(e){return t=>C0(t,e)}const bT=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Bd},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Vd},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:T0},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:vl},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:mT},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:gT},...["int","float"].reduce((e,t)=>[...e,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:_T(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:vT(t)}],[])];function P0(e){return bT.reduce((t,n)=>t||(eT(n.format,e)?n.stringifier:null),null)}const Go=Zt("apl");class xT{constructor(t,n){this.onValueChange_=this.onValueChange_.bind(this),this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Go()),n.viewProps.bindClassModifiers(this.element),n.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Go("b")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Go("c")),i.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(Go("m")),this.element.appendChild(s),this.markerElem_=s;const o=t.createElement("div");o.classList.add(Go("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){const t=this.value.rawValue,n=t.getComponents("rgb"),i=new Qt([n[0],n[1],n[2],0],"rgb"),r=new Qt([n[0],n[1],n[2],255],"rgb"),s=["to right",vl(i),vl(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=vl(t);const o=se(n[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}}class yT{constructor(t,n){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.view=new xT(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new bs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,n){if(!t.point)return;const i=t.point.x/t.bounds.width,r=this.value.rawValue,[s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Qt([s,o,a,i],"hsv"),n)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const n=vn(fs(!0),Ji(t));if(n===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new Qt([r,s,o,a+n],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){vn(fs(!0),Ji(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const zs=Zt("coltxt");function ET(e){const t=e.createElement("select"),n=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(n.reduce((i,r)=>{const s=e.createElement("option");return s.textContent=r.text,s.value=r.value,i.appendChild(s),i},e.createDocumentFragment())),t}class wT{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(zs()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(zs("m")),this.modeElem_=ET(t),this.modeElem_.classList.add(zs("ms")),i.appendChild(this.modeSelectElement),n.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(zs("mm")),r.appendChild(Ec(t,"dropdown")),i.appendChild(r),this.element.appendChild(i);const s=t.createElement("div");s.classList.add(zs("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=n.inputViews,this.applyInputViews_(),qi(n.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){Yv(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(n=>{const i=t.createElement("div");i.classList.add(zs("c")),i.appendChild(n.element),this.inputsElem_.appendChild(i)})}}function ST(e){return Sn(e==="float"?2:0)}function MT(e,t,n){const i=_o(e,t)[n];return new xa({min:0,max:i})}function TT(e,t,n){return new Ta(e,{arrayPosition:n===0?"fst":n===2?"lst":"mid",parser:t.parser,props:zt.fromObject({formatter:ST(t.colorType),keyScale:fs(!1),pointerScale:t.colorType==="float"?.01:1}),value:xe(0,{constraint:MT(t.colorMode,t.colorType,n)}),viewProps:t.viewProps})}function AT(e,t){const n={colorMode:t.colorMode,colorType:t.colorType,parser:Zi,viewProps:t.viewProps};return[0,1,2].map(i=>{const r=TT(e,n,i);return Lo({primary:t.value,secondary:r.value,forward(s){return hn(s,t.colorType).getComponents(t.colorMode)[i]},backward(s,o){const a=t.colorMode,c=hn(s,t.colorType).getComponents(a);c[i]=o;const u=kd(Sc(Ti(c),c[3]),a,t.colorType);return hn(u,"int")}}),r})}function CT(e,t){const n=new sa(e,{parser:Ca("int"),props:zt.fromObject({formatter:Bd}),value:xe(Qt.black()),viewProps:t.viewProps});return Lo({primary:t.value,secondary:n.value,forward:i=>new Qt(Ti(i.getComponents()),i.mode),backward:(i,r)=>new Qt(Sc(Ti(r.getComponents(i.mode)),i.getComponents()[3]),i.mode)}),[n]}function PT(e){return e!=="hex"}class RT{constructor(t,n){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=n.colorType,this.value=n.value,this.viewProps=n.viewProps,this.colorMode=xe(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new wT(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const n=this.colorMode.rawValue;return PT(n)?AT(t,{colorMode:n,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):CT(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const n=t.currentTarget;this.colorMode.rawValue=n.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(i=>i.view)}}const Au=Zt("hpl");class LT{constructor(t,n){this.onValueChange_=this.onValueChange_.bind(this),this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Au()),n.viewProps.bindClassModifiers(this.element),n.viewProps.bindTabIndex(this.element);const i=t.createElement("div");i.classList.add(Au("c")),this.element.appendChild(i);const r=t.createElement("div");r.classList.add(Au("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[n]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=T0(new Qt([n,100,100],"hsv"));const i=se(n,0,360,0,100);this.markerElem_.style.left=`${i}%`}onValueChange_(){this.update_()}}class DT{constructor(t,n){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.view=new LT(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new bs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,n){if(!t.point)return;const i=se(je(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,o,a]=r.getComponents("hsv");this.value.setRawValue(new Qt([i,s,o,a],"hsv"),n)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const n=vn(fs(!1),Ji(t));if(n===0)return;const i=this.value.rawValue,[r,s,o,a]=i.getComponents("hsv");this.value.setRawValue(new Qt([r+n,s,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){vn(fs(!1),Ji(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Cu=Zt("svp"),Qm=64;class IT{constructor(t,n){this.onValueChange_=this.onValueChange_.bind(this),this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Cu()),n.viewProps.bindClassModifiers(this.element),n.viewProps.bindTabIndex(this.element);const i=t.createElement("canvas");i.height=Qm,i.width=Qm,i.classList.add(Cu("c")),this.element.appendChild(i),this.canvasElement=i;const r=t.createElement("div");r.classList.add(Cu("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=D3(this.canvasElement);if(!t)return;const i=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,o=t.getImageData(0,0,r,s),a=o.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=se(h,0,r,0,100),m=se(u,0,s,100,0),_=d0(i[0],d,m),b=(u*r+h)*4;a[b]=_[0],a[b+1]=_[1],a[b+2]=_[2],a[b+3]=255}t.putImageData(o,0,0);const l=se(i[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=se(i[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class UT{constructor(t,n){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.view=new IT(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new bs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,n){if(!t.point)return;const i=se(t.point.x,0,t.bounds.width,0,100),r=se(t.point.y,0,t.bounds.height,100,0),[s,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Qt([s,i,r,o],"hsv"),n)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){l0(t.key)&&t.preventDefault();const[n,i,r,s]=this.value.rawValue.getComponents("hsv"),o=fs(!1),a=vn(o,Ji(t)),l=vn(o,oa(t));a===0&&l===0||this.value.setRawValue(new Qt([n,i+a,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const n=fs(!1),i=vn(n,Ji(t)),r=vn(n,oa(t));i===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class NT{constructor(t,n){this.value=n.value,this.viewProps=n.viewProps,this.hPaletteC_=new DT(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new UT(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=n.supportsAlpha?{palette:new yT(t,{value:this.value,viewProps:this.viewProps}),text:new Ta(t,{parser:Zi,props:zt.fromObject({pointerScale:.01,keyScale:.1,formatter:Sn(2)}),value:xe(0,{constraint:new xa({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Lo({primary:this.value,secondary:this.alphaIcs_.text.value,forward:i=>i.getComponents()[3],backward:(i,r)=>{const s=i.getComponents();return s[3]=r,new Qt(s,i.mode)}}),this.textsC_=new RT(t,{colorType:n.colorType,value:this.value,viewProps:this.viewProps}),this.view=new KM(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:n.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Pu=Zt("colsw");class OT{constructor(t,n){this.onValueChange_=this.onValueChange_.bind(this),n.value.emitter.on("change",this.onValueChange_),this.value=n.value,this.element=t.createElement("div"),this.element.classList.add(Pu()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(Pu("sw")),this.element.appendChild(i),this.swatchElem_=i;const r=t.createElement("button");r.classList.add(Pu("b")),n.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=Vd(t)}onValueChange_(){this.update_()}}class FT{constructor(t,n){this.value=n.value,this.viewProps=n.viewProps,this.view=new OT(t,{value:this.value,viewProps:this.viewProps})}}class zd{constructor(t,n){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.foldable_=Ea.create(n.expanded),this.swatchC_=new FT(t,{value:this.value,viewProps:this.viewProps});const i=this.swatchC_.view.buttonElement;i.addEventListener("blur",this.onButtonBlur_),i.addEventListener("click",this.onButtonClick_),this.textC_=new sa(t,{parser:n.parser,props:zt.fromObject({formatter:n.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new VM(t,{foldable:this.foldable_,pickerLayout:n.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=n.pickerLayout==="popup"?new s0(t,{viewProps:this.viewProps}):null;const r=new NT(t,{colorType:n.colorType,supportsAlpha:n.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),Lo({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Dd(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const n=this.view.element,i=t.relatedTarget;(!i||!n.contains(i))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const n=this.popC_.view.element,i=$v(t);i&&n.contains(i)||i&&i===this.swatchC_.view.buttonElement&&!Td(n.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function kT(e){return Ti(e.getComponents("rgb")).reduce((t,n)=>t<<8|Math.floor(n)&255,0)}function BT(e){return e.getComponents("rgb").reduce((t,n,i)=>{const r=Math.floor(i===3?n*255:n)&255;return t<<8|r},0)>>>0}function VT(e){return new Qt([e>>16&255,e>>8&255,e&255],"rgb")}function zT(e){return new Qt([e>>24&255,e>>16&255,e>>8&255,se(e&255,0,255,0,1)],"rgb")}function HT(e){return typeof e!="number"?Qt.black():VT(e)}function GT(e){return typeof e!="number"?Qt.black():zT(e)}function bl(e,t){return typeof e!="object"||pe(e)?!1:t in e&&typeof e[t]=="number"}function R0(e){return bl(e,"r")&&bl(e,"g")&&bl(e,"b")}function L0(e){return R0(e)&&bl(e,"a")}function D0(e){return R0(e)}function Hd(e,t){if(e.mode!==t.mode||e.type!==t.type)return!1;const n=e.getComponents(),i=t.getComponents();for(let r=0;r<n.length;r++)if(n[r]!==i[r])return!1;return!0}function tg(e){return"a"in e?[e.r,e.g,e.b,e.a]:[e.r,e.g,e.b]}function WT(e){const t=P0(e);return t?(n,i)=>{Aa(n,t(i))}:null}function XT(e){const t=e?BT:kT;return(n,i)=>{Aa(n,t(i))}}function jT(e,t,n){const r=hn(t,n).toRgbaObject();e.writeProperty("r",r.r),e.writeProperty("g",r.g),e.writeProperty("b",r.b),e.writeProperty("a",r.a)}function qT(e,t,n){const r=hn(t,n).toRgbaObject();e.writeProperty("r",r.r),e.writeProperty("g",r.g),e.writeProperty("b",r.b)}function KT(e,t){return(n,i)=>{e?jT(n,i,t):qT(n,i,t)}}function YT(e){var t;return!!(!((t=e==null?void 0:e.color)===null||t===void 0)&&t.alpha)}function $T(e){return e?t=>Vd(t,"0x"):t=>Bd(t,"0x")}function ZT(e){return"color"in e||e.view==="color"}const JT=mn({id:"input-color-number",type:"input",accept:(e,t)=>{if(typeof e!="number"||!ZT(t))return null;const n=Od(t);return n?{initialValue:e,params:Object.assign(Object.assign({},n),{supportsAlpha:YT(t)})}:null},binding:{reader:e=>e.params.supportsAlpha?GT:HT,equals:Hd,writer:e=>XT(e.params.supportsAlpha)},controller:e=>{var t,n;return new zd(e.document,{colorType:"int",expanded:(t=e.params.expanded)!==null&&t!==void 0?t:!1,formatter:$T(e.params.supportsAlpha),parser:Ca("int"),pickerLayout:(n=e.params.picker)!==null&&n!==void 0?n:"popup",supportsAlpha:e.params.supportsAlpha,value:e.value,viewProps:e.viewProps})}});function QT(e,t){if(!D0(e))return hn(Qt.black(),t);if(t==="int"){const n=tg(e);return new Qt(n,"rgb")}if(t==="float"){const n=tg(e);return new Fd(n,"rgb")}return hn(Qt.black(),"int")}function tA(e){return L0(e)}function eA(e){return t=>{const n=QT(t,e);return hn(n,"int")}}function nA(e,t){return n=>e?C0(n,t):A0(n,t)}const iA=mn({id:"input-color-object",type:"input",accept:(e,t)=>{var n;if(!D0(e))return null;const i=Od(t);return i?{initialValue:e,params:Object.assign(Object.assign({},i),{colorType:(n=m0(t))!==null&&n!==void 0?n:"int"})}:null},binding:{reader:e=>eA(e.params.colorType),equals:Hd,writer:e=>KT(tA(e.initialValue),e.params.colorType)},controller:e=>{var t,n;const i=L0(e.initialValue);return new zd(e.document,{colorType:e.params.colorType,expanded:(t=e.params.expanded)!==null&&t!==void 0?t:!1,formatter:nA(i,e.params.colorType),parser:Ca("int"),pickerLayout:(n=e.params.picker)!==null&&n!==void 0?n:"popup",supportsAlpha:i,value:e.value,viewProps:e.viewProps})}}),rA=mn({id:"input-color-string",type:"input",accept:(e,t)=>{if(typeof e!="string"||t.view==="text")return null;const n=pT(e,m0(t));if(!n)return null;const i=P0(n);if(!i)return null;const r=Od(t);return r?{initialValue:e,params:Object.assign(Object.assign({},r),{format:n,stringifier:i})}:null},binding:{reader:()=>fT,equals:Hd,writer:e=>{const t=WT(e.params.format);if(!t)throw Re.notBindable();return t}},controller:e=>{var t,n;return new zd(e.document,{colorType:e.params.format.type,expanded:(t=e.params.expanded)!==null&&t!==void 0?t:!1,formatter:e.params.stringifier,parser:Ca("int"),pickerLayout:(n=e.params.picker)!==null&&n!==void 0?n:"popup",supportsAlpha:e.params.format.alpha,value:e.value,viewProps:e.viewProps})}});class Gd{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const n=this.asm_.toComponents(t).map((i,r)=>{var s,o;return(o=(s=this.components[r])===null||s===void 0?void 0:s.constrain(i))!==null&&o!==void 0?o:i});return this.asm_.fromComponents(n)}}const eg=Zt("pndtxt");class sA{constructor(t,n){this.textViews=n.textViews,this.element=t.createElement("div"),this.element.classList.add(eg()),this.textViews.forEach(i=>{const r=t.createElement("div");r.classList.add(eg("a")),r.appendChild(i.element),this.element.appendChild(r)})}}function oA(e,t,n){return new Ta(e,{arrayPosition:n===0?"fst":n===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[n].textProps,value:xe(0,{constraint:t.axes[n].constraint}),viewProps:t.viewProps})}class Wd{constructor(t,n){this.value=n.value,this.viewProps=n.viewProps,this.acs_=n.axes.map((i,r)=>oA(t,n,r)),this.acs_.forEach((i,r)=>{Lo({primary:this.value,secondary:i.value,forward:s=>n.assembly.toComponents(s)[r],backward:(s,o)=>{const a=n.assembly.toComponents(s);return a[r]=o,n.assembly.fromComponents(a)}})}),this.view=new sA(t,{textViews:this.acs_.map(i=>i.view)})}get textControllers(){return this.acs_}}class aA extends ra{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function lA(e,t){const n=[],i=Gv(e,t);i&&n.push(i);const r=Wv(e);r&&n.push(r);const s=Nd(e.options);return s&&n.push(s),new wa(n)}const cA=mn({id:"input-number",type:"input",accept:(e,t)=>{if(typeof e!="number")return null;const n=we(t,i=>Object.assign(Object.assign({},jv(i)),{options:i.optional.custom(Ma),readonly:i.optional.constant(!1)}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>Bv,constraint:e=>lA(e.params,e.initialValue),writer:e=>Aa},controller:e=>{const t=e.value,n=e.constraint,i=n&&Vl(n,Sa);if(i)return new Lr(e.document,{props:new zt({options:i.values.value("options")}),value:t,viewProps:e.viewProps});const r=Xv(e.params,t.rawValue),s=n&&Vl(n,xa);return s?new Hl(e.document,Object.assign(Object.assign({},c0(Object.assign(Object.assign({},r),{keyScale:xe(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:Zi,value:t,viewProps:e.viewProps})):new Ta(e.document,{parser:Zi,props:zt.fromObject(r),value:t,viewProps:e.viewProps})},api(e){return typeof e.controller.value.rawValue!="number"?null:e.controller.valueController instanceof Hl?new aA(e.controller):e.controller.valueController instanceof Lr?new Id(e.controller):null}});class Sr{constructor(t=0,n=0){this.x=t,this.y=n}getComponents(){return[this.x,this.y]}static isObject(t){if(pe(t))return!1;const n=t.x,i=t.y;return!(typeof n!="number"||typeof i!="number")}static equals(t,n){return t.x===n.x&&t.y===n.y}toObject(){return{x:this.x,y:this.y}}}const I0={toComponents:e=>e.getComponents(),fromComponents:e=>new Sr(...e)},Hs=Zt("p2d");class uA{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(Hs()),n.viewProps.bindClassModifiers(this.element),qi(n.expanded,Co(this.element,Hs(void 0,"expanded")));const i=t.createElement("div");i.classList.add(Hs("h")),this.element.appendChild(i);const r=t.createElement("button");r.classList.add(Hs("b")),r.appendChild(Ec(t,"p2dpad")),n.viewProps.bindDisabled(r),i.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(Hs("t")),i.appendChild(s),this.textElement=s,n.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(Hs("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}const dr=Zt("p2dp");class hA{constructor(t,n){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=n.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(dr()),n.layout==="popup"&&this.element.classList.add(dr(void 0,"p")),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("div");i.classList.add(dr("p")),n.viewProps.bindTabIndex(i),this.element.appendChild(i),this.padElement=i;const r=t.createElementNS(Ei,"svg");r.classList.add(dr("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(Ei,"line");s.classList.add(dr("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const o=t.createElementNS(Ei,"line");o.classList.add(dr("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);const a=t.createElementNS(Ei,"line");a.classList.add(dr("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;const l=t.createElement("div");l.classList.add(dr("m")),this.padElement.appendChild(l),this.markerElem_=l,n.value.emitter.on("change",this.onValueChange_),this.value=n.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,n]=this.value.rawValue.getComponents(),i=this.props_.get("max"),r=se(t,-i,+i,0,100),s=se(n,-i,+i,0,100),o=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ng(e,t,n){return[vn(t[0],Ji(e)),vn(t[1],oa(e))*(n?1:-1)]}class dA{constructor(t,n){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=n.props,this.value=n.value,this.viewProps=n.viewProps,this.view=new hA(t,{layout:n.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new bs(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,n){if(!t.point)return;const i=this.props.get("max"),r=se(t.point.x,0,t.bounds.width,-i,+i),s=se(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-i,+i);this.value.setRawValue(new Sr(r,s),n)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){l0(t.key)&&t.preventDefault();const[n,i]=ng(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));n===0&&i===0||this.value.setRawValue(new Sr(this.value.rawValue.x+n,this.value.rawValue.y+i),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[n,i]=ng(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));n===0&&i===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class pA{constructor(t,n){var i,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=n.value,this.viewProps=n.viewProps,this.foldable_=Ea.create(n.expanded),this.popC_=n.pickerLayout==="popup"?new s0(t,{viewProps:this.viewProps}):null;const s=new dA(t,{layout:n.pickerLayout,props:new zt({invertsY:xe(n.invertsY),max:xe(n.max),xKeyScale:n.axes[0].textProps.value("keyScale"),yKeyScale:n.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new Wd(t,{assembly:I0,axes:n.axes,parser:n.parser,value:this.value,viewProps:this.viewProps}),this.view=new uA(t,{expanded:this.foldable_.value("expanded"),pickerLayout:n.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(i=this.view.buttonElement)===null||i===void 0||i.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Lo({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Dd(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const n=this.view.element,i=t.relatedTarget;(!i||!n.contains(i))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const n=this.popC_.view.element,i=$v(t);i&&n.contains(i)||i&&i===this.view.buttonElement&&!Td(n.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function fA(e){return Sr.isObject(e)?new Sr(e.x,e.y):new Sr}function mA(e,t){e.writeProperty("x",t.x),e.writeProperty("y",t.y)}function gA(e,t){return new Gd({assembly:I0,components:[Wi(Object.assign(Object.assign({},e),e.x),t.x),Wi(Object.assign(Object.assign({},e),e.y),t.y)]})}function ig(e,t){var n,i;if(!pe(e.min)||!pe(e.max))return Math.max(Math.abs((n=e.min)!==null&&n!==void 0?n:0),Math.abs((i=e.max)!==null&&i!==void 0?i:0));const r=zv(e);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function _A(e,t){var n,i;const r=ig(ds(e,(n=e.x)!==null&&n!==void 0?n:{}),t.x),s=ig(ds(e,(i=e.y)!==null&&i!==void 0?i:{}),t.y);return Math.max(r,s)}function vA(e){if(!("y"in e))return!1;const t=e.y;return t&&"inverted"in t?!!t.inverted:!1}const bA=mn({id:"input-point2d",type:"input",accept:(e,t)=>{if(!Sr.isObject(e))return null;const n=we(t,i=>Object.assign(Object.assign({},aa(i)),{expanded:i.optional.boolean,picker:i.optional.custom(h0),readonly:i.optional.constant(!1),x:i.optional.custom(br),y:i.optional.object(Object.assign(Object.assign({},aa(i)),{inverted:i.optional.boolean}))}));return n?{initialValue:e,params:n}:null},binding:{reader:()=>fA,constraint:e=>gA(e.params,e.initialValue),equals:Sr.equals,writer:()=>mA},controller:e=>{var t,n;const i=e.document,r=e.value,s=e.constraint,o=[e.params.x,e.params.y];return new pA(i,{axes:r.rawValue.getComponents().map((a,l)=>{var c;return Md({constraint:s.components[l],initialValue:a,params:ds(e.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(t=e.params.expanded)!==null&&t!==void 0?t:!1,invertsY:vA(e.params),max:_A(e.params,r.rawValue),parser:Zi,pickerLayout:(n=e.params.picker)!==null&&n!==void 0?n:"popup",value:r,viewProps:e.viewProps})}});class Js{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(pe(t))return!1;const n=t.x,i=t.y,r=t.z;return!(typeof n!="number"||typeof i!="number"||typeof r!="number")}static equals(t,n){return t.x===n.x&&t.y===n.y&&t.z===n.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const U0={toComponents:e=>e.getComponents(),fromComponents:e=>new Js(...e)};function xA(e){return Js.isObject(e)?new Js(e.x,e.y,e.z):new Js}function yA(e,t){e.writeProperty("x",t.x),e.writeProperty("y",t.y),e.writeProperty("z",t.z)}function EA(e,t){return new Gd({assembly:U0,components:[Wi(Object.assign(Object.assign({},e),e.x),t.x),Wi(Object.assign(Object.assign({},e),e.y),t.y),Wi(Object.assign(Object.assign({},e),e.z),t.z)]})}const wA=mn({id:"input-point3d",type:"input",accept:(e,t)=>{if(!Js.isObject(e))return null;const n=we(t,i=>Object.assign(Object.assign({},aa(i)),{readonly:i.optional.constant(!1),x:i.optional.custom(br),y:i.optional.custom(br),z:i.optional.custom(br)}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>xA,constraint:e=>EA(e.params,e.initialValue),equals:Js.equals,writer:e=>yA},controller:e=>{const t=e.value,n=e.constraint,i=[e.params.x,e.params.y,e.params.z];return new Wd(e.document,{assembly:U0,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Md({constraint:n.components[s],initialValue:r,params:ds(e.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:Zi,value:t,viewProps:e.viewProps})}});class Qs{constructor(t=0,n=0,i=0,r=0){this.x=t,this.y=n,this.z=i,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(pe(t))return!1;const n=t.x,i=t.y,r=t.z,s=t.w;return!(typeof n!="number"||typeof i!="number"||typeof r!="number"||typeof s!="number")}static equals(t,n){return t.x===n.x&&t.y===n.y&&t.z===n.z&&t.w===n.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const N0={toComponents:e=>e.getComponents(),fromComponents:e=>new Qs(...e)};function SA(e){return Qs.isObject(e)?new Qs(e.x,e.y,e.z,e.w):new Qs}function MA(e,t){e.writeProperty("x",t.x),e.writeProperty("y",t.y),e.writeProperty("z",t.z),e.writeProperty("w",t.w)}function TA(e,t){return new Gd({assembly:N0,components:[Wi(Object.assign(Object.assign({},e),e.x),t.x),Wi(Object.assign(Object.assign({},e),e.y),t.y),Wi(Object.assign(Object.assign({},e),e.z),t.z),Wi(Object.assign(Object.assign({},e),e.w),t.w)]})}const AA=mn({id:"input-point4d",type:"input",accept:(e,t)=>{if(!Qs.isObject(e))return null;const n=we(t,i=>Object.assign(Object.assign({},aa(i)),{readonly:i.optional.constant(!1),w:i.optional.custom(br),x:i.optional.custom(br),y:i.optional.custom(br),z:i.optional.custom(br)}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>SA,constraint:e=>TA(e.params,e.initialValue),equals:Qs.equals,writer:e=>MA},controller:e=>{const t=e.value,n=e.constraint,i=[e.params.x,e.params.y,e.params.z,e.params.w];return new Wd(e.document,{assembly:N0,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Md({constraint:n.components[s],initialValue:r,params:ds(e.params,(o=i[s])!==null&&o!==void 0?o:{})})}),parser:Zi,value:t,viewProps:e.viewProps})}});function CA(e){const t=[],n=Nd(e.options);return n&&t.push(n),new wa(t)}const PA=mn({id:"input-string",type:"input",accept:(e,t)=>{if(typeof e!="string")return null;const n=we(t,i=>({readonly:i.optional.constant(!1),options:i.optional.custom(Ma)}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>a0,constraint:e=>CA(e.params),writer:e=>Aa},controller:e=>{const t=e.document,n=e.value,i=e.constraint,r=i&&Vl(i,Sa);return r?new Lr(t,{props:new zt({options:r.values.value("options")}),value:n,viewProps:e.viewProps}):new sa(t,{parser:s=>s,props:zt.fromObject({formatter:ch}),value:n,viewProps:e.viewProps})},api(e){return typeof e.controller.value.rawValue!="string"?null:e.controller.valueController instanceof Lr?new Id(e.controller):null}}),Pa={monitor:{defaultInterval:200,defaultRows:3}},rg=Zt("mll");class RA{constructor(t,n){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=n.formatter,this.element=t.createElement("div"),this.element.classList.add(rg()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("textarea");i.classList.add(rg("i")),i.style.height=`calc(var(${u0("containerUnitSize")}) * ${n.rows})`,i.readOnly=!0,n.viewProps.bindDisabled(i),this.element.appendChild(i),this.textareaElem_=i,n.value.emitter.on("change",this.onValueUpdate_),this.value=n.value,this.update_()}update_(){const t=this.textareaElem_,n=t.scrollTop===t.scrollHeight-t.clientHeight,i=[];this.value.rawValue.forEach(r=>{r!==void 0&&i.push(this.formatter_(r))}),t.textContent=i.join(`
`),n&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class Xd{constructor(t,n){this.value=n.value,this.viewProps=n.viewProps,this.view=new RA(t,{formatter:n.formatter,rows:n.rows,value:this.value,viewProps:this.viewProps})}}const sg=Zt("sgl");class LA{constructor(t,n){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=n.formatter,this.element=t.createElement("div"),this.element.classList.add(sg()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("input");i.classList.add(sg("i")),i.readOnly=!0,i.type="text",n.viewProps.bindDisabled(i),this.element.appendChild(i),this.inputElement=i,n.value.emitter.on("change",this.onValueUpdate_),this.value=n.value,this.update_()}update_(){const t=this.value.rawValue,n=t[t.length-1];this.inputElement.value=n!==void 0?this.formatter_(n):""}onValueUpdate_(){this.update_()}}class jd{constructor(t,n){this.value=n.value,this.viewProps=n.viewProps,this.view=new LA(t,{formatter:n.formatter,value:this.value,viewProps:this.viewProps})}}const DA=mn({id:"monitor-bool",type:"monitor",accept:(e,t)=>{if(typeof e!="boolean")return null;const n=we(t,i=>({readonly:i.required.constant(!0),rows:i.optional.number}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>o0},controller:e=>{var t;return e.value.rawValue.length===1?new jd(e.document,{formatter:Zm,value:e.value,viewProps:e.viewProps}):new Xd(e.document,{formatter:Zm,rows:(t=e.params.rows)!==null&&t!==void 0?t:Pa.monitor.defaultRows,value:e.value,viewProps:e.viewProps})}});class IA extends ra{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const pr=Zt("grl");class UA{constructor(t,n){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(pr()),n.viewProps.bindClassModifiers(this.element),this.formatter_=n.formatter,this.props_=n.props,this.cursor_=n.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const i=t.createElementNS(Ei,"svg");i.classList.add(pr("g")),i.style.height=`calc(var(${u0("containerUnitSize")}) * ${n.rows})`,this.element.appendChild(i),this.svgElem_=i;const r=t.createElementNS(Ei,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(pr("t"),Zt("tt")()),this.element.appendChild(s),this.tooltipElem_=s,n.value.emitter.on("change",this.onValueUpdate_),this.value=n.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:n}=this.element,i=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),o=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const m=se(d,0,i,0,t),_=se(h,r,s,n,0);o.push([m,_].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));const a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(pr("t","a"));return}const c=se(this.cursor_.rawValue,0,i,0,t),u=se(l,r,s,n,0);a.style.left=`${c}px`,a.style.top=`${u}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(pr("t","a"))||(a.classList.add(pr("t","a"),pr("t","in")),Bl(a),a.classList.remove(pr("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class O0{constructor(t,n){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=n.props,this.value=n.value,this.viewProps=n.viewProps,this.cursor_=xe(-1),this.view=new UA(t,{cursor:this.cursor_,formatter:n.formatter,rows:n.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!Td(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const i=new bs(this.view.element);i.emitter.on("down",this.onGraphPointerDown_),i.emitter.on("move",this.onGraphPointerMove_),i.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return Bn(t,null,n=>({max:n.required.number,min:n.required.number}),n=>(this.props.set("max",n.max),this.props.set("min",n.min),!0))}exportProps(){return Vn(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:n}=this.view.element;this.cursor_.rawValue=Math.floor(se(t.offsetX,0,n,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(se(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function uh(e){return pe(e.format)?Sn(2):e.format}function NA(e){var t;return e.value.rawValue.length===1?new jd(e.document,{formatter:uh(e.params),value:e.value,viewProps:e.viewProps}):new Xd(e.document,{formatter:uh(e.params),rows:(t=e.params.rows)!==null&&t!==void 0?t:Pa.monitor.defaultRows,value:e.value,viewProps:e.viewProps})}function OA(e){var t,n,i;return new O0(e.document,{formatter:uh(e.params),rows:(t=e.params.rows)!==null&&t!==void 0?t:Pa.monitor.defaultRows,props:zt.fromObject({max:(n=e.params.max)!==null&&n!==void 0?n:100,min:(i=e.params.min)!==null&&i!==void 0?i:0}),value:e.value,viewProps:e.viewProps})}function og(e){return e.view==="graph"}const FA=mn({id:"monitor-number",type:"monitor",accept:(e,t)=>{if(typeof e!="number")return null;const n=we(t,i=>({format:i.optional.function,max:i.optional.number,min:i.optional.number,readonly:i.required.constant(!0),rows:i.optional.number,view:i.optional.string}));return n?{initialValue:e,params:n}:null},binding:{defaultBufferSize:e=>og(e)?64:1,reader:e=>Bv},controller:e=>og(e.params)?OA(e):NA(e),api:e=>e.controller.valueController instanceof O0?new IA(e.controller):null}),kA=mn({id:"monitor-string",type:"monitor",accept:(e,t)=>{if(typeof e!="string")return null;const n=we(t,i=>({multiline:i.optional.boolean,readonly:i.required.constant(!0),rows:i.optional.number}));return n?{initialValue:e,params:n}:null},binding:{reader:e=>a0},controller:e=>{var t;const n=e.value;return n.rawValue.length>1||e.params.multiline?new Xd(e.document,{formatter:ch,rows:(t=e.params.rows)!==null&&t!==void 0?t:Pa.monitor.defaultRows,value:n,viewProps:e.viewProps}):new jd(e.document,{formatter:ch,value:n,viewProps:e.viewProps})}});class BA{constructor(){this.map_=new Map}get(t){var n;return(n=this.map_.get(t))!==null&&n!==void 0?n:null}has(t){return this.map_.has(t)}add(t,n){return this.map_.set(t,n),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),n}}class VA{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function zA(e,t){var n;const i=e.accept(t.target.read(),t.params);if(pe(i))return null;const r={target:t.target,initialValue:i.initialValue,params:i.params},s=we(t.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),o=e.binding.reader(r),a=e.binding.constraint?e.binding.constraint(r):void 0,l=new VA({reader:o,target:t.target,writer:e.binding.writer(r)}),c=new S3(xe(o(i.initialValue),{constraint:a,equals:e.binding.equals}),l),u=e.controller({constraint:a,document:t.document,initialValue:i.initialValue,params:i.params,value:c,viewProps:er.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new B3(t.document,{blade:Ro(),props:zt.fromObject({label:"label"in t.params?(n=s==null?void 0:s.label)!==null&&n!==void 0?n:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class HA{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function GA(e,t){return t===0?new yM:new EM(e,t??Pa.monitor.defaultInterval)}function WA(e,t){var n,i,r;const s=e.accept(t.target.read(),t.params);if(pe(s))return null;const o={target:t.target,initialValue:s.initialValue,params:s.params},a=we(t.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=e.binding.reader(o),c=(i=(n=a==null?void 0:a.bufferSize)!==null&&n!==void 0?n:e.binding.defaultBufferSize&&e.binding.defaultBufferSize(s.params))!==null&&i!==void 0?i:1,u=new W3({binding:new HA({reader:l,target:t.target}),bufferSize:c,ticker:GA(t.document,a==null?void 0:a.interval)}),h=e.controller({document:t.document,params:s.params,value:u,viewProps:er.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new j3(t.document,{blade:Ro(),props:zt.fromObject({label:"label"in t.params?(r=a==null?void 0:a.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:h})}class XA{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,n){if(!NM(n.core))throw Re.notCompatible(t,n.id);n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput_(t,n,i){return this.pluginsMap_.inputs.reduce((r,s)=>r??zA(s,{document:t,target:n,params:i}),null)}createMonitor_(t,n,i){return this.pluginsMap_.monitors.reduce((r,s)=>r??WA(s,{document:t,params:i,target:n}),null)}createBinding(t,n,i){const r=n.read();if(pe(r))throw new Re({context:{key:n.key},type:"nomatchingcontroller"});const s=this.createInput_(t,n,i);if(s)return s;const o=this.createMonitor_(t,n,i);if(o)return o;throw new Re({context:{key:n.key},type:"nomatchingcontroller"})}createBlade(t,n){const i=this.pluginsMap_.blades.reduce((r,s)=>r??xM(s,{document:t,params:n}),null);if(!i)throw new Re({type:"nomatchingview",context:{params:n}});return i}createInputBindingApi_(t){const n=this.pluginsMap_.inputs.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,n??new ra(t))}createMonitorBindingApi_(t){const n=this.pluginsMap_.monitors.reduce((i,r)=>{var s,o;return i||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,n??new ra(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(V3(t))return this.createInputBindingApi_(t);if(q3(t))return this.createMonitorBindingApi_(t);throw Re.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(k3(t))return this.createBindingApi(t);const n=this.pluginsMap_.blades.reduce((i,r)=>i??r.api({controller:t,pool:this}),null);if(!n)throw Re.shouldNeverHappen();return this.apiCache_.add(t,n)}}const jA=new BA;function qA(){const e=new XA(jA);return[bA,wA,AA,PA,cA,rA,iA,JT,BM,DA,kA,FA,J3,hM,r0].forEach(t=>{e.register("core",t)}),e}class KA extends vs{constructor(t){super(t),this.emitter_=new Ge,this.controller.value.emitter.on("change",n=>{this.emitter_.emit("change",new ya(this,n.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}}class YA extends vs{}class $A extends vs{constructor(t){super(t),this.emitter_=new Ge,this.controller.value.emitter.on("change",n=>{this.emitter_.emit("change",new ya(this,n.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}}class ZA extends vs{constructor(t){super(t),this.emitter_=new Ge,this.controller.value.emitter.on("change",n=>{this.emitter_.emit("change",new ya(this,n.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,n){const i=n.bind(this);return this.emitter_.on(t,r=>{i(r)},{key:n}),this}off(t,n){return this.emitter_.off(t,n),this}}const JA=function(){return{id:"list",type:"blade",core:Po,accept(e){const t=we(e,n=>({options:n.required.custom(Ma),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string}));return t?{params:t}:null},controller(e){const t=new Sa(Ud(e.params.options)),n=xe(e.params.value,{constraint:t}),i=new Lr(e.document,{props:new zt({options:t.values.value("options")}),value:n,viewProps:e.viewProps});return new ps(e.document,{blade:e.blade,props:zt.fromObject({label:e.params.label}),value:n,valueController:i})},api(e){return!(e.controller instanceof ps)||!(e.controller.valueController instanceof Lr)?null:new KA(e.controller)}}}();class QA extends n0{constructor(t,n){super(t,n)}get element(){return this.controller.view.element}}class tC extends ah{constructor(t,n){super(t,{expanded:n.expanded,blade:n.blade,props:n.props,root:!0,viewProps:n.viewProps})}}const ag=Zt("spr");class eC{constructor(t,n){this.element=t.createElement("div"),this.element.classList.add(ag()),n.viewProps.bindClassModifiers(this.element);const i=t.createElement("hr");i.classList.add(ag("r")),this.element.appendChild(i)}}class lg extends wc{constructor(t,n){super(Object.assign(Object.assign({},n),{view:new eC(t,{viewProps:n.viewProps})}))}}const nC={id:"separator",type:"blade",core:Po,accept(e){const t=we(e,n=>({view:n.required.constant("separator")}));return t?{params:t}:null},controller(e){return new lg(e.document,{blade:e.blade,viewProps:e.viewProps})},api(e){return e.controller instanceof lg?new YA(e.controller):null}},iC={id:"slider",type:"blade",core:Po,accept(e){const t=we(e,n=>({max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number}));return t?{params:t}:null},controller(e){var t,n;const i=(t=e.params.value)!==null&&t!==void 0?t:0,r=new xa({max:e.params.max,min:e.params.min}),s=xe(i,{constraint:r}),o=new Hl(e.document,Object.assign(Object.assign({},c0({formatter:(n=e.params.format)!==null&&n!==void 0?n:b3,keyScale:xe(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Hv(e.params,i)})),{parser:Zi,value:s,viewProps:e.viewProps}));return new ps(e.document,{blade:e.blade,props:zt.fromObject({label:e.params.label}),value:s,valueController:o})},api(e){return!(e.controller instanceof ps)||!(e.controller.valueController instanceof Hl)?null:new $A(e.controller)}},rC=function(){return{id:"text",type:"blade",core:Po,accept(e){const t=we(e,n=>({parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string}));return t?{params:t}:null},controller(e){var t;const n=xe(e.params.value),i=new sa(e.document,{parser:e.params.parse,props:zt.fromObject({formatter:(t=e.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:n,viewProps:e.viewProps});return new ps(e.document,{blade:e.blade,props:zt.fromObject({label:e.params.label}),value:n,valueController:i})},api(e){return!(e.controller instanceof ps)||!(e.controller.valueController instanceof sa)?null:new ZA(e.controller)}}}();function sC(e){const t=e.createElement("div");return t.classList.add(Zt("dfw")()),e.body&&e.body.appendChild(t),t}function oC(e,t,n){if(e.querySelector(`style[data-tp-style=${t}]`))return;const i=e.createElement("style");i.dataset.tpStyle=t,i.textContent=n,e.head.appendChild(i)}class aC extends QA{constructor(t){var n,i;const r=t??{},s=(n=r.document)!==null&&n!==void 0?n:L3(),o=qA(),a=new tC(s,{expanded:r.expanded,blade:Ro(),props:zt.fromObject({title:r.title}),viewProps:er.create()});super(a,o),this.pool_=o,this.containerElem_=(i=r.container)!==null&&i!==void 0?i:sC(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw Re.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw Re.alreadyDisposed();if(this.usesDefaultWrapper_){const n=t.parentElement;n&&n.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&oC(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(i=>{this.pool_.register(t.id,i)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[JA,nC,iC,r0,rC]})}}new e0("4.0.5");const lC=""+new URL("47ee8e6149e3fcf9ed229896d2f484fb-DX6N7QdU.jpg",import.meta.url).href,cC="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm",uC="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",Ai=1e5,hC=.07,cg=2.5,hh=5e3,F0=700;let ug,Zr,dh;const Ru=new Float32Array(Ai*3),Je=new Float32Array(Ai*3),hg=new Float32Array(Ai*3),li=new Float32Array(Ai*3),Un={SHAPE:"SHAPE",VIEW_PHOTO:"VIEW_PHOTO"};let Yn=Un.SHAPE,Be=[],Qe=-1,$o=[],k0=!1,os=performance.now(),la=!0,xl=0;const as={model:"sphere",color:"rgba(51, 146, 255, 1)",particleSize:.43};function dC(){const e=new Image;e.src=lC,e.crossOrigin="anonymous",e.onload=()=>{const t=document.createElement("canvas"),n=t.getContext("2d"),i=256,r=Math.min(i/e.width,i/e.height,1);t.width=Math.floor(e.width*r),t.height=Math.floor(e.height*r),n.drawImage(e,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height).data;$o=[];for(let o=0;o<t.height;o++)for(let a=0;a<t.width;a++){const l=(o*t.width+a)*4;s[l+3]>20&&(s[l]+s[l+1]+s[l+2])/3>50&&$o.push({x:a/t.width*2-1,y:1-o/t.height*2})}k0=!0,as.model==="Firework"&&wi()}}dC();const B0=new lw,ca=new qn(75,window.innerWidth/window.innerHeight,.1,100);ca.position.z=4;const ms=new aw({antialias:!0});ms.setSize(window.innerWidth,window.innerHeight);ms.setPixelRatio(window.devicePixelRatio||1);document.body.appendChild(ms.domElement);const qd=new hw(ca,ms.domElement);qd.enableDamping=!0;qd.dampingFactor=.05;function pC(){const e=new Qi;for(let t=0;t<Ai*3;t++)Ru[t]=(Math.random()-.5)*10,Je[t]=Ru[t],hg[t]=1,li[t]=1;e.setAttribute("position",new Qn(Ru,3)),e.setAttribute("color",new Qn(hg,3)),dh=new Gg({size:as.particleSize*.12,vertexColors:!0,blending:ns,depthTest:!1,transparent:!0,opacity:1}),Zr=new cw(e,dh),B0.add(Zr),wi()}function fC(){Be.length>1&&(Qe=(Qe-1+Be.length)%Be.length,wi())}function wi(){const e=as.model,t=new re(as.color);if(Yn===Un.SHAPE)for(let n=0;n<Ai;n++){const i=n*3;let r,s,o;if(e==="Heart"){const a=Math.random()*Math.PI*2,l=.5+Math.random()*.5;r=16*Math.pow(Math.sin(a),3),s=13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a),o=(Math.random()-.5)*5;const c=.05;Je[i]=r*c*l,Je[i+1]=s*c*l,Je[i+2]=o*c*l}else if(e==="Firework"&&k0&&$o.length>0){const a=$o[Math.floor(Math.random()*$o.length)];Je[i]=a.x*2,Je[i+1]=a.y*2,Je[i+2]=(Math.random()-.5)*.5}else{const a=Math.random()*2,l=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1);Je[i]=a*Math.sin(c)*Math.cos(l),Je[i+1]=a*Math.sin(c)*Math.sin(l),Je[i+2]=a*Math.cos(c)}li[i]=t.r,li[i+1]=t.g,li[i+2]=t.b}else if(Yn===Un.VIEW_PHOTO&&Qe>=0&&Be.length>0){Qe=Qe%Be.length,Qe<0&&(Qe+=Be.length);const n=Be[Qe],i=n.points.length;for(let r=0;r<Ai;r++){const s=r*3;if(r<i){const o=n.points[r%i];Je[s]=o.x*cg,Je[s+1]=o.y*cg,Je[s+2]=(Math.random()-.5)*.2,li[s]=o.r,li[s+1]=o.g,li[s+2]=o.b}else Je[s]=0,Je[s+1]=0,Je[s+2]=0,li[s]=0,li[s+1]=0,li[s+2]=0}}}async function mC(e){return new Promise(t=>{const n=URL.createObjectURL(e),i=new Image;i.src=n,i.onload=()=>{const r=document.createElement("canvas"),s=r.getContext("2d"),o=1024,a=Math.min(o/i.width,o/i.height);r.width=i.width*a,r.height=i.height*a,s.drawImage(i,0,0,r.width,r.height);const l=s.getImageData(0,0,r.width,r.height).data,c=[];for(let u=0;u<r.height;u+=1)for(let h=0;h<r.width;h+=1){const d=(u*r.width+h)*4;l[d+3]>50&&c.push({x:(h/r.width-.5)*2*(r.width/r.height),y:-(u/r.height-.5)*2,r:l[d]/255,g:l[d+1]/255,b:l[d+2]/255})}t({points:c})}})}const dg=document.getElementById("folder-input");dg&&dg.addEventListener("change",async e=>{const t=Array.from(e.target.files).filter(n=>n.type.startsWith("image/"));if(t.length!==0){Be=[];for(const n of t){const i=await mC(n);i.points.length>Ai&&(i.points.sort(()=>.5-Math.random()),i.points.length=Ai),Be.push(i)}console.log(`Loaded ${Be.length} images`),Be.length>0&&(Yn=Un.VIEW_PHOTO,Qe=0,la=!0,os=performance.now(),wi())}});function gC(e){const t=e[0],n=[8,12,16,20],i=[6,10,14,18],r=n.map((u,h)=>{const d=Math.hypot(e[u].x-t.x,e[u].y-t.y),m=Math.hypot(e[i[h]].x-t.x,e[i[h]].y-t.y);return d>m}),[s,o,a,l]=r;let c="NONE";if(s&&o&&a&&l)c="OPEN_PALM";else if(!s&&!o&&!a&&!l)c="FIST";else if(s&&!o&&!a&&!l){const u=e[8],h=e[6],d=u.x-h.x;Math.abs(d)>hC?d<0?c="INDEX_PREVIOUS":c="INDEX_NEXT":c="POINTING"}return c}function _C(e,t){let n="NONE";const i=performance.now();return Be.length>0&&(e==="OPEN_PALM"?(Yn!==Un.VIEW_PHOTO&&(Yn=Un.VIEW_PHOTO,Qe===-1&&(Qe=0),la=!0,os=i,wi()),n="OPEN_PALM"):e==="FIST"&&(Yn!==Un.SHAPE&&(Yn=Un.SHAPE,Qe=-1,la=!1,wi()),n="FIST")),Yn===Un.VIEW_PHOTO&&Be.length>1&&((t==="INDEX_PREVIOUS"||t==="INDEX_NEXT")&&(n=t),i-xl>F0&&(t==="INDEX_PREVIOUS"?(Qe=(Qe-1+Be.length)%Be.length,os=i,xl=i,wi()):t==="INDEX_NEXT"&&(Qe=(Qe+1)%Be.length,os=i,xl=i,wi()))),n}function V0(e){requestAnimationFrame(V0),Yn===Un.VIEW_PHOTO&&la&&Be.length>1&&e-os>=hh&&(fC(),os=e);const t=Zr.geometry.attributes.position.array,n=Zr.geometry.attributes.color.array;for(let i=0;i<Ai*3;i++)t[i]+=(Je[i]-t[i])*.05,n[i]+=(li[i]-n[i])*.05;Zr.geometry.attributes.position.needsUpdate=!0,Zr.geometry.attributes.color.needsUpdate=!0,Zr.rotation.y+=.002,qd.update(),ms.render(B0,ca)}async function vC(){const e=document.getElementById("webcam"),t=document.getElementById("gesture-canvas"),n=t.getContext("2d"),i=await Kr.forVisionTasks(cC);ug=await ln.createFromOptions(i,{baseOptions:{modelAssetPath:uC,delegate:"GPU"},runningMode:"VIDEO",numHands:2});const r=new on(n);async function s(){if(e.currentTime!==0){const o=ug.detectForVideo(e,performance.now());n.clearRect(0,0,t.width,t.height),n.canvas.width=e.videoWidth,n.canvas.height=e.videoHeight;let a="NONE",l="NONE",c="NONE";if(o.landmarks&&o.landmarks.length>0){for(let m=0;m<o.landmarks.length;m++){const _=o.landmarks[m],b=o.handedness[m][0].categoryName,f=gC(_),p=b==="Left"?"#00FF00":"#FF8C00";r.drawConnectors(_,ln.HAND_CONNECTIONS,{color:p}),r.drawLandmarks(_,{color:p,radius:1}),b==="Left"?a=f:b==="Right"&&(l=f)}c=_C(a,l)}n.fillStyle="white",n.font="24px Arial",n.save(),n.scale(-1,1),n.translate(-n.canvas.width,0);let u="";Yn===Un.SHAPE?u="形状模式 (左手握拳切换)":Yn===Un.VIEW_PHOTO&&(u="图片循环模式 (左手张开切换)"),n.fillText(`模式: ${u}`,10,30);let h="";const d=performance.now()-xl<=F0;if(c==="NONE"?h="无控制手势":c==="OPEN_PALM"?h="左手张开 (已切换到图片)":c==="FIST"?h="左手握拳 (已切换到形状)":c==="INDEX_PREVIOUS"?h=`右手食指向左 (上一张${d?" - 冷却中":" - 切换成功"})`:c==="INDEX_NEXT"?h=`右手食指向右 (下一张${d?" - 冷却中":" - 切换成功"})`:c==="POINTING"&&(h="食指伸出 (未切换)"),n.fillText(`控制手势: ${h}`,10,60),Yn===Un.VIEW_PHOTO&&Be.length>0&&(n.fillText(`照片: ${Qe+1} / ${Be.length}`,10,90),la&&Be.length>1)){const m=performance.now()-os,_=m/hh,b=Math.ceil((hh-m)/1e3);n.fillStyle="lightblue",n.fillText(`自动切换倒计时: ${b} 秒 (上一张)`,10,120),n.fillStyle="yellow",n.fillRect(10,130,200*_,10)}n.restore()}requestAnimationFrame(s)}navigator.mediaDevices.getUserMedia({video:!0}).then(o=>{e.srcObject=o,e.addEventListener("loadeddata",s)})}function bC(){const e=new aC;e.addBinding(as,"model",{options:{Heart:"心形",Sphere:"球形",Firework:"烟花"}}).on("change",wi),e.addBinding(as,"color",{view:"color",label:"颜色"}).on("change",wi),e.addBinding(as,"particleSize",{min:.1,max:2,label:"粒子大小"}).on("change",t=>{dh.size=t.value*.12}),document.getElementById("fullscreen-btn").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():ms.domElement.requestFullscreen()}),window.addEventListener("resize",()=>{ca.aspect=window.innerWidth/window.innerHeight,ca.updateProjectionMatrix(),ms.setSize(window.innerWidth,window.innerHeight)})}pC();bC();vC();V0(performance.now());
