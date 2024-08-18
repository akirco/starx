use tauri::generate_handler;

mod commands;
mod config;
mod material;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(material::setup)
        .setup(config::init)
        .invoke_handler(generate_handler![commands::search])
        .run(context)
        .expect("error while running OhMyBox application");
}
