export class LiveData {

    constructor(defaultData = null) {
        this.mData = defaultData
    }
    mData
    mVersion
    mObservers = []

    observer(observer) {
        this.mObservers.push(observer)
        // if (this.mData != null) {
        //     observer.onChanged(this.mData)
        // }
    }

    unSubscribe(observer) {
        let idx = this.mObservers.findIndex(item => item === observer)
        idx > -1 && this.mObservers.splice(idx, 1)
    }

    postValue(data) {
        this.mData = data
        this.mVersion++
        this.dispatchingValue(null)
    }

    dispatchingValue(observer) {

        if (observer != null) {
            observer.onChanged(this.mData)
        } else {
            for (let i = 0; i < this.mObservers.length; ++i) {
                this.mObservers[i].onChanged(this.mData)
            }
        }
    }
}

export class Observer {
    mData = null
    mCallback

    constructor(callback) {
        this.mCallback = callback
    }

    onChanged(data) {
        this.mData = data
        this.mCallback(data)
    }
}