var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/Appearance": {
                            "date_font_size": "24",
                            "day_font_size": "100",
                            "time_font_size": "24"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "com.github.prayag2.modernclock",
                    "title": "Modern Clock"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "barColors": "{\"enabled\":false,\"lightness\":0.5,\"saturation\":0.5,\"alpha\":1,\"systemColor\":\"highlightColor\",\"systemColorSet\":\"Window\",\"custom\":\"#ffffff\",\"list\":[\"#ED8796\",\"#A6DA95\",\"#EED49F\",\"#8AADF4\",\"#F5BDE6\",\"#8BD5CA\",\"#f5a97f\"],\"reverseList\":false,\"followColor\":0,\"saturationEnabled\":false,\"lightnessEnabled\":false,\"sourceType\":0,\"smoothGradient\":true,\"colorsOrientation\":0,\"image\":{\"source\":\"\",\"fillMode\":2},\"hueStart\":0,\"hueEnd\":360}",
                            "centeredBars": "true",
                            "desktopWidgetBg": "0",
                            "framerate": "30",
                            "higherCutoffFreq": "9500",
                            "inactiveBlockColors": "{\"enabled\":false,\"lightness\":0.5,\"saturation\":0.5,\"alpha\":0.3,\"systemColor\":\"textColor\",\"systemColorSet\":\"Window\",\"custom\":\"#013eff\",\"list\":[\"#ED8796\",\"#A6DA95\",\"#EED49F\",\"#8AADF4\",\"#F5BDE6\",\"#8BD5CA\",\"#f5a97f\"],\"reverseList\":false,\"followColor\":0,\"saturationEnabled\":false,\"lightnessEnabled\":false,\"sourceType\":1,\"smoothGradient\":true,\"colorsOrientation\":0,\"image\":{\"source\":\"\",\"fillMode\":2},\"hueStart\":0,\"hueEnd\":360}",
                            "roundedBars": "true",
                            "visualizerStyle": "0",
                            "waveFillColors": "{\"enabled\":false,\"lightness\":0.5,\"saturation\":0.5,\"alpha\":0.3,\"systemColor\":\"highlightColor\",\"systemColorSet\":\"Window\",\"custom\":\"#013eff\",\"list\":[\"#ED8796\",\"#A6DA95\",\"#EED49F\",\"#8AADF4\",\"#F5BDE6\",\"#8BD5CA\",\"#f5a97f\"],\"reverseList\":false,\"followColor\":0,\"saturationEnabled\":false,\"lightnessEnabled\":false,\"sourceType\":7,\"smoothGradient\":true,\"colorsOrientation\":0,\"image\":{\"source\":\"\",\"fillMode\":2},\"hueStart\":0,\"hueEnd\":360}"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "luisbocanegra.audio.visualizer",
                    "title": "Kurve"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "Circle.Music.Widget",
                    "title": "Circle Music"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "42"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "462",
                    "ToolBoxButtonY": "32"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///usr/share/wallpapers/Next/contents/images/1920x1080.png"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "configurationOverrides": "{\"overrides\":{},\"associations\":[]}",
                            "hideWidget": "true"
                        }
                    },
                    "plugin": "luisbocanegra.panel.colorizer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "121",
                            "popupWidth": "216"
                        }
                    },
                    "plugin": "org.kde.plasma.shutdownorswitch"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/General": {
                            "history": "#0f7585"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55",
                            "popupHeight": "433",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.clipboard"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "283",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.weather"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "dateDisplayFormat": "BesideTime",
                            "dateFormat": "longDate",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.catwalk"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65",
                            "popupHeight": "181",
                            "popupWidth": "288"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "sensors": "[{\"name\":\"Average CPU Temperature\",\"sensorId\":\"cpu/all/averageTemperature\"},{\"name\":\"Maximum CPU Temperature\",\"sensorId\":\"cpu/all/maximumTemperature\"}]"
                        }
                    },
                    "plugin": "org.kde.olib.thermalmonitor"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "fontSize": "75",
                            "speedLayout": "columns"
                        }
                    },
                    "plugin": "org.kde.netspeedWidget"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.networkmanagement"
                },
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        }
                    },
                    "plugin": "org.kde.plasma.bluetooth"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "328",
                            "popupWidth": "420"
                        }
                    },
                    "plugin": "KdeControlStation"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "popupHeight": "400",
                            "popupWidth": "560"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "configurationOverrides": "{\"overrides\":{},\"associations\":[]}",
                            "hideWidget": "true"
                        }
                    },
                    "plugin": "luisbocanegra.panel.colorizer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "506",
                            "popupWidth": "647"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "630",
                            "DialogWidth": "810"
                        },
                        "/General": {
                            "launchers": "applications:systemsettings.desktop,preferred://filemanager,preferred://terminal,preferred://browser"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 3.3333333333333333,
            "hiding": "dodgewindows",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 0,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
