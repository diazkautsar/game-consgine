class ResponseEntity {
    /**
     * @var {boolean}
     */
    success = false;
    /**
     *
     * @type {string}
     */
    message = null;
    /**
     *
     * @type {string}
     */
    messageTitle = null;
    /**
     * @var {object}
     */
    data = null;
    /**
     * @var {object}
     */
     summary = null;

    statusCode = 400;

    startTime = 0;

    constructor() {
        this.startTime = new Date().getTime();
    }

    toResponse() {
        this.statusCode = this.success ? 200 : (this.statusCode ?? 500);

        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            messageTitle: this.messageTitle,
            summary: this.summary,
            data: this.data,
            responseTime: this.startTime
                ? new Date().getTime() - this.startTime + " ms."
                : "unknown",
        };
    }
}

module.exports = ResponseEntity