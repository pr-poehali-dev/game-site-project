import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const servers = [
    {
      name: "RUST SURVIVAL | VIP",
      players: "127/200",
      map: "Procedural Map",
      wipe: "18.01.2025",
      status: "online",
      ping: "12ms",
    },
    {
      name: "RUST PVP | HARDCORE",
      players: "89/150",
      map: "Savas Island",
      wipe: "18.01.2025",
      status: "online",
      ping: "8ms",
    },
    {
      name: "RUST RP | ROLEPLAY",
      players: "45/100",
      map: "Custom Map",
      wipe: "25.01.2025",
      status: "online",
      ping: "15ms",
    },
  ];

  const donatePackages = [
    {
      title: "VIP Пакет",
      price: "299₽",
      features: [
        "Приоритетный вход",
        "Увеличенный стек",
        "Комплект при возрождении",
        "Цветной ник",
      ],
      popular: false,
    },
    {
      title: "PREMIUM Пакет",
      price: "599₽",
      features: [
        "Все из VIP",
        "Возможность телепорта",
        "Дополнительные команды",
        "Персональный склад",
      ],
      popular: true,
    },
    {
      title: "LEGEND Пакет",
      price: "999₽",
      features: [
        "Все из PREMIUM",
        "Эксклюзивные скины",
        "Приватные комнаты",
        "Админ поддержка 24/7",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">RUST EMPIRE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#servers"
                className="text-foreground hover:text-primary transition-colors"
              >
                Сервера
              </a>
              <a
                href="#rules"
                className="text-foreground hover:text-primary transition-colors"
              >
                Правила
              </a>
              <a
                href="#donate"
                className="text-foreground hover:text-primary transition-colors"
              >
                Магазин
              </a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" className="h-4 w-4 mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('/img/fa4e13e0-a873-4c28-b424-52508be5fa97.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              RUST EMPIRE
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Лучший игровой опыт в мире выживания
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                <Icon name="Play" className="h-5 w-5 mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Info" className="h-5 w-5 mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section id="servers" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            НАШИ СЕРВЕРА
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servers.map((server, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-border"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{server.name}</CardTitle>
                    <Badge
                      variant={
                        server.status === "online" ? "default" : "secondary"
                      }
                    >
                      {server.status === "online" ? "Онлайн" : "Офлайн"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Игроки:</span>
                      <span className="font-semibold text-primary">
                        {server.players}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Карта:</span>
                      <span>{server.map}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Вайп:</span>
                      <span>{server.wipe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Пинг:</span>
                      <span className="text-green-400">{server.ping}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                    Подключиться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            МАГАЗИН ПРИВИЛЕГИЙ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donatePackages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-shadow ${pkg.popular ? "ring-2 ring-primary" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-5 w-5 text-green-400 mr-2"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            ПРАВИЛА СЕРВЕРА
          </h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">Общие</TabsTrigger>
                <TabsTrigger value="pvp">PVP</TabsTrigger>
                <TabsTrigger value="building">Строительство</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name="FileText"
                        className="h-5 w-5 mr-2 text-primary"
                      />
                      Общие правила
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Запрещены читы, баги и эксплойты
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Уважайте других игроков
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Запрещен спам в чате
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Не используйте оскорбления
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="pvp" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon
                        name="Sword"
                        className="h-5 w-5 mr-2 text-primary"
                      />
                      PVP правила
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        PVP разрешен везде кроме SafeZone
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Запрещен roof camping более 30 минут
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Разрешены альянсы до 4 человек
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="building" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Home" className="h-5 w-5 mr-2 text-primary" />
                      Строительство
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Максимальная высота здания - 8 этажей
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Запрещено блокировать памятники
                      </li>
                      <li className="flex items-start">
                        <Icon
                          name="ArrowRight"
                          className="h-5 w-5 text-primary mr-2 mt-0.5"
                        />
                        Лимит на турели - 8 штук
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Zap" className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-primary">
                RUST EMPIRE
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              © 2025 Rust Empire. Все права защищены.
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                Discord
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Send" className="h-4 w-4 mr-2" />
                Telegram
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Globe" className="h-4 w-4 mr-2" />
                VK
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
