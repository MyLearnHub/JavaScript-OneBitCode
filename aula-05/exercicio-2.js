const veiculo = {
  modelo: "Carro Esportivo",
  passageiros: [],
  limiteDePassageiros: 4,
  velocidade: 0,
  aumentarVelocidade(incremento) {
      this.velocidade += incremento;
      console.log(`Velocidade aumentada para ${this.velocidade} km/h`);
  },
  diminuirVelocidade(decremento) {
      this.velocidade = Math.max(this.velocidade - decremento, 0);
      console.log(`Velocidade reduzida para ${this.velocidade} km/h`);
  },
  adicionarPassageiro(nome) {
      if (this.velocidade === 0 && this.passageiros.length < this.limiteDePassageiros) {
          this.passageiros.push(nome);
          console.log(`${nome} foi adicionado ao veículo.`);
      } else if (this.velocidade !== 0) {
          console.log(`Não é possível adicionar passageiros enquanto o veículo está em movimento.`);
      } else {
          console.log(`Não é possível adicionar ${nome}, limite de passageiros atingido.`);
      }
  }
};

veiculo.adicionarPassageiro("João");
veiculo.aumentarVelocidade(50);
veiculo.adicionarPassageiro("Maria");
veiculo.diminuirVelocidade(50);
veiculo.adicionarPassageiro("Maria");
console.log(veiculo);
