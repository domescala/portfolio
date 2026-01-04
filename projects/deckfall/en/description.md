<compileMeta 
  description="A little First person sci-fi game inspired by a level from Superliminal"
  image="cover.gif" 
/>
<favicon-emoji>👩🏻‍🚀</favicon-emoji>

<link rel="stylesheet" href="../style.css">

###### _Puzzle game_ _Godot engine_

<div>
<video id="trailer" class="prevent-cover" autoplay muted loop><source src="../assets/reel.mp4" type="video/mp4"></video>
</div>
<em>Deckfall's trailer
<br>
Music: "Revolution" by [Alex-Productions](https://soundcloud.com/alexproductionsmusic) — CC BY 3.0</em>

## Description 📢

Deckfall is a little first person puzzle game, developed in **Godot Engine**, ispired by the "Infinite Hallway" level from _Superliminal_.
The game takes place on a spaceship on the verge of collapse, and the player must traverse an almost infinite corridor in search of an escape route.

It's available on itch.io (as build) and on github (complete project, source and build).

## How to play 🕹️

Deckfall runs on Windows, Mac and Linux. For Windows systems, simply download and run the executable file `deckfall.exe`. For other systems, you can launch the game within the Godot 4.4.1 editor.

### Run the game from the build (Windows)

1. Download the latest version from releases section
   - [🗃️ Release section](https://github.com/domescala/deckfall/releases)
   - [🚀 Direct download v1.0](https://github.com/domescala/deckfall/releases/download/v1.0/deckfall-v1.0.exe)
2. Run the `deckfall-v1.0.exe` file
3. Play!

### Run the game from the engine (Windows/macOS/linux)

1. First download the engine from the official Godot website (version 4.4.1):
   - [🗃️ Download section](https://godotengine.org/download/archive/4.4.1-stable/)
   - [🚀 Direct download for Linux](https://downloads.godotengine.org/?version=4.4.1&flavor=stable&slug=linux.x86_64.zip&platform=linux.64)
   - [🚀 Direct download for Windows](https://downloads.godotengine.org/?version=4.4.1&flavor=stable&slug=win64.exe.zip&platform=windows.64)
   - [🚀 Direct download for macOS](https://downloads.godotengine.org/?version=4.4.1&flavor=stable&slug=macos.universal.zip&platform=macos.universal)
2. Download the latest game's source from release section:
   - [🗃️ Release section](https://github.com/domescala/deckfall/releases)
   - [🚀 Direct download v1.0](https://github.com/domescala/deckfall/archive/refs/tags/v1.0.zip)
3. Launch `Godot_v4.4.1` and **drag** the `deckfall-v1.0.zip` file into the Godot window
4. Click `install`, Godot will unpack and load the project in few minutes
5. Run the game by pressing the ▶️ button in the top-right corner, or press `F5` (in Windows) / `Command + D` (in macOS).
6. Play!

> 🚨 Note: if you want just play the game, **don't change anything in the editor!**

### ⚙️ Settings

The game is available in Italian and English. This setting is only found in the start menu and cannot be changed once the game is launched. You can also adjust mouse sensitivity and graphic quality from the pause menu (press 'ESC' to open the pause menu).

## Licenses and Credits 🏷️

Deckfall is released under several licenses, see the [LICENSE📃](https://github.com/domescala/deckfall/blob/main/LICENSE.md) file for complete details. In summary, the licenses are divided into:

1. **Compiled game (Build)**  
   Because third-party assets under various licenses, including "ShareAlike" were used, the compiled game (build) is licensed under the Attribution-ShareAlike License (CC BY-SA 4.0).
2. **Code**  
   Scripts are licensed under the MIT License.
3. **Original Assets**  
   Assets created specifically for the project are licensed under the Attribution-ShareAlike License (CC BY 4.0).

See the [CREDITS📃](https://github.com/domescala/deckfall/blob/main/CREDITS.md) file for all credits related to third-party assets.

## 3D Models

Structural elements (walls, floors, stairs, doors, etc.) and details (pipes, barrels, monitors, etc.) come from Kenney's "Space Station Kit" library (CC0 license). Specific and "dynamic" models, such as the glowing pixelated numbers and the emergency lever, were custom-made in Blender.

<p class="videos-squared">
<video autoplay muted loop><source src="../assets/pixel_numbers.mp4" type="video/mp4"></video>
<video style="filter: brightness(1.5);" autoplay muted loop><source src="../assets/floorsign.mp4" type="video/mp4"></video>
<video style="filter: brightness(1.5);" autoplay muted loop><source src="../assets/lever.mp4" type="video/mp4"></video>
<em>...</em>
</p>

### Rooms 🏗️

The rooms were built directly in the engine.

![main corridor view](../assets/room_corridor_front.webp)
<em>Main corridor</em>

![Main corridor's window](../assets/room_corridor_window.webp)
![Main corridor view with error monitor and window in the background](../assets/room_corridor_full.webp)

![left corridor with door blocked by debris and glowing "EXIT" sign arrow pointing left](../assets/room_left_corridor.webp)
<em>View of the corridor leading to the left exit</em>

![obstacles and debris overflowing from the blocked door](../assets/room_corridor_obstacles.webp)
<em>Door blocked by obstacles</em>

![corner room](../assets/room_exit.webp)
<em>corner room with stairs leading to the next corridor</em>

![last room without enough lighting](../assets/room_endgame.webp)
<em>Deck Zero, final room</em>

## Musics 📻

### Score

The background music is _"A Few Jumps Away"_ by Arthur Vyncke, selected through the _BreakingCopyright_ website (CC BY-SA 3.0 license).  
Its **electronic** sound and subtle piano melody capture the sci-fi setting, with a cyclical rhythm typical of puzzle games.

### Loops and dynamic music

In order to create a smooth and constant music loop, the volume was amplified at the start of the track and reduced in the chorus.

From the start menu through the entire first level, the music loops only the first 20 seconds: a rhythmic accompaniment without melody. When the player reaches the second level, the music transitions to the second part with the full piano melody and developed arrangement.

### Jingle

During the opening cutscene, a jingle can be heard coming from the monitor during the space company's promotional message. The track _"Crystals"_ by enviromaniac2 (CC0) was selected for its extremely **cheerful** sound, in complete contrast with the **tragic** situation.

<p id="deckfall-jingle-audio">
<span>▶️ Press to play the jingle!</span>
<span>🔵 Press to stop</span>
<audio loop src="../assets/audio_jingle_394293__enviromaniac2__crystals.wav" title="deckfall-jingle" ></audio>
</p>

![promotional message glowing from the monitor, asking customers to leave a positive review](../assets/monitor_corporate_message.webp)

## Easter eggs and references

### Graffiti

On the wall in front of the stairs, the text _This Way_ suggests to the player to reach the next level by jumping in the direction of the arrow.  
This first writing introduces the possibility that graffiti exist in the game to help the player.
![graffiti this way](../assets/graffiti_thisway.webp)

On the wall above the window overlooking space, there is an engraved phrase that reads _"You're looking in the wrong direction"_. This is a reference to a graffito in Turin written on a wall facing the Mole Antonelliana.

<div style="
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 8px;">
<img style="height:100%" src="../assets/graffiti_wrongdirection.webp" alt="graffito nel gioco">
<img style="height:100%" src="../assets/graffiti_wrongdirection_turin.webp" alt="graffito originale" style="object-position:bottom">
</div>

<blockquote><p class="spoiler">
<i class="spoiler-alert">SPOILER ALERT! (click to reveal)</i>
<span class=spoiler-content>The phrase reveals the solution of the game. In fact, this graffito only becomes visible after the player makes their first mistake.
</span>
</p></blockquote>

On the corner room's walls, there is a real-time counter of all the player's attempts, displayed in tally marks style.
![attempt counter](../assets/graffiti_tallymarks.webp)

### Running stickman

The glowing Exit sign displays the same running stickman used in the Godot editor for the "CharacterBody3D" node. The same stickman appears in the game logo and in the _Fragile Floor_ yellow warning sign, where the figure is shown falling.

### Numbers

During the cutscene, the monitor dispays some error message where there hide some nerd references.

![monitor displays the three error messages](../assets/deckfall-monitor-alert-messages.webp)

> "...REACTORS 441 AND 507"  
> "...PROTOCOL 850-M ACTIVATED EVACUATION"

- **441** represents the Engine version `Godot 4.4.1`
- **507** is the name of the spaceship of Rancore in his XENOVERSO album.
- **850-m** is the name of the gpu card used for develop the game: _NVIDIA GTX 850M_.

### Numbers

During the cutscene, the monitor displays some error messages that hide a few nerdy references.

![monitor displays three error messages](../assets/deckfall-monitor-alert-messages.webp)

> "...REACTORS 441 AND 507"  
> "...PROTOCOL 850-M..."

- **441** represents the engine version: `Godot 4.4.1`
- **507** is the name of the spaceship from Rancore's XENOVERSO album
- **850-m** refers to the GPU used to develop the game: _NVIDIA GTX 850M_ (very prehistoric, before GTA5)

## Operation

<div class="spoiler-section-flag" style="display:none">SPOILER ALERT! PLAY THE GAME FIRST! (click to reveal)</div>

### Solution mechanism

The red arrow alawys points to the correct exit, but the first door seen from the player is aways locked, the second one is always unlocked. The solution is look first in the opposite direction and then walk to the correct door.

TThe easiest way to implement this is to place two oblstacles in front of both doors from the start. As soon as the player looks at one, the opposite obstacle immediately disappears.

<p>
<video style="position:absolute" class="prevent-cover" muted title="soluzione"><source src="../assets/solution.webm" type="video/webm"></video>
<video id="solution-video" class="prevent-cover" autoplay muted title="soluzione"><source src="../assets/solution.webm" type="video/webm"></video>
</p>

_How do you create this mechanism?_

In Godot Engine there is the `VisibleOnScreenNotifier3D` Node, which emits a signal every time its area enters or exits the Camera's field of view.

That easy? No, because it's not a true _field of view_ that accounts for obstacles or walls, but rather a **three-dimensional region** projected from the camera, also known as _Frustum View_.

Therefore, the `VisibleOnScreenNotifier3D` Node marks as "visible" every element inside the Frustum, even if the element is hidden behind a wall and the player cannot see it

![visualization of the Frustum. A wall is placed in front of the camera and a lot of objects are hidden behind it$class=prevent-cover](../assets/frustum_culling.webp)
<em>A clear example of objects that are inside the Frustum View but remain invisible to the player due to an obstacle</em>

To solve this issue it's necessary detect when is an obstacle between the player eyes (Camera) and the object.

_But how?_

### First attempt using a RayCast

It is natural to think of using a `RayCast3D` node, starting from the door frame and constantly pointing at the player's head.

If the raycast hits directly the player that means there are no intermediate obstacles, so we can trust the signal coming from the `VisibleOnScreenNotifier3D` node.

<div style="display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 100%;
    gap: 8px;">
<img style="object-position:bottom;" src="../assets/door_detect_raycast_out.webp" alt="raycast bloccato dal muro">
<em style="grid-row-start: 2">Raycast is blocked by the wall</em>
<img style="object-position:bottom;" src="../assets/door_detect_raycast_in.webp" alt="raycast che colpisce il giocatore">
<em style="grid-row-start: 2">Raycast hits the player</em>
</div>

**BUG**: "the raycast rotates and points constantly to the player by using `look_at()` function, and detect the collisions by `get_collider()` function.
This solution seams works on paper but in reality it's not reliable: the raycast may not update his position enough in time if player is moving too fast.

During beta testing
