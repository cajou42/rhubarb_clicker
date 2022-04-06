<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RhubarbController extends AbstractController
{
    /**
     * @Route("/tapTheRhubarb", name="app_tapTheRhubarb")
     */
    public function tap(): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        return $this->render('tapTheRhubarb.html.twig', [
            'user' => $user,
        ]);
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

        $manager->flush();

        return new JsonResponse();
    }
}