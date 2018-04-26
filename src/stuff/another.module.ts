export const createWorkerCreep = (name: string): Creep => {
  Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE], name);
  return Game.creeps[name];
}