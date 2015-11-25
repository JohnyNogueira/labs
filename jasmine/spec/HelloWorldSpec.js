describe("Monster", function() {
    it("calls the Grr() function", function() {
            var fakeMonster = new Monster();
            spyOn(fakeMonster, "Grr");     
            fakeMonster.Growl("Grrrrr!");
            expect(fakeMonster.Grr).toHaveBeenCalled();
    });
});


describe("sum", function() {
    it('should calculate the sum of two numbers', function() {
            expect(sum(6,6)).toEqual(12);
    });
});
 


describe("myArray", function() {
    it("has tree items", function() {
        expect(myArray.length).toBe(3);
    });
});