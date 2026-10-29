# Marysia — zmywarka Bosch Home Connect

Custom Lovelace card for the Bosch SMS4ENI06E dishwasher connected through the official Home Connect integration. The layout follows the supplied Bosch reference: dishwasher photo at the left, clickable program dial in the middle, and live status and controls at the right.

The card uses the Home Assistant entities created by the integration. It shows the selected program, operation state, door state, remote-control availability, remaining time and program progress. The program dial selects a program. **Start** starts it through the Home Connect `active_program` select entity; **Stop** presses the dishwasher stop button.

## Install with HACS

1. In Home Assistant open **HACS → ⋮ → Custom repositories**.
2. Add `https://github.com/voltronicpl/marysia` and choose **Dashboard** as the category.
3. Download **Marysia**.
4. Add the card to a dashboard. HACS adds its JavaScript resource automatically.
5. Refresh the browser page.

The card uses the entity IDs below by default. If your IDs differ, override them in the card configuration.
The matching dishwasher image is included with the HACS card. Use the optional `image` setting to replace it.

```yaml
type: custom:marysia-card
name: Marysia
model: SMS4ENI06E
image: /hacsfiles/marysia/images/dishwasher.webp
grid_options:
  columns: full
  rows: auto
```

```yaml
type: custom:marysia-card
name: Marysia
model: SMS4ENI06E
entities:
  power: switch.marysia_power
  selected_program: select.marysia_selected_program
  active_program: select.marysia_active_program
  stop: button.marysia_stop_program
  door: sensor.marysia_door
  operation_state: sensor.marysia_operation_state
  progress: sensor.marysia_program_progress
  finish_time: sensor.marysia_program_finish_time
  remote_control: binary_sensor.marysia_remote_control
  remote_start: binary_sensor.marysia_remote_start
  connectivity: binary_sensor.marysia_lacznosc
  start_in_relative: number.marysia_start_in_relative
  half_load: switch.marysia_half_load
  hygiene: switch.marysia_hygiene
  vario_speed: switch.marysia_vario_speed
  child_lock: switch.marysia_blokada_przed_dziecmi
  door_ajar: null
```

Unavailable optional entities are shown as `—`; they do not prevent the card from loading. `door_ajar` is optional and stays disabled until you map an actual Home Assistant switch for that feature. The device page screenshot did not show an auto-open switch, so do not map the door sensor to this control.

## Controls

- Click a program name or turn the dial to select a program.
- **Start** is enabled only when the dishwasher is powered, the door is closed, remote control and remote start are available, and the operation state is ready.
- **Stop** uses `button.press` on the configured stop entity.
- Power, child lock, half load, Hygiene+, VarioSpeed+, and any mapped door-ajar option use their Home Assistant switch entities. The delay control adjusts `number.marysia_start_in_relative` using `number.set_value`.
- The dishwasher photo keeps its original proportions. Animated water appears while the operation state is `run`.

Starting remotely still depends on the appliance's Home Connect state and permissions. This card does not bypass the dishwasher's remote-start requirements.

## Entity overrides

The `entities` mapping accepts the keys shown in the example. Set an optional entity to `null` to hide its value. The `programs` option can map display labels to the exact option values exposed by your selected-program entity:

```yaml
type: custom:marysia-card
programs:
  - label: Eco 50°
    option: dishcare_dishwasher_program_eco_50
```

