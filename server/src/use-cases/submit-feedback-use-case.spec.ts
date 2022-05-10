import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

// test("sum 2 + 2", () => {
//     expect(2 + 2).toBe(4);
// });

// spies = espiões - saber se uma função foi chamada
const createFeedbackSpy = jest.fn();
const sendMainSpy = jest.fn();


// criando vários testes para uma finalidade

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMainSpy }
);

describe("Submit feedback", () => {
    // should deveria fazer alguma coisa
    it("should be able to submit a feedback", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64"
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMainSpy).toHaveBeenCalled();
    })

    it("should not be able to submit feedback without type", async () => {
        await expect(submitFeedback.execute({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64"
        })).rejects.toThrow();
    })

    it("should not be able to submit feedback without comment", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64"
        })).rejects.toThrow();
    })

    it("should not be able to submit feedback with an invalid screenshot", async () => {
        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "example comment",
            screenshot: "test.jpg"
        })).rejects.toThrow();
    })
})