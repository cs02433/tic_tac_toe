import store from './../store'
import print from './../store'

it('should be to load tictactoe module', ()=>{
    expect(store).toBeTruthy();
});

it('it should have two players', ()=>{
    expect(store.getState().players).toBe(2);
});

it('game should start with player1', ()=>{
    store.dispatch({type:'start'});
    expect(store.getState().currentPlayer).toBe("player1");
});

it('game should toggle players on each move', ()=>{
    store.dispatch({type:'start'});
    expect(store.getState().currentPlayer).toBe("player1");
    store.dispatch({type:'next-move', x:0, y:0});
    expect(store.getState().currentPlayer).toBe("player2");
    store.dispatch({type:'next-move', x:1,y:1});
    expect(store.getState().currentPlayer).toBe("player1");
});

it('game should remember each move by players', function(){
   store.dispatch({type:'start'});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"]]');
   store.dispatch({type:'next-move', x:0, y:0});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"X\",\"-\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"]]');
   store.dispatch({type:'next-move', x:0, y:1});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"X\",\"0\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"]]');
   store.dispatch({type:'next-move', x:2, y:2});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"X\",\"0\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"X\"]]');
});

it('game should not allow players to replace a move', function(){
   store.dispatch({type:'start'});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"]]');
   expect(store.getState().currentPlayer).toBe('player1');
   store.dispatch({type:'next-move', x:0, y:0});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"X\",\"-\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"]]');
   expect(store.getState().currentPlayer).toBe('player2');
   store.dispatch({type:'next-move', x:0, y:0});
   expect(JSON.stringify(store.getState().matrix)).toBe('[[\"X\",\"-\",\"-\"],[\"-\",\"-\",\"-\"],[\"-\",\"-\",\"-\"]]');
   expect(store.getState().currentPlayer).toBe('player2');
});

it("game should be able to decide when it is over", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:1, y:1});
    store.dispatch({type:'next-move', x:0, y:1});
    store.dispatch({type:'next-move', x:1, y:2});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:0, y:2});
    expect(store.getState().gameStatus).toBe('over');
});


it("game should be able to decide when it is over 2", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:0, y:1});
    store.dispatch({type:'next-move', x:1, y:0});
    store.dispatch({type:'next-move', x:0, y:2});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:0});
    expect(store.getState().gameStatus).toBe('over');
});

it("when row 2 is winner", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:1, y:0});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:1, y:1});
    store.dispatch({type:'next-move', x:0, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:1, y:2});
    expect(store.getState().gameStatus).toBe('over');
    expect(store.getState().winner).toBe('player1');
});
it("when player 2 wins", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:1, y:0});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:2, y:0});
    store.dispatch({type:'next-move', x:0, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:1});
    store.dispatch({type:'next-move', x:0, y:2});
    expect(store.getState().gameStatus).toBe('over');
    expect(store.getState().winner).toBe('player2');
});


it("when row 3 is winner", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:2, y:0});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:2, y:1});
    store.dispatch({type:'next-move', x:0, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:2});
    expect(store.getState().gameStatus).toBe('over');
});

it("when col 3 is winner", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:2});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:1, y:2});
    store.dispatch({type:'next-move', x:1, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:2});
    expect(store.getState().gameStatus).toBe('over');
});


it("when col 2 is winner", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:1});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:1, y:1});
    store.dispatch({type:'next-move', x:1, y:2});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:1});
    expect(store.getState().gameStatus).toBe('over');
});


it("when dia 1 is winner", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:0});
    store.dispatch({type:'next-move', x:1, y:2});
    store.dispatch({type:'next-move', x:1, y:1});
    store.dispatch({type:'next-move', x:2, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:2});
    expect(store.getState().gameStatus).toBe('over');
});

it("when dia 2 is winner", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:2});
    store.dispatch({type:'next-move', x:1, y:2});
    store.dispatch({type:'next-move', x:1, y:1});
    store.dispatch({type:'next-move', x:2, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:0});
    expect(store.getState().gameStatus).toBe('over');
});

it("Game should stop once it is over", function(){
    store.dispatch({type:'start'});
    store.dispatch({type:'next-move', x:0, y:2});
    store.dispatch({type:'next-move', x:1, y:2});
    store.dispatch({type:'next-move', x:1, y:1});
    store.dispatch({type:'next-move', x:2, y:1});
    expect(store.getState().gameStatus).toBe('running');
    store.dispatch({type:'next-move', x:2, y:0});
    expect(store.getState().gameStatus).toBe('over');
    expect(store.getState().currentPlayer).toBe('player2');

    store.dispatch({type:'next-move', x:2, y:2});
    expect(store.getState().currentPlayer).toBe('player2');

});