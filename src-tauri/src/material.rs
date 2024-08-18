#![allow(unused)]

use tauri::{App, Manager};
use window_shadows::set_shadow;
use window_vibrancy::{apply_acrylic, apply_mica, apply_vibrancy, NSVisualEffectMaterial};

pub fn setup(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let window = app.get_window("main").unwrap();

    // macos vibrancy effect
    #[cfg(target_os = "macos")]
    apply_vibrancy(&window, NSVisualEffectMaterial::FullScreenUI)
        .expect("Unsupported platform! 'apply_vibrancy' is only supported on macOS");

    // windows acrylic effect
    #[cfg(target_os = "windows")]
    apply_acrylic(&window, Some((11, 13, 25, 90)))
        .expect("Unsupported platform! 'apply_acrylic' is only supported on Windows");

    // window shadow & window round-coner
    #[cfg(any(windows, target_os = "macos"))]
    set_shadow(&window, true).unwrap();

    Ok(())
}
