# Exercicio Semana 01 - Reprograma

>Esse trabalho tem o intuito de explicar resumidamente o funcionamento da Internet. Detalhes técnicos não foram enfatizados para dar lugar a explicações breves voltadas ao público iniciante.

*Boa leitura!*
Wanessa Souza

## Como funciona a Internet

Certamente uma das maravilhas dos tempos modernos é a Internet. Deveriamos todos ser gratos ao grande "gênio" que teve a ideia de conectar dois dispositivos e fazê-los se comunicarem. No entanto, assim como nos grandes acontecimentos históricos, o conceito por trás da Internet surgiu como resultado de um projeto militar no auge da guerra fria. Isso mesmo jovem padawan! a Internet não foi projetada inicialmente para estarmos em pleno século XXI nos divertindo com memes como nossos smartphones, tablets ou qualquer disposivo inteligente. 

O objeto da Arpanet (como a Internet se chamava quando foi criada no final dos anos 60) era interligar laboratórios de pesquisa e garantir que os militares pudessem se comunicar mesmo se sofressem um bombardeio inimigo. Mas como será que a Internet funciona? como ela vive? _veja sexta no globo report_ Ops, veja aqui nesse meu primeiro exercício :blush: .

## A comunicação

A Internet é uma gigantesca rede que interconecta dezenas de milhares de milhões de dispositivos em todo o mundo. Ela possibilita a comunicação entre pessoas mesmo que estas estejam distantes geograficamente através de vários serviços conhecidos, como e-mail, chats e streaming por exemplo.

Para que a comunicação aconteça, é necessário que os dispositivos estejam conectados um ao outro (normalmente com um cabo de rede) ou por meio de uma rede sem fio, como a famosa rede WiFi ou o Bluetooth. No entanto, para se criar uma grande rede é necessário conectar muito mais do que dois computadores, e como deve imaginar, é impossível fazer um emaranhado de fios de um para o outro. Para isto, é preciso inserir nessa rede um pequeno e poderoso dispositivo chamado roteador. 

Porém não se engane com o tamanho dele! o roteador é um simbolo de ordem e disciplina pela rede. Esses roteadores podem se comunicar com outros roteadores e dispositivos espalhados pelo globo, criando-se assim uma malha gigante de comunicação numa grande rede composta por redes. Familiar não é? Esse é o conceito de Internet.

Quando estão conectados, os dipositivos podem enviar e receber dados entre si. Esses dados (partes de informações) são comumente divididos em pacotes para facilitar o transporte pela rede. Isso veremos a seguir.

## Procolos

Agora que sabemos como funciona a comunicação, devemos saber que toda comunicação segue regras bem definidas que regem a forma como os dispositivos devem trocar dados entre si. Quando avistamos um amigo ao longe, nosso cérebro o reconhece e institivamente envia inpulsos elétricos para que possamos emitir uma saudação: Oi sumido! Ao ouvir e nos reconhecer de volta, nosso amigo devolve a saudação enviada: Olha quem fala!

Imagine que esta pequena saudação tenha ocorrido entre você e seu patrão. Certamente o tipo de comunicação utilizada seria mais formal e menos trivial, concorda? O protocolo utilizado para se comunicar com um amigo é bem diferente do utilizado para se comunicar com seu chefe.

No âmbito das conexões de rede, existem vários protocolos que são ligados a determinados serviços. Por exemplo, se você esta enviando um e-mail, um protocolo é utilizado o SMTP, se você recebe um e-mail, outro protocolo é utilizado, o POP3.

O principal protolo da Internet é o HTTP, é ele quem está por trás da comunicação quando você navega pela Internet. Para entender melhor, quando você uma página web, existe todo um conjunto de mecanismo agindo silenciosamente entre requisições e respostas. Ai é que entra o conceito de cliente-servidor. Um servidor é mais um dispisitivo conectado a rede e através dele vários serviços (email, transferencia de arquivos, conexão remota) são executados.

## TCP/IP

Descendo um pouco mais no detalhe, a pilha de protocolos TCP/IP agrupa vários protocolos da Internet. Dividida em quatro camadas, a pilha TCP/IP lida com a comunicação desde as conexões físicas (cabo ethernet) até os protocolos de aplicação como o HTTP, SMTP dentre outros. Esses protocolos da camada de aplicação estão mais "próximos" do usuário enquanto os protocolos da camada física estão mais "próximos" dos dispositivos (computadores, smartphones...). 

Mas não vamos esquecer do nosso queridinho roteador! Esse dispositivo opera nas camadas de rede desemenhando sua função primordial de roteamento de pacotes IP (Internet Protocol). Nesta camada, os roteadores enviam e recebem pacotes direcionando a informação desde sua origem até o destino. 

## Rede sem fio

Não, não é bruxaria amiguinhos. Os dispositivos podem se conectar sem a necessidade de haver um meio físico para isso. Essas redes surgiram como uma forma de complementar as redes cabeadas entregando um importante atributo chamado mobilidade. As redes Wireless certamente contrinuem para o conforto do lar no século XXI, permitindo que celulares e dispositivos menores permaneçam conectados (até cair a Internet). 

No entanto, as redes Wireless também são distribuidas por longas áreas geográficas (mostrando que nem só dentro de casa vive o homem), um exemplo seriam as comunicações via satélite e as redes de telefonia celular (3G,4G...). Mas esses são outros contos que envolvem frequência e são voltados para área de telecomunicações. 

Também não devemos esquecer das redes Bluetooth, que são usadas para troca rápida de dados e para conexão de curto alcance.

## IoT

Uma das tecnologias mais importantes do século XXI certamente é a IoT (Internet of Things) em português, Internet da Coisas. Mas que raios de coisas são essas? Sem pânico! A Internet das coisas é um novo conceito sobre a conexão entre objetos físicos por meio de dispositivos de hardware, como sensores, chips e softwares embarcados. Quando nos referimos a IoT estamos falando sobre fazer qualquer objeto trocar informações com outros objetos ou pessoas (não necessariamente utilizando conexões com a Internet). O conceito de IoT abriu novos horizontes e nos fez sonhar com a criação de cidades inteligentes, construções inteligentes, mobilidade no transito... entre tantos outros cenários que só podem existir se os elementos estiverem conectados! Louco não é?

Vale uma grande ressalva nisso tudo. Quanto mais dispositivos se conectam a grande rede, quanto mais pessoas se inserem na rede, maior é a necessidade de pensarmos em segurança. Antigamente, sem a Internet nossos avós guardavam todo o dinheiro da família embaixo do colchão. Cartas eram enviadas entre nossas tias para atualizar as fofocas e o máximo que estavamos perto de um banco de dados era aquele banquinho no terraço pra descansar os pés. A Internet trouxe melhorias inimagináveis e mudou profundamente a relação entre as pessoas e sociedade, mas é importante lembrar que ela também possibilitou que ameaças antes ocorridas fisicamente migrassem para o âmbito digital. Mas esse tema rende "muito pano para a manga" e podemos conversar sobre ele noutra oportunidade.

# #paz