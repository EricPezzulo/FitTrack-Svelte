#[macro_use]
extern crate rocket;
extern crate serde_derive;

extern crate dotenv;

use std::env;

use mongodb::{Client, options::ClientOptions, bson::{doc}};
use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
struct Task {
    title: String,
    description: String,
}

#[get("/")]
fn hello() -> &'static str {
    "Hello, World!"
}


#[launch]
async fn rocket() -> _ {
    dotenv::from_filename(".env.local").ok();
    let database_url = env::var("MONGODB_URI").expect("MONGODB_URI must be set");
    let client_options = ClientOptions::parse(&database_url).await.expect("Failed to parse MongoDB URI");

    let client = Client::with_options(client_options).expect("Failed to initialize MongoDB client");

    let allowed_origins = AllowedOrigins::some_exact(&["http://localhost:5173"])

    let cors = CorsOptions {
        allowed_origins,
        ..Default::default()
    }
    .to_cors()
    .expect("CORS configuration failed")




    println!("🚀 Successfully Connected to MongoDB! 😁");
    rocket::build().manage(client).mount("/", routes![hello]).attach(cors)

}
