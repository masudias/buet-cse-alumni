import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route=createFileRoute('/volunteer')({beforeLoad:()=>{throw redirect({to:'/connect'})}});
