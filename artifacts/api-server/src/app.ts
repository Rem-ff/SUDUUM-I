ts
import express,{type Express}from "express"
import cors from "cors"
import pinoHttp from "pino-http"
import type { IncomingMessage, ServerResponse}from "node:http";
import router from "./routes";
import {logger}from "./lib/logger";

const app: Express=express();
app.use(
 pinoHttp({
   logger,
   serializers: {
     reqereq: IncomingMessag & {id?: unknown; url?: string; method?: string}) {
   r    
   
)
