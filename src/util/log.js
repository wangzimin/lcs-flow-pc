class Logger {
    constructor() {
        this.template = '<div class="alert alert-${type} alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> ${msg}</div>';
        this.consoleTemp = '${msg}'
    }

    $$template(level, msg) {
        // return this.template.replace('${type}', level).replace('${msg}', `${level}: ${msg}`);
        return this.consoleTemp.replace('${msg}', `${level}: ${msg}`);
    }

    info(msg) {
    	console.info(this.$$template('info', msg))
        // this.append(document.querySelector("#tip"), this.$$template('info', msg));
    }

    debug(msg) {
    	console.log(his.$$template('success', msg))
        // this.append(document.querySelector("#tip"), this.$$template('success', msg));
    }

    warn(msg) {
    	console.warn(this.$$template('warning', msg))
        // this.append(document.querySelector("#tip"), this.$$template('warning', msg));
    }

    error(msg) {
    	console.error(this.$$template('danger', msg))
        // this.append(document.querySelector("#tip"), this.$$template('danger', msg));
    }

    append(parent, text){
        if (typeof text === 'string') {
            var temp = document.createElement('div');
            temp.innerHTML = text;
            // 防止元素太多 进行提速
            var frag = document.createDocumentFragment();
            while (temp.firstChild) {
                frag.appendChild(temp.firstChild);
            }
            parent.appendChild(frag);
        }
        else {
            parent.appendChild(text);
        }
    }
}

export default new Logger();
