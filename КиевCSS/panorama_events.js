ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
            center: [50.450441, 30.523550],
            zoom: 2,
            type: 'yandex#map',
            controls: ['typeSelector']
        }),
    // Создаём коллекцию, в которой будем хранить точки на карте.
        collection = new ymaps.GeoObjectCollection();
    // Добавляем коллекцию на карту.
    myMap.geoObjects.add(collection);

    // Получим менеджер панорамы карты.
    myMap.getPanoramaManager().then(function (manager) {
        // Включаем режим поиска панорам на карте.
        manager.enableLookup();
        // Открываем плеер панорам.
        manager.openPlayer(myMap.getCenter());
        // Подпишемся на событие открытия плеера панорам.
        manager.events.add('openplayer', function () {
            // Получим текущий плеер панорам.
            var player = manager.getPlayer();






            // При закрытии плеера или смене панорамы удаляем добавленные точки.
            player.events.add(['panoramachange', 'destroy'], function () {
                collection.removeAll();
            });
            // При клике по свернутому маркеру добавим метку в коллекцию на карте.
            player.events.add('markerexpand', function (e) {
                // Получим координаты дома, по которому кликнул пользователь.
                var position = e.get('marker').getPosition(),
                    coords = position.slice(0, 2);

                // Добавим в коллекцию метку с координатами дома.
                collection.add(new ymaps.Placemark(coords, {}, {
                    openBalloonOnClick: false,
                    iconLayout: 'default#image',
                    iconImageHref: 'circle.png',
                    // Размеры метки.
                    iconImageSize: [10, 10],
                    // Смещение левого верхнего угла иконки относительно точки привязки.
                    iconImageOffset: [-5, -5]
                }));
            });


// Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                
            },
            // Свойства.
            properties: {
                // Контент метки.
             
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });
           

    myMap.geoObjects
        
        
	
	 .add(new ymaps.Placemark([50.555108, 30.310824], {
            balloonContent: 'цвет <strong>Могила неизвестного солдата</strong>',
            iconCaption: 'Могила неизвестного солдата'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))

	.add(new ymaps.Placemark([50.426450, 30.563030], {
            balloonContent: 'цвет <strong>Монумент "Памятник «Родина-Мать»."</strong>',
            iconCaption: 'Памятник «Родина-Мать»'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))

	.add(new ymaps.Placemark([50.427353, 30.563382], {
            balloonContent: 'цвет <strong>Аллея городов-героев</strong>',
            iconCaption: 'Аллея городов-героев'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
;


            // При клике по раскрытому маркеру удалим метку из коллекции на карте.
            player.events.add('markercollapse', function (e) {
                // Получим координаты дома, по которому кликнул пользователь.
                var position = e.get('marker').getPosition(),
                    coords = position.slice(0, 2);
                // Найдём метку в коллекции по координатам и удалим её.
                collection.each(function (obj) {
                    if (ymaps.util.math.areEqual(obj.geometry.getCoordinates(), coords)) {
                        collection.remove(obj);
                    }
                });
            });
        });
    });
});
