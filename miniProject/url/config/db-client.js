// import {mongoClient} from "mongodb";
import { MongoClient } from "mongodb"; 
import env from "./env.js";


export const dbClient=new MongoClient(env.MONGODB_URI);