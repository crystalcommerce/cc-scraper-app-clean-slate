const { EventEmitter } = require("events");

module.exports = function(io)   {

    class SocketIO {

        constructor(io) {
            this.nameSpaces = ["/"];
            this.io = io;
            this.addedListeners = [];
            this.addedEmitters = [];
            this.customEvent = new EventEmitter();
        }

        addNameSpace(nameSpace)    {
            let foundNameSpace = this.nameSpaces.find(item => item === nameSpace);
            if(!foundNameSpace)  {
                this.nameSpaces.push(nameSpace);
            }
        }

        addListener(eventName, callback, nameSpace = "/") {
            let foundListener = this.addedListeners.find(item => item.eventName === eventName);
            if(!foundListener) {
                this.addedListeners.push({eventName, callback, nameSpace});
            }
        }

        addEmitter(eventName, payload, nameSpace = "/")    {
            let foundEmitter = this.addedEmitters.find(item => item === eventName);
            if(!foundEmitter)  {
                this.addedEmitters.push({eventName, payload, nameSpace});
            }
        }

        writeEmitter(emitter)   {

        }

        setEvents()  {

            // for(let nameSpace of this.nameSpaces)   {

            //     let filteredListeners = this.addedListeners.filter(item = item.nameSpace === nameSpace),
            //         filteredEmitters = this.addedEmitters.filter(item => item.nameSpace === nameSpace);

            //     this.io.of(nameSpace).on("connection", function(socket) {

            //         for(let listener of filteredListeners)  {
            //             let { eventName, callback } = listener;
            //             socket.on(eventName, callback);
            //         }

            //         for(let emitter of filteredEmitters)  {
            //             let { eventName, payload} = emitter;
            //             socket.emit(eventName, payload);
            //         }
    
            //     });

            // }

        }

    }

    return new SocketIO(io);

}