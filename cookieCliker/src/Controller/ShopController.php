<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ShopController extends AbstractController
{
    /**
     * @Route("/shop", name="shop")
     */
    public function achete(EntityManagerInterface $manager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->render('shop.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/double", name="double", methods={"POST"})
     */
    public function registerDouble(Request $resquest, EntityManagerInterface $manager)
    {
        $content = json_decode($resquest->getContent());

        /** @var User $user */
        $user = $this->getUser();

        $user->setDoubletg($content->sdouble);

        $manager->flush();

        return new JsonResponse();
    }
    /**
     * @Route("/score", name="score")
     */
    public function registerScore(Request $resquest, EntityManagerInterface $manager)
    {
        $content = json_decode($resquest->getContent());

        /** @var User $user */
        $user = $this->getUser();

        $user->setScore($content->count);
        //dd($content->count);
        $manager->flush();

        return new JsonResponse();
    }

    /**
     * @Route("/timer", name="timer", methods={"POST"})
     */
    public function registerTimer(Request $resquest, EntityManagerInterface $manager)
    {
        $content = json_decode($resquest->getContent());

        /** @var User $user */
        $user = $this->getUser();

        $user->setTimer($content->stimer);

        $manager->flush();

        return new JsonResponse();
    }

    /**
     * @Route("/booster", name="booster", methods={"POST"})
     */
    public function registerBooster(Request $resquest, EntityManagerInterface $manager)
    {
        $content = json_decode($resquest->getContent());

        /** @var User $user */
        $user = $this->getUser();

        $user->setBooster($content->sbooster);

        $manager->flush();

        return new JsonResponse();
    }
}
