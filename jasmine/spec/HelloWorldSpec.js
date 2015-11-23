describe("Monster", function() {
    it("calls the Grr() function", function() {
        var fakeMonster = new Monster();
        spyOn(fakeMonster, "Grr");     
        fakeMonster.Growl("Grrrrr!");
        expect(fakeMonster.Grr).toHaveBeenCalled();
  });
});
