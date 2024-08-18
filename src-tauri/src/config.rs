use tauri::{App, Manager, PhysicalPosition};

pub fn init(app: &mut App) -> std::result::Result<(), Box<dyn std::error::Error>> {
    let width;
    let height;
    let window = app.get_window("main").unwrap();
    window.set_focus().unwrap();
    window.open_devtools();
    let monitor_result = window.current_monitor();
    match monitor_result {
        Ok(monitor_option) => match monitor_option {
            Some(monitor) => {
                width = monitor.size().width;
                height = monitor.size().height;
                let x = (width - window.outer_size().unwrap().width) / 2;
                let y = (height - window.outer_size().unwrap().height) / 4;
                window.set_position(PhysicalPosition::new(x as i32, y as i32))?;
            }
            None => println!("No monitor found"),
        },
        Err(error) => println!("Error: {}", error),
    }
    Ok(())
}
