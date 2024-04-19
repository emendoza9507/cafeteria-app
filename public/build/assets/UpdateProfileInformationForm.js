import{q as h,W as j,j as e,d as v}from"./app.js";import{I as n}from"./InputError.js";import{I as m}from"./InputLabel.js";import{P as g}from"./PrimaryButton.js";import{T as o}from"./TextInput.js";import{q as y}from"./transition.js";function w({mustVerifyEmail:l,status:c,className:d=""}){const a=h().props.auth.user,{data:s,setData:r,patch:u,errors:i,processing:x,recentlySuccessful:f}=j({name:a.name,email:a.email}),p=t=>{t.preventDefault(),u(route("profile.update"))};return e.jsxs("section",{className:d,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:p,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",className:"mt-1 block w-full",value:s.name,onChange:t=>r("name",t.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(n,{className:"mt-2",message:i.name})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",className:"mt-1 block w-full",value:s.email,onChange:t=>r("email",t.target.value),required:!0,autoComplete:"username"}),e.jsx(n,{className:"mt-2",message:i.email})]}),l&&a.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(v,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),c==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{disabled:x,children:"Save"}),e.jsx(y,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{w as default};
