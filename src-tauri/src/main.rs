mod material;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(material::setup)
        .run(context)
        .expect("error while running OhMyBox application");
}
