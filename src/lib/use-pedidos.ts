"use client";

import { useSyncExternalStore } from "react";
import { listarPedidos } from "@/lib/pedidos";

const EVENTO = "formaprima:pedidos-atualizados";
const VAZIO: ReturnType<typeof listarPedidos> = [];
let cacheSerializado = "";
let cachePedidos = VAZIO;

function assinar(callback: () => void) {
  window.addEventListener(EVENTO, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENTO, callback);
    window.removeEventListener("storage", callback);
  };
}

function snapshot() {
  const pedidos = listarPedidos();
  const serializado = JSON.stringify(pedidos);
  if (serializado !== cacheSerializado) {
    cacheSerializado = serializado;
    cachePedidos = pedidos;
  }
  return cachePedidos;
}

export function usePedidos() {
  return useSyncExternalStore(assinar, snapshot, () => VAZIO);
}
