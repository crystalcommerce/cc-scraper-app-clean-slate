console.log({
    message : "Initializing scraping procedure...",
    author : "Michael Norward"
});

let linkObjects = [
    {
        "url": "https://www.sweetwater.com/c1014--1010music--Line_Mixers",
        "productProps": {
            "productBrand": "1010music",
            "category": "Line Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1201--2HP--Eurorack_Cases",
        "productProps": {
            "productBrand": "2HP",
            "category": "Eurorack Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--4ms--Power_Supplies",
        "productProps": {
            "productBrand": "4ms",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/64_Audio",
        "productProps": {
            "productBrand": "64 Audio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1238--920D_Custom--Guitar_Potentiometers",
        "productProps": {
            "productBrand": "920D Custom",
            "category": "Guitar Potentiometers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--A_Designs--Mastering",
        "productProps": {
            "productBrand": "A Designs",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Pathos--abasi-pathos-tosin-abasi-distortion-pedal",
        "productProps": {
            "productBrand": "Abasi",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1252--Acacia--Camera_Microphones",
        "productProps": {
            "productBrand": "Acacia",
            "category": "Camera Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c486--Access--Rack_Shelves",
        "productProps": {
            "productBrand": "Access",
            "category": "Rack Shelves"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Accu-Cable--Power_Supplies",
        "productProps": {
            "productBrand": "Accu-Cable",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Accu-Cable--Cable_Connectors",
        "productProps": {
            "productBrand": "Accu-Cable",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Acon_Digital--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Acon Digital",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Acoustica",
        "productProps": {
            "productBrand": "Acoustica",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c670--Acoustical_Fulfillment--Acoustic_Treatment_Diffusion",
        "productProps": {
            "productBrand": "Acoustical Fulfillment",
            "category": "Acoustic Treatment: Diffusion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c672--Acoustical_Fulfillment--Bass_Traps",
        "productProps": {
            "productBrand": "Acoustical Fulfillment",
            "category": "Bass Traps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c675--Acoustical_Fulfillment--Acoustic_Construction",
        "productProps": {
            "productBrand": "Acoustical Fulfillment",
            "category": "Acoustic Construction"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1335--Adams--Vibraphones",
        "productProps": {
            "productBrand": "Adams",
            "category": "Vibraphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/AJ1524BT--adaptive-technologies-group-aj-1524-bt-adjustable-wall-ceiling-speaker-mount",
        "productProps": {
            "productBrand": "Adaptive Technologies Group",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c960--ADJ--Power_Conditioners",
        "productProps": {
            "productBrand": "ADJ",
            "category": "Power Conditioners"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--ADJ--Power_Supplies",
        "productProps": {
            "productBrand": "ADJ",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c660--ADJ--DJ_Software",
        "productProps": {
            "productBrand": "ADJ",
            "category": "DJ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Aguilar--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Aguilar",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Aguilar--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Aguilar",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Aguilar--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Aguilar",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1368--Ahead--Marching_Practice_Pads",
        "productProps": {
            "productBrand": "Ahead",
            "category": "Marching Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1145--Ahead--Snare_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Ahead",
            "category": "Snare Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c990--AIR--Looping_Software",
        "productProps": {
            "productBrand": "AIR",
            "category": "Looping Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--AirTurn--MIDI_Controllers",
        "productProps": {
            "productBrand": "AirTurn",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--AirTurn--Wireless_Accessories",
        "productProps": {
            "productBrand": "AirTurn",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--AirTurn--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "AirTurn",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1158--Akai_Professional--DJ_Controllers",
        "productProps": {
            "productBrand": "Akai Professional",
            "category": "DJ Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1089--AKG--Thunderbolt_Audio_Interfaces",
        "productProps": {
            "productBrand": "AKG",
            "category": "Thunderbolt Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1208--AKG--DJ_Headphones",
        "productProps": {
            "productBrand": "AKG",
            "category": "DJ Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/AlCass--al-cass-341sg-fast-valve-oil-2oz",
        "productProps": {
            "productBrand": "Al Cass",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Alesis--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Alesis",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c508--Alesis--Keyboard_Stands",
        "productProps": {
            "productBrand": "Alesis",
            "category": "Keyboard Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/00-45153--alfred-music-alfreds-easy-guitar-songs-classic-rock",
        "productProps": {
            "productBrand": "Alfred Music",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--Allen__and__Heath--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "Allen & Heath",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c134--Allen__and__Heath--PA_Speakers",
        "productProps": {
            "productBrand": "Allen & Heath",
            "category": "PA Speakers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Alva",
        "productProps": {
            "productBrand": "Alva",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Ampeg--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Ampeg",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Ampeg--Chorus_Pedals",
        "productProps": {
            "productBrand": "Ampeg",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/112120--amphenol-bnc-straight-crimp-plug-for-rg-58-lmr-195-50-ohm",
        "productProps": {
            "productBrand": "Amphenol",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Analog_Alien--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Analog Alien",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Analog_Alien--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Analog Alien",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c992--Anchor_Audio--Handheld_Microphone_Wireless_Systems",
        "productProps": {
            "productBrand": "Anchor Audio",
            "category": "Handheld Microphone Wireless Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c450--Anchor_Audio--Stage_Monitors",
        "productProps": {
            "productBrand": "Anchor Audio",
            "category": "Stage Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BackUp1000MS--apc-br1000ms",
        "productProps": {
            "productBrand": "APC",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Antares--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Antares",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--API--Condenser_Microphones",
        "productProps": {
            "productBrand": "API",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--API--Channel_Strips",
        "productProps": {
            "productBrand": "API",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--API--Summing_Mixers",
        "productProps": {
            "productBrand": "API",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--API--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "API",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--API--Mastering",
        "productProps": {
            "productBrand": "API",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c803--Apogee--Other_Data_Cables",
        "productProps": {
            "productBrand": "Apogee",
            "category": "Other Data Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1062--Apogee--iPad_iPhone_Guitar_Interfaces_FX",
        "productProps": {
            "productBrand": "Apogee",
            "category": "iPad/iPhone Guitar Interfaces/FX"
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Apogee--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Apogee",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Apogee--Power_Supplies",
        "productProps": {
            "productBrand": "Apogee",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--Apogee--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "Apogee",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Apogee--Microphone_Cables",
        "productProps": {
            "productBrand": "Apogee",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1054--Apogee--Tablet_Accessories",
        "productProps": {
            "productBrand": "Apogee",
            "category": "Tablet Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Apollo_Design",
        "productProps": {
            "productBrand": "Apollo Design",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Apple--Cable_Adapters",
        "productProps": {
            "productBrand": "Apple",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1054--Apple--Tablet_Accessories",
        "productProps": {
            "productBrand": "Apple",
            "category": "Tablet Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Aquarian_Drumheads--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Aquarian Drumheads",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c928--Aquila_USA--Classical_Guitar_Strings",
        "productProps": {
            "productBrand": "Aquila USA",
            "category": "Classical Guitar Strings"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Ardsley",
        "productProps": {
            "productBrand": "Ardsley",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/ARP",
        "productProps": {
            "productBrand": "ARP",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/GuitarPro8--arobas-music-guitar-pro-8-tab-editing-and-composition-software",
        "productProps": {
            "productBrand": "Arobas Music",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c408--ART--Studio_Monitor_Amplifiers",
        "productProps": {
            "productBrand": "ART",
            "category": "Studio Monitor Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--Arturia--Sequencers",
        "productProps": {
            "productBrand": "Arturia",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c713--Arturia--Noise_Reduction_Plug_ins",
        "productProps": {
            "productBrand": "Arturia",
            "category": "Noise Reduction Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c523--Arturia--Misc_Keyboard_Accessories",
        "productProps": {
            "productBrand": "Arturia",
            "category": "Misc Keyboard Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c645--Arturia--Electronic_Drum_Controllers_and_Multipads",
        "productProps": {
            "productBrand": "Arturia",
            "category": "Electronic Drum Controllers & Multipads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--Arturia--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "Arturia",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c728--Arturia--Virtual_Orchestra_Software",
        "productProps": {
            "productBrand": "Arturia",
            "category": "Virtual Orchestra Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1208--Ashdown--DJ_Headphones",
        "productProps": {
            "productBrand": "Ashdown",
            "category": "DJ Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Ashdown--Direct_Boxes",
        "productProps": {
            "productBrand": "Ashdown",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Ashdown--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Ashdown",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Asterope--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Asterope",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c442--Aspen_Pittman_Designs--Portable_PA_Systems",
        "productProps": {
            "productBrand": "Aspen Pittman Designs",
            "category": "Portable PA Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c671--Aston_Microphones--Studio_Isolation_Tools",
        "productProps": {
            "productBrand": "Aston Microphones",
            "category": "Studio Isolation Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--ATC--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "ATC",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c428--Atlas_Sound--Misc_Mixer_Accessories",
        "productProps": {
            "productBrand": "Atlas Sound",
            "category": "Misc Mixer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1248--Atlas_Sound--Stands",
        "productProps": {
            "productBrand": "Atlas Sound",
            "category": "Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Audient--Preamps",
        "productProps": {
            "productBrand": "Audient",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Audinate",
        "productProps": {
            "productBrand": "Audinate",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Audio_Modeling",
        "productProps": {
            "productBrand": "Audio Modeling",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/ToneDexter--audio-sprockets-llc-tonedexter-acoustic-instrument-preamp-pedal",
        "productProps": {
            "productBrand": "Audio Sprockets",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Audio_Ease--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Audio Ease",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Audio_Innovate",
        "productProps": {
            "productBrand": "Audio Innovate",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--Audio-Technica--Shotgun_Microphones",
        "productProps": {
            "productBrand": "Audio-Technica",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c698--Audionamix--Utility_and_Other_Software",
        "productProps": {
            "productBrand": "Audionamix",
            "category": "Utility & Other Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Audionamix--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Audionamix",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--Audix--Wireless_Accessories",
        "productProps": {
            "productBrand": "Audix",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Audix--Microphone_Cables",
        "productProps": {
            "productBrand": "Audix",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Audix--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Audix",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c994--Audix--Lavalier_Microphone_Wireless_Systems",
        "productProps": {
            "productBrand": "Audix",
            "category": "Lavalier Microphone Wireless Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Audix--Cable_Connectors",
        "productProps": {
            "productBrand": "Audix",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c981--Audix--USB_Microphones",
        "productProps": {
            "productBrand": "Audix",
            "category": "USB Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c669--Auralex--Acoustic_Treatment_Absorption",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Acoustic Treatment: Absorption"
        }
    },
    {
        "url": "https://www.sweetwater.com/c671--Auralex--Studio_Isolation_Tools",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Studio Isolation Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/c672--Auralex--Bass_Traps",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Bass Traps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c673--Auralex--Complete_Room_Systems",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Complete Room Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c674--Auralex--Acoustic_Treatment_Accessories",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Acoustic Treatment Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c675--Auralex--Acoustic_Construction",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Acoustic Construction"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Auralex--Condenser_Microphones",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c670--Auralex--Acoustic_Treatment_Diffusion",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Acoustic Treatment: Diffusion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1197--Auralex--Drum_Rugs",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Drum Rugs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Auralex--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Auralex",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c409--Auratone--Passive_Monitors",
        "productProps": {
            "productBrand": "Auratone",
            "category": "Passive Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--Austrian_Audio--Headphones",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c408--Auratone--Studio_Monitor_Amplifiers",
        "productProps": {
            "productBrand": "Auratone",
            "category": "Studio Monitor Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Austrian_Audio--Condenser_Microphones",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Austrian_Audio--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Austrian_Audio--Cable_Adapters",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1034--Austrian_Audio--Earpads_Cables_and_Accessories",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Earpads, Cables & Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c379--Austrian_Audio--Microphone_Windscreens_and_Grilles",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Microphone Windscreens & Grilles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c106--Austrian_Audio--Dynamic_Microphones",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Dynamic Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c487--Avalon--Vented_Rack_Panels",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Vented Rack Panels"
        }
    },
    {
        "url": "https://www.sweetwater.com/c667--Avalon--Preamp_Accessories",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Preamp Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Avalon--Preamps",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--Austrian_Audio--Microphone_Clips",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c380--Austrian_Audio--Microphone_Shockmounts",
        "productProps": {
            "productBrand": "Austrian Audio",
            "category": "Microphone Shockmounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Avalon--Channel_Strips",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c405--Avantone_Pro--Active_Monitors",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Active Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c896--Avalon--Signal_Processing_Accessories",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Signal Processing Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c486--Avalon--Rack_Shelves",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Rack Shelves"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Avalon--Direct_Boxes",
        "productProps": {
            "productBrand": "Avalon",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c409--Avantone_Pro--Passive_Monitors",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Passive Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c106--Avantone_Pro--Dynamic_Microphones",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Dynamic Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Avantone_Pro--Condenser_Microphones",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c408--Avantone_Pro--Studio_Monitor_Amplifiers",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Studio Monitor Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c982--Avantone_Pro--Drum_Microphone_Bundles",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Drum Microphone Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c380--Avantone_Pro--Microphone_Shockmounts",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Microphone Shockmounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1087--Avantone_Pro--PA_Replacement_Speakers",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "PA Replacement Speakers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--Avantone_Pro--Microphone_Clips",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c394--Avantone_Pro--Microphone_Pop_Filters",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Microphone Pop Filters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--Avantone_Pro--Headphones",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c546--Avid--Pro_Tools_HD_Interfaces",
        "productProps": {
            "productBrand": "Avid",
            "category": "Pro Tools HD Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Cam313--avermedia-live-streamer-cam-313-2-megapixel-usb-2.0-1920-by-1080-webcam",
        "productProps": {
            "productBrand": "Avermedia",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1108--Avid--Pro_Tools_Software",
        "productProps": {
            "productBrand": "Avid",
            "category": "Pro Tools Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c699--Avid--DAW_Software",
        "productProps": {
            "productBrand": "Avid",
            "category": "DAW Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c403--Avantone_Pro--Ribbon_Microphones",
        "productProps": {
            "productBrand": "Avantone Pro",
            "category": "Ribbon Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--Avid--Plug_in_Bundles",
        "productProps": {
            "productBrand": "Avid",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c554--Avid--Pro_Tools_HD_Core_Systems",
        "productProps": {
            "productBrand": "Avid",
            "category": "Pro Tools HD Core Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c544--Avid--Pro_Tools_Cables_and_Snakes",
        "productProps": {
            "productBrand": "Avid",
            "category": "Pro Tools Cables & Snakes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c704--Avid--Dynamics_Plug_ins",
        "productProps": {
            "productBrand": "Avid",
            "category": "Dynamics Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c773--Avid--Notation_Software",
        "productProps": {
            "productBrand": "Avid",
            "category": "Notation Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c545--Avid--Pro_Tools_Expansion_Cards",
        "productProps": {
            "productBrand": "Avid",
            "category": "Pro Tools Expansion Cards"
        }
    },
    {
        "url": "https://www.sweetwater.com/c808--Avid--Mixing_Control_Surfaces",
        "productProps": {
            "productBrand": "Avid",
            "category": "Mixing Control Surfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c265--Avid--Digital_Mixers",
        "productProps": {
            "productBrand": "Avid",
            "category": "Digital Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c549--Avid--Pro_Tools_Control_Surfaces",
        "productProps": {
            "productBrand": "Avid",
            "category": "Pro Tools Control Surfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--Avid--Effects_Plug_ins",
        "productProps": {
            "productBrand": "Avid",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Avolites",
        "productProps": {
            "productBrand": "Avolites",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Azumi",
        "productProps": {
            "productBrand": "Azumi",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/BackBeat_Books",
        "productProps": {
            "productBrand": "BackBeat Books",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--Balter--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Balter",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Roadie3--band-industries",
        "productProps": {
            "productBrand": "Band Industries",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1028--Balter--Drumsticks_Mallets_and_Brushes",
        "productProps": {
            "productBrand": "Balter",
            "category": "Drumsticks, Mallets & Brushes"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/4000XL--barcus-berry-4000-planar-wave-system",
        "productProps": {
            "productBrand": "Barcus Berry",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Barefoot_Buttons",
        "productProps": {
            "productBrand": "Barefoot Buttons",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--BBE--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "BBE",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1195--Bass_Drum_O_s--Drum_Keys_and_Tuning_Tools",
        "productProps": {
            "productBrand": "Bass Drum O's",
            "category": "Drum Keys & Tuning Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Bass_Plate",
        "productProps": {
            "productBrand": "Bass Plate",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--Behringer--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "Behringer",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Behringer--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1203--Behringer--Modular_Synthesizers",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Modular Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c438--Behringer--Mixer_Rack_Ears",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Mixer Rack Ears"
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--Behringer--Shotgun_Microphones",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1117--Behringer--Attenuators_and_Simulators",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Attenuators & Simulators"
        }
    },
    {
        "url": "https://www.sweetwater.com/c796--Behringer--AD_DA_Converters",
        "productProps": {
            "productBrand": "Behringer",
            "category": "AD/DA Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c979--Behringer--Acoustic_Guitar_Effects",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Acoustic Guitar Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1202--Behringer--Eurorack_Accessories",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Eurorack Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Behringer--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c787--Behringer--Expanders_Gates",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Expanders / Gates"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1044--Behringer--In_Ear_Monitor_Systems",
        "productProps": {
            "productBrand": "Behringer",
            "category": "In-Ear Monitor Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c741--Behringer--Misc_Digital_Converters",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Misc Digital Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Behringer--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--Behringer--Sequencers",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c762--Behringer--Studio_Monitor_Stands",
        "productProps": {
            "productBrand": "Behringer",
            "category": "Studio Monitor Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1224--Behringer--USB_Cables",
        "productProps": {
            "productBrand": "Behringer",
            "category": "USB Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BlT10bulb--belmonte-t10-71112-music-stand-light-bulb-40-watt",
        "productProps": {
            "productBrand": "Belmonte",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1175--Benro--Headset_Microphones",
        "productProps": {
            "productBrand": "Benro",
            "category": "Headset Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Berg_Larsen",
        "productProps": {
            "productBrand": "Berg Larsen",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BernAmbRn--bernardel-amber-rosin-for-violin-viola-or-cello-with-pouch",
        "productProps": {
            "productBrand": "Bernardel",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1312--BERP--Brass_Mouthpiece_Accessories",
        "productProps": {
            "productBrand": "BERP",
            "category": "Brass Mouthpiece Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Berklee_Press",
        "productProps": {
            "productBrand": "Berklee Press",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Besson",
        "productProps": {
            "productBrand": "Besson",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1088--Beyerdynamic--Bluetooth_and_Wireless_Speakers",
        "productProps": {
            "productBrand": "Beyerdynamic",
            "category": "Bluetooth & Wireless Speakers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/BFD",
        "productProps": {
            "productBrand": "BFD",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Big_Bends",
        "productProps": {
            "productBrand": "Big Bends",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1311--BG--Brass_Accessories",
        "productProps": {
            "productBrand": "BG",
            "category": "Brass Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Big_Fish",
        "productProps": {
            "productBrand": "Big Fish",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Bigsby",
        "productProps": {
            "productBrand": "Bigsby",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Bitwig",
        "productProps": {
            "productBrand": "Bitwig",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Bjooks_IVS",
        "productProps": {
            "productBrand": "Bjooks IVS",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--Black_Lion_Audio--Sequencers",
        "productProps": {
            "productBrand": "Black Lion Audio",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Black_Market--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Black Market",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c780--Black_Market--Insert_Y_Cables",
        "productProps": {
            "productBrand": "Black Market",
            "category": "Insert / Y Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1338--Black_Swamp_Percussion--Concert_Blocks",
        "productProps": {
            "productBrand": "Black Swamp Percussion",
            "category": "Concert Blocks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1017--Black_Swamp_Percussion--Snare_Drums",
        "productProps": {
            "productBrand": "Black Swamp Percussion",
            "category": "Snare Drums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1339--Black_Swamp_Percussion--Concert_Tambourines",
        "productProps": {
            "productBrand": "Black Swamp Percussion",
            "category": "Concert Tambourines"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/ATEMProHDLive--blackmagic-design-atem-television-studio-pro-hd-live-production-switcher",
        "productProps": {
            "productBrand": "Blackmagic Design",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c996--Blackstar--Wireless_Transmitters_and_Receivers",
        "productProps": {
            "productBrand": "Blackstar",
            "category": "Wireless Transmitters & Receivers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--Blue_Cat_Audio--Mastering_Software",
        "productProps": {
            "productBrand": "Blue Cat Audio",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BlueJuice2oz--blue-juice-bj2oz-valve-oil-2-oz",
        "productProps": {
            "productBrand": "Blue Juice",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--Blue_Microphones--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "Blue Microphones",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Bo-Pep",
        "productProps": {
            "productBrand": "Bo-Pep",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Bobelock--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Bobelock",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/MpcPuller--bobcat-179-brass-instrument-mouthpiece-puller",
        "productProps": {
            "productBrand": "Bobcat",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Bonade",
        "productProps": {
            "productBrand": "Bonade",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Bogner--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Bogner",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Boom_Bass_Cabinets",
        "productProps": {
            "productBrand": "Boom Bass Cabinets",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1073--Bose--Wall_Plates",
        "productProps": {
            "productBrand": "Bose",
            "category": "Wall Plates"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Boss--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Boss",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--Boss--Patch_Cables",
        "productProps": {
            "productBrand": "Boss",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c593--Boss--MIDI_Guitars_and_Pickups",
        "productProps": {
            "productBrand": "Boss",
            "category": "MIDI Guitars & Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/c793--Boss--Reverbs_Effects",
        "productProps": {
            "productBrand": "Boss",
            "category": "Reverbs / Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Boss--Direct_Boxes",
        "productProps": {
            "productBrand": "Boss",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1161--Boss--DJ_Effects",
        "productProps": {
            "productBrand": "Boss",
            "category": "DJ Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Boss--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Boss",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c992--Boss--Handheld_Microphone_Wireless_Systems",
        "productProps": {
            "productBrand": "Boss",
            "category": "Handheld Microphone Wireless Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c523--Boss--Misc_Keyboard_Accessories",
        "productProps": {
            "productBrand": "Boss",
            "category": "Misc Keyboard Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c590--Boss--Solidbody_Guitars",
        "productProps": {
            "productBrand": "Boss",
            "category": "Solidbody Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Boveda",
        "productProps": {
            "productBrand": "Boveda",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--Boss--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "Boss",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Breedlove--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Breedlove",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Breedlove--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Breedlove",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Breedlove--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Breedlove",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Breedlove--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Breedlove",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c896--Bricasti_Design--Signal_Processing_Accessories",
        "productProps": {
            "productBrand": "Bricasti Design",
            "category": "Signal Processing Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1073--BSS--Wall_Plates",
        "productProps": {
            "productBrand": "BSS",
            "category": "Wall Plates"
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Buchla--Cable_Connectors",
        "productProps": {
            "productBrand": "Buchla",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c523--Buchla--Misc_Keyboard_Accessories",
        "productProps": {
            "productBrand": "Buchla",
            "category": "Misc Keyboard Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BUCK--buckaroo-cymbal-polish",
        "productProps": {
            "productBrand": "Buckaroo",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Burl_Audio--Preamps",
        "productProps": {
            "productBrand": "Burl Audio",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1220--C_G__Conn--Accessories_by_Category",
        "productProps": {
            "productBrand": "C.G. Conn",
            "category": "Accessories by Category"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1224--C2G--USB_Cables",
        "productProps": {
            "productBrand": "C2G",
            "category": "USB Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/CAIG_Laboratories",
        "productProps": {
            "productBrand": "CAIG Laboratories",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Canare",
        "productProps": {
            "productBrand": "Canare",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1116--Caparison_Guitars--8_string_Guitars",
        "productProps": {
            "productBrand": "Caparison Guitars",
            "category": "8-string Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1143--Cardinal_Percussion--Cymbal_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Cardinal Percussion",
            "category": "Cymbal Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1146--Cardinal_Percussion--Tom_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Cardinal Percussion",
            "category": "Tom Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c646--Cardinal_Percussion--Drum_Practice_Pads",
        "productProps": {
            "productBrand": "Cardinal Percussion",
            "category": "Drum Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CarlssonDB--carlsson-csr-bass-rosin",
        "productProps": {
            "productBrand": "Carlsson",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c523--Casio--Misc_Keyboard_Accessories",
        "productProps": {
            "productBrand": "Casio",
            "category": "Misc Keyboard Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c512--Casio--Keyboard_Workstations",
        "productProps": {
            "productBrand": "Casio",
            "category": "Keyboard Workstations"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Catalinbread--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Catalinbread",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1368--CB_Percussion--Marching_Practice_Pads",
        "productProps": {
            "productBrand": "CB Percussion",
            "category": "Marching Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Celemony",
        "productProps": {
            "productBrand": "Celemony",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CEMGtrSolo--cem-publishing-guitar-solo-instructional-book",
        "productProps": {
            "productBrand": "CEM Publishing",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Chamsys",
        "productProps": {
            "productBrand": "Chamsys",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Chandler_Limited--Parametric_EQ",
        "productProps": {
            "productBrand": "Chandler Limited",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Chandler_Limited--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Chandler Limited",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1115--Charvel--7_string_Guitars",
        "productProps": {
            "productBrand": "Charvel",
            "category": "7-string Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Charvel--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Charvel",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1249--Chauvet_DJ--Cases",
        "productProps": {
            "productBrand": "Chauvet DJ",
            "category": "Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/c962--Chauvet_Pro--Extension_Cords_and_Power_Strips",
        "productProps": {
            "productBrand": "Chauvet Pro",
            "category": "Extension Cords & Power Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Chroma-Q",
        "productProps": {
            "productBrand": "Chroma-Q",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--ChopSaver--Woodwind_Accessories",
        "productProps": {
            "productBrand": "ChopSaver",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Claude_Lakey",
        "productProps": {
            "productBrand": "Claude Lakey",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Clayton",
        "productProps": {
            "productBrand": "Clayton",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--Clear-Com--Headphones",
        "productProps": {
            "productBrand": "Clear-Com",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Cloud_Microphones--Direct_Boxes",
        "productProps": {
            "productBrand": "Cloud Microphones",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/CMC_Pro",
        "productProps": {
            "productBrand": "CMC Pro",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--CME--MIDI_Controllers",
        "productProps": {
            "productBrand": "CME",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c527--CME--Keyboard_Gig_Bags",
        "productProps": {
            "productBrand": "CME",
            "category": "Keyboard Gig Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--Coleman_Audio--Summing_Mixers",
        "productProps": {
            "productBrand": "Coleman Audio",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Coleman_Audio--Mastering",
        "productProps": {
            "productBrand": "Coleman Audio",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Contour",
        "productProps": {
            "productBrand": "Contour",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Cooperstand--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Cooperstand",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c600--Cordoba--6_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Cordoba",
            "category": "6-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c602--Cordoba--Acoustic_Electric_Guitars",
        "productProps": {
            "productBrand": "Cordoba",
            "category": "Acoustic / Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1152--Cordoba--Guitar_Humidifiers",
        "productProps": {
            "productBrand": "Cordoba",
            "category": "Guitar Humidifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Cordoba--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Cordoba",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Cory_Care_Products",
        "productProps": {
            "productBrand": "Cory Care Products",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Countryman--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Countryman",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--Cranborne_Audio--Summing_Mixers",
        "productProps": {
            "productBrand": "Cranborne Audio",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--Cranborne_Audio--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "Cranborne Audio",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Crane_Song--Mastering",
        "productProps": {
            "productBrand": "Crane Song",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c953--Crane_Song--Synchronizers",
        "productProps": {
            "productBrand": "Crane Song",
            "category": "Synchronizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Cre8audio--Synthesizers",
        "productProps": {
            "productBrand": "Cre8audio",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1247--Creative_Tunings--Miscellaneous_Guitar_Parts",
        "productProps": {
            "productBrand": "Creative Tunings",
            "category": "Miscellaneous Guitar Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Crown_Seating",
        "productProps": {
            "productBrand": "Crown Seating",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Crumar--Cable_Adapters",
        "productProps": {
            "productBrand": "Crumar",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Crumar--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Crumar",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Crumar--MIDI_Controllers",
        "productProps": {
            "productBrand": "Crumar",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Cympad",
        "productProps": {
            "productBrand": "Cympad",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Cycling_74",
        "productProps": {
            "productBrand": "Cycling 74",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c935--D_and_A_Guitar_Gear--Guitar_Stands",
        "productProps": {
            "productBrand": "D&A Guitar Gear",
            "category": "Guitar Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1248--D_and_A_Guitar_Gear--Stands",
        "productProps": {
            "productBrand": "D&A Guitar Gear",
            "category": "Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c763--D_and_A_Guitar_Gear--Music_Stands",
        "productProps": {
            "productBrand": "D&A Guitar Gear",
            "category": "Music Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--D_Addario--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "D'Addario",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c985--D_Addario--Acoustic_Guitar_Pickups",
        "productProps": {
            "productBrand": "D'Addario",
            "category": "Acoustic Guitar Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--D_Addario--Wireless_Accessories",
        "productProps": {
            "productBrand": "D'Addario",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--D_Angelico--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "D'Angelico",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--D16_Group--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "D16 Group",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/dampit",
        "productProps": {
            "productBrand": "dampit",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Danelectro--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Danelectro",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1015--Danelectro--Left_handed_Bass_Guitars",
        "productProps": {
            "productBrand": "Danelectro",
            "category": "Left-handed Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--Danelectro--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "Danelectro",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Dangerous_Music--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Dangerous Music",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1089--Dangerous_Music--Thunderbolt_Audio_Interfaces",
        "productProps": {
            "productBrand": "Dangerous Music",
            "category": "Thunderbolt Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Dangerous_Music--Parametric_EQ",
        "productProps": {
            "productBrand": "Dangerous Music",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Darkglass--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Darkglass",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1073--dbx--Wall_Plates",
        "productProps": {
            "productBrand": "dbx",
            "category": "Wall Plates"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--dbx--Preamps",
        "productProps": {
            "productBrand": "dbx",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c650--ddrum--Electronic_Drum_Sets",
        "productProps": {
            "productBrand": "ddrum",
            "category": "Electronic Drum Sets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c641--ddrum--Miscellaneous_Drum_Accessories",
        "productProps": {
            "productBrand": "ddrum",
            "category": "Miscellaneous Drum Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1014--Denon--Line_Mixers",
        "productProps": {
            "productBrand": "Denon",
            "category": "Line Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/DGP--dg-de-gregorio-cajon-pedal-remote",
        "productProps": {
            "productBrand": "DG De Gregorio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--DiGiGrid--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "DiGiGrid",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--DigiTech--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "DigiTech",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Direct_Sound",
        "productProps": {
            "productBrand": "Direct Sound",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--DJ_Swivel--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c848--DJ_Swivel--Sampling_Software",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Sampling Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--DJ_Swivel--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c705--DJ_Swivel--Reverb_and_Delay_Plug_ins",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Reverb & Delay Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--DJ_Swivel--Utility_Plug_ins",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/DOD",
        "productProps": {
            "productBrand": "DOD",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c707--DJ_Swivel--Virtual_Guitar_and_Bass_Software",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Virtual Guitar & Bass Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--DJ_Swivel--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "DJ Swivel",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/AtmosMstrSte--dolby-atmos-mastering-suite",
        "productProps": {
            "productBrand": "Dolby",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Don_t_Fret",
        "productProps": {
            "productBrand": "Don't Fret",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--DPA--Orchestral_Accessories",
        "productProps": {
            "productBrand": "DPA",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Dr__Z--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Dr. Z",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c793--Dr__Z--Reverbs_Effects",
        "productProps": {
            "productBrand": "Dr. Z",
            "category": "Reverbs / Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Drawmer--Channel_Strips",
        "productProps": {
            "productBrand": "Drawmer",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Dreadbox--Flanger_Pedals",
        "productProps": {
            "productBrand": "Dreadbox",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/DNB--drum-n-bass-drum-n-base-hoop-protector",
        "productProps": {
            "productBrand": "Drum N Bass",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Drumdots",
        "productProps": {
            "productBrand": "Drumdots",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1247--Dunlop--Miscellaneous_Guitar_Parts",
        "productProps": {
            "productBrand": "Dunlop",
            "category": "Miscellaneous Guitar Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Dunlop--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Dunlop",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c432--Dunlop--Mixer_Lamps_and_Lights",
        "productProps": {
            "productBrand": "Dunlop",
            "category": "Mixer Lamps & Lights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c689--Dunlop--Misc_Furniture_Accessories",
        "productProps": {
            "productBrand": "Dunlop",
            "category": "Misc Furniture Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Duracell",
        "productProps": {
            "productBrand": "Duracell",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1331--DW--Concert_Toms",
        "productProps": {
            "productBrand": "DW",
            "category": "Concert Toms"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1348--DW--Concert_Drum_Stands_and_Mounts",
        "productProps": {
            "productBrand": "DW",
            "category": "Concert Drum Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/DynaCord",
        "productProps": {
            "productBrand": "DynaCord",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c407--Dynaudio--Studio_Subwoofers",
        "productProps": {
            "productBrand": "Dynaudio",
            "category": "Studio Subwoofers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/E__Rousseau",
        "productProps": {
            "productBrand": "E. Rousseau",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--EarthQuaker_Devices--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1162--EarthQuaker_Devices--Clothing_and_Merch",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Clothing & Merch"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--EarthQuaker_Devices--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--EarthQuaker_Devices--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--EarthQuaker_Devices--Tremolo_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--EarthQuaker_Devices--Chorus_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--EarthQuaker_Devices--Phaser_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--EarthQuaker_Devices--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1200--EarthQuaker_Devices--Eurorack_Modules",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Eurorack Modules"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--EarthQuaker_Devices--Flanger_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Earthworks--Condenser_Microphones",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--Earthworks--Wireless_Accessories",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--EarthQuaker_Devices--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--EarthQuaker_Devices--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "EarthQuaker Devices",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c396--Earthworks--Microphone_Stands",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Microphone Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c379--Earthworks--Microphone_Windscreens_and_Grilles",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Microphone Windscreens & Grilles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Earthworks--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c380--Earthworks--Microphone_Shockmounts",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Microphone Shockmounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c982--Earthworks--Drum_Microphone_Bundles",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "Drum Microphone Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c728--EastWest--Virtual_Orchestra_Software",
        "productProps": {
            "productBrand": "EastWest",
            "category": "Virtual Orchestra Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c981--Earthworks--USB_Microphones",
        "productProps": {
            "productBrand": "Earthworks",
            "category": "USB Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c723--EastWest--Sound_Module_Software",
        "productProps": {
            "productBrand": "EastWest",
            "category": "Sound Module Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--EastWest--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "EastWest",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--EastWest--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "EastWest",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Ebow--ebow-ebow-plus-electronic-bow-for-guitar",
        "productProps": {
            "productBrand": "Ebow",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c705--EastWest--Reverb_and_Delay_Plug_ins",
        "productProps": {
            "productBrand": "EastWest",
            "category": "Reverb & Delay Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--EBS--Patch_Cables",
        "productProps": {
            "productBrand": "EBS",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--EastWest--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "EastWest",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--EBS--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "EBS",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c635--EBS--Pedal_and_Effects_Accessories",
        "productProps": {
            "productBrand": "EBS",
            "category": "Pedal & Effects Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--EBS--Power_Supplies",
        "productProps": {
            "productBrand": "EBS",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c780--EBS--Insert_Y_Cables",
        "productProps": {
            "productBrand": "EBS",
            "category": "Insert / Y Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--EBS--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "EBS",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c807--EBS--Balanced_Cables_TRS_to_TRS",
        "productProps": {
            "productBrand": "EBS",
            "category": "Balanced Cables: TRS to TRS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--EBS--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "EBS",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CarlVKemper--echoxs-carl-verheyen-vintage-amp-collection-kemper-profile-download-pack-sweetwater-exclusive",
        "productProps": {
            "productBrand": "EchoXS",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Egnater--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Egnater",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c623--Egnater--Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Egnater",
            "category": "Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Egnater--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Egnater",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/EIKI",
        "productProps": {
            "productBrand": "EIKI",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1093--Elation--Lighting_Controllers_and_Interfaces",
        "productProps": {
            "productBrand": "Elation",
            "category": "Lighting Controllers & Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1096--Elation--Par_Cans",
        "productProps": {
            "productBrand": "Elation",
            "category": "Par Cans"
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Egnater--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Egnater",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Egnater--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Egnater",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1097--Elation--Color_and_Wash_Lights",
        "productProps": {
            "productBrand": "Elation",
            "category": "Color & Wash Lights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Electro-Harmonix--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--Electro-Harmonix--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1095--Elation--Spotlights",
        "productProps": {
            "productBrand": "Elation",
            "category": "Spotlights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1098--Elation--Strobes_Lasers_and_Effects_Lights",
        "productProps": {
            "productBrand": "Elation",
            "category": "Strobes, Lasers, & Effects Lights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Electro-Harmonix--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Electro-Harmonix--Chorus_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c978--Electro-Harmonix--Looper_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Looper Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Electro-Harmonix--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Electro-Harmonix--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Electro-Harmonix--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Electro-Harmonix--Power_Supplies",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Electro-Harmonix--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Electro-Harmonix--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1070--Electro-Harmonix--Guitar_Amp_Tubes",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Guitar Amp Tubes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1111--Electro-Harmonix--Guitar_Volume_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Guitar Volume Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c623--Electro-Harmonix--Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Electro-Harmonix--Flanger_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Electro-Harmonix--Phaser_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Electro-Harmonix--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1106--Electro-Harmonix--Pedalboards",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Pedalboards"
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Electro-Harmonix--Synthesizers",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Electro-Harmonix--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c106--Electro-Voice--Dynamic_Microphones",
        "productProps": {
            "productBrand": "Electro-Voice",
            "category": "Dynamic Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Electro-Harmonix--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Electro-Harmonix",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1098--Eliminator--Strobes_Lasers_and_Effects_Lights",
        "productProps": {
            "productBrand": "Eliminator",
            "category": "Strobes, Lasers, & Effects Lights"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/EmObPS--emerald-plastic-oboe-reed-soft",
        "productProps": {
            "productBrand": "Emerald",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--elysia--Mastering",
        "productProps": {
            "productBrand": "elysia",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--elysia--Preamps",
        "productProps": {
            "productBrand": "elysia",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/eMedia",
        "productProps": {
            "productBrand": "eMedia",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Emerson_Custom--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Emerson Custom",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c789--Emerson_Custom--Bulk_Wire",
        "productProps": {
            "productBrand": "Emerson Custom",
            "category": "Bulk Wire"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1246--EMG--Guitar_Prewired_Kits",
        "productProps": {
            "productBrand": "EMG",
            "category": "Guitar Prewired Kits"
        }
    },
    {
        "url": "https://www.sweetwater.com/c446--Eminence--Misc_PA_Accessories",
        "productProps": {
            "productBrand": "Eminence",
            "category": "Misc PA Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Empirical_Labs--Preamps",
        "productProps": {
            "productBrand": "Empirical Labs",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1037--Empirical_Labs--500_Series_Preamps",
        "productProps": {
            "productBrand": "Empirical Labs",
            "category": "500 Series Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c794--Empirical_Labs--Exciters_Enhancers",
        "productProps": {
            "productBrand": "Empirical Labs",
            "category": "Exciters / Enhancers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Epiphone--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Epiphone",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Epiphone--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Epiphone",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1015--Epiphone--Left_handed_Bass_Guitars",
        "productProps": {
            "productBrand": "Epiphone",
            "category": "Left-handed Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1161--Erica_Synths--DJ_Effects",
        "productProps": {
            "productBrand": "Erica Synths",
            "category": "DJ Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Erica_Synths--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Erica Synths",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Ernie_Ball--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Ernie Ball",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--Ernie_Ball--Patch_Cables",
        "productProps": {
            "productBrand": "Ernie Ball",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Ernie_Ball--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Ernie Ball",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c895--Ernie_Ball--Casters",
        "productProps": {
            "productBrand": "Ernie Ball",
            "category": "Casters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1247--Ernie_Ball--Miscellaneous_Guitar_Parts",
        "productProps": {
            "productBrand": "Ernie Ball",
            "category": "Miscellaneous Guitar Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c600--ESP--6_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "ESP",
            "category": "6-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1055--ESP--Acoustic_Bass_Guitars",
        "productProps": {
            "productBrand": "ESP",
            "category": "Acoustic Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--ESP--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "ESP",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--ESP--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "ESP",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1047--Etymotic_Research--Replacement_Foam_and_Sleeves",
        "productProps": {
            "productBrand": "Etymotic Research",
            "category": "Replacement Foam and Sleeves"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--ESP--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "ESP",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/ETB--eucatape-hand-drumming-tape-with-eucalyptus",
        "productProps": {
            "productBrand": "Eucatape",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--EVAbeat--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "EVAbeat",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1196--Evans--Drum_Care_and_Cleaning",
        "productProps": {
            "productBrand": "Evans",
            "category": "Drum Care & Cleaning"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--Eventide--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "Eventide",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Eventide--Direct_Boxes",
        "productProps": {
            "productBrand": "Eventide",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Eventide--Chorus_Pedals",
        "productProps": {
            "productBrand": "Eventide",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Eventide--Preamps",
        "productProps": {
            "productBrand": "Eventide",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Everest",
        "productProps": {
            "productBrand": "Everest",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--EVH--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "EVH",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Ex_Machina_Soundworks",
        "productProps": {
            "productBrand": "Ex Machina Soundworks",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Fable_Sounds",
        "productProps": {
            "productBrand": "Fable Sounds",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/GuitarTool--farleys-jp-deluxe-guitar-tool-multi-tool-and-cutter-for-guitar-and-bass",
        "productProps": {
            "productBrand": "Farley's",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1110--Fastset--Laptop_Stands",
        "productProps": {
            "productBrand": "Fastset",
            "category": "Laptop Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Fat_Cat_Snappy_Snares",
        "productProps": {
            "productBrand": "Fat Cat Snappy Snares",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Fender_Custom_Shop--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Fender Custom Shop",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Fender--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Fender--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1246--Fender--Guitar_Prewired_Kits",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Guitar Prewired Kits"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1015--Fender--Left_handed_Bass_Guitars",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Left-handed Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Fender--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--Fender--Patch_Cables",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Fender--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c603--Fender--Acoustic_Guitar_Packages",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Acoustic Guitar Packages"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Fender--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Fender--Microphone_Cables",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c895--Fender--Casters",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Casters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1111--Fender--Guitar_Volume_Pedals",
        "productProps": {
            "productBrand": "Fender®",
            "category": "Guitar Volume Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1219--Ferrofish--Ethernet_Audio_Interfaces",
        "productProps": {
            "productBrand": "Ferrofish",
            "category": "Ethernet Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Fischer_Amps",
        "productProps": {
            "productBrand": "Fischer Amps",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Fishman--Direct_Boxes",
        "productProps": {
            "productBrand": "Fishman",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1247--Fishman--Miscellaneous_Guitar_Parts",
        "productProps": {
            "productBrand": "Fishman",
            "category": "Miscellaneous Guitar Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1062--Fishman--iPad_iPhone_Guitar_Interfaces_FX",
        "productProps": {
            "productBrand": "Fishman",
            "category": "iPad/iPhone Guitar Interfaces/FX"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Fishman--MIDI_Controllers",
        "productProps": {
            "productBrand": "Fishman",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Fishman--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Fishman",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--Focal--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "Focal",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/ModRecTech--focal-press-modern-recording-techniques-8th-edition",
        "productProps": {
            "productBrand": "Focal Press",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c546--Focusrite--Pro_Tools_HD_Interfaces",
        "productProps": {
            "productBrand": "Focusrite",
            "category": "Pro Tools HD Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Focusrite--Condenser_Microphones",
        "productProps": {
            "productBrand": "Focusrite",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1089--Focusrite--Thunderbolt_Audio_Interfaces",
        "productProps": {
            "productBrand": "Focusrite",
            "category": "Thunderbolt Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Focusrite--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Focusrite",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--Focusrite--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "Focusrite",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c790--Focusrite--Compressors_Limiters",
        "productProps": {
            "productBrand": "Focusrite",
            "category": "Compressors / Limiters"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CoryWongGtrCo--fourth-position-academy-cory-wong-guitar-course",
        "productProps": {
            "productBrand": "Fourth Position Academy",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Francois_Louis",
        "productProps": {
            "productBrand": "Francois Louis",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Fredenstein--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Fredenstein",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c898--Fredenstein--Portable_Recorder_Accessories",
        "productProps": {
            "productBrand": "Fredenstein",
            "category": "Portable Recorder Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c417--Fredenstein--Studio_Monitor_Management",
        "productProps": {
            "productBrand": "Fredenstein",
            "category": "Studio Monitor Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/c896--Fredenstein--Signal_Processing_Accessories",
        "productProps": {
            "productBrand": "Fredenstein",
            "category": "Signal Processing Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Friedman--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Friedman",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Friedman--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Friedman",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1106--Friedman--Pedalboards",
        "productProps": {
            "productBrand": "Friedman",
            "category": "Pedalboards"
        }
    },
    {
        "url": "https://www.sweetwater.com/c450--Friedman--Stage_Monitors",
        "productProps": {
            "productBrand": "Friedman",
            "category": "Stage Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Circle2--future-audio-workshop-circle-2-vector-phase-shaping-synthesizer-plug-in",
        "productProps": {
            "productBrand": "Future Audio Workshop",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--G_and_L--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "G&L",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/G7th",
        "productProps": {
            "productBrand": "G7th",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1001--GaffTech--Staging_Accessories",
        "productProps": {
            "productBrand": "GaffTech",
            "category": "Staging Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c978--Gamechanger_Audio--Looper_Pedals",
        "productProps": {
            "productBrand": "Gamechanger Audio",
            "category": "Looper Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--Gator--Wireless_Accessories",
        "productProps": {
            "productBrand": "Gator",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1162--Gator--Clothing_and_Merch",
        "productProps": {
            "productBrand": "Gator",
            "category": "Clothing & Merch"
        }
    },
    {
        "url": "https://www.sweetwater.com/c914--Gator--Control_Surface_Accessories",
        "productProps": {
            "productBrand": "Gator",
            "category": "Control Surface Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c628--Gator--Guitar_Amp_Stands",
        "productProps": {
            "productBrand": "Gator",
            "category": "Guitar Amp Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1362--Gator--Marching_Snare_Drum_Cases_and_Bags",
        "productProps": {
            "productBrand": "Gator",
            "category": "Marching Snare Drum Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1119--Gator--Congas",
        "productProps": {
            "productBrand": "Gator",
            "category": "Congas"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1110--Gator--Laptop_Stands",
        "productProps": {
            "productBrand": "Gator",
            "category": "Laptop Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1218--Gator--Knockout_Rack_Panels",
        "productProps": {
            "productBrand": "Gator",
            "category": "Knockout Rack Panels"
        }
    },
    {
        "url": "https://www.sweetwater.com/c762--Gator_Frameworks--Studio_Monitor_Stands",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "Studio Monitor Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1110--Gator_Frameworks--Laptop_Stands",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "Laptop Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1100--Gator_Frameworks--Lighting_Stands_and_Trusses",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "Lighting Stands & Trusses"
        }
    },
    {
        "url": "https://www.sweetwater.com/c763--Gator_Frameworks--Music_Stands",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "Music Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1209--Gator_Frameworks--DJ_Stands",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "DJ Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c441--Gator_Frameworks--Mixer_Stands",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "Mixer Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Genalex",
        "productProps": {
            "productBrand": "Genalex",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--Gator_Frameworks--Wireless_Accessories",
        "productProps": {
            "productBrand": "Gator Frameworks",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--Genelec--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "Genelec",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--George_Ls--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "George Ls",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--George_Ls--Patch_Cables",
        "productProps": {
            "productBrand": "George Ls",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c723--GForce--Sound_Module_Software",
        "productProps": {
            "productBrand": "GForce",
            "category": "Sound Module Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1348--Gibraltar--Concert_Drum_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Gibraltar",
            "category": "Concert Drum Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Gibraltar--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Gibraltar",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1248--Gibraltar--Stands",
        "productProps": {
            "productBrand": "Gibraltar",
            "category": "Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c689--Gibraltar--Misc_Furniture_Accessories",
        "productProps": {
            "productBrand": "Gibraltar",
            "category": "Misc Furniture Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Gibson_Acoustic--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Gibson Acoustic",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Gibson_Acoustic--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Gibson Acoustic",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Gibson--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Gibson",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1006--Gibson--Portable_Recorders",
        "productProps": {
            "productBrand": "Gibson",
            "category": "Portable Recorders"
        }
    },
    {
        "url": "https://www.sweetwater.com/c600--Godin--6_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Godin",
            "category": "6-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Godin--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Godin",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c934--Godin--Acoustic_Guitar_Gig_Bags",
        "productProps": {
            "productBrand": "Godin",
            "category": "Acoustic Guitar Gig Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Godin--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Godin",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c582--Godin--5_string_Bass_Guitars",
        "productProps": {
            "productBrand": "Godin",
            "category": "5-string Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c581--Godin--4_string_Bass_Guitars",
        "productProps": {
            "productBrand": "Godin",
            "category": "4-string Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1343--Gon_Bops--Miscellaneous_Concert_Percussion",
        "productProps": {
            "productBrand": "Gon Bops",
            "category": "Miscellaneous Concert Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Goodwood",
        "productProps": {
            "productBrand": "Goodwood",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1235--GoPro--Batteries",
        "productProps": {
            "productBrand": "GoPro",
            "category": "Batteries"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/GorillaSnot--gorilla-snot-pick-and-drumstick-grip-enhancer",
        "productProps": {
            "productBrand": "Gorilla Snot",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Grace_Design--Direct_Boxes",
        "productProps": {
            "productBrand": "Grace Design",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Grace_Design--Channel_Strips",
        "productProps": {
            "productBrand": "Grace Design",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/G5790--granelli-audio-labs-g5790",
        "productProps": {
            "productBrand": "Granelli Audio Labs",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c741--Grace_Design--Misc_Digital_Converters",
        "productProps": {
            "productBrand": "Grace Design",
            "category": "Misc Digital Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--Grace_Design--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "Grace Design",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1246--Graph_Tech--Guitar_Prewired_Kits",
        "productProps": {
            "productBrand": "Graph Tech",
            "category": "Guitar Prewired Kits"
        }
    },
    {
        "url": "https://www.sweetwater.com/c593--Graph_Tech--MIDI_Guitars_and_Pickups",
        "productProps": {
            "productBrand": "Graph Tech",
            "category": "MIDI Guitars & Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Gravity_Picks",
        "productProps": {
            "productBrand": "Gravity Picks",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Great_River--Mastering",
        "productProps": {
            "productBrand": "Great River",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Great_River--Channel_Strips",
        "productProps": {
            "productBrand": "Great River",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Gretsch--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Gretsch",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Gretsch--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Gretsch",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1224--Griffin--USB_Cables",
        "productProps": {
            "productBrand": "Griffin",
            "category": "USB Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Groove_Tubes",
        "productProps": {
            "productBrand": "Groove Tubes",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1342--Grover_Pro_Percussion--Concert_Chimes",
        "productProps": {
            "productBrand": "Grover Pro Percussion",
            "category": "Concert Chimes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1348--Grover_Pro_Percussion--Concert_Drum_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Grover Pro Percussion",
            "category": "Concert Drum Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/3465--grover-trophy-slapstick-18-inch",
        "productProps": {
            "productBrand": "Grover-Trophy",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1227--Gruv_Gear--Ukulele_Cases_and_Bags",
        "productProps": {
            "productBrand": "Gruv Gear",
            "category": "Ukulele Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c963--Gruv_Gear--Handcarts",
        "productProps": {
            "productBrand": "Gruv Gear",
            "category": "Handcarts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c936--Gruv_Gear--Electric_Guitar_Cases",
        "productProps": {
            "productBrand": "Gruv Gear",
            "category": "Electric Guitar Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1106--Gruv_Gear--Pedalboards",
        "productProps": {
            "productBrand": "Gruv Gear",
            "category": "Pedalboards"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Gruv-X",
        "productProps": {
            "productBrand": "Gruv-X",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Guild--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Guild®",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/hakan",
        "productProps": {
            "productBrand": "hakan",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Guild--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Guild®",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c537--Hal_Leonard--Instructional_Videos_and_DVDs",
        "productProps": {
            "productBrand": "Hal Leonard",
            "category": "Instructional Videos & DVDs"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hal_Leonard_Print",
        "productProps": {
            "productBrand": "Hal Leonard Print",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c763--Hamilton--Music_Stands",
        "productProps": {
            "productBrand": "Hamilton",
            "category": "Music Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1067--Hamilton--iPad_iPhone_Stands_and_Holders",
        "productProps": {
            "productBrand": "Hamilton",
            "category": "iPad/iPhone Stands and Holders"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Hammond--MIDI_Controllers",
        "productProps": {
            "productBrand": "Hammond",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Hammond--Synthesizers",
        "productProps": {
            "productBrand": "Hammond",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Hammond--Cable_Adapters",
        "productProps": {
            "productBrand": "Hammond",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/HHFHG10--hans-hoyer-hans-hoyer-g10-professional-double-french-horn-clear-lacquer-with-string-mechanism",
        "productProps": {
            "productBrand": "Hans Hoyer",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Harmon",
        "productProps": {
            "productBrand": "Harmon",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/GeddyLeeBBBB--harpercollins-publishers-geddy-lees-big-beautiful-book-of-bass",
        "productProps": {
            "productBrand": "HarperCollins Publishers",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c450--Headrush--Stage_Monitors",
        "productProps": {
            "productBrand": "Headrush",
            "category": "Stage Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Heavyocity--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Heavyocity",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/HEDDphones--hedd-heddphone-amt-driver-headphones",
        "productProps": {
            "productBrand": "HEDD",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c929--Herco--Guitar_Picks",
        "productProps": {
            "productBrand": "Herco",
            "category": "Guitar Picks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c704--Heavyocity--Dynamics_Plug_ins",
        "productProps": {
            "productBrand": "Heavyocity",
            "category": "Dynamics Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Heavyocity--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Heavyocity",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hendrix_Drums",
        "productProps": {
            "productBrand": "Hendrix Drums",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1152--Herco--Guitar_Humidifiers",
        "productProps": {
            "productBrand": "Herco",
            "category": "Guitar Humidifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c935--Hercules_Stands--Guitar_Stands",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Guitar Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Herco--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Herco",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Herco--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Herco",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hercules_DJ",
        "productProps": {
            "productBrand": "Hercules DJ",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c396--Hercules_Stands--Microphone_Stands",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Microphone Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1311--Hercules_Stands--Brass_Accessories",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Brass Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1248--Hercules_Stands--Stands",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1107--Hercules_Stands--Guitar_Hangers",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Guitar Hangers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Hercules_Stands--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c444--Hercules_Stands--PA_Speaker_Stands",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "PA Speaker Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c763--Hercules_Stands--Music_Stands",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Music Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c963--Hercules_Stands--Handcarts",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Handcarts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c508--Hercules_Stands--Keyboard_Stands",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Keyboard Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1067--Hercules_Stands--iPad_iPhone_Stands_and_Holders",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "iPad/iPhone Stands and Holders"
        }
    },
    {
        "url": "https://www.sweetwater.com/c527--Hercules_Stands--Keyboard_Gig_Bags",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Keyboard Gig Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c689--Hercules_Stands--Misc_Furniture_Accessories",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Misc Furniture Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Heritage_Audio--Preamps",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--Hercules_Stands--Microphone_Clips",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1105--Hercules_Stands--Video_Camera_Accessories",
        "productProps": {
            "productBrand": "Hercules Stands",
            "category": "Video Camera Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1040--Heritage_Audio--500_Series_Chassis",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "500 Series Chassis"
        }
    },
    {
        "url": "https://www.sweetwater.com/c417--Heritage_Audio--Studio_Monitor_Management",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Studio Monitor Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--Heritage_Audio--Summing_Mixers",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Heritage_Audio--Parametric_EQ",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c790--Heritage_Audio--Compressors_Limiters",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Compressors / Limiters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1037--Heritage_Audio--500_Series_Preamps",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "500 Series Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1039--Heritage_Audio--500_Series_EQ",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "500 Series EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Heritage_Audio--Direct_Boxes",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Heritage_Audio--Condenser_Microphones",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Heritage_Audio--Channel_Strips",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Heritage_Audio--Mastering",
        "productProps": {
            "productBrand": "Heritage Audio",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hodge",
        "productProps": {
            "productBrand": "Hodge",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Hidersine",
        "productProps": {
            "productBrand": "Hidersine",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Holeyboard_Pedalboards",
        "productProps": {
            "productBrand": "Holeyboard Pedalboards",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/hb1MIDI--hornberg-research-hb1-midi-breath-station",
        "productProps": {
            "productBrand": "Hornberg Research",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--Hosa--Patch_Cables",
        "productProps": {
            "productBrand": "Hosa",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Hosa--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Hosa",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--Hosa--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "Hosa",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c997--Hosa--Wireless_Accessories",
        "productProps": {
            "productBrand": "Hosa",
            "category": "Wireless Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/House_of_Troy",
        "productProps": {
            "productBrand": "House of Troy",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Hughes__and__Kettner--Direct_Boxes",
        "productProps": {
            "productBrand": "Hughes & Kettner",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/IsoTabs--humfrees-rack-isolation-tabs",
        "productProps": {
            "productBrand": "Humfrees",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/HWTSBellBr--hw-products-1950-tenor-saxophone-bell-brush",
        "productProps": {
            "productBrand": "HW Products",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Ibanez--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Ibanez",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Ibanez--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Ibanez",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Ibanez--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Ibanez",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1015--Ibanez--Left_handed_Bass_Guitars",
        "productProps": {
            "productBrand": "Ibanez",
            "category": "Left-handed Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Ibanez--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Ibanez",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Ibanez--Flanger_Pedals",
        "productProps": {
            "productBrand": "Ibanez",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1059--iConnectivity--iPad_iPhone_MIDI_Interfaces",
        "productProps": {
            "productBrand": "iConnectivity",
            "category": "iPad/iPhone MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/IcyDock",
        "productProps": {
            "productBrand": "IcyDock",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1063--IK_Multimedia--iPad_iPhone_Keyboard_Controllers",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "iPad/iPhone Keyboard Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c677--IK_Multimedia--MIDI_Interfaces",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c981--IK_Multimedia--USB_Microphones",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "USB Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--IK_Multimedia--Utility_Plug_ins",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1252--IK_Multimedia--Camera_Microphones",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Camera Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1176--IK_Multimedia--Lavalier_Microphones",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Lavalier Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--IK_Multimedia--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--IK_Multimedia--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--IK_Multimedia--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c985--IK_Multimedia--Acoustic_Guitar_Pickups",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Acoustic Guitar Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--IK_Multimedia--Condenser_Microphones",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--IK_Multimedia--Chorus_Pedals",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c853--IK_Multimedia--MIDI_Cables",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "MIDI Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1064--IK_Multimedia--iPad_iPhone_DJ_Mixers_Controllers",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "iPad/iPhone DJ Mixers/Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1059--IK_Multimedia--iPad_iPhone_MIDI_Interfaces",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "iPad/iPhone MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1105--IK_Multimedia--Video_Camera_Accessories",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Video Camera Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--IK_Multimedia--Sequencers",
        "productProps": {
            "productBrand": "IK Multimedia",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c728--Ilio--Virtual_Orchestra_Software",
        "productProps": {
            "productBrand": "Ilio",
            "category": "Virtual Orchestra Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1158--Image_Line--DJ_Controllers",
        "productProps": {
            "productBrand": "Image Line",
            "category": "DJ Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Ingles",
        "productProps": {
            "productBrand": "Ingles",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Inspired_Acoustics",
        "productProps": {
            "productBrand": "Inspired Acoustics",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c628--IsoAcoustics--Guitar_Amp_Stands",
        "productProps": {
            "productBrand": "IsoAcoustics",
            "category": "Guitar Amp Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/ISOVOX",
        "productProps": {
            "productBrand": "ISOVOX",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c579--ISP_Technologies--Bass_Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "ISP Technologies",
            "category": "Bass Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/HiteASMpc--j-and-d-hite-hard-rubber-alto-saxophone-mouthpiece",
        "productProps": {
            "productBrand": "J&D Hite",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--J__Rockett_Audio_Designs--Tremolo_Pedals",
        "productProps": {
            "productBrand": "J. Rockett Audio Designs",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Jackson--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Jackson",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c588--Jackson--Bass_Guitar_Cases",
        "productProps": {
            "productBrand": "Jackson",
            "category": "Bass Guitar Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1109--Jackson--Baritone_Guitars",
        "productProps": {
            "productBrand": "Jackson",
            "category": "Baritone Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/10081--jameco-power-supply",
        "productProps": {
            "productBrand": "Jameco",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c687--JamRacks--Equipment_Side_Racks",
        "productProps": {
            "productBrand": "JamRacks",
            "category": "Equipment Side Racks"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/StageCl--jands-stage-cl-512-ch-dmx-lighting-controller",
        "productProps": {
            "productBrand": "Jands",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1311--Jazzlab--Brass_Accessories",
        "productProps": {
            "productBrand": "Jazzlab",
            "category": "Brass Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1073--JBL--Wall_Plates",
        "productProps": {
            "productBrand": "JBL",
            "category": "Wall Plates"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1249--JBL--Cases",
        "productProps": {
            "productBrand": "JBL",
            "category": "Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/c895--JBL--Casters",
        "productProps": {
            "productBrand": "JBL",
            "category": "Casters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--JBL--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "JBL",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c408--JBL--Studio_Monitor_Amplifiers",
        "productProps": {
            "productBrand": "JBL",
            "category": "Studio Monitor Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1175--JBL_Lifestyle--Headset_Microphones",
        "productProps": {
            "productBrand": "JBL Lifestyle",
            "category": "Headset Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Jensen",
        "productProps": {
            "productBrand": "Jensen",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c407--JBL_Lifestyle--Studio_Subwoofers",
        "productProps": {
            "productBrand": "JBL Lifestyle",
            "category": "Studio Subwoofers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/8MX2--jdk-audio-8mx2-rackmount-mixer-preamp",
        "productProps": {
            "productBrand": "JDK Audio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--JHS--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "JHS",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1117--JHS--Attenuators_and_Simulators",
        "productProps": {
            "productBrand": "JHS",
            "category": "Attenuators & Simulators"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--JHS--Preamps",
        "productProps": {
            "productBrand": "JHS",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/JJ",
        "productProps": {
            "productBrand": "JJ",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/JK_Audio",
        "productProps": {
            "productBrand": "JK Audio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/gbQ--joemeek-gbq-distortion-eq-enhancer-pedal",
        "productProps": {
            "productBrand": "Joemeek",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Jones--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Jones",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Journey_Instruments--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Journey Instruments",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1055--Journey_Instruments--Acoustic_Bass_Guitars",
        "productProps": {
            "productBrand": "Journey Instruments",
            "category": "Acoustic Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--JUMPERZ--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "JUMPERZ",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--JUMPERZ--Pedalboard_Cables",
        "productProps": {
            "productBrand": "JUMPERZ",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c894--JUMPERZ--Snakes_AES",
        "productProps": {
            "productBrand": "JUMPERZ",
            "category": "Snakes: AES"
        }
    },
    {
        "url": "https://www.sweetwater.com/c898--JUMPERZ--Portable_Recorder_Accessories",
        "productProps": {
            "productBrand": "JUMPERZ",
            "category": "Portable Recorder Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Jupio--Power_Supplies",
        "productProps": {
            "productBrand": "Jupio",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c762--K_and_M--Studio_Monitor_Stands",
        "productProps": {
            "productBrand": "K&M",
            "category": "Studio Monitor Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1054--K_and_M--Tablet_Accessories",
        "productProps": {
            "productBrand": "K&M",
            "category": "Tablet Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1110--K_and_M--Laptop_Stands",
        "productProps": {
            "productBrand": "K&M",
            "category": "Laptop Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c763--K_and_M--Music_Stands",
        "productProps": {
            "productBrand": "K&M",
            "category": "Music Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--K_and_M--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "K&M",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c693--K_and_M--Keyboard_Trays",
        "productProps": {
            "productBrand": "K&M",
            "category": "Keyboard Trays"
        }
    },
    {
        "url": "https://www.sweetwater.com/c428--K_and_M--Misc_Mixer_Accessories",
        "productProps": {
            "productBrand": "K&M",
            "category": "Misc Mixer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c380--K_and_M--Microphone_Shockmounts",
        "productProps": {
            "productBrand": "K&M",
            "category": "Microphone Shockmounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c641--K_and_M--Miscellaneous_Drum_Accessories",
        "productProps": {
            "productBrand": "K&M",
            "category": "Miscellaneous Drum Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Kahayan",
        "productProps": {
            "productBrand": "Kahayan",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1055--Kala--Acoustic_Bass_Guitars",
        "productProps": {
            "productBrand": "Kala",
            "category": "Acoustic Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c581--Kala--4_string_Bass_Guitars",
        "productProps": {
            "productBrand": "Kala",
            "category": "4-string Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Kala--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Kala",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1082--Kala--Banjos",
        "productProps": {
            "productBrand": "Kala",
            "category": "Banjos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1083--Kala--Resonator_Guitars",
        "productProps": {
            "productBrand": "Kala",
            "category": "Resonator Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--Kali_Audio--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "Kali Audio",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Keeley--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Keeley--Flanger_Pedals",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Keeley--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Keeley--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c978--Keeley--Looper_Pedals",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Looper Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1260--Keilwerth--Tenor_Saxophones",
        "productProps": {
            "productBrand": "Keilwerth",
            "category": "Tenor Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Keeley--Phaser_Pedals",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1259--Keilwerth--Alto_Saxophones",
        "productProps": {
            "productBrand": "Keilwerth",
            "category": "Alto Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Keeley--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Keeley",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c645--Keith_McMillen_Instruments--Electronic_Drum_Controllers_and_Multipads",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Electronic Drum Controllers & Multipads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c784--Keith_McMillen_Instruments--Control_and_Interface_Combos",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Control & Interface Combos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Keith_McMillen_Instruments--MIDI_Controllers",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c914--Keith_McMillen_Instruments--Control_Surface_Accessories",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Control Surface Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c265--Keith_McMillen_Instruments--Digital_Mixers",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Digital Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1213--Keith_McMillen_Instruments--Drum_Clamps",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Drum Clamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Kelly_Concepts",
        "productProps": {
            "productBrand": "Kelly Concepts",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c528--Keith_McMillen_Instruments--Keyboard_Cases",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Keyboard Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/c853--Keith_McMillen_Instruments--MIDI_Cables",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "MIDI Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c644--Keith_McMillen_Instruments--Drum_Triggers_and_Pads",
        "productProps": {
            "productBrand": "Keith McMillen Instruments",
            "category": "Drum Triggers & Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Kemper--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Kemper",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c623--Kemper--Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Kemper",
            "category": "Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Kemper--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Kemper",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c630--Kemper--Guitar_Amp_Cases_and_Bags",
        "productProps": {
            "productBrand": "Kemper",
            "category": "Guitar Amp Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c978--Kemper--Looper_Pedals",
        "productProps": {
            "productBrand": "Kemper",
            "category": "Looper Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Key_Leaves",
        "productProps": {
            "productBrand": "Key Leaves",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Trackball--kensington-slimblade-trackball",
        "productProps": {
            "productBrand": "Kensington",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/KickPort_International",
        "productProps": {
            "productBrand": "KickPort International",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Kemper--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Kemper",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/KickBlock",
        "productProps": {
            "productBrand": "KickBlock",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/KPBDP17B--kickpro-kick-drum-pillow",
        "productProps": {
            "productBrand": "KICKPRO",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Kinder_Chinder",
        "productProps": {
            "productBrand": "Kinder Chinder",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/SDCard32K--kingston-canvas-select-plus-microsd-card-32-gb-class-10-uhs-i-with-adapter",
        "productProps": {
            "productBrand": "Kingston",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1219--Klark_Teknik--Ethernet_Audio_Interfaces",
        "productProps": {
            "productBrand": "Klark Teknik",
            "category": "Ethernet Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c894--Klark_Teknik--Snakes_AES",
        "productProps": {
            "productBrand": "Klark Teknik",
            "category": "Snakes: AES"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/ReceptTest--klein-tools-rt110-receptacle-tester",
        "productProps": {
            "productBrand": "Klein Tools",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Kohala",
        "productProps": {
            "productBrand": "Kohala",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Korg--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Korg",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Korg--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Korg",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1175--Korg--Headset_Microphones",
        "productProps": {
            "productBrand": "Korg",
            "category": "Headset Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Kramer--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Kramer",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Kratt_Master_Key",
        "productProps": {
            "productBrand": "Kratt Master Key",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/KUN",
        "productProps": {
            "productBrand": "KUN",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Kurzweil--Synthesizers",
        "productProps": {
            "productBrand": "Kurzweil",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Kyser",
        "productProps": {
            "productBrand": "Kyser",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1345--LA_Special--Concert_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "LA Special",
            "category": "Concert Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--LA_Special--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "LA Special",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Lab_Gruppen",
        "productProps": {
            "productBrand": "Lab Gruppen",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1041--LaChapell_Audio--Other_500_Series_Processors",
        "productProps": {
            "productBrand": "LaChapell Audio",
            "category": "Other 500 Series Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/LaCie",
        "productProps": {
            "productBrand": "LaCie",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--LANDR--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "LANDR",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Larsen",
        "productProps": {
            "productBrand": "Larsen",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--LANDR--Plug_in_Bundles",
        "productProps": {
            "productBrand": "LANDR",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1055--Lanikai--Acoustic_Bass_Guitars",
        "productProps": {
            "productBrand": "Lanikai",
            "category": "Acoustic Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1129--Latin_Percussion--Guiros",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Guiros"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1338--Latin_Percussion--Concert_Blocks",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Concert Blocks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1131--Latin_Percussion--Cabasas",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Cabasas"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1342--Latin_Percussion--Concert_Chimes",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Concert Chimes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1339--Latin_Percussion--Concert_Tambourines",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Concert Tambourines"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1128--Latin_Percussion--Vibraslaps",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Vibraslaps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--Latin_Percussion--Microphone_Clips",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1133--Latin_Percussion--Rainsticks",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Rainsticks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1155--Latin_Percussion--Triangles",
        "productProps": {
            "productBrand": "Latin Percussion",
            "category": "Triangles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Lava_Cable--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Lava Cable",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--Lava_Cable--Patch_Cables",
        "productProps": {
            "productBrand": "Lava Cable",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Leapwing_Audio--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Leapwing Audio",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--Leapwing_Audio--Mastering_Software",
        "productProps": {
            "productBrand": "Leapwing Audio",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c713--Leapwing_Audio--Noise_Reduction_Plug_ins",
        "productProps": {
            "productBrand": "Leapwing Audio",
            "category": "Noise Reduction Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c992--Lectrosonics--Handheld_Microphone_Wireless_Systems",
        "productProps": {
            "productBrand": "Lectrosonics",
            "category": "Handheld Microphone Wireless Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1105--Lectrosonics--Video_Camera_Accessories",
        "productProps": {
            "productBrand": "Lectrosonics",
            "category": "Video Camera Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Lee_Oskar",
        "productProps": {
            "productBrand": "Lee Oskar",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--Lectrosonics--Microphone_Clips",
        "productProps": {
            "productBrand": "Lectrosonics",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c520--Lehle--Keyboard_Pedals",
        "productProps": {
            "productBrand": "Lehle",
            "category": "Keyboard Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/LCD27-C27-30--lenovo-thinkvision-c27-30-27-inch-full-hd-wled-lcd-monitor",
        "productProps": {
            "productBrand": "Lenovo",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/GP60NS50--lg-gp60ns50-external-ultra-slim-portable-dvdrw-silver",
        "productProps": {
            "productBrand": "LG",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Lexar",
        "productProps": {
            "productBrand": "Lexar",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/NWA220--liberty-a-v-niveo-nwa220-dual-band-outdoor-server",
        "productProps": {
            "productBrand": "Liberty A/V",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c596--Line_6--Modeling_Electric_Guitars",
        "productProps": {
            "productBrand": "Line 6",
            "category": "Modeling Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c811--Line_6--BNC_Cables",
        "productProps": {
            "productBrand": "Line 6",
            "category": "BNC Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1226--Line_6--Ethernet_Cables",
        "productProps": {
            "productBrand": "Line 6",
            "category": "Ethernet Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c730--Line_6--Computer_Adapters_Extenders_and_Converters",
        "productProps": {
            "productBrand": "Line 6",
            "category": "Computer Adapters, Extenders & Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Line_6--Microphone_Cables",
        "productProps": {
            "productBrand": "Line 6",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c978--Line_6--Looper_Pedals",
        "productProps": {
            "productBrand": "Line 6",
            "category": "Looper Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Linksys",
        "productProps": {
            "productBrand": "Linksys",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1175--Listen_Technologies--Headset_Microphones",
        "productProps": {
            "productBrand": "Listen Technologies",
            "category": "Headset Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/LogicKeyboard",
        "productProps": {
            "productBrand": "LogicKeyboard",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Logjam",
        "productProps": {
            "productBrand": "Logjam",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--LR_Baggs--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "LR Baggs",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--LR_Baggs--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "LR Baggs",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--LR_Baggs--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "LR Baggs",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--LR_Baggs--Chorus_Pedals",
        "productProps": {
            "productBrand": "LR Baggs",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1346--Ludwig--Concert_Drum_Heads",
        "productProps": {
            "productBrand": "Ludwig",
            "category": "Concert Drum Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Luna--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Luna",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Luthier_s_Choice",
        "productProps": {
            "productBrand": "Luthier's Choice",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c546--Lynx--Pro_Tools_HD_Interfaces",
        "productProps": {
            "productBrand": "Lynx",
            "category": "Pro Tools HD Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c894--Lynx--Snakes_AES",
        "productProps": {
            "productBrand": "Lynx",
            "category": "Snakes: AES"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Lynx--Preamps",
        "productProps": {
            "productBrand": "Lynx",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--M-Audio--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "M-Audio",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c417--M-Audio--Studio_Monitor_Management",
        "productProps": {
            "productBrand": "M-Audio",
            "category": "Studio Monitor Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Maag_Audio--Preamps",
        "productProps": {
            "productBrand": "Maag Audio",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Maag_Audio--Mastering",
        "productProps": {
            "productBrand": "Maag Audio",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1208--Mackie--DJ_Headphones",
        "productProps": {
            "productBrand": "Mackie",
            "category": "DJ Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--Mackie--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "Mackie",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1162--Mackie--Clothing_and_Merch",
        "productProps": {
            "productBrand": "Mackie",
            "category": "Clothing & Merch"
        }
    },
    {
        "url": "https://www.sweetwater.com/c996--Mackie--Wireless_Transmitters_and_Receivers",
        "productProps": {
            "productBrand": "Mackie",
            "category": "Wireless Transmitters & Receivers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Magic_Rosin",
        "productProps": {
            "productBrand": "Magic Rosin",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1034--Magma_Bags--Earpads_Cables_and_Accessories",
        "productProps": {
            "productBrand": "Magma Bags",
            "category": "Earpads, Cables & Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c698--Magix--Utility_and_Other_Software",
        "productProps": {
            "productBrand": "Magix",
            "category": "Utility & Other Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CRISP--magmatic-crisp-high-volume-snow-machine",
        "productProps": {
            "productBrand": "Magmatic",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Magma--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Magma",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/MagSlideMS2--magslide-magnesium-guitar-slide",
        "productProps": {
            "productBrand": "MagSlide",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1017--Majestic--Snare_Drums",
        "productProps": {
            "productBrand": "Majestic",
            "category": "Snare Drums"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/MakeMusic",
        "productProps": {
            "productBrand": "MakeMusic",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1028--Malletech--Drumsticks_Mallets_and_Brushes",
        "productProps": {
            "productBrand": "Malletech",
            "category": "Drumsticks, Mallets & Brushes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c963--Manhasset--Handcarts",
        "productProps": {
            "productBrand": "Manhasset",
            "category": "Handcarts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Manhasset--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Manhasset",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Manley--Mastering",
        "productProps": {
            "productBrand": "Manley®",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/MARCA",
        "productProps": {
            "productBrand": "MARCA",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--Marimba_One--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Marimba One",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c771--Marshall--Miscellaneous_Guitar_Amp_Accessories",
        "productProps": {
            "productBrand": "Marshall",
            "category": "Miscellaneous Guitar Amp Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Martin--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Martin",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1095--Martin_Lighting--Spotlights",
        "productProps": {
            "productBrand": "Martin Lighting",
            "category": "Spotlights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Martin--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Martin",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1099--Martin_Lighting--Fog_and_Bubble_Machines",
        "productProps": {
            "productBrand": "Martin Lighting",
            "category": "Fog & Bubble Machines"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1098--Martin_Lighting--Strobes_Lasers_and_Effects_Lights",
        "productProps": {
            "productBrand": "Martin Lighting",
            "category": "Strobes, Lasers, & Effects Lights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Martin_Lighting--Cable_Connectors",
        "productProps": {
            "productBrand": "Martin Lighting",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1157--Martin_Lighting--Lighting_Clamps",
        "productProps": {
            "productBrand": "Martin Lighting",
            "category": "Lighting Clamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Matthews_Effects--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Matthews Effects",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1096--Martin_Lighting--Par_Cans",
        "productProps": {
            "productBrand": "Martin Lighting",
            "category": "Par Cans"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Matthews_Effects--MIDI_Controllers",
        "productProps": {
            "productBrand": "Matthews Effects",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Matthews_Effects--Phaser_Pedals",
        "productProps": {
            "productBrand": "Matthews Effects",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Matthews_Effects--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Matthews Effects",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/JewelCase12--maxell-standard-cd-jewel-case-12pk-full-size-cd-case",
        "productProps": {
            "productBrand": "Maxell",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Mberg",
        "productProps": {
            "productBrand": "Mberg",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--McDSP--Mastering_Software",
        "productProps": {
            "productBrand": "McDSP",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1143--Meinl_Cymbals--Cymbal_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Meinl Cymbals",
            "category": "Cymbal Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1131--Meinl_Percussion--Cabasas",
        "productProps": {
            "productBrand": "Meinl Percussion",
            "category": "Cabasas"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1129--Meinl_Percussion--Guiros",
        "productProps": {
            "productBrand": "Meinl Percussion",
            "category": "Guiros"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1132--Meinl_Percussion--Claves",
        "productProps": {
            "productBrand": "Meinl Percussion",
            "category": "Claves"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1339--Meinl_Percussion--Concert_Tambourines",
        "productProps": {
            "productBrand": "Meinl Percussion",
            "category": "Concert Tambourines"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1133--Meinl_Percussion--Rainsticks",
        "productProps": {
            "productBrand": "Meinl Percussion",
            "category": "Rainsticks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c649--Meinl_Percussion--Drum_Thrones",
        "productProps": {
            "productBrand": "Meinl Percussion",
            "category": "Drum Thrones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c707--MeldaProduction--Virtual_Guitar_and_Bass_Software",
        "productProps": {
            "productBrand": "MeldaProduction",
            "category": "Virtual Guitar & Bass Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c698--MeldaProduction--Utility_and_Other_Software",
        "productProps": {
            "productBrand": "MeldaProduction",
            "category": "Utility & Other Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Meris--Flanger_Pedals",
        "productProps": {
            "productBrand": "Meris",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c979--Mesa_Boogie--Acoustic_Guitar_Effects",
        "productProps": {
            "productBrand": "Mesa/Boogie",
            "category": "Acoustic Guitar Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Mesa_Boogie--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Mesa/Boogie",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Metrophones",
        "productProps": {
            "productBrand": "Metrophones",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Meyer",
        "productProps": {
            "productBrand": "Meyer",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--Meyer_Sound--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "Meyer Sound",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Microsoft",
        "productProps": {
            "productBrand": "Microsoft",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--MicW--Shotgun_Microphones",
        "productProps": {
            "productBrand": "MicW",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--Midas--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "Midas",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--MicW--Condenser_Microphones",
        "productProps": {
            "productBrand": "MicW",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c986--Midas--Stage_Snakes",
        "productProps": {
            "productBrand": "Midas",
            "category": "Stage Snakes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Midas--Preamps",
        "productProps": {
            "productBrand": "Midas",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c693--Middle_Atlantic_Products--Keyboard_Trays",
        "productProps": {
            "productBrand": "Middle Atlantic Products",
            "category": "Keyboard Trays"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--MIDI_Solutions--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "MIDI Solutions",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Millennia--Channel_Strips",
        "productProps": {
            "productBrand": "Millennia",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Millennia--Parametric_EQ",
        "productProps": {
            "productBrand": "Millennia",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/MiniMaxGray--minimax-mmx-2g-collapsible-stool-gray",
        "productProps": {
            "productBrand": "MiniMax",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Minnetonka",
        "productProps": {
            "productBrand": "Minnetonka",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Mission_Engineering_Inc--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Mission Engineering Inc",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c520--Mission_Engineering_Inc--Keyboard_Pedals",
        "productProps": {
            "productBrand": "Mission Engineering Inc",
            "category": "Keyboard Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Mission_Engineering_Inc--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Mission Engineering Inc",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c780--Mission_Engineering_Inc--Insert_Y_Cables",
        "productProps": {
            "productBrand": "Mission Engineering Inc",
            "category": "Insert / Y Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Modal_Electronics",
        "productProps": {
            "productBrand": "Modal Electronics",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1106--Mission_Engineering_Inc--Pedalboards",
        "productProps": {
            "productBrand": "Mission Engineering Inc",
            "category": "Pedalboards"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Mogami--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Mogami",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c862--Mogami--Balanced_Cables_TT_to_TT",
        "productProps": {
            "productBrand": "Mogami",
            "category": "Balanced Cables: TT to TT"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Mogami--Microphone_Cables",
        "productProps": {
            "productBrand": "Mogami",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Mogami--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Mogami",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c827--Mogami--Unbalanced_Cables_RCA_to_RCA",
        "productProps": {
            "productBrand": "Mogami",
            "category": "Unbalanced Cables: RCA to RCA"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CLIPBG--mogan-clip-bg-mogan-microphone-clip-beige-beige",
        "productProps": {
            "productBrand": "Mogan",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Mojave_Audio",
        "productProps": {
            "productBrand": "Mojave Audio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/MoP14MW--mollard-p14-p-series-conductors-baton-14-inch-maple-white",
        "productProps": {
            "productBrand": "Mollard",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1247--Mojo_Tone--Miscellaneous_Guitar_Parts",
        "productProps": {
            "productBrand": "Mojo Tone",
            "category": "Miscellaneous Guitar Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1054--MONO--Tablet_Accessories",
        "productProps": {
            "productBrand": "MONO",
            "category": "Tablet Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--MONO--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "MONO",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Monster--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Monster",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Monster--Microphone_Cables",
        "productProps": {
            "productBrand": "Monster",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Monster--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Monster",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c960--Monster--Power_Conditioners",
        "productProps": {
            "productBrand": "Monster",
            "category": "Power Conditioners"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Moog--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Moog",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1202--Moog--Eurorack_Accessories",
        "productProps": {
            "productBrand": "Moog",
            "category": "Eurorack Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c520--Moog--Keyboard_Pedals",
        "productProps": {
            "productBrand": "Moog",
            "category": "Keyboard Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c793--Moog--Reverbs_Effects",
        "productProps": {
            "productBrand": "Moog",
            "category": "Reverbs / Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c671--Morgan_Amps--Studio_Isolation_Tools",
        "productProps": {
            "productBrand": "Morgan Amps",
            "category": "Studio Isolation Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Morley--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Morley",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1219--MOTU--Ethernet_Audio_Interfaces",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Ethernet Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Motion_Sound--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Motion Sound",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1089--MOTU--Thunderbolt_Audio_Interfaces",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Thunderbolt Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--MOTU--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "MOTU",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--MOTU--Condenser_Microphones",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--MOTU--Headphones",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c265--MOTU--Digital_Mixers",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Digital Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--MOTU--Sequencers",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c417--MOTU--Studio_Monitor_Management",
        "productProps": {
            "productBrand": "MOTU",
            "category": "Studio Monitor Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/c417--Movek--Studio_Monitor_Management",
        "productProps": {
            "productBrand": "Movek",
            "category": "Studio Monitor Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Mullard",
        "productProps": {
            "productBrand": "Mullard",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/MusicLab",
        "productProps": {
            "productBrand": "MusicLab",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Multi_Platinum",
        "productProps": {
            "productBrand": "Multi Platinum",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/MultiTracks",
        "productProps": {
            "productBrand": "MultiTracks",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c741--Mutec--Misc_Digital_Converters",
        "productProps": {
            "productBrand": "Mutec",
            "category": "Misc Digital Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--MXR--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "MXR",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--MXR--Pedalboard_Cables",
        "productProps": {
            "productBrand": "MXR",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Nanlite",
        "productProps": {
            "productBrand": "Nanlite",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c660--Native_Instruments--DJ_Software",
        "productProps": {
            "productBrand": "Native Instruments",
            "category": "DJ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c914--Native_Instruments--Control_Surface_Accessories",
        "productProps": {
            "productBrand": "Native Instruments",
            "category": "Control Surface Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--Native_Instruments--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "Native Instruments",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1064--Native_Instruments--iPad_iPhone_DJ_Mixers_Controllers",
        "productProps": {
            "productBrand": "Native Instruments",
            "category": "iPad/iPhone DJ Mixers/Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--Native_Instruments--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "Native Instruments",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Noodle50GR--nazca-audio-noodles-eurorack-patch-cable-3.5mm-ts-male-to-3.5mm-ts-male-50cm-green",
        "productProps": {
            "productBrand": "Nazca Audio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1063--Nektar--iPad_iPhone_Keyboard_Controllers",
        "productProps": {
            "productBrand": "Nektar",
            "category": "iPad/iPhone Keyboard Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--Nektar--Sequencers",
        "productProps": {
            "productBrand": "Nektar",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c784--Nektar--Control_and_Interface_Combos",
        "productProps": {
            "productBrand": "Nektar",
            "category": "Control & Interface Combos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c520--Neo_Instruments--Keyboard_Pedals",
        "productProps": {
            "productBrand": "Neo Instruments",
            "category": "Keyboard Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Neoti",
        "productProps": {
            "productBrand": "Neoti",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Netron",
        "productProps": {
            "productBrand": "Netron",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/GS108v4--netgear-prosafe-gs108-ethernet-switch-8-port",
        "productProps": {
            "productBrand": "Netgear",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Neumann--Cable_Adapters",
        "productProps": {
            "productBrand": "Neumann",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Neumann--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Neumann",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--Neumann--Shotgun_Microphones",
        "productProps": {
            "productBrand": "Neumann",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Neuratron",
        "productProps": {
            "productBrand": "Neuratron",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Neural_DSP--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Neural DSP",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Neutrik--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Neutrik",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c741--Neutrik--Misc_Digital_Converters",
        "productProps": {
            "productBrand": "Neutrik",
            "category": "Misc Digital Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1219--Neve--Ethernet_Audio_Interfaces",
        "productProps": {
            "productBrand": "Neve",
            "category": "Ethernet Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Neve--Mastering",
        "productProps": {
            "productBrand": "Neve",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c741--Neve--Misc_Digital_Converters",
        "productProps": {
            "productBrand": "Neve",
            "category": "Misc Digital Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c441--Neve--Mixer_Stands",
        "productProps": {
            "productBrand": "Neve",
            "category": "Mixer Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Neyrinck",
        "productProps": {
            "productBrand": "Neyrinck",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/NINOSET-15--nino-rhythm-percussion-set-15-piece",
        "productProps": {
            "productBrand": "Nino",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/NPIH1--niveo-npi-h1-gigabit-poe-power-injector",
        "productProps": {
            "productBrand": "Niveo",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c511--Nord--Electric_Organs",
        "productProps": {
            "productBrand": "Nord",
            "category": "Electric Organs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Nord--MIDI_Controllers",
        "productProps": {
            "productBrand": "Nord",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c645--Nord--Electronic_Drum_Controllers_and_Multipads",
        "productProps": {
            "productBrand": "Nord",
            "category": "Electronic Drum Controllers & Multipads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c643--Novation--Drum_Machines_and_Samplers",
        "productProps": {
            "productBrand": "Novation",
            "category": "Drum Machines & Samplers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1063--Novation--iPad_iPhone_Keyboard_Controllers",
        "productProps": {
            "productBrand": "Novation",
            "category": "iPad/iPhone Keyboard Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--NUGEN_Audio--Mastering_Software",
        "productProps": {
            "productBrand": "NUGEN Audio",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--NUGEN_Audio--Effects_Plug_ins",
        "productProps": {
            "productBrand": "NUGEN Audio",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c660--Numark--DJ_Software",
        "productProps": {
            "productBrand": "Numark",
            "category": "DJ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/OBX8--oberheim-ob-x8-8-voice-polyphonic-analog-synthesizer",
        "productProps": {
            "productBrand": "Oberheim",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Obsidian",
        "productProps": {
            "productBrand": "Obsidian",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Offset",
        "productProps": {
            "productBrand": "Offset",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Omnicharge",
        "productProps": {
            "productBrand": "Omnicharge",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1054--On-Stage_Stands--Tablet_Accessories",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Tablet Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c762--On-Stage_Stands--Studio_Monitor_Stands",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Studio Monitor Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--On-Stage_Stands--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--On-Stage_Stands--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1154--On-Stage_Stands--Board_and_Gaffer_Tape",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Board & Gaffer Tape"
        }
    },
    {
        "url": "https://www.sweetwater.com/c817--On-Stage_Stands--Cable_Organizers",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Cable Organizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1209--On-Stage_Stands--DJ_Stands",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "DJ Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c962--On-Stage_Stands--Extension_Cords_and_Power_Strips",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Extension Cords & Power Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--On-Stage_Stands--Microphone_Cables",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c635--On-Stage_Stands--Pedal_and_Effects_Accessories",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Pedal & Effects Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1212--On-Stage_Stands--Miscellaneous_DJ_Accessories",
        "productProps": {
            "productBrand": "On-Stage Stands",
            "category": "Miscellaneous DJ Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Opus_One",
        "productProps": {
            "productBrand": "Opus One",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Orange--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Orange",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Origin_Effects--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Origin Effects",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1204--Ortofon--Turntables",
        "productProps": {
            "productBrand": "Ortofon",
            "category": "Turntables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c723--Output--Sound_Module_Software",
        "productProps": {
            "productBrand": "Output",
            "category": "Sound Module Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Ovation--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Ovation",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Overtone_Labs",
        "productProps": {
            "productBrand": "Overtone Labs",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Paganini",
        "productProps": {
            "productBrand": "Paganini",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/PACE",
        "productProps": {
            "productBrand": "PACE",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--PageFlip--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "PageFlip",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1369--Pageantry_Innovations--Miscellaneous_Marching_Accessories",
        "productProps": {
            "productBrand": "Pageantry Innovations",
            "category": "Miscellaneous Marching Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1054--PageFlip--Tablet_Accessories",
        "productProps": {
            "productBrand": "PageFlip",
            "category": "Tablet Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Paige",
        "productProps": {
            "productBrand": "Paige",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/pArtScience",
        "productProps": {
            "productBrand": "pArtScience",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1348--Paiste--Concert_Drum_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Paiste",
            "category": "Concert Drum Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CasterCupLC--paul-jansen-and-sons-lucite-caster-cups-each",
        "productProps": {
            "productBrand": "Paul Jansen & Sons",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1021--PDP--Effects_Cymbals",
        "productProps": {
            "productBrand": "PDP",
            "category": "Effects Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Logic9AMP--peachpit-press-logic-pro-9-advanced-music-production",
        "productProps": {
            "productBrand": "Peachpit Press",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/PkVclSt20--peak-pcs20-folding-cello-stand",
        "productProps": {
            "productBrand": "Peak",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1339--Pearl--Concert_Tambourines",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Concert Tambourines"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1343--Pearl--Miscellaneous_Concert_Percussion",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Miscellaneous Concert Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1348--Pearl--Concert_Drum_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Concert Drum Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1336--Pearl--Bells_and_Glockenspiels",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Bells & Glockenspiels"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1193--Pearl--Drum_Replacement_Parts",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Drum Replacement Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1357--Pearl--Marching_Drum_Stands",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Marching Drum Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1363--Pearl--Marching_Tenor_Drum_Cases_and_Bags",
        "productProps": {
            "productBrand": "Pearl",
            "category": "Marching Tenor Drum Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Pearl_Flutes",
        "productProps": {
            "productBrand": "Pearl Flutes",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c980--Peavey--Acoustic_Guitar_Amps",
        "productProps": {
            "productBrand": "Peavey",
            "category": "Acoustic Guitar Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Peavey--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Peavey",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1248--Peavey--Stands",
        "productProps": {
            "productBrand": "Peavey",
            "category": "Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1249--Pedaltrain--Cases",
        "productProps": {
            "productBrand": "Pedaltrain",
            "category": "Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/PV013--performance-plus-pv013-violin-pitch-pipe",
        "productProps": {
            "productBrand": "Performance Plus",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BAC500--petes-place-bac-500-fet-compressor",
        "productProps": {
            "productBrand": "Pete's Place",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--Peterson--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "Peterson",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c730--Peterson--Computer_Adapters_Extenders_and_Converters",
        "productProps": {
            "productBrand": "Peterson",
            "category": "Computer Adapters, Extenders & Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/PetzBsRn3--petz-bass-rosin-number-3-medium",
        "productProps": {
            "productBrand": "Petz",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c773--PG_Music--Notation_Software",
        "productProps": {
            "productBrand": "PG Music",
            "category": "Notation Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Phoenix_Audio--Parametric_EQ",
        "productProps": {
            "productBrand": "Phoenix Audio",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Phottix",
        "productProps": {
            "productBrand": "Phottix",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Pigtronix--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Pigtronix",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--Pioneer_DJ--Headphones",
        "productProps": {
            "productBrand": "Pioneer DJ",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1093--Pioneer_DJ--Lighting_Controllers_and_Interfaces",
        "productProps": {
            "productBrand": "Pioneer DJ",
            "category": "Lighting Controllers & Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c643--Pioneer_DJ--Drum_Machines_and_Samplers",
        "productProps": {
            "productBrand": "Pioneer DJ",
            "category": "Drum Machines & Samplers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1212--Pioneer_DJ--Miscellaneous_DJ_Accessories",
        "productProps": {
            "productBrand": "Pioneer DJ",
            "category": "Miscellaneous DJ Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Unify--pluginguru-unify-utility-plug-in-host",
        "productProps": {
            "productBrand": "PlugInGuru",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/PLAYdifferently",
        "productProps": {
            "productBrand": "PLAYdifferently",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Pittsburgh_Modular",
        "productProps": {
            "productBrand": "Pittsburgh Modular",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c406--PMC--Surround_and_Multi_Speaker_Systems",
        "productProps": {
            "productBrand": "PMC",
            "category": "Surround & Multi-Speaker Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Tracker--polyend-tracker-tabletop-sampler-wavetable-synthesizer-and-sequencer",
        "productProps": {
            "productBrand": "Polyend",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/POPS--pops-bass-rosin",
        "productProps": {
            "productBrand": "Pops'",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c579--Positive_Grid--Bass_Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Positive Grid",
            "category": "Bass Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Positive_Grid--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Positive Grid",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Positive_Grid--Chorus_Pedals",
        "productProps": {
            "productBrand": "Positive Grid",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Positive_Grid--Flanger_Pedals",
        "productProps": {
            "productBrand": "Positive Grid",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c447--PreSonus--PA_Subwoofers",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "PA Subwoofers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--PreSonus--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--PreSonus--MIDI_Controllers",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--PreSonus--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c986--PreSonus--Stage_Snakes",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "Stage Snakes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--PreSonus--Channel_Strips",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c645--PreSonus--Electronic_Drum_Controllers_and_Multipads",
        "productProps": {
            "productBrand": "PreSonus",
            "category": "Electronic Drum Controllers & Multipads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c673--Primacoustic--Complete_Room_Systems",
        "productProps": {
            "productBrand": "Primacoustic",
            "category": "Complete Room Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/SigColor3--primera-color-ink-for-signature-printer",
        "productProps": {
            "productBrand": "Primera",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Prism_Sound--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Prism Sound",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c546--Prism_Sound--Pro_Tools_HD_Interfaces",
        "productProps": {
            "productBrand": "Prism Sound",
            "category": "Pro Tools HD Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c810--Pro_Co--Balanced_Cables_XLR_to_XLR",
        "productProps": {
            "productBrand": "Pro Co",
            "category": "Balanced Cables: XLR to XLR"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Pro_Co--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Pro Co",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c396--Pro_Co--Microphone_Stands",
        "productProps": {
            "productBrand": "Pro Co",
            "category": "Microphone Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Pro_Co--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Pro Co",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Pro_Tapes__and__Specialties",
        "productProps": {
            "productBrand": "Pro Tapes & Specialties",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/ProHands",
        "productProps": {
            "productBrand": "ProHands",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1368--Prologix_Percussion--Marching_Practice_Pads",
        "productProps": {
            "productBrand": "Prologix Percussion",
            "category": "Marching Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1369--Promark--Miscellaneous_Marching_Accessories",
        "productProps": {
            "productBrand": "Promark",
            "category": "Miscellaneous Marching Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1332--Promark--Educational_Kits",
        "productProps": {
            "productBrand": "Promark",
            "category": "Educational Kits"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1021--Promark--Effects_Cymbals",
        "productProps": {
            "productBrand": "Promark",
            "category": "Effects Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c670--ProSoCoustic--Acoustic_Treatment_Diffusion",
        "productProps": {
            "productBrand": "ProSoCoustic",
            "category": "Acoustic Treatment: Diffusion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c673--ProSoCoustic--Complete_Room_Systems",
        "productProps": {
            "productBrand": "ProSoCoustic",
            "category": "Complete Room Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1279--Protec--Other_Woodwind_Cases_Covers_and_Bags",
        "productProps": {
            "productBrand": "Protec",
            "category": "Other Woodwind Cases, Covers, & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1220--Protec--Accessories_by_Category",
        "productProps": {
            "productBrand": "Protec",
            "category": "Accessories by Category"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Protec--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Protec",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--Provider_Series--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "Provider Series",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--Provider_Series--Microphone_Clips",
        "productProps": {
            "productBrand": "Provider Series",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--PRS--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "PRS",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--PRS--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "PRS",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1115--PRS--7_string_Guitars",
        "productProps": {
            "productBrand": "PRS",
            "category": "7-string Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--PRS--Patch_Cables",
        "productProps": {
            "productBrand": "PRS",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1109--PRS--Baritone_Guitars",
        "productProps": {
            "productBrand": "PRS",
            "category": "Baritone Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--PRS--Pedalboard_Cables",
        "productProps": {
            "productBrand": "PRS",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Pure_Tone",
        "productProps": {
            "productBrand": "Pure Tone",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/pureMix_net",
        "productProps": {
            "productBrand": "pureMix.net",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1041--Purple_Audio--Other_500_Series_Processors",
        "productProps": {
            "productBrand": "Purple Audio",
            "category": "Other 500 Series Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Pyware",
        "productProps": {
            "productBrand": "Pyware",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--QSC--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "QSC",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Que_Audio--Cable_Connectors",
        "productProps": {
            "productBrand": "Que Audio",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1086--Quilter_Labs--Bass_Amp_Covers",
        "productProps": {
            "productBrand": "Quilter Labs",
            "category": "Bass Amp Covers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/QwikTime--qwik-time-qt-3-metronome",
        "productProps": {
            "productBrand": "Qwik Time",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Quilter_Labs--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Quilter Labs",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Radial--Preamps",
        "productProps": {
            "productBrand": "Radial",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Radial--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Radial",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c520--Radial--Keyboard_Pedals",
        "productProps": {
            "productBrand": "Radial",
            "category": "Keyboard Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1117--Radial--Attenuators_and_Simulators",
        "productProps": {
            "productBrand": "Radial",
            "category": "Attenuators & Simulators"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Radial--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Radial",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1321--Radial--Orchestral_Accessories",
        "productProps": {
            "productBrand": "Radial",
            "category": "Orchestral Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--Radial--Summing_Mixers",
        "productProps": {
            "productBrand": "Radial",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1210--Rane--DJ_Cases_and_Gig_Bags",
        "productProps": {
            "productBrand": "Rane",
            "category": "DJ Cases & Gig Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c428--Rane--Misc_Mixer_Accessories",
        "productProps": {
            "productBrand": "Rane",
            "category": "Misc Mixer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1204--Rane--Turntables",
        "productProps": {
            "productBrand": "Rane",
            "category": "Turntables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--RapcoHorizon--Microphone_Cables",
        "productProps": {
            "productBrand": "RapcoHorizon",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--RapcoHorizon--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "RapcoHorizon",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--RapcoHorizon--Patch_Cables",
        "productProps": {
            "productBrand": "RapcoHorizon",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--RapcoHorizon--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "RapcoHorizon",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Ray_Ross",
        "productProps": {
            "productBrand": "Ray Ross",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1091--Realist--Bass_Pickups",
        "productProps": {
            "productBrand": "Realist",
            "category": "Bass Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/REAN",
        "productProps": {
            "productBrand": "REAN",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Red_Witch--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Red Witch",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/ReedGeek",
        "productProps": {
            "productBrand": "ReedGeek",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c408--Reftone--Studio_Monitor_Amplifiers",
        "productProps": {
            "productBrand": "Reftone",
            "category": "Studio Monitor Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/RekaTbnSL--reka-rk303-superslide-trombone-slide-lubricant-30ml",
        "productProps": {
            "productBrand": "REKA",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Relab_Development",
        "productProps": {
            "productBrand": "Relab Development",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1064--Reloop--iPad_iPhone_DJ_Mixers_Controllers",
        "productProps": {
            "productBrand": "Reloop",
            "category": "iPad/iPhone DJ Mixers/Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Reloop--MIDI_Controllers",
        "productProps": {
            "productBrand": "Reloop",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1192--Remo--World_Percussion_Cases_and_Bags",
        "productProps": {
            "productBrand": "Remo",
            "category": "World Percussion Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Spire--reveal-sound-spire-plug-in",
        "productProps": {
            "productBrand": "Reveal Sound",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Revelle",
        "productProps": {
            "productBrand": "Revelle",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Reverb_Foundry",
        "productProps": {
            "productBrand": "Reverb Foundry",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1193--Revolution--Drum_Replacement_Parts",
        "productProps": {
            "productBrand": "Revolution",
            "category": "Drum Replacement Parts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1124--Rhythm_Tech--Cowbells",
        "productProps": {
            "productBrand": "Rhythm Tech",
            "category": "Cowbells"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1165--Rhythm_Tech--Blocks",
        "productProps": {
            "productBrand": "Rhythm Tech",
            "category": "Blocks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Rickenbacker--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Rickenbacker",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1015--Rickenbacker--Left_handed_Bass_Guitars",
        "productProps": {
            "productBrand": "Rickenbacker",
            "category": "Left-handed Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c980--Rivera--Acoustic_Guitar_Amps",
        "productProps": {
            "productBrand": "Rivera",
            "category": "Acoustic Guitar Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/AuraliaCldEdu--rising-software-auralia-academic-1-year-cloud-license-per-student",
        "productProps": {
            "productBrand": "Rising Software",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c683--RME--FireWire_Audio_Interfaces",
        "productProps": {
            "productBrand": "RME",
            "category": "FireWire Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c953--RME--Synchronizers",
        "productProps": {
            "productBrand": "RME",
            "category": "Synchronizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--RME--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "RME",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1089--RME--Thunderbolt_Audio_Interfaces",
        "productProps": {
            "productBrand": "RME",
            "category": "Thunderbolt Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/BWClassicBoost--rmi-basswitch-classic-boost",
        "productProps": {
            "productBrand": "RMI",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1077--Road_Toad_Music--Ukulele_Strings",
        "productProps": {
            "productBrand": "Road Toad Music",
            "category": "Ukulele Strings"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Rob_Papen--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Rob Papen",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c689--Rock_N_Roller--Misc_Furniture_Accessories",
        "productProps": {
            "productBrand": "Rock N Roller",
            "category": "Misc Furniture Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Rocktron--MIDI_Controllers",
        "productProps": {
            "productBrand": "Rocktron",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1034--Rode--Earpads_Cables_and_Accessories",
        "productProps": {
            "productBrand": "Rode",
            "category": "Earpads, Cables & Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1175--Rode--Headset_Microphones",
        "productProps": {
            "productBrand": "Rode",
            "category": "Headset Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c803--Rode--Other_Data_Cables",
        "productProps": {
            "productBrand": "Rode",
            "category": "Other Data Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1063--Roger_Linn_Design--iPad_iPhone_Keyboard_Controllers",
        "productProps": {
            "productBrand": "Roger Linn Design",
            "category": "iPad/iPhone Keyboard Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1160--Roger_Linn_Design--Sequencers",
        "productProps": {
            "productBrand": "Roger Linn Design",
            "category": "Sequencers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1248--Rode--Stands",
        "productProps": {
            "productBrand": "Rode",
            "category": "Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c810--Roland--Balanced_Cables_XLR_to_XLR",
        "productProps": {
            "productBrand": "Roland",
            "category": "Balanced Cables: XLR to XLR"
        }
    },
    {
        "url": "https://www.sweetwater.com/c511--Roland--Electric_Organs",
        "productProps": {
            "productBrand": "Roland",
            "category": "Electric Organs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c649--Roland--Drum_Thrones",
        "productProps": {
            "productBrand": "Roland",
            "category": "Drum Thrones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1230--Roland--Bass_Drums",
        "productProps": {
            "productBrand": "Roland",
            "category": "Bass Drums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c965--Roland--Electric_Guitar_Pickups",
        "productProps": {
            "productBrand": "Roland",
            "category": "Electric Guitar Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1059--Roland--iPad_iPhone_MIDI_Interfaces",
        "productProps": {
            "productBrand": "Roland",
            "category": "iPad/iPhone MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Roland--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Roland",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--Roland--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "Roland",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Roland--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Roland",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Roland--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Roland",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--Roland--Patch_Cables",
        "productProps": {
            "productBrand": "Roland",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c441--Roland--Mixer_Stands",
        "productProps": {
            "productBrand": "Roland",
            "category": "Mixer Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Rolls--Cable_Adapters",
        "productProps": {
            "productBrand": "Rolls",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Rossum_Electro-Music",
        "productProps": {
            "productBrand": "Rossum Electro-Music",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c896--Rolls--Signal_Processing_Accessories",
        "productProps": {
            "productBrand": "Rolls",
            "category": "Signal Processing Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Rovner--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Rovner",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c106--Royer--Dynamic_Microphones",
        "productProps": {
            "productBrand": "Royer",
            "category": "Dynamic Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c396--Royer--Microphone_Stands",
        "productProps": {
            "productBrand": "Royer",
            "category": "Microphone Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Rupert_Neve_Designs--Mastering",
        "productProps": {
            "productBrand": "Rupert Neve Designs",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Rupert_Neve_Designs--Parametric_EQ",
        "productProps": {
            "productBrand": "Rupert Neve Designs",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c796--Rupert_Neve_Designs--AD_DA_Converters",
        "productProps": {
            "productBrand": "Rupert Neve Designs",
            "category": "AD/DA Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c685--Rupert_Neve_Designs--Studio_Equipment_Racks",
        "productProps": {
            "productBrand": "Rupert Neve Designs",
            "category": "Studio Equipment Racks"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/S_Hoop",
        "productProps": {
            "productBrand": "S Hoop",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1369--Sabian--Miscellaneous_Marching_Accessories",
        "productProps": {
            "productBrand": "Sabian",
            "category": "Miscellaneous Marching Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c394--Sabra-Som--Microphone_Pop_Filters",
        "productProps": {
            "productBrand": "Sabra-Som",
            "category": "Microphone Pop Filters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c408--Samson--Studio_Monitor_Amplifiers",
        "productProps": {
            "productBrand": "Samson",
            "category": "Studio Monitor Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1060--Samson--iPad_iPhone_Microphones",
        "productProps": {
            "productBrand": "Samson",
            "category": "iPad/iPhone Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1063--Samson--iPad_iPhone_Keyboard_Controllers",
        "productProps": {
            "productBrand": "Samson",
            "category": "iPad/iPhone Keyboard Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c441--Samson--Mixer_Stands",
        "productProps": {
            "productBrand": "Samson",
            "category": "Mixer Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/MZ-N6E250BW--samsung-860-evo-250gb-solid-state-drive-m2-2280-internal-sata",
        "productProps": {
            "productBrand": "Samsung",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/SanDisk_Professional",
        "productProps": {
            "productBrand": "SanDisk Professional",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--Saramonic--Shotgun_Microphones",
        "productProps": {
            "productBrand": "Saramonic",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c803--Saramonic--Other_Data_Cables",
        "productProps": {
            "productBrand": "Saramonic",
            "category": "Other Data Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1176--Saramonic--Lavalier_Microphones",
        "productProps": {
            "productBrand": "Saramonic",
            "category": "Lavalier Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Saramonic--Condenser_Microphones",
        "productProps": {
            "productBrand": "Saramonic",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1224--Saramonic--USB_Cables",
        "productProps": {
            "productBrand": "Saramonic",
            "category": "USB Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Savarez_S_A_",
        "productProps": {
            "productBrand": "Savarez S.A.",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/SAXMUTE",
        "productProps": {
            "productBrand": "SAXMUTE",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Schaller",
        "productProps": {
            "productBrand": "Schaller",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1116--Schecter--8_string_Guitars",
        "productProps": {
            "productBrand": "Schecter",
            "category": "8-string Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1140--Schlagwerk--Miscellaneous_Percussion",
        "productProps": {
            "productBrand": "Schlagwerk",
            "category": "Miscellaneous Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--Schoeps--Shotgun_Microphones",
        "productProps": {
            "productBrand": "Schoeps",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c671--sE_Electronics--Studio_Isolation_Tools",
        "productProps": {
            "productBrand": "sE Electronics",
            "category": "Studio Isolation Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/c981--sE_Electronics--USB_Microphones",
        "productProps": {
            "productBrand": "sE Electronics",
            "category": "USB Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c380--sE_Electronics--Microphone_Shockmounts",
        "productProps": {
            "productBrand": "sE Electronics",
            "category": "Microphone Shockmounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1103--sE_Electronics--Microphone_Clips",
        "productProps": {
            "productBrand": "sE Electronics",
            "category": "Microphone Clips"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Seagate",
        "productProps": {
            "productBrand": "Seagate",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c934--Seagull_Guitars--Acoustic_Guitar_Gig_Bags",
        "productProps": {
            "productBrand": "Seagull Guitars",
            "category": "Acoustic Guitar Gig Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Seagull_Guitars--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Seagull Guitars",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Seagull_Guitars--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Seagull Guitars",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1053--Seagull_Guitars--Ukuleles",
        "productProps": {
            "productBrand": "Seagull Guitars",
            "category": "Ukuleles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c817--Secure_Cord--Cable_Organizers",
        "productProps": {
            "productBrand": "Secure Cord",
            "category": "Cable Organizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1140--Sela--Miscellaneous_Percussion",
        "productProps": {
            "productBrand": "Sela",
            "category": "Miscellaneous Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1220--Selmer--Accessories_by_Category",
        "productProps": {
            "productBrand": "Selmer",
            "category": "Accessories by Category"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1208--Sennheiser--DJ_Headphones",
        "productProps": {
            "productBrand": "Sennheiser",
            "category": "DJ Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--Sennheiser--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "Sennheiser",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1006--Sennheiser--Portable_Recorders",
        "productProps": {
            "productBrand": "Sennheiser",
            "category": "Portable Recorders"
        }
    },
    {
        "url": "https://www.sweetwater.com/c981--Sennheiser--USB_Microphones",
        "productProps": {
            "productBrand": "Sennheiser",
            "category": "USB Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--Sensory_Percussion--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "Sensory Percussion",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c699--Serato--DAW_Software",
        "productProps": {
            "productBrand": "Serato",
            "category": "DAW Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c697--Serato--Video_Editing_Software",
        "productProps": {
            "productBrand": "Serato",
            "category": "Video Editing Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1246--Seymour_Duncan--Guitar_Prewired_Kits",
        "productProps": {
            "productBrand": "Seymour Duncan",
            "category": "Guitar Prewired Kits"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Shadow_Hills_Industries--Mastering",
        "productProps": {
            "productBrand": "Shadow Hills Industries",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c417--Shadow_Hills_Industries--Studio_Monitor_Management",
        "productProps": {
            "productBrand": "Shadow Hills Industries",
            "category": "Studio Monitor Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--Shadow_Hills_Industries--Summing_Mixers",
        "productProps": {
            "productBrand": "Shadow Hills Industries",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Sherman_s",
        "productProps": {
            "productBrand": "Sherman's",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c811--Shure--BNC_Cables",
        "productProps": {
            "productBrand": "Shure",
            "category": "BNC Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1208--Shure--DJ_Headphones",
        "productProps": {
            "productBrand": "Shure",
            "category": "DJ Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c998--Shure--Shotgun_Microphones",
        "productProps": {
            "productBrand": "Shure",
            "category": "Shotgun Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Shure--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Shure",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Shure--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Shure",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--Shure--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "Shure",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CB4--simon-systems-cb4-4-ch-headphone-cue-box",
        "productProps": {
            "productBrand": "Simon Systems",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Singular_Sound--MIDI_Controllers",
        "productProps": {
            "productBrand": "Singular Sound",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1278--SKB--Flute_Cases_Covers_and_Bags",
        "productProps": {
            "productBrand": "SKB",
            "category": "Flute Cases, Covers, & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c963--SKB--Handcarts",
        "productProps": {
            "productBrand": "SKB",
            "category": "Handcarts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c488--SKB--Rack_Rails",
        "productProps": {
            "productBrand": "SKB",
            "category": "Rack Rails"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1192--SKB--World_Percussion_Cases_and_Bags",
        "productProps": {
            "productBrand": "SKB",
            "category": "World Percussion Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c704--Slate_Digital--Dynamics_Plug_ins",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Dynamics Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c484--SKB--Rack_Screws",
        "productProps": {
            "productBrand": "SKB",
            "category": "Rack Screws"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1306--SKB--Trombone_Cases_Covers_and_Bags",
        "productProps": {
            "productBrand": "SKB",
            "category": "Trombone Cases, Covers, & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Slate_Digital--Condenser_Microphones",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Slate_Digital--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c701--Slate_Digital--Pitch_and_Harmony_Plug_ins",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Pitch & Harmony Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--Slate_Digital--Plug_in_Bundles",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--Slate_Digital--Effects_Plug_ins",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--Slate_Digital--Mastering_Software",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c938--Snark--Guitar_Tuners",
        "productProps": {
            "productBrand": "Snark",
            "category": "Guitar Tuners"
        }
    },
    {
        "url": "https://www.sweetwater.com/c705--Slate_Digital--Reverb_and_Delay_Plug_ins",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Reverb & Delay Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Slate_Digital--Preamps",
        "productProps": {
            "productBrand": "Slate Digital",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Snark--Power_Supplies",
        "productProps": {
            "productBrand": "Snark",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/SlideOMix--slide-o-mix-337-trombone-lubricant-system",
        "productProps": {
            "productBrand": "Slide-O-Mix",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Snark--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Snark",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Softube--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Softube",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Softone",
        "productProps": {
            "productBrand": "Softone",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c635--Snark--Pedal_and_Effects_Accessories",
        "productProps": {
            "productBrand": "Snark",
            "category": "Pedal & Effects Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/search.php?s=Snoppa&loopstop=1",
        "productProps": {
            "productBrand": "Snoppa",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c784--Softube--Control_and_Interface_Combos",
        "productProps": {
            "productBrand": "Softube",
            "category": "Control & Interface Combos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Softube--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Softube",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c264--Solid_State_Logic--Analog_Mixers",
        "productProps": {
            "productBrand": "Solid State Logic",
            "category": "Analog Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Solid_State_Logic--Channel_Strips",
        "productProps": {
            "productBrand": "Solid State Logic",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--Solid_State_Logic--Plug_in_Bundles",
        "productProps": {
            "productBrand": "Solid State Logic",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1071--Solid_State_Logic--Summing_Mixers",
        "productProps": {
            "productBrand": "Solid State Logic",
            "category": "Summing Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Sonarworks--Condenser_Microphones",
        "productProps": {
            "productBrand": "Sonarworks",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Solomon",
        "productProps": {
            "productBrand": "Solomon",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c762--Sound_Anchors--Studio_Monitor_Stands",
        "productProps": {
            "productBrand": "Sound Anchors",
            "category": "Studio Monitor Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1008--Sound_Devices--Digital_Multitrack_Recorders",
        "productProps": {
            "productBrand": "Sound Devices",
            "category": "Digital Multitrack Recorders"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1235--Sound_Devices--Batteries",
        "productProps": {
            "productBrand": "Sound Devices",
            "category": "Batteries"
        }
    },
    {
        "url": "https://www.sweetwater.com/c938--Soundbrenner--Guitar_Tuners",
        "productProps": {
            "productBrand": "Soundbrenner",
            "category": "Guitar Tuners"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--Soundbrenner--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "Soundbrenner",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--Soundcraft--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "Soundcraft",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/SoundSwitchM--soundswitch-soundswitch-micro-dmx-interface-2-universe-1024-ch",
        "productProps": {
            "productBrand": "SoundSwitch",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c432--Soundcraft--Mixer_Lamps_and_Lights",
        "productProps": {
            "productBrand": "Soundcraft",
            "category": "Mixer Lamps & Lights"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Source_Audio--MIDI_Controllers",
        "productProps": {
            "productBrand": "Source Audio",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--Source_Audio--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "Source Audio",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Source_Audio--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Source Audio",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Sovtek",
        "productProps": {
            "productBrand": "Sovtek",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Spacefiller",
        "productProps": {
            "productBrand": "Spacefiller",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c723--Spectrasonics--Sound_Module_Software",
        "productProps": {
            "productBrand": "Spectrasonics",
            "category": "Sound Module Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Spectrasonics--Synthesizers",
        "productProps": {
            "productBrand": "Spectrasonics",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Sperzel",
        "productProps": {
            "productBrand": "Sperzel",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c796--SPL--AD_DA_Converters",
        "productProps": {
            "productBrand": "SPL",
            "category": "AD/DA Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c741--SPL--Misc_Digital_Converters",
        "productProps": {
            "productBrand": "SPL",
            "category": "Misc Digital Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--SPL--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "SPL",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1041--SPL--Other_500_Series_Processors",
        "productProps": {
            "productBrand": "SPL",
            "category": "Other 500 Series Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Squier--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Squier",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c989--Squier--Fretless_Bass_Guitars",
        "productProps": {
            "productBrand": "Squier",
            "category": "Fretless Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1015--Squier--Left_handed_Bass_Guitars",
        "productProps": {
            "productBrand": "Squier",
            "category": "Left-handed Bass Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/SHP101--sshhmute-practice-mute-for-trumpet-and-cornet",
        "productProps": {
            "productBrand": "Sshhmute",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Stageline",
        "productProps": {
            "productBrand": "Stageline",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--StageMASTER--Microphone_Cables",
        "productProps": {
            "productBrand": "StageMASTER",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/STANDOUT91--stand-outs-m91-standout-music-stand-extension",
        "productProps": {
            "productBrand": "Stand Outs",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1222--StageMASTER--Patch_Cables",
        "productProps": {
            "productBrand": "StageMASTER",
            "category": "Patch Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Standtastic",
        "productProps": {
            "productBrand": "Standtastic",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Startech--Power_Supplies",
        "productProps": {
            "productBrand": "Startech",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--Steinberg--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "Steinberg",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Sterisol--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Sterisol",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1312--Sterisol--Brass_Mouthpiece_Accessories",
        "productProps": {
            "productBrand": "Sterisol",
            "category": "Brass Mouthpiece Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c549--Steven_Slate_Audio--Pro_Tools_Control_Surfaces",
        "productProps": {
            "productBrand": "Steven Slate Audio",
            "category": "Pro Tools Control Surfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Steven_Slate_Drums",
        "productProps": {
            "productBrand": "Steven Slate Drums",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1115--Strandberg--7_string_Guitars",
        "productProps": {
            "productBrand": "Strandberg",
            "category": "7-string Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/PA50B--stewart-audio-pa-50b",
        "productProps": {
            "productBrand": "Stewart Audio",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1116--Strandberg--8_string_Guitars",
        "productProps": {
            "productBrand": "Strandberg",
            "category": "8-string Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Strymon--Flanger_Pedals",
        "productProps": {
            "productBrand": "Strymon",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Strymon--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Strymon",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Strymon--Phaser_Pedals",
        "productProps": {
            "productBrand": "Strymon",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/Drumtacs5--studio-lab-percussion-drumtacs-5-pack",
        "productProps": {
            "productBrand": "Studio Lab Percussion",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Subwoofer_Pros",
        "productProps": {
            "productBrand": "Subwoofer Pros",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c990--Sugar_Bytes--Looping_Software",
        "productProps": {
            "productBrand": "Sugar Bytes",
            "category": "Looping Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Sugar_Bytes--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Sugar Bytes",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c848--Sugar_Bytes--Sampling_Software",
        "productProps": {
            "productBrand": "Sugar Bytes",
            "category": "Sampling Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Summit_Audio--Channel_Strips",
        "productProps": {
            "productBrand": "Summit Audio",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/CA300--superscope-ca300",
        "productProps": {
            "productBrand": "Superscope",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c736--SurgeX--Battery_Backup_Solutions",
        "productProps": {
            "productBrand": "SurgeX",
            "category": "Battery Backup Solutions"
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--Switchcraft--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "Switchcraft",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/c701--Synchro_Arts--Pitch_and_Harmony_Plug_ins",
        "productProps": {
            "productBrand": "Synchro Arts",
            "category": "Pitch & Harmony Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Switchcraft--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Switchcraft",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c634--Synergy--Rackmount_Guitar_Effects",
        "productProps": {
            "productBrand": "Synergy",
            "category": "Rackmount Guitar Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Synthogy",
        "productProps": {
            "productBrand": "Synthogy",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1106--T-Rex--Pedalboards",
        "productProps": {
            "productBrand": "T-Rex",
            "category": "Pedalboards"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Takamine--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Takamine",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Takamine--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Takamine",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1185--Tama--Cajon_Accessories",
        "productProps": {
            "productBrand": "Tama",
            "category": "Cajon Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1233--Tama--Specialty_Drums",
        "productProps": {
            "productBrand": "Tama",
            "category": "Specialty Drums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c899--Tama--Metronomes",
        "productProps": {
            "productBrand": "Tama",
            "category": "Metronomes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1355--Tama--Snare_Drum_Carriers",
        "productProps": {
            "productBrand": "Tama",
            "category": "Snare Drum Carriers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1356--Tama--Tenor_Drum_Carriers",
        "productProps": {
            "productBrand": "Tama",
            "category": "Tenor Drum Carriers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1329--Tama--Concert_Bass_Drums",
        "productProps": {
            "productBrand": "Tama",
            "category": "Concert Bass Drums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1359--Tama--Marching_Field_Percussion",
        "productProps": {
            "productBrand": "Tama",
            "category": "Marching Field Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1369--Tama--Miscellaneous_Marching_Accessories",
        "productProps": {
            "productBrand": "Tama",
            "category": "Miscellaneous Marching Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c784--TASCAM--Control_and_Interface_Combos",
        "productProps": {
            "productBrand": "TASCAM",
            "category": "Control & Interface Combos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--TASCAM--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "TASCAM",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Taylor--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Taylor",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Taylor--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Taylor",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Taylor--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Taylor",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1152--Taylor--Guitar_Humidifiers",
        "productProps": {
            "productBrand": "Taylor",
            "category": "Guitar Humidifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--TC_Electronic--Direct_Boxes",
        "productProps": {
            "productBrand": "TC Electronic",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c435--TC_Electronic--Mixer_Meter_Bridges",
        "productProps": {
            "productBrand": "TC Electronic",
            "category": "Mixer Meter Bridges"
        }
    },
    {
        "url": "https://www.sweetwater.com/c635--TC_Electronic--Pedal_and_Effects_Accessories",
        "productProps": {
            "productBrand": "TC Electronic",
            "category": "Pedal & Effects Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c695--TC-Helicon--USB_Audio_Interfaces",
        "productProps": {
            "productBrand": "TC-Helicon",
            "category": "USB Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c978--TC-Helicon--Looper_Pedals",
        "productProps": {
            "productBrand": "TC-Helicon",
            "category": "Looper Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c677--TC-Helicon--MIDI_Interfaces",
        "productProps": {
            "productBrand": "TC-Helicon",
            "category": "MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--TC-Helicon--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "TC-Helicon",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c442--TC-Helicon--Portable_PA_Systems",
        "productProps": {
            "productBrand": "TC-Helicon",
            "category": "Portable PA Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--TC-Helicon--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "TC-Helicon",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Tech_21--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Tech 21",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Tech_21--MIDI_Controllers",
        "productProps": {
            "productBrand": "Tech 21",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Technics",
        "productProps": {
            "productBrand": "Technics",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c810--Telefunken--Balanced_Cables_XLR_to_XLR",
        "productProps": {
            "productBrand": "Telefunken",
            "category": "Balanced Cables: XLR to XLR"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Telex",
        "productProps": {
            "productBrand": "Telex",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Temple_Audio--Direct_Boxes",
        "productProps": {
            "productBrand": "Temple Audio",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/The_Rock_Slide",
        "productProps": {
            "productBrand": "The Rock Slide",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Temple_Audio--Cable_Connectors",
        "productProps": {
            "productBrand": "Temple Audio",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Things_4_Strings",
        "productProps": {
            "productBrand": "Things 4 Strings",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/TightScrew",
        "productProps": {
            "productBrand": "TightScrew",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1080--Thomastik-Infeld--12_string_Guitar_Strings",
        "productProps": {
            "productBrand": "Thomastik-Infeld",
            "category": "12-string Guitar Strings"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/THUM-EEZ",
        "productProps": {
            "productBrand": "THUM-EEZ",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1345--Timber_Drum_Company--Concert_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Timber Drum Company",
            "category": "Concert Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1338--Timber_Drum_Company--Concert_Blocks",
        "productProps": {
            "productBrand": "Timber Drum Company",
            "category": "Concert Blocks"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--Timber_Drum_Company--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Timber Drum Company",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c698--Timbral_Research--Utility_and_Other_Software",
        "productProps": {
            "productBrand": "Timbral Research",
            "category": "Utility & Other Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Tiptop_Audio--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Tiptop Audio",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Tiptop_Audio--Power_Supplies",
        "productProps": {
            "productBrand": "Tiptop Audio",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/TNR_Products",
        "productProps": {
            "productBrand": "TNR Products",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Tonareli",
        "productProps": {
            "productBrand": "Tonareli",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/FingerEase--tone-finger-ease-string-lubricant-spray",
        "productProps": {
            "productBrand": "Tone",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Tom_Crown",
        "productProps": {
            "productBrand": "Tom Crown",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c979--ToneWoodAmp--Acoustic_Guitar_Effects",
        "productProps": {
            "productBrand": "ToneWoodAmp",
            "category": "Acoustic Guitar Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--Toontrack--Mastering_Software",
        "productProps": {
            "productBrand": "Toontrack",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1089--Townsend_Labs--Thunderbolt_Audio_Interfaces",
        "productProps": {
            "productBrand": "Townsend Labs",
            "category": "Thunderbolt Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/TLSG1005P--tp-link-5-port-gigabit-desktop-switch-with-4-port-poe",
        "productProps": {
            "productBrand": "TP Link",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Tracktion--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Tracktion",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--Tracktion--Mastering_Software",
        "productProps": {
            "productBrand": "Tracktion",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c848--Tracktion--Sampling_Software",
        "productProps": {
            "productBrand": "Tracktion",
            "category": "Sampling Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Traveler_Guitar--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Traveler Guitar",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c988--Traveler_Guitar--Left_handed_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Traveler Guitar",
            "category": "Left-handed Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c595--Traveler_Guitar--Left_handed_Electric_Guitars",
        "productProps": {
            "productBrand": "Traveler Guitar",
            "category": "Left-handed Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1342--Treeworks--Concert_Chimes",
        "productProps": {
            "productBrand": "Treeworks",
            "category": "Concert Chimes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1340--Treeworks--Concert_Triangles",
        "productProps": {
            "productBrand": "Treeworks",
            "category": "Concert Triangles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Trick_Drums--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Trick Drums",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Trident_Audio_Developments--Preamps",
        "productProps": {
            "productBrand": "Trident Audio Developments",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1235--Truetone--Batteries",
        "productProps": {
            "productBrand": "Truetone",
            "category": "Batteries"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/TrumCor",
        "productProps": {
            "productBrand": "TrumCor",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1101--TRUSST--Lighting_Cables_and_Accessories",
        "productProps": {
            "productBrand": "TRUSST",
            "category": "Lighting Cables & Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Tube-Tech--Channel_Strips",
        "productProps": {
            "productBrand": "Tube-Tech",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Tung-Sol",
        "productProps": {
            "productBrand": "Tung-Sol",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--Tube-Tech--Mastering",
        "productProps": {
            "productBrand": "Tube-Tech",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Two_Notes--Direct_Boxes",
        "productProps": {
            "productBrand": "Two Notes",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Ubiquiti_Networks",
        "productProps": {
            "productBrand": "Ubiquiti Networks",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c990--UJAM--Looping_Software",
        "productProps": {
            "productBrand": "UJAM",
            "category": "Looping Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--UJAM--Plug_in_Bundles",
        "productProps": {
            "productBrand": "UJAM",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c698--UJAM--Utility_and_Other_Software",
        "productProps": {
            "productBrand": "UJAM",
            "category": "Utility & Other Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c441--Ultimate_Support--Mixer_Stands",
        "productProps": {
            "productBrand": "Ultimate Support",
            "category": "Mixer Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1209--Ultimate_Support--DJ_Stands",
        "productProps": {
            "productBrand": "Ultimate Support",
            "category": "DJ Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Ultimate_Support--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Ultimate Support",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/United_Studio_Technologies",
        "productProps": {
            "productBrand": "United Studio Technologies",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Universal_Audio--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Universal Audio",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Universal_Audio--Channel_Strips",
        "productProps": {
            "productBrand": "Universal Audio",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--Universal_Audio--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "Universal Audio",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/c975--Universal_Audio--Flanger_Pedals",
        "productProps": {
            "productBrand": "Universal Audio",
            "category": "Flanger Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Universal_Audio--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Universal Audio",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--V-Moda--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "V-Moda",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1208--V-Moda--DJ_Headphones",
        "productProps": {
            "productBrand": "V-Moda",
            "category": "DJ Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1311--Vandoren--Brass_Accessories",
        "productProps": {
            "productBrand": "Vandoren",
            "category": "Brass Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--Vater--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Vater",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c707--Vengeance-Sound--Virtual_Guitar_and_Bass_Software",
        "productProps": {
            "productBrand": "Vengeance-Sound",
            "category": "Virtual Guitar & Bass Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Vertex_Effects--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Vertex_Effects--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Vertex_Effects--Cable_Adapters",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Vertex_Effects--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Vertex_Effects--Power_Supplies",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c817--Vertex_Effects--Cable_Organizers",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Cable Organizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c780--Vertex_Effects--Insert_Y_Cables",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "Insert / Y Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Vibes",
        "productProps": {
            "productBrand": "Vibes",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c853--Vertex_Effects--MIDI_Cables",
        "productProps": {
            "productBrand": "Vertex Effects",
            "category": "MIDI Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Vibramate",
        "productProps": {
            "productBrand": "Vibramate",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c646--Vic_Firth--Drum_Practice_Pads",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--Vic_Firth--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1028--Vic_Firth--Drumsticks_Mallets_and_Brushes",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drumsticks, Mallets & Brushes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1345--Vic_Firth--Concert_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Concert Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1174--Vic_Firth--Hearing_Protection",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Hearing Protection"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1162--Vic_Firth--Clothing_and_Merch",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Clothing & Merch"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1198--Vic_Firth--Drum_Gloves",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Gloves"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1194--Vic_Firth--Drum_Mutes_and_Dampening_Devices",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Mutes & Dampening Devices"
        }
    },
    {
        "url": "https://www.sweetwater.com/c651--Vic_Firth--Drum_Pedals_and_Beaters",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Pedals & Beaters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Vic_Firth--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1195--Vic_Firth--Drum_Keys_and_Tuning_Tools",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Keys & Tuning Tools"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1185--Vic_Firth--Cajon_Accessories",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Cajon Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1197--Vic_Firth--Drum_Rugs",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drum Rugs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--Vic_Firth--Headphones",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1368--Vic_Firth--Marching_Practice_Pads",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Marching Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1191--Vic_Firth--Drumstick_Bags",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Drumstick Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1369--Vic_Firth--Miscellaneous_Marching_Accessories",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Miscellaneous Marching Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c641--Vic_Firth--Miscellaneous_Drum_Accessories",
        "productProps": {
            "productBrand": "Vic Firth",
            "category": "Miscellaneous Drum Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Victory_Amplification--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Victory Amplification",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Victory_Amplification--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Victory Amplification",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Victory_Amplification--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Victory Amplification",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1291--Victory_Musical_Instruments--Flugelhorns",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Flugelhorns"
        }
    },
    {
        "url": "https://www.sweetwater.com/c623--Victory_Amplification--Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Victory Amplification",
            "category": "Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1301--Victory_Musical_Instruments--Trumpets",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Trumpets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1264--Victory_Musical_Instruments--Flutes_and_Piccolos",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Flutes & Piccolos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1259--Victory_Musical_Instruments--Alto_Saxophones",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Alto Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1260--Victory_Musical_Instruments--Tenor_Saxophones",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Tenor Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1263--Victory_Musical_Instruments--Clarinets",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Clarinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1261--Victory_Musical_Instruments--Baritone_and_Bass_Saxophones",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Baritone & Bass Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Vienna_Symphonic_Library--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1300--Victory_Musical_Instruments--Trombones",
        "productProps": {
            "productBrand": "Victory Musical Instruments",
            "category": "Trombones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c728--Vienna_Symphonic_Library--Virtual_Orchestra_Software",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Virtual Orchestra Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c705--Vienna_Symphonic_Library--Reverb_and_Delay_Plug_ins",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Reverb & Delay Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--Vienna_Symphonic_Library--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Viewsonic",
        "productProps": {
            "productBrand": "Viewsonic",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--Vienna_Symphonic_Library--Plug_in_Bundles",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Vienna_Symphonic_Library--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c707--Vienna_Symphonic_Library--Virtual_Guitar_and_Bass_Software",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Virtual Guitar & Bass Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--Vienna_Symphonic_Library--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "Vienna Symphonic Library",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c665--Vintech--Channel_Strips",
        "productProps": {
            "productBrand": "Vintech",
            "category": "Channel Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Vintech--Power_Supplies",
        "productProps": {
            "productBrand": "Vintech",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Vintech--Preamps",
        "productProps": {
            "productBrand": "Vintech",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1037--Vintech--500_Series_Preamps",
        "productProps": {
            "productBrand": "Vintech",
            "category": "500 Series Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c728--Vir2--Virtual_Orchestra_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Virtual Orchestra Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c707--Vir2--Virtual_Guitar_and_Bass_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Virtual Guitar & Bass Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c848--Vir2--Sampling_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Sampling Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c990--Vir2--Looping_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Looping Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c723--Vir2--Sound_Module_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Sound Module Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--Vir2--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c635--Voodoo_Lab--Pedal_and_Effects_Accessories",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Pedal & Effects Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/7214PC--vito-7214pc-student-bb-clarinet-with-nickel-plated-keys",
        "productProps": {
            "productBrand": "Vito",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--Vir2--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "Vir2",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Vocal_Eze",
        "productProps": {
            "productBrand": "Vocal Eze",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1106--Voodoo_Lab--Pedalboards",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Pedalboards"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Voodoo_Lab--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Voodoo_Lab--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Voodoo_Lab--Power_Supplies",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Voodoo_Lab--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c817--Voodoo_Lab--Cable_Organizers",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Cable Organizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c771--Voodoo_Lab--Miscellaneous_Guitar_Amp_Accessories",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Miscellaneous Guitar Amp Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c513--Voodoo_Lab--MIDI_Controllers",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "MIDI Controllers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c634--Voodoo_Lab--Rackmount_Guitar_Effects",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Rackmount Guitar Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Voodoo_Lab--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Voodoo Lab",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Vox--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c623--Vox--Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Vox--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Vox--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c627--Vox--Guitar_Amp_Covers",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Amp Covers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c579--Vox--Bass_Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Vox",
            "category": "Bass Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1162--Vox--Clothing_and_Merch",
        "productProps": {
            "productBrand": "Vox",
            "category": "Clothing & Merch"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Vox--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Vox",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Vox--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Vox",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c511--Vox--Electric_Organs",
        "productProps": {
            "productBrand": "Vox",
            "category": "Electric Organs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Vox--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Vox",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c527--Vox--Keyboard_Gig_Bags",
        "productProps": {
            "productBrand": "Vox",
            "category": "Keyboard Gig Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c412--Vox--Headphones",
        "productProps": {
            "productBrand": "Vox",
            "category": "Headphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c629--Vox--Guitar_Amp_Pedals",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Amp Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Vox--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Vox",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Vox--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Vox",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Vox--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Vox",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c577--Vox--Bass_Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Vox",
            "category": "Bass Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c578--Vox--Bass_Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Vox",
            "category": "Bass Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c980--Vox--Acoustic_Guitar_Amps",
        "productProps": {
            "productBrand": "Vox",
            "category": "Acoustic Guitar Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c932--Vox--Guitar_Straps",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Straps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Waldorf--Synthesizers",
        "productProps": {
            "productBrand": "Waldorf",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/W_E__Hill__and__Sons",
        "productProps": {
            "productBrand": "W.E. Hill & Sons",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--Waldorf--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "Waldorf",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c525--Vox--Keyboard_Amplifiers",
        "productProps": {
            "productBrand": "Vox",
            "category": "Keyboard Amplifiers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c938--Vox--Guitar_Tuners",
        "productProps": {
            "productBrand": "Vox",
            "category": "Guitar Tuners"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Waldorf--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Waldorf",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Walrus_Audio--Chorus_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Walrus_Audio--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Walrus_Audio--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c701--Waldorf--Pitch_and_Harmony_Plug_ins",
        "productProps": {
            "productBrand": "Waldorf",
            "category": "Pitch & Harmony Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Walrus_Audio--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Walrus_Audio--Direct_Boxes",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c973--Walrus_Audio--Tremolo_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Tremolo Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Walrus_Audio--Power_Supplies",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Walrus_Audio--Phaser_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Walrus_Audio--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Walrus_Productions",
        "productProps": {
            "productBrand": "Walrus Productions",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c932--Walrus_Audio--Guitar_Straps",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Guitar Straps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Walrus_Audio--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c972--Walrus_Audio--Harmony_Pedals_and_Processors",
        "productProps": {
            "productBrand": "Walrus Audio",
            "category": "Harmony Pedals & Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c624--Wampler--Guitar_Amp_Cabinets",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Guitar Amp Cabinets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Wampler--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Wampler--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Wampler--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Wampler--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c623--Wampler--Guitar_Amp_Heads",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Guitar Amp Heads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1259--Warburton--Alto_Saxophones",
        "productProps": {
            "productBrand": "Warburton",
            "category": "Alto Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Wampler--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1283--Warburton--Woodwind_Accessories",
        "productProps": {
            "productBrand": "Warburton",
            "category": "Woodwind Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c625--Wampler--Guitar_Combo_Amps",
        "productProps": {
            "productBrand": "Wampler",
            "category": "Guitar Combo Amps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1260--Warburton--Tenor_Saxophones",
        "productProps": {
            "productBrand": "Warburton",
            "category": "Tenor Saxophones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c105--Warm_Audio--Condenser_Microphones",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Condenser Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c810--Warm_Audio--Balanced_Cables_XLR_to_XLR",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Balanced Cables: XLR to XLR"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Warm_Audio--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Warm_Audio--Microphone_Cables",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c807--Warm_Audio--Balanced_Cables_TRS_to_TRS",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Balanced Cables: TRS to TRS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c662--Warm_Audio--Preamps",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c786--Warm_Audio--Guitar_Instrument_Cables",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Guitar / Instrument Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c768--Warm_Audio--Microphone_Cases_and_Bags",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Microphone Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c813--Warm_Audio--Balanced_Cables_XLR_to_TRS",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Balanced Cables: XLR to TRS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c842--Warm_Audio--Parametric_EQ",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Parametric EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c790--Warm_Audio--Compressors_Limiters",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Compressors / Limiters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c779--Warm_Audio--Speaker_Cables",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Speaker Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Warm_Audio--Direct_Boxes",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1221--Warm_Audio--Pedalboard_Cables",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Pedalboard Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Warm_Audio--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Warm_Audio--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Warm_Audio--Phaser_Pedals",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1037--Warm_Audio--500_Series_Preamps",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "500 Series Preamps"
        }
    },
    {
        "url": "https://www.sweetwater.com/c396--Warm_Audio--Microphone_Stands",
        "productProps": {
            "productBrand": "Warm Audio",
            "category": "Microphone Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c602--Washburn--Acoustic_Electric_Guitars",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Acoustic / Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1082--Washburn--Banjos",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Banjos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1081--Washburn--Mandolins",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Mandolins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c600--Washburn--6_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Washburn",
            "category": "6-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c590--Washburn--Solidbody_Guitars",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Solidbody Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Washburn--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c603--Washburn--Acoustic_Guitar_Packages",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Acoustic Guitar Packages"
        }
    },
    {
        "url": "https://www.sweetwater.com/c601--Washburn--12_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Washburn",
            "category": "12-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c604--Washburn--Other_Acoustic_Instruments",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Other Acoustic Instruments"
        }
    },
    {
        "url": "https://www.sweetwater.com/c940--Washburn--Acoustic_Guitar_Cases",
        "productProps": {
            "productBrand": "Washburn",
            "category": "Acoustic Guitar Cases"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/FatsoUBK--wave-distribution-ubk-fatso",
        "productProps": {
            "productBrand": "Wave Distribution",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--WaveArts--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c704--WaveArts--Dynamics_Plug_ins",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Dynamics Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c713--WaveArts--Noise_Reduction_Plug_ins",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Noise Reduction Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--WaveArts--Plug_in_Bundles",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--WaveArts--Effects_Plug_ins",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--WaveDNA--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "WaveDNA",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--WaveArts--Utility_Plug_ins",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c660--WaveDNA--DJ_Software",
        "productProps": {
            "productBrand": "WaveDNA",
            "category": "DJ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c705--WaveArts--Reverb_and_Delay_Plug_ins",
        "productProps": {
            "productBrand": "WaveArts",
            "category": "Reverb & Delay Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--WaveMachine_Labs--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "WaveMachine Labs",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c708--Waves--Plug_in_Bundles",
        "productProps": {
            "productBrand": "Waves",
            "category": "Plug-in Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--WaveDNA--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "WaveDNA",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--WaveMachine_Labs--Utility_Plug_ins",
        "productProps": {
            "productBrand": "WaveMachine Labs",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c704--Waves--Dynamics_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Dynamics Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--Waves--Effects_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c705--Waves--Reverb_and_Delay_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Reverb & Delay Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Waves--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Waves--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c474--Waves--PA_Management",
        "productProps": {
            "productBrand": "Waves",
            "category": "PA Management"
        }
    },
    {
        "url": "https://www.sweetwater.com/c701--Waves--Pitch_and_Harmony_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Pitch & Harmony Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c702--Waves--Mastering_Software",
        "productProps": {
            "productBrand": "Waves",
            "category": "Mastering Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c713--Waves--Noise_Reduction_Plug_ins",
        "productProps": {
            "productBrand": "Waves",
            "category": "Noise Reduction Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--Waves--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "Waves",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/c698--Waves--Utility_and_Other_Software",
        "productProps": {
            "productBrand": "Waves",
            "category": "Utility & Other Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--Waves--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "Waves",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c707--Waves--Virtual_Guitar_and_Bass_Software",
        "productProps": {
            "productBrand": "Waves",
            "category": "Virtual Guitar & Bass Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c731--Waves--Computer_Networking_and_Hubs",
        "productProps": {
            "productBrand": "Waves",
            "category": "Computer Networking & Hubs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c859--Waves--PC_Desktops",
        "productProps": {
            "productBrand": "Waves",
            "category": "PC Desktops"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--Waves--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "Waves",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1219--Waves--Ethernet_Audio_Interfaces",
        "productProps": {
            "productBrand": "Waves",
            "category": "Ethernet Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c438--Waves--Mixer_Rack_Ears",
        "productProps": {
            "productBrand": "Waves",
            "category": "Mixer Rack Ears"
        }
    },
    {
        "url": "https://www.sweetwater.com/c737--Waves--Miscellaneous_Computer_Accessories",
        "productProps": {
            "productBrand": "Waves",
            "category": "Miscellaneous Computer Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c265--Waves--Digital_Mixers",
        "productProps": {
            "productBrand": "Waves",
            "category": "Digital Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1034--Waves--Earpads_Cables_and_Accessories",
        "productProps": {
            "productBrand": "Waves",
            "category": "Earpads, Cables & Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Way_Huge--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Way Huge",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c808--Waves--Mixing_Control_Surfaces",
        "productProps": {
            "productBrand": "Waves",
            "category": "Mixing Control Surfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Way_Huge--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Way Huge",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c848--Waves--Sampling_Software",
        "productProps": {
            "productBrand": "Waves",
            "category": "Sampling Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c633--Way_Huge--Multi_effects_Pedals",
        "productProps": {
            "productBrand": "Way Huge",
            "category": "Multi-effects Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Way_Huge--Phaser_Pedals",
        "productProps": {
            "productBrand": "Way Huge",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/WD",
        "productProps": {
            "productBrand": "WD",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Way_Huge--Chorus_Pedals",
        "productProps": {
            "productBrand": "Way Huge",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1040--WesAudio--500_Series_Chassis",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "500 Series Chassis"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Way_Huge--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Way Huge",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1038--WesAudio--500_Series_Dynamics",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "500 Series Dynamics"
        }
    },
    {
        "url": "https://www.sweetwater.com/c796--WesAudio--AD_DA_Converters",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "AD/DA Converters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c790--WesAudio--Compressors_Limiters",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "Compressors / Limiters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1041--WesAudio--Other_500_Series_Processors",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "Other 500 Series Processors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1039--WesAudio--500_Series_EQ",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "500 Series EQ"
        }
    },
    {
        "url": "https://www.sweetwater.com/c784--WesAudio--Control_and_Interface_Combos",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "Control & Interface Combos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1045--Westone--Earphones",
        "productProps": {
            "productBrand": "Westone",
            "category": "Earphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Western_Digital",
        "productProps": {
            "productBrand": "Western Digital",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c426--WesAudio--Optional_Mixer_I_O",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "Optional Mixer I/O"
        }
    },
    {
        "url": "https://www.sweetwater.com/c846--WesAudio--Mastering",
        "productProps": {
            "productBrand": "WesAudio",
            "category": "Mastering"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1034--Westone--Earpads_Cables_and_Accessories",
        "productProps": {
            "productBrand": "Westone",
            "category": "Earpads, Cables & Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Westone--Cable_Adapters",
        "productProps": {
            "productBrand": "Westone",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1226--Whirlwind--Ethernet_Cables",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Ethernet Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1047--Westone--Replacement_Foam_and_Sleeves",
        "productProps": {
            "productBrand": "Westone",
            "category": "Replacement Foam and Sleeves"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1174--Westone--Hearing_Protection",
        "productProps": {
            "productBrand": "Westone",
            "category": "Hearing Protection"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1073--Whirlwind--Wall_Plates",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Wall Plates"
        }
    },
    {
        "url": "https://www.sweetwater.com/c807--Whirlwind--Balanced_Cables_TRS_to_TRS",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Balanced Cables: TRS to TRS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c819--Whirlwind--Unbalanced_Cables_TS_to_TS",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Unbalanced Cables: TS to TS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1033--Whirlwind--Microphone_Cables",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Microphone Cables"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Whirlwind--Direct_Boxes",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c812--Whirlwind--Cable_Adapters",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Cable Adapters"
        }
    },
    {
        "url": "https://www.sweetwater.com/c813--Whirlwind--Balanced_Cables_XLR_to_TRS",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Balanced Cables: XLR to TRS"
        }
    },
    {
        "url": "https://www.sweetwater.com/c810--Whirlwind--Balanced_Cables_XLR_to_XLR",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Balanced Cables: XLR to XLR"
        }
    },
    {
        "url": "https://www.sweetwater.com/c986--Whirlwind--Stage_Snakes",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Stage Snakes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c809--Whirlwind--Cable_Connectors",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Cable Connectors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Whirlwind--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c964--Whirlwind--Audio_Test_Equipment",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Audio Test Equipment"
        }
    },
    {
        "url": "https://www.sweetwater.com/c667--Whirlwind--Preamp_Accessories",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Preamp Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Whirlwind--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Whirlwind--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c962--Whirlwind--Extension_Cords_and_Power_Strips",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Extension Cords & Power Strips"
        }
    },
    {
        "url": "https://www.sweetwater.com/c413--Whirlwind--Headphone_Amplifiers_and_Distribution",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Headphone Amplifiers & Distribution"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1154--Whirlwind--Board_and_Gaffer_Tape",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Board & Gaffer Tape"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Whirlwind--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Whirlwind--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c971--Whirlwind--Phaser_Pedals",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Phaser Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Wincent",
        "productProps": {
            "productBrand": "Wincent",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c959--Whirlwind--Phantom_Power_Supplies",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Phantom Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c857--Whirlwind--Snakes_XLR_to_XLR",
        "productProps": {
            "productBrand": "Whirlwind",
            "category": "Snakes: XLR to XLR"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Win-D-Fender",
        "productProps": {
            "productBrand": "Win-D-Fender",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1020--Wuhan--Crash_Cymbals",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Crash Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c379--WindTech--Microphone_Windscreens_and_Grilles",
        "productProps": {
            "productBrand": "WindTech",
            "category": "Microphone Windscreens & Grilles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--WindTech--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "WindTech",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1105--WindTech--Video_Camera_Accessories",
        "productProps": {
            "productBrand": "WindTech",
            "category": "Video Camera Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c380--WindTech--Microphone_Shockmounts",
        "productProps": {
            "productBrand": "WindTech",
            "category": "Microphone Shockmounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1048--Wuhan--Cymbal_Packs",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Cymbal Packs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1183--Wuhan--China_Cymbals",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "China Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1030--Wuhan--Splash_Cymbals",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Splash Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1023--Wuhan--Ride_Cymbals",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Ride Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1376--Wuhan--Gongs",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Gongs"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1147--Wuhan--Percussion_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Percussion Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/X8_Drums",
        "productProps": {
            "productBrand": "X8 Drums",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/manufacturer/Xeros",
        "productProps": {
            "productBrand": "Xeros",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/pokXE--by-tempo-designs-pok-xe-bluetooth-pedal-controller",
        "productProps": {
            "productBrand": "X-Tempo Designs",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1022--Wuhan--Hi_hat_Cymbals",
        "productProps": {
            "productBrand": "Wuhan",
            "category": "Hi-hat Cymbals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--XILS-lab--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "XILS-lab",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c715--XLN_Audio--Virtual_Drum_and_Percussion_Software",
        "productProps": {
            "productBrand": "XLN Audio",
            "category": "Virtual Drum & Percussion Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--XILS-lab--Effects_Plug_ins",
        "productProps": {
            "productBrand": "XILS-lab",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c724--XLN_Audio--Virtual_Instrument_Bundles",
        "productProps": {
            "productBrand": "XLN Audio",
            "category": "Virtual Instrument Bundles"
        }
    },
    {
        "url": "https://www.sweetwater.com/c716--XLN_Audio--Virtual_Synth_Keyboard_and_Organ_Software",
        "productProps": {
            "productBrand": "XLN Audio",
            "category": "Virtual Synth, Keyboard, & Organ Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c714--XLN_Audio--Effects_Plug_ins",
        "productProps": {
            "productBrand": "XLN Audio",
            "category": "Effects Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1300--XO--Trombones",
        "productProps": {
            "productBrand": "XO",
            "category": "Trombones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1301--XO--Trumpets",
        "productProps": {
            "productBrand": "XO",
            "category": "Trumpets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1290--XO--Euphoniums",
        "productProps": {
            "productBrand": "XO",
            "category": "Euphoniums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1292--XO--French_Horns",
        "productProps": {
            "productBrand": "XO",
            "category": "French Horns"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1302--XO--Tubas",
        "productProps": {
            "productBrand": "XO",
            "category": "Tubas"
        }
    },
    {
        "url": "https://www.sweetwater.com/c969--Xotic--Distortion_Overdrive_Boost_and_Fuzz_Pedals",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Distortion, Overdrive, Boost & Fuzz Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1291--XO--Flugelhorns",
        "productProps": {
            "productBrand": "XO",
            "category": "Flugelhorns"
        }
    },
    {
        "url": "https://www.sweetwater.com/c584--Xotic--Bass_Guitar_Pedals_and_Effects",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Bass Guitar Pedals & Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c965--Xotic--Electric_Guitar_Pickups",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Electric Guitar Pickups"
        }
    },
    {
        "url": "https://www.sweetwater.com/c977--Xotic--Compressor_and_EQ_Pedals",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Compressor & EQ Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1111--Xotic--Guitar_Volume_Pedals",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Guitar Volume Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c880--Xotic--Footswitch_and_Selector_Pedals",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Footswitch & Selector Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c520--Xotic--Keyboard_Pedals",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Keyboard Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c976--Xotic--Wah_and_Filter_Pedals",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Wah & Filter Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c961--Xotic--Power_Supplies",
        "productProps": {
            "productBrand": "Xotic",
            "category": "Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1044--Xvive--In_Ear_Monitor_Systems",
        "productProps": {
            "productBrand": "Xvive",
            "category": "In-Ear Monitor Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c995--Xvive--Guitar_Wireless_Systems",
        "productProps": {
            "productBrand": "Xvive",
            "category": "Guitar Wireless Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c996--Xvive--Wireless_Transmitters_and_Receivers",
        "productProps": {
            "productBrand": "Xvive",
            "category": "Wireless Transmitters & Receivers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c994--Xvive--Lavalier_Microphone_Wireless_Systems",
        "productProps": {
            "productBrand": "Xvive",
            "category": "Lavalier Microphone Wireless Systems"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1176--Xvive--Lavalier_Microphones",
        "productProps": {
            "productBrand": "Xvive",
            "category": "Lavalier Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c600--Yamaha--6_string_Acoustic_Guitars",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "6-string Acoustic Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c677--Xvive--MIDI_Interfaces",
        "productProps": {
            "productBrand": "Xvive",
            "category": "MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c959--Xvive--Phantom_Power_Supplies",
        "productProps": {
            "productBrand": "Xvive",
            "category": "Phantom Power Supplies"
        }
    },
    {
        "url": "https://www.sweetwater.com/c399--Xvive--Miscellaneous_Mic_Accessories",
        "productProps": {
            "productBrand": "Xvive",
            "category": "Miscellaneous Mic Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c590--Yamaha--Solidbody_Guitars",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Solidbody Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1052--Yamaha--Clavinovas",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Clavinovas"
        }
    },
    {
        "url": "https://www.sweetwater.com/c134--Yamaha--PA_Speakers",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "PA Speakers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c505--Yamaha--Digital_Pianos",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Digital Pianos"
        }
    },
    {
        "url": "https://www.sweetwater.com/c602--Yamaha--Acoustic_Electric_Guitars",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Acoustic / Electric Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1310--Yamaha--Brass_Mouthpieces",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Brass Mouthpieces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c510--Yamaha--Synthesizers",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Synthesizers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c987--Yamaha--Classical_and_Nylon_String_Guitars",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Classical & Nylon String Guitars"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1311--Yamaha--Brass_Accessories",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Brass Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c405--Yamaha--Active_Monitors",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Active Monitors"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1356--Yamaha--Tenor_Drum_Carriers",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Tenor Drum Carriers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1061--Yamaha--iPad_iPhone_Live_Sound_Mixers",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "iPad/iPhone Live Sound Mixers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1359--Yamaha--Marching_Field_Percussion",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Marching Field Percussion"
        }
    },
    {
        "url": "https://www.sweetwater.com/c986--Yamaha--Stage_Snakes",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Stage Snakes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1352--Yamaha--Marching_Tenor_Drums",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Marching Tenor Drums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1366--Yamaha--Marching_Drumsticks_and_Mallets",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Marching Drumsticks & Mallets"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1355--Yamaha--Snare_Drum_Carriers",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Snare Drum Carriers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1354--Yamaha--Bass_Drum_Carriers",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Bass Drum Carriers"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1357--Yamaha--Marching_Drum_Stands",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Marching Drum Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1295--Yamaha--Marching_Euphoniums",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Marching Euphoniums"
        }
    },
    {
        "url": "https://www.sweetwater.com/c808--Yamaha--Mixing_Control_Surfaces",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Mixing Control Surfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1335--Yamaha--Vibraphones",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Vibraphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1220--Yamaha--Accessories_by_Category",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Accessories by Category"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1348--Yamaha--Concert_Drum_Stands_and_Mounts",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Concert Drum Stands & Mounts"
        }
    },
    {
        "url": "https://www.sweetwater.com/c646--Yamaha--Drum_Practice_Pads",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Drum Practice Pads"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1219--Yamaha--Ethernet_Audio_Interfaces",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Ethernet Audio Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c649--Yamaha--Drum_Thrones",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Drum Thrones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1068--Yamaha--iPad_iPhone_Accessories",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "iPad/iPhone Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1175--Yamaha--Headset_Microphones",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Headset Microphones"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1361--Yamaha--Marching_Bass_Drum_Cases_and_Bags",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Marching Bass Drum Cases & Bags"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1059--Yamaha--iPad_iPhone_MIDI_Interfaces",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "iPad/iPhone MIDI Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c830--Yamaha--Snakes_DB25_to_DB25",
        "productProps": {
            "productBrand": "Yamaha",
            "category": "Snakes: DB25 to DB25"
        }
    },
    {
        "url": "https://www.sweetwater.com/c771--Yellow_Jackets--Miscellaneous_Guitar_Amp_Accessories",
        "productProps": {
            "productBrand": "Yellow Jackets",
            "category": "Miscellaneous Guitar Amp Accessories"
        }
    },
    {
        "url": "https://www.sweetwater.com/store/detail/MizaVStd42Bk--zaor-miza-v-42-inch-fixed-studio-monitor-stand-42-inch-pair",
        "productProps": {
            "productBrand": "Zaor",
            "category": null
        }
    },
    {
        "url": "https://www.sweetwater.com/c1182--Zikit--Drum_Accessory_Hardware",
        "productProps": {
            "productBrand": "Zikit",
            "category": "Drum Accessory Hardware"
        }
    },
    {
        "url": "https://www.sweetwater.com/c935--Zither--Guitar_Stands",
        "productProps": {
            "productBrand": "Zither",
            "category": "Guitar Stands"
        }
    },
    {
        "url": "https://www.sweetwater.com/c957--Zoom--Direct_Boxes",
        "productProps": {
            "productBrand": "Zoom",
            "category": "Direct Boxes"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1235--Zoom--Batteries",
        "productProps": {
            "productBrand": "Zoom",
            "category": "Batteries"
        }
    },
    {
        "url": "https://www.sweetwater.com/c970--Zoom--Chorus_Pedals",
        "productProps": {
            "productBrand": "Zoom",
            "category": "Chorus Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c793--Zoom--Reverbs_Effects",
        "productProps": {
            "productBrand": "Zoom",
            "category": "Reverbs / Effects"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1058--Zoom--iPad_iPhone_Interfaces",
        "productProps": {
            "productBrand": "Zoom",
            "category": "iPad/iPhone Interfaces"
        }
    },
    {
        "url": "https://www.sweetwater.com/c974--Zoom--Reverb_and_Delay_Pedals",
        "productProps": {
            "productBrand": "Zoom",
            "category": "Reverb & Delay Pedals"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--zplane--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "zplane",
            "category": "Equalizer Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c773--zplane--Notation_Software",
        "productProps": {
            "productBrand": "zplane",
            "category": "Notation Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c1043--zplane--Instructional_Software",
        "productProps": {
            "productBrand": "zplane",
            "category": "Instructional Software"
        }
    },
    {
        "url": "https://www.sweetwater.com/c717--Zynaptiq--Utility_Plug_ins",
        "productProps": {
            "productBrand": "Zynaptiq",
            "category": "Utility Plug-ins"
        }
    },
    {
        "url": "https://www.sweetwater.com/c712--Zynaptiq--Equalizer_Plug_ins",
        "productProps": {
            "productBrand": "Zynaptiq",
            "category": "Equalizer Plug-ins"
        }
    }
];

async function ccLoadScripts(...globals)  {

    let promises = globals.map(item => {
        
        return async function() {
            await new Promise(resolve => {
                let interval = setInterval(function(){
        
                    if(typeof window[item] !== "undefined")   {
                        clearInterval(interval);
                        resolve();
                    }
        
                }, 100);
            });
        }
        
    });
    
    await Promise.all(promises.map(item => item()));

};

let evaluatorObjects = [
    {
        callback : async () => {

            async function scrollToBottom()  {
                let totalHeight = document.body.offsetHeight - window.innerHeight,
                    currentScroll = 0;
            
                function scroll()   {
                    currentScroll = window.scrollY;
                }
                
                window.addEventListener("scroll", scroll);
            
                await new Promise(resolve => {
                    let interval = setInterval(() => {
                        window.scrollTo(0, function(){
                            totalHeight = document.body.offsetHeight - window.innerHeight;
                            
                            if(currentScroll + 100 < totalHeight)   {
                                return currentScroll + 100;
                            } else  {
                                return currentScroll + (totalHeight - currentScroll);
                            }
                        }());

                        if(currentScroll >= totalHeight - 200) {
            
                            console.log({currentScroll, totalHeight})
                            clearInterval(interval);
                            window.removeEventListener("scroll", scroll);
                            resolve();
                        }
                    }, 52);
                });
                
            }
        
            async function scrollToTop()   {
                let totalHeight = document.body.offsetHeight - window.innerHeight,
                    currentScroll = window.scrollY;
            
                function scroll()   {
                    currentScroll = window.scrollY;
                }
                
                window.addEventListener("scroll", scroll);
            
                await new Promise(resolve => {
                    let interval = setInterval(() => {
                        window.scrollTo(0, currentScroll - 100);
                        if(currentScroll <= 0) {
            
                            console.log({currentScroll, totalHeight})
                            clearInterval(interval);
                            window.removeEventListener("scroll", scroll);
                            resolve();
                        }
                    }, 25);
                });
            }


            function getLargeImageSrc(imageSrc) {

                if(!imageSrc)    {
                    return null;
                }

                let mediaUri = `https://media.sweetwater.com/api/i/`,
                    largeImageSrc = null;

                if(!imageSrc.includes("image_not_available.gif.auto.webp")) {
                    let imagePathName = imageSrc.replace(mediaUri, ""),
                        imageSrcMeta = imagePathName.split("/"),
                        metadata = imageSrcMeta[0],
                        fileName = imageSrcMeta[imageSrcMeta.length - 1],
                        size = imageSrcMeta[imageSrcMeta.length - 2],
                        metaObject = metadata.split("__").map(item => {
                            let obj = {},
                                [key, val] = item.split("-");
                            obj[key] = val;

                            return obj;
                        }).reduce((a, b) => {
                            let [key] = Object.keys(b);
                            if(key !== "w" && key !== "h" && (key !== "b" && b[key] !== "pricedrop"))  {
                                a = {...a, ...b};
                            }
                            return a;
                        }, {});

                    // metadata
                    metadata = Object.keys(metaObject).reduce((a, b) => {

                        a.push(`${b}-${metaObject[b]}`);

                        return a;
                    }, []).join("__");
                    imageSrcMeta[0] = metadata;

                    
                    // replace the image with large one..    
                    let fileNameArr = fileName.split(".");
                    if(!fileNameArr[0].includes("-large"))  {
                        fileNameArr[0] = `${fileNameArr[0]}-large`;
                        fileName = fileNameArr.join(".");

                        imageSrcMeta[imageSrcMeta.length - 1] = fileName;
                    }
                    


                    
                    
                    // replace the size
                    if(!isNaN(Number(size)) && !fileName.includes(size))    {
                        imageSrcMeta[imageSrcMeta.length - 2] = 750;
                    }

                    largeImageSrc = mediaUri + imageSrcMeta.join("/");
                }

                return largeImageSrc;
            }


            await new Promise(resolve => setTimeout(resolve, 7747));

            await scrollToBottom();
            await scrollToTop();

            // check for products-list
            let productObjects = Array.from(document.querySelectorAll(".product-card:not(.candy--card)")).map(item =>{
                    let productName = item.querySelector(".product-card__name") ? item.querySelector(".product-card__name").innerText.trim() : null,
                        productUri = item.querySelector(".product-card__name a") ? item.querySelector(".product-card__name a").href : null,
                        imageUris = function(){
                            let imageSrc = item.querySelector(".product-card__img img") ? item.querySelector(".product-card__img img").src : null,
                                imageUris = [],
                                largeImageSrc = getLargeImageSrc(imageSrc);
                            if(largeImageSrc)   {
                                imageUris.push(largeImageSrc);
                            }
                            return imageUris;
                        }();

                    return {
                        productName,
                        productUri,
                        imageUris,
                    }
                }),
                newUrl = document.querySelector(".bottomPagination a.paginate-next") ? document.querySelector(".bottomPagination a.paginate-next").href : null;
                 
                

            if(!productObjects.length && document.querySelector(".product-summary"))   {
                productObjects = Array.from(document.querySelectorAll(".product-summary")).map(item => {

                    let productName = item.querySelector(".product__name") ? item.querySelector(".product__name").innerText.trim() : null, 
                        productUri = window.location.href,
                        imageUris = function(){
                            let image = document.querySelector(".product-image-col img") ? document.querySelector(".product-image-col img").src : null;

                            return image ? [image] : [];
                        }();

                    return {
                        productName, 
                        productUri, 
                        imageUris,
                    }
                });
                newUrl = null;
            }



            return {productObjects, newUrl};

        },
        type : "list",
        paginated : true,
        awaitSelectors : [
            `.product-card:not(.candy--card)`
        ],
    }
];


function getLinkObjects(linkObjects, linkObjectsKey) {

    if(window.localStorage.getItem(linkObjectsKey)) {
        return JSON.parse(window.localStorage.getItem(linkObjectsKey));
    } else  {
        window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjects));

        return linkObjects;
    }
}


// initialization of the scraper object;

async function ccScraperInitialize(linkObjectsKey, authToken) {

    let CcScraper = __cc_getScraperFactory(__cc_getUtilities, authToken),
        {toUrl} = __cc_getUtilities(authToken);
        
    
    let scraperOptions = {
        evaluatorObjects, 
        apiRoute : "http://localhost:8080/api/sweetwater-musicians", 
        imageNameObject :  {shared : ["productName"], split : []}, 
        imagePropName : "productImage", 
        pathLocation : "C:/Users/Michael Norward/Google Drive/Crystal Commerce/sweetwater-musicians/", 
        linkObjectsKey,
        autoScrollToBottom : false,
        deleteCookiesPerCategory : false,
        finalActions : ["postProductObjectsToAPI"], // downloadJson || postProductObjectsToAPI || printProductObjectsOnPage || downloadEncodedText;
        getNextSetBy : "same-tab", // new-tab; click; same-tab;
    };
        
    let ccScraper = await CcScraper.getScraperObject(scraperOptions);

    
    
    return ccScraper.allCategoriesScraped;

}

function linkObjectsResetter(linkObjectsKey, lastNumbers)   {
    let linkObjects = JSON.parse(window.localStorage.getItem(linkObjectsKey)),
        finishedLinks = linkObjects.filter(item => item.finished === true && item.ongoingProgress === false),
        unfinishedLinks = linkObjects.filter(item => item.ongoingProgress === true && item.finished === false),
        forRescraping = [...finishedLinks.slice(finishedLinks.length - (lastNumbers + 1)), ...unfinishedLinks];

    forRescraping.forEach(item => {
        item.finished = null;
        item.ongoingProgress = null;
    });

    window.localStorage.setItem(linkObjectsKey, JSON.stringify(linkObjects));
}

(async function() {

    await ccLoadScripts("__cc_getUtilities", "__cc_getScraperFactory");

    
    let authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTNlMzM1NTE3YThhNTUzYzRkZGM4ZWQiLCJwZXJtaXNzaW9uTGV2ZWwiOjQsImlhdCI6MTY1MjQzMzY0NiwiZXhwIjoxNjUzMDM4NDQ2fQ.BHfnjykoaOaUKWCmp63t-5ev20HWkTdobg2yCaLzwiI",
        {apiRequest, toUrl, waitForSelector, queryStringToObject} = __cc_getUtilities(authToken),
        linkObjectsKey = `__cc_${toUrl("CC Sweetwater Musicians link objects")}`,
        halfLength = Math.ceil(linkObjects.length / 2),
        allCategoriesScraped;
    

    linkObjects = getLinkObjects(linkObjects.slice(0, halfLength), linkObjectsKey);

    // reset mechanism
    if(window.location.href.includes("scraper-reset"))  {
        Object.keys(window.localStorage).forEach(key => window.localStorage.removeItem(key));
        window.location = window.location.origin;
        return;
    }

    // stop
    if(window.location.href.includes("scraper-stop"))   {
        return;
    }

    if(window.location.href.includes("reset-last-links"))    {

        let urlObject = queryStringToObject(window.location.href),
            num = Number(urlObject["reset-last-links"])

        if(num && !isNaN(num))   {
            linkObjectsResetter(linkObjectsKey, num);
            window.location = window.location.origin;
        }

        return;

        //     CcScraper.resetLastLinkObject(linkObjectsKey);
        //     window.location = window.location.origin;
    }

    console.table(linkObjects);

    allCategoriesScraped = await ccScraperInitialize(linkObjectsKey, authToken);

    if(allCategoriesScraped)    {
        console.log({allCategoriesScraped, message : `All categories have been scraped.`});
    }
    
    

}());


/*

    https://www.sweetwater.com/store/manufacturer/Modal_Electronics
    https://www.sweetwater.com/store/manufacturer/Mojave_Audio
    https://www.sweetwater.com/store/manufacturer/Paige

*/